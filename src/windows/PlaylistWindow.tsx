import { useSyncedSlice } from "./useSyncedSlice";
import { initialThemeState } from "../store/slices/themeSlice";
import PanelChrome from "./PanelChrome";
import { getCurrentWindow } from "@tauri-apps/api/window";

export default function PlaylistWindow() {
  const theme = useSyncedSlice("theme", initialThemeState);

  return (
    <PanelChrome
      title="playlist"
      theme={theme}
      onClose={() => getCurrentWindow().hide()}
    >
      <div>playlist panel - smoke test</div>
    </PanelChrome>
  );
}
