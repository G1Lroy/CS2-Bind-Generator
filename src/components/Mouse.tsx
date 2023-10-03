import { FC, useRef } from "react";
import { mouseBtns } from "../constans/mockObjects";
import { useMainStore } from "../store";
import mouse from "./../assets/images/mouse.png";
import clickSound from "./../assets/sounds/ckick.mp3";
import { playSound } from "../utils";
import { useUiStore } from "../store/uiStore";
import "./../assets/css/mouse.css";
import AudioRef from "./UI/AudioRef";
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
  const getMouseClassName = (btn: { class: string; value: string }) => {
    return [
      btn.class,
      selectedMouseKey === btn.value ? "selected" : "",
      usedKeys.includes(btn.value) ? "used" : "",
    ].join(" ");
  };

  return (
    <div className="mouse">
      <img src={mouse} alt="Mouse" />
      {mouseBtns.map((btn) => (
        <span onClick={() => clickHandler(btn.value)} key={btn.class} className={getMouseClassName(btn)}>
          {btn?.text}
        </span>
      ))}

      {isSound && <AudioRef ref={clickSoundRef} src={clickSound} />}
    </div>
  );
};

export default Mouse;
