import { create } from "zustand";
import {
  buyMenuEquip,
  buyMenuOtherWeapon,
  buyMenuPistol,
  buyMenuRifle,
  buyMenuSmg,
} from "../constans/buyMenu";
import { IUiStore } from "./types";

export const useUiStore = create<IUiStore>((set, get) => ({
  showHeavyWeapon: false,
  isSound: true,
  currTab: "buy-menu",
  currSide: "ct",
  setCurrSide: (side) => set((state) => ({ ...state, currSide: side })),
  setCurrTab: (tab) => set((state) => ({ ...state, currTab: tab })),
  menuToRender: () =>
    get().showHeavyWeapon
      ? [buyMenuPistol, buyMenuSmg, buyMenuRifle, buyMenuEquip, buyMenuOtherWeapon]
      : [buyMenuPistol, buyMenuSmg, buyMenuRifle, buyMenuEquip],
  setShowHeavyWeapon: (flag) => set((state) => ({ ...state, showHeavyWeapon: flag })),
  setSound: (flag) => set((state) => ({ ...state, isSound: flag })),
}));
