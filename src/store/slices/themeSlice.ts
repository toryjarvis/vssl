import { StateCreator } from "zustand";
import { Theme } from "../types";

export interface ThemeSlice {
    theme: Theme;
    setTheme: (partial: Partial<Theme>) => void;
}

// REMEMBER - TEMPORARY
export const initialThemeState: Theme = {
    id: "default-dark",
    name: "Default Dark",
    colors: {
    background: "#0f0f0f",
    panel: "#1a1a1a",
    lcd: "#0a1f0a",
    accent: "#24c8db",
    text: "#f6f6f6",
    textMuted: "#888888",
    vuActive: "#24c8db",
    vuPeak: "#f6f6f6",
    vuClip: "#ff3b3b",
    visualizer: "#24c8db",
    },
    font: "monospace",
    borderStyle: "sharp",
    isDark: true,
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
    theme: initialThemeState,
    setTheme: (partial) => set((s) => ({ theme: {...s.theme, ...partial } })),
});