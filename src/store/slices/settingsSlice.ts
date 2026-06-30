import { StateCreator } from "zustand";
import { Settings } from "../types";

export interface SettingsSlice {
    settings: Settings;
    setSettings: (partial: Partial<Settings>) => void;
}

const initialSettingsState: Settings = {
    importBehavior: "ask",
    externalFileBehavior: "ask",
    minimizeBehavior: "taskbar",
    language: "en",
    onboardingComplete: false,
}

export const createSettingsSlice: StateCreator<SettingsSlice> = (set) => ({
    settings: initialSettingsState,
    setSettings: (partial) => set((s) => ({ settings: {...s.settings, ...partial } })),
});