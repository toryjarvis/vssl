import { useEffect, useState } from "react";
import { SYNC_EVENTS, SyncableSlice } from "./stateBridge";
import { emit, listen } from "@tauri-apps/api/event";

export function useSyncedSlice<T>(slice: SyncableSlice, initial: T): T {
    const [value, setValue] = useState<T>(initial);

    useEffect(() => {
        const unlistenPromise = listen<T>(SYNC_EVENTS[slice], (event) => setValue(event.payload));
        emit("vssl://sync/request", slice);

        return () => {
            unlistenPromise.then((unlisten) => unlisten());
        };
    }, [slice]);
    return value;
}