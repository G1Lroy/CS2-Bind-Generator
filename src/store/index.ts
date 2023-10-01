import { create } from "zustand";
import { IMainStore } from "./types";

export const useMainStore = create<IMainStore>((set) => ({
  selectedKey: "",
  selectedMouseKey: "",
  keyToBind: "",
  selectedEquip: "",
  currentBind: [],
  printedBind: [],
  usedKeys: [],
  setSelectedKey: (key) => set((state) => ({ ...state, selectedKey: key })),
  setSelectedMouseKey: (key) => set((state) => ({ ...state, selectedMouseKey: key })),
  setKeyToBind: (key) => set((state) => ({ ...state, keyToBind: key })),
  setSetSelectedEquip: (equip) => set((state) => ({ ...state, selectedEquip: equip })),
  setCurrentBind: (arr) => set((state) => ({ ...state, currentBind: [...arr] })),
  setPrintedBind: (arr) => set((state) => ({ ...state, printedBind: [...state.printedBind, ...arr] })),
  setUsedKeys: (key) => set((state) => ({ ...state, usedKeys: [...state.usedKeys, key] })),
  reset: () =>
    set(() => ({
      selectedKey: "",
      selectedMouseKey: "",
      keyToBind: "",
      selectedEquip: "",
      printedBind: [],
      usedKeys: [],
    })),
}));
