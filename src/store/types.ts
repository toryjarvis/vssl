export type PlaybackStatus = "playing" | "paused" | "stopped";
export type RepeatMode = "none" | "one" | "all";
export type TransitionMode = "cut" | "crossfade" | "gapless";

export interface PlayerState {
    status: PlaybackStatus;
    currentTrackIndex: number;
    currentTime: number;
    duration: number;
    volume: number;
    balance: number;
    shuffle: boolean;
    repeat: RepeatMode;
    transition: TransitionMode;
    crossfadeDuration: number;
    replayGain: boolean;
}

export interface Track {
    id: string;
    title: string;
    artist: string;
    album: string;
    trackNumber?: number;
    duration: number;
    filePath: string;
    objectURL: string;
    format: string;
    bitrate: number;
    albumArt?: string;
    missing: boolean;
}

export interface Column {
    key: string;
    label: string;
    width: number;
    visible: boolean; 
}

export interface Playlist {
    id: string;
    name: string;
    tracks: Track[];
    created: number;
    modified: number;
    totalDuration: number;
    columnConfig: Column[];
}

export interface Library {
    playlists: Playlist[];
    activePlaylistId: string | null;
    folderPath?: string;
    queue: Track[];
}

export interface EQState {
    enabled: boolean;
    preamp: number;
    bands: number[];
    activePreset: string;
}

export interface ThemeColors {
    background: string;
    panel: string;
    lcd: string;
    accent: string;
    text: string;
    textMuted: string;
    vuActive: string;
    vuPeak: string;
    vuClip: string;
    visualizer: string;
}

export interface Theme {
    id: string;
    name: string;
    author?: string;
    version?: string;
    colors: ThemeColors;
    font: string;
    borderStyle: "sharp" | "soft";
    isDark: boolean;
}

export type PanelMode = "floating" | "docked" | "minimized";

export interface PanelLayout{
    main: { x: number; y: number; h: number };
    eq: { x: number; y: number; visible: boolean; mode: PanelMode };
    playlist: { x: number; y: number; h: number; visible: boolean; mode: PanelMode };
    settings: { x: number; y: number; visible: boolean };
}

export type ImportBehavior = "ask" | "newSession" | "replace" | "append";
export type MinimizeBehavior = "tray" | "taskbar" | "minimode";

export interface Settings {
    importBehavior: ImportBehavior;
    externalFileBehavior: ImportBehavior;
    minimizeBehavior: MinimizeBehavior;
    language: string;
    onboardingComplete: boolean;
}

