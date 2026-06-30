import { StateCreator } from "zustand";
import { Library } from "../types";

export interface LibrarySlice {
    library: Library;
    setLibrary: (partial: Partial<Library>) => void;
}

const initialLibraryState: Library = {
    playlists: [],
    activePlaylistId: null,
    folderPath: undefined,
    queue: [],
}

export const createLibrarySlice: StateCreator<LibrarySlice> = (set) => ({
    library: initialLibraryState,
    setLibrary: (partial) => set((s) => ({ library: {...s.library, ...partial } })),
})