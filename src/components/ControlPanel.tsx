import { useUiStore } from "../store/user";
import { useMainStore } from "../store";
import { FC, useRef } from "react";
import useSound from "./../assets/sounds/use_key.mp3";
import { generateCfgFile, playSound } from "../utils";

const ControlPanel: FC = () => {
  const useSoundRef = useRef<HTMLAudioElement>(null);
  const {
    showHeavyWeapon,
    setShowHeavyWeapon,
    setSound,
    isSound,
    currTab,
    setCurrTab,
    setCurrSide,
    currSide,
  } = useUiStore();
  const {
    keyToBind,
    selectedEquip,
    printedBind,
    setPrintedBind,
    setUsedKeys,
    setSetSelectedEquip,
    setSelectedKey,
    setSelectedMouseKey,
    reset,
  } = useMainStore();

  const printToConsole = () => {
    setPrintedBind([`bind "${keyToBind}" "buy ${selectedEquip};"`]);
    setUsedKeys(keyToBind);
    playSound(useSoundRef);
    setSetSelectedEquip("");
    setSelectedKey("");
    setSelectedMouseKey("");
  };
  return (
    <div className="helpers">
      <label hidden={currTab === "other-binds"} htmlFor="showHeavyWeapon">
        <input
          id="showHeavyWeapon"
          type="checkbox"
          checked={showHeavyWeapon}
          onChange={() => setShowHeavyWeapon(!showHeavyWeapon)}
        ></input>
        Other weapons
      </label>
      <label htmlFor="disable-isSound">
        <input
          id="disable-isSound"
          type="checkbox"
          checked={isSound}
          onChange={() => setSound(!isSound)}
        ></input>
        Sound
      </label>

      <button
        title={!printedBind.length ? "Add some binds" : ""}
        disabled={!printedBind.length}
        onClick={() => generateCfgFile(printedBind)}
      >
        Download.cfg
      </button>

      <button
        title={!keyToBind || !selectedEquip ? "Chose key and equip" : "Add to cfg"}
        disabled={!keyToBind || !selectedEquip}
        onClick={() => printToConsole()}
        type="button"
      >
        +Add command
      </button>

      <button onClick={() => reset()} type="button">
        Reset
      </button>

      <div>
        <button onClick={() => setCurrTab("buy-menu")} className={currTab === "buy-menu" ? "active" : ""}>
          Buy Menu
        </button>
        <button
          onClick={() => setCurrTab("other-binds")}
          className={currTab === "other-binds" ? "active" : ""}
        >
          Other Binds
        </button>
      </div>

      <>
        <label>
          <input type="radio" checked={currSide === "ct"} name="side" onChange={() => setCurrSide("ct")} />
          CT
        </label>
        <label>
          <input type="radio" checked={currSide === "t"} name="side" onChange={() => setCurrSide("t")} />T
        </label>
      </>

      {isSound && (
        <audio ref={useSoundRef}>
          <source src={useSound} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
};

export default ControlPanel;
