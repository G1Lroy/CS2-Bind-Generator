import saveAs from "file-saver";
import { RefObject } from "react";

export const playSound = (ref: RefObject<HTMLAudioElement>): void => {
  if (!ref.current) return;
  ref.current.volume = 0.1;
  ref.current.play();
};

export const generateCfgFile = (data: string[]): void => {
  const cfgData = data.join("\n");
  const blob = new Blob([cfgData], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "autoexec.cfg");
};
