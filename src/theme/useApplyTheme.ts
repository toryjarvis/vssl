import { useLayoutEffect } from "react";
import { Theme } from "../store/types";
import { applyThemeToDocument } from "./applyTheme";

export function useApplyTheme(theme: Theme): void {
    useLayoutEffect(() => {
        applyThemeToDocument(theme);
    }, [theme]);
}