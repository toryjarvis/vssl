import { WebviewWindow } from "@tauri-apps/api/webviewWindow";

interface PanelWindowOptions {
    label: string;
    width: number;
    height: number;
    x?: number;
    y?: number;
}

export async function createPanelWindow(options: PanelWindowOptions): Promise<WebviewWindow> {
  const existing = await WebviewWindow.getByLabel(options.label);
  if (existing) {
    await existing.show();
    await existing.setFocus();
    return existing;
  }

  const win = new WebviewWindow(options.label, {
    url: "index.html",
    width: options.width,
    height: options.height,
    x: options.x,
    y: options.y,
    decorations: false,
    visible: true,
  });

  return new Promise((resolve, reject) => {
    win.once("tauri://created", () => resolve(win));
    win.once("tauri://error", (e) => reject(e));
  })

}