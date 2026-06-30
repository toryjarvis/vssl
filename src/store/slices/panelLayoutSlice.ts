import { StateCreator } from "zustand";
import { PanelLayout } from "../types";

export interface PanelLayoutSlice {
    panelLayout: PanelLayout;
    setPanelLayout: (partial: Partial<PanelLayout>) => void;
}

// REMEMBER - TEMPORARY
const initialPanelLayoutState: PanelLayout = {
    main: { x: 100, y: 100, h: 220 },
    eq: { x: 100, y: 340, visible: false, mode: "floating" },
    playlist: { x: 100, y: 340, h: 300, visible: false, mode: "floating" },
    settings: { x: 200, y: 200, visible: false },
}

export const createPanelLayoutSlice: StateCreator<PanelLayoutSlice> = (set) => ({
    panelLayout: initialPanelLayoutState,
    setPanelLayout: (partial) => set((s) => ({ panelLayout: {...s.panelLayout, ...partial } })),
});