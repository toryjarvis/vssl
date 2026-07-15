import { ReactNode } from "react";
import { Theme } from "../store/types";
import { useApplyTheme } from "../theme/useApplyTheme";
import { getCurrentWindow } from "@tauri-apps/api/window";

interface PanelChromeProps {
    title: string;
    theme: Theme;
    children: ReactNode;
    showMinimize?: boolean;
    onClose?: () => void;
}

export default function PanelChrome({title, theme, children, showMinimize, onClose}: PanelChromeProps) {
    useApplyTheme(theme);
    const win = getCurrentWindow();

    return (
        <div className="panel">
            <div className="panel-titlebar" data-tauri-drag-region>
                <span className="panel-title">{title}</span>
                <div className="panel-controls">
                    {showMinimize && <button onClick={() => win.minimize()} aria-label="Minimize">_</button>}
                    <button onClick={onClose ?? (() => win.close())} aria-label="Close">x</button>
                </div>
            </div>
            <div className="panel-content">{children}</div>
        </div>
    )
}