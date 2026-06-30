import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n"
import { startStateBridge } from "./windows/stateBridge";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { WINDOW_LABELS } from "./windows/labels";
import MainWindow from "./windows/MainWindow";
import EQWindow from "./windows/EQWindow";
import PlaylistWindow from "./windows/PlaylistWindow";

startStateBridge();

function resolveRoot() {
  switch (getCurrentWindow().label) {
    case WINDOW_LABELS.eq:
      return <EQWindow />;
    case WINDOW_LABELS.playlist:
      return <PlaylistWindow />;
    default:
      return <MainWindow />
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {resolveRoot()}
  </React.StrictMode>,
);
