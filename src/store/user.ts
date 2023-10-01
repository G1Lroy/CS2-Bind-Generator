import { create } from "zustand";
import { buyMenuEquip, buyMenuHeavy, buyMenuPistol, buyMenuRifle, buyMenuSmg } from "../constans/buyMenu";
import { IUiStore } from "./types";

export const useUiStore = create<IUiStore>((set, get) => ({
  showHeavyWeapon: false,
  isSound: true,
  menuToRender: () =>
    get().showHeavyWeapon
      ? [buyMenuPistol, buyMenuSmg, buyMenuRifle, buyMenuHeavy, buyMenuEquip]
      : [buyMenuPistol, buyMenuSmg, buyMenuRifle, buyMenuEquip],
  setShowHeavyWeapon: (flag) => set((state) => ({ ...state, showHeavyWeapon: flag })),
  setSound: (flag) => set((state) => ({ ...state, isSound: flag })),
}));
