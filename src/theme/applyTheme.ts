import { Theme } from "../store/types";

const BORDER_RADIUS: Record<Theme["borderStyle"], string> = {
    sharp: "0px",
    soft: "8px",
}

function kebabCase(value: string): string {
    return value.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

export function applyThemeToDocument(theme: Theme): void {
    const root = document.documentElement.style;

    for (const [key, value] of Object.entries(theme.colors)) {
        root.setProperty(`--vssl-color-${kebabCase(key)}`, value);
    }

    root.setProperty("--vssl-font", theme.font);
    root.setProperty("--vssl-border-radius", BORDER_RADIUS[theme.borderStyle]);
    root.setProperty("color-scheme", theme.isDark ? "dark" : "light");
}