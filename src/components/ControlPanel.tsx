import { useUiStore } from "../store/user";
import { useMainStore } from "../store";
import { FC, useRef } from "react";
import useSound from "./../assets/sounds/use_key.mp3";
import { playSound } from "../utils";

const ControlPanel: FC = () => {
  const useSoundRef = useRef<HTMLAudioElement>(null);
  const { showHeavyWeapon, setShowHeavyWeapon, setSound, isSound } = useUiStore();
  const {
    keyToBind,
    selectedEquip,
    currentBind,
    printedBind,
    setPrintedBind,
    setUsedKeys,
    setSetSelectedEquip,
    setSelectedKey,
    setSelectedMouseKey,
    reset,
  } = useMainStore();

  const printToConsole = () => {
    if (!keyToBind || !selectedEquip) return;
    if (printedBind.includes(currentBind.join())) return;
    setPrintedBind([`bind "${keyToBind}" "buy ${selectedEquip}"`]);
    setUsedKeys(keyToBind);
    playSound(useSoundRef);
    setSetSelectedEquip("");
    setSelectedKey("");
    setSelectedMouseKey("");
  };
  return (
    <div className="helpers">
      <label htmlFor="showHeavyWeapon">
        <input
          id="showHeavyWeapon"
          type="checkbox"
          checked={showHeavyWeapon}
          onChange={() => setShowHeavyWeapon(!showHeavyWeapon)}
        ></input>
        Show heavy weapon
      </label>
      <label htmlFor="disable-isSound">
        <input
          id="disable-isSound"
          type="checkbox"
          checked={isSound}
          onChange={() => setSound(!isSound)}
        ></input>
        Sounds
      </label>
      <button onClick={() => printToConsole()} type="button">
        Print
      </button>
      <button onClick={() => reset()} type="button">
        Reset all
      </button>
      {isSound && (
        <audio ref={useSoundRef}>
          <source src={useSound} type="audio/mp3" />
        </audio>
      )}

    </div>
  );
};

export default ControlPanel;
