import saveAs from "file-saver";
import { RefObject } from "react";

export const playSound = (ref: RefObject<HTMLAudioElement>): void => {
  if (!ref.current) return;
  ref.current.volume = 0.1;
  ref.current.play();
};
export const generateCfgFile = (data: string[]): void => {
  const cfgData = data.join("\n");
  const guideText = `//===================== CS2 ALL BINDS =====================
// Now, you need to place this file in:
// ...\\Counter-Strike Global Offensive\\game\\csgo\\cfg
//
// Next, add this command to your launch options:
// +exec autoexec.cfg
//
// After this, your binds will be automatically executed in game.
// ==============================================================
`;
  const blob = new Blob([guideText, "\n", cfgData], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "autoexec.cfg");
};
export const replaceChar = (action: string[], key: string): string[] => {
  return action
    .join(",")
    .replace(/"_"/g, `"${key || "_"}"`)
    .split(",");
};
