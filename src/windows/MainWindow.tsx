import { createPanelWindow } from "./createPanelWindow";
import { WINDOW_LABELS } from "./labels";
import { useStore } from "../store";
import { useTranslation } from "react-i18next";
import PanelChrome from "./PanelChrome";

export default function MainWindow() {
    const { t } = useTranslation();
    const theme = useStore((state) => state.theme);

  return (
      <PanelChrome title="vssl" theme={theme} showMinimize>
        <h1 >{t("app.welcome")}</h1>
        <button onClick={() => createPanelWindow({ label: WINDOW_LABELS.eq, width: 300, height: 150})}>
            open eq
        </button>
        <button onClick={() => useStore.getState().setEQ({ preamp: Math.random() * 10})}>
            randomize preamp
        </button>
        <button onClick={() => createPanelWindow({ label: WINDOW_LABELS.playlist, width: 300, height: 150})}>
            open playlist
        </button>
      </PanelChrome>
  );
}
