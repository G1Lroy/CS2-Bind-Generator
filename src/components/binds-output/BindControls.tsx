import { FC, useRef } from "react";
import { useMainStore } from "../../store";
import { generateCfgFile, playSound } from "../../utils";
import AudioRef from "../UI/AudioRef";
import useSound from "./../../assets/sounds/use_key.mp3";
import { useUiStore } from "../../store/uiStore";
import Ubutton from "../UI/Ubutton";

const BindControls: FC = () => {
  const useSoundRef = useRef<HTMLAudioElement>(null);
  const {
    selectedAction,
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
    setSelectedAction,
  } = useMainStore();
  const { isSound } = useUiStore();

  const printToConsole = () => {
    setPrintedBind(currentBind);
    setUsedKeys(keyToBind);
    setSetSelectedEquip("");
    setSelectedKey("");
    setSelectedMouseKey("");
    setSelectedAction([]);
    playSound(useSoundRef);
  };

  let isKeyToBindValid =
    (keyToBind && (selectedEquip || selectedAction.length)) || selectedAction[0]?.includes("viewmodel");
  let isButtonDisabled = !isKeyToBindValid;

  return (
    <div className="bind-controls">
      <Ubutton
        OnClick={() => printToConsole()}
        className={isKeyToBindValid ? "green-btn" : ""}
        disabled={isButtonDisabled}
        text="+Add command"
      />
      <Ubutton
        className={printedBind.length ? "green-btn" : ""}
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
