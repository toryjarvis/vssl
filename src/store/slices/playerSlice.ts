import { StateCreator } from "zustand";
import { PlayerState } from "../types";

export interface PlayerSlice {
    player: PlayerState;
    setPlayer: (partial: Partial<PlayerState>) => void;
}

const initialPlayerState: PlayerState = {
    status: "stopped",
    currentTrackIndex: -1,
    currentTime: 0,
    duration: 0,
    volume: 1,
    balance: 0,
    shuffle: false,
    repeat: "none",
    transition: "cut",
    crossfadeDuration: 3,
    replayGain: false,
}

export const createPlayerSlice: StateCreator<PlayerSlice> = (set) => ({
    player: initialPlayerState,
    setPlayer: (partial) => set((s) => ({ player: {...s.player, ...partial } })),
})