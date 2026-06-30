import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { createEQSlice, EQSlice } from "./slices/eqSlice";
import { createLibrarySlice, LibrarySlice } from "./slices/librarySlice";
import { createPanelLayoutSlice, PanelLayoutSlice } from "./slices/panelLayoutSlice";
import { createPlayerSlice, PlayerSlice } from "./slices/playerSlice";
import { createSettingsSlice, SettingsSlice } from "./slices/settingsSlice";
import { createThemeSlice, ThemeSlice } from "./slices/themeSlice";

export type StoreState = PlayerSlice &
  LibrarySlice &
  EQSlice &
  ThemeSlice &
  PanelLayoutSlice &
  SettingsSlice;

export const useStore = create<StoreState>()(
  subscribeWithSelector((...a) => ({
    ...createPlayerSlice(...a),
    ...createLibrarySlice(...a),
    ...createEQSlice(...a),
    ...createThemeSlice(...a),
    ...createPanelLayoutSlice(...a),
    ...createSettingsSlice(...a),
  })),
);
