import { open } from "@tauri-apps/plugin-dialog";

const SUPPORTED_AUDIO_EXTENSIONS = [
  "mp3",
  "flac",
  "aac",
  "ogg",
  "wav",
  "aiff",
  "wma",
  "opus",
];

export async function selectAudioFiles(): Promise<string[]> {
  const result = await open({
    multiple: true,
    filters: [{ name: "Audio", extensions: SUPPORTED_AUDIO_EXTENSIONS }],
  });

  if (!result) return [];
  return Array.isArray(result) ? result : [result];
}
