import { useStore } from "../store";
import { audioEngine } from "./engine";

audioEngine.setOnEnded(() => {
  useStore.getState().setPlayer({ status: "stopped", currentTime: 0 });
});

audioEngine.setOnTimeUpdate((currentTime) => {
  useStore.getState().setPlayer({ currentTime });
});

export async function play(): Promise<void> {
  await audioEngine.play();
  useStore.getState().setPlayer({ status: "playing" });
}

export async function pause(): Promise<void> {
  audioEngine.pause();
  useStore.getState().setPlayer({ status: "paused" });
}

export async function stop(): Promise<void> {
  audioEngine.stop();
  useStore.getState().setPlayer({ status: "stopped", currentTime: 0 });
}

export function seek(time: number): void {
  audioEngine.seek(time);
  useStore.getState().setPlayer({ currentTime: time });
}

export function setVolume(volume: number): void {
  const clamped = Math.max(0, Math.min(volume, 1));
  audioEngine.setVolume(clamped);
  useStore.getState().setPlayer({ volume: clamped });
}
