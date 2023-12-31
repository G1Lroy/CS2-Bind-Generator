export interface IMainStore {
  selectedKey: string;
  selectedMouseKey: string;
  keyToBind: string;
  selectedEquip: string;
  selectedAction: string[];
  usedKeys: string[];
  currentBind: string[];
  printedBind: string[];
  setSelectedAction: (action: string[]) => void;
  setSelectedKey: (key: string) => void;
  setSelectedMouseKey: (key: string) => void;
  setKeyToBind: (key: string) => void;
  setSetSelectedEquip: (equip: string) => void;
  setCurrentBind: (arr: string[]) => void;
  setPrintedBind: (arr: string[]) => void;
  setUsedKeys: (key: string) => void;
  reset: () => void;
}
export interface IUiStore {
  showHeavyWeapon: boolean;
  isSound: boolean;
  currTab: string;
  currSide: string;
  setCurrSide: (side: string) => void;
  setCurrTab: (tab: string) => void;
  menuToRender: () => { title: string; value: string; img: string; side: string }[][];
  setShowHeavyWeapon: (flag: boolean) => void;
  setSound: (flag: boolean) => void;
}
