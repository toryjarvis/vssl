import { emit, listen } from "@tauri-apps/api/event";
import { getCurrentWindow } from "@tauri-apps/api/window";
import { WINDOW_LABELS } from "./labels";
import { useStore, StoreState } from "../store";

export const SYNC_EVENTS = {
    player: "vssl://sync/player",
    library: "vssl://sync/library",
    eq: "vssl://sync/eq",
    theme: "vssl://sync/theme",
    panelLayout: "vssl://sync/panelLayout",
    settings: "vssl://sync/settings",
} as const;

export type SyncableSlice = keyof typeof SYNC_EVENTS;

type CommandHandler<T = unknown> = (payload: T) => void;
const commandHandlers = new Map<string, CommandHandler>();

export function registerCommand<T>(command: string, handler: CommandHandler<T>): void {
    commandHandlers.set(command, handler as CommandHandler);
}

export function dispatchCommand(command: string, payload: unknown): void {
    emit("vssl://command", { command, payload });
}

const SLICE_KEYS: SyncableSlice[] = ["player", "library", "eq", "theme", "panelLayout", "settings"];

export function startStateBridge(): void {
    if (getCurrentWindow().label !== WINDOW_LABELS.main) return;

    for (const slice of SLICE_KEYS) {
        useStore.subscribe(
            (state) => state[slice],
            (value) => emit(SYNC_EVENTS[slice], value),
        );
    }

    listen<SyncableSlice>("vssl://sync/request", (event) => {
        const slice = event.payload;
        emit(SYNC_EVENTS[slice], useStore.getState()[slice]);
    });

    listen<{ command: string; payload: unknown }>("vssl://command", (event) => {
        commandHandlers.get(event.payload.command)?.(event.payload.payload);
    });
}