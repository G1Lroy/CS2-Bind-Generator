import { FC, useRef } from "react";
import { useMainStore } from "../store";
import { generateCfgFile, playSound } from "../utils";
import AudioRef from "./UI/AudioRef";
import useSound from "./../assets/sounds/use_key.mp3";
import { useUiStore } from "../store/uiStore";
import Ubutton from "./UI/Ubutton";

const BindControls: FC = () => {
  const useSoundRef = useRef<HTMLAudioElement>(null);
  const {
    currentBind,
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
  const { isSound } = useUiStore();
  const printToConsole = () => {
    setPrintedBind(currentBind);
    setUsedKeys(keyToBind);
    setSetSelectedEquip("");
    setSelectedKey("");
    setSelectedMouseKey("");
    playSound(useSoundRef);
  };

  return (
    <div className="bind-controls">
      <Ubutton
        OnClick={() => printToConsole()}
        title={!keyToBind || !selectedEquip ? "Chose key and command" : "Add to cfg"}
        disabled={!keyToBind || !selectedEquip}
        text=" +Add command"
      />
      <Ubutton
        OnClick={() => generateCfgFile(printedBind)}
        title={!printedBind.length ? "Add some binds" : "💾"}
        disabled={!printedBind.length}
        text="Download.cfg"
      />
      <Ubutton OnClick={() => reset()} text="Reset" title="❌" />

      {isSound && <AudioRef ref={useSoundRef} src={useSound} />}
    </div>
  );
};

export default BindControls;
