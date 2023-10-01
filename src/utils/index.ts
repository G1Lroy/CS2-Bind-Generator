import { RefObject } from "react";

export const playSound = (ref: RefObject<HTMLAudioElement>): void => {
  if (!ref.current) return;
  ref.current.volume = 0.1;
  ref.current.play();
};
