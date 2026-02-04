import { create } from "zustand";

interface MainMenuState {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export const useMainMenuStore = create<MainMenuState>()((set) => ({
    open: false,
    setOpen: (open: boolean) => set({ open }),
}));