import { FC, useRef } from "react";
import { mouseBtns } from "../constans/mockObjects";
import { useMainStore } from "../store";
import mouse from "./../assets/images/mouse.png";
import clickSound from "./../assets/sounds/ckick.mp3";
import { playSound } from "../utils";
import { useUiStore } from "../store/user";

const Mouse: FC = () => {
  const clickSoundRef = useRef<HTMLAudioElement>(null);
  const { selectedMouseKey, usedKeys, setSelectedKey, setSelectedMouseKey } = useMainStore();
  const { isSound } = useUiStore();

  const clickHandler = (key: string) => {
    if (key === selectedMouseKey) return;
    setSelectedMouseKey(key);
    setSelectedKey("");
    playSound(clickSoundRef);
  };

  return (
    <div className="mouse">
      <img src={mouse} alt="" />
      {mouseBtns.map((btn) => (
        <span
          onClick={() => clickHandler(btn.value)}
          key={btn.class}
          className={`
              ${btn.class} ${selectedMouseKey === btn.value ? "selected" : ""}
              ${usedKeys.includes(btn.value) ? "used" : ""}
              `}
        >
          {btn?.text}
        </span>
      ))}

      {isSound && (
        <audio ref={clickSoundRef}>
          <source src={clickSound} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
};

export default Mouse;
