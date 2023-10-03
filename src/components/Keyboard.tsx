import { FC, useRef } from "react";
import { mainLayout, middleLayout, numpadLayout } from "../constans/keyboard";
import { mainValues, midValues, numpadValues } from "../constans/keyboard/keyVaule";
import { playSound } from "../utils";
import { useMainStore } from "../store";
import { useUiStore } from "../store/uiStore";
import clickSound from "./../assets/sounds/ckick.mp3";
import "./../assets/css/keyboard.css";
import AudioRef from "./UI/AudioRef";

const Keyboard: FC = () => {
  const clickSoundRef = useRef<HTMLAudioElement>(null);
  const { selectedKey, usedKeys, setSelectedKey, setSelectedMouseKey } = useMainStore();
  const { isSound } = useUiStore();

  const clickHandler = (key: string) => {
    if (key === selectedKey) return;
    setSelectedKey(key);
    setSelectedMouseKey("");
    playSound(clickSoundRef);
  };

  const getClassName = (key: string): string => {
    return [
      key !== "" ? "key" : "empty",
      key === "space" ? "space" : "",
      key === selectedKey ? "selected" : "",
      usedKeys.includes(key) ? "used" : "",
    ].join(" ");
  };
  return (
    <div className="keyboard">
      <div className="main-section">
        {mainLayout.map((row, rIdx) => (
          <div key={rIdx} className="row">
            {row.map((key, kIdx) => (
              <div onClick={() => clickHandler(key)} className={getClassName(key)} key={kIdx}>
                {mainValues[key] ? mainValues[key] : key}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="mid-section">
        {middleLayout.map((row, rIdx) => (
          <div key={rIdx} className="row">
            {row.map((key, kIdx) => (
              <div onClick={() => clickHandler(key)} className={getClassName(key)} key={kIdx}>
                {midValues[key]}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="num-section">
        {numpadLayout.map((row, rIdx) => (
          <div key={rIdx} className="row">
            {row.map((key, kIdx) => (
              <div onClick={() => clickHandler(key)} className={getClassName(key)} key={kIdx}>
                {numpadValues[key]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {isSound && <AudioRef ref={clickSoundRef} src={clickSound} />}
    </div>
  );
};

export default Keyboard;
