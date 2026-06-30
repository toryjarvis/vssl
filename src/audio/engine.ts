class AudioEngine {
  private context: AudioContext | null = null;
  private audioElement: HTMLAudioElement | null = null;
  private sourceNode: MediaElementAudioSourceNode | null = null;
  private preampGain: GainNode | null = null;
  private analyserNode: AnalyserNode | null = null;
  private masterGain: GainNode | null = null;

  private onEndedCallback: (() => void) | null = null;
  private onTimeUpdateCallback: ((currentTime: number) => void) | null = null;

  private ensureContext(): AudioContext {
    if (this.context) return this.context;

    this.context = new AudioContext();
    this.audioElement = new Audio();
    this.audioElement.addEventListener("ended", () => this.onEndedCallback?.());
    this.audioElement.addEventListener("timeupdate", () => {
        this.onTimeUpdateCallback?.(this.audioElement!.currentTime);
    });

    this.sourceNode = this.context.createMediaElementSource(this.audioElement);
    this.preampGain = this.context.createGain();
    this.analyserNode = this.context.createAnalyser();
    this.masterGain = this.context.createGain();

    // EQ filter chain goes here (VSSL-055)
    this.sourceNode
      .connect(this.preampGain)
      .connect(this.analyserNode)
      .connect(this.masterGain)
      .connect(this.context.destination);

    return this.context;
  }

  getAudioElement(): HTMLAudioElement {
    this.ensureContext();
    return this.audioElement!;
  }

  getAnalyser(): AnalyserNode {
    this.ensureContext();
    return this.analyserNode!;
  }

  getPreampGain(): GainNode {
    this.ensureContext();
    return this.preampGain!;
  }

  getMasterGain(): GainNode {
    this.ensureContext();
    return this.masterGain!;
  }

  loadTrack(objectURL: string) {
    this.getAudioElement().src = objectURL;
  }

  setOnEnded(callback: () => void): void {
    this.onEndedCallback = callback;
  }

  async play(): Promise<void> {
    const ctx = this.ensureContext();
    if (ctx.state === "suspended") {
      await ctx.resume();
    }
  }

  pause(): void {
    this.getAudioElement().pause();
  }

  stop(): void {
    const audio = this.getAudioElement();
    audio.pause();
    audio.currentTime = 0;
  }

  setOnTimeUpdate(callback: (currentTime: number) => void): void {
    this.onTimeUpdateCallback = callback;
  }

  seek(time: number): void {
    const audio = this.getAudioElement();
    const hasValidDuration = Number.isFinite(audio.duration);
    const max = hasValidDuration ? audio.duration : Infinity;
    audio.currentTime = Math.max(0, Math.min(time, max));
  }

  setVolume(volume: number): void {
    this.getMasterGain().gain.value = Math.max(0, Math.min(volume, 1));
  }

}

export const audioEngine = new AudioEngine();
