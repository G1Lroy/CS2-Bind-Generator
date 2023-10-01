import { FC, useRef } from "react";
import { mainLayout, middleLayout, numpadLayout } from "../constans/keyboard";
import { mainValues, midValues, numpadValues } from "../constans/keyboard/keyVaule";
import { playSound } from "../utils";
import { useMainStore } from "../store";
import { useUiStore } from "../store/user";
import clickSound from "./../assets/sounds/ckick.mp3";

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
  return (
    <div className="keyboard">

      <div className="main-section">
        {mainLayout.map((row, rIdx) => (
          <div key={rIdx} className="row">
            {row.map((key, kIdx) => (
              <div
                onClick={() => clickHandler(key)}
                className={`key ${key === "space" ? "space" : ""} 
                    ${key === selectedKey ? "selected" : ""}
                    ${usedKeys.includes(key) ? "used" : ""}
                    `}
                key={kIdx}
              >
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
              <div
                onClick={() => clickHandler(key)}
                className={`
                  ${key !== "" ? "key" : "empty"} 
                  ${key === selectedKey ? "selected" : ""}
                 ${usedKeys.includes(key) ? "used" : ""}
                  `}
                key={kIdx}
              >
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
              <div
                onClick={() => clickHandler(key)}
                className={`key 
                    ${key === selectedKey ? "selected" : ""}
                    ${usedKeys.includes(key) ? "used" : ""}
                    `}
                key={kIdx}
              >
                {numpadValues[key]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {isSound && (
        <audio ref={clickSoundRef}>
          <source src={clickSound} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
};

export default Keyboard;
