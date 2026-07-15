import { useSyncedSlice } from "./useSyncedSlice";
import { initialThemeState } from "../store/slices/themeSlice";
import PanelChrome from "./PanelChrome";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { initialEQState } from "../store/slices/eqSlice";

export default function EQWindow() {
  const eq = useSyncedSlice("eq", initialEQState);
  const theme = useSyncedSlice("theme", initialThemeState);

  return (
    <PanelChrome
      title="equalizer"
      theme={theme}
      onClose={() => getCurrentWindow().hide()}
    >
      <div>eq panel - preamp: {eq.preamp}</div>
    </PanelChrome>
  );
}
