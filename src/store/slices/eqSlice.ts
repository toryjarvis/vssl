import { StateCreator } from "zustand";
import { EQState } from "../types";

export interface EQSlice {
    eq: EQState;
    setEQ: (partial: Partial<EQState>) => void;
}

export const initialEQState: EQState = {
    enabled: true,
    preamp: 0,
    bands: new Array(10).fill(0),
    activePreset: "Flat",
}

export const createEQSlice: StateCreator<EQSlice> = (set) => ({
    eq: initialEQState,
    setEQ: (partial) => set((s) => ({ eq: {...s.eq, ...partial } })),
})