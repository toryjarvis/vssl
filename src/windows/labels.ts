export const WINDOW_LABELS = {
    main: "main",
    eq: "eq",
    playlist: "playlist",
} as const;

export type WindowLabel = (typeof WINDOW_LABELS)[keyof typeof WINDOW_LABELS];