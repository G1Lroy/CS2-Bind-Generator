import { FC, useEffect } from "react";
import { useMainStore } from "../store";
import "./../assets/css/bindsOutput.css";
import BindControls from "./BindControls";
import { useUiStore } from "../store/uiStore";
import { replaceChar } from "../utils";

const BindsOutput: FC = () => {
  const {
    currentBind,
    printedBind,
    setCurrentBind,
    keyToBind,
    selectedEquip,
    selectedAction,
    setSetSelectedEquip,
  } = useMainStore();
  const { currTab } = useUiStore();

  useEffect(() => {
    if (currTab === "buy-menu") {
      setCurrentBind([`bind "${keyToBind}" "buy ${selectedEquip};"`]);
    } else {
      setCurrentBind(replaceChar(selectedAction, keyToBind));
      setSetSelectedEquip("foo");
    }
  }, [keyToBind, selectedEquip, currTab, selectedAction]);

  return (
    <div onContextMenu={(e) => e.stopPropagation()} className="output">
      <br />
      <br />
      {currentBind.map((line, index) => (
        <p key={index} className="current-bind mapped">
          {line}
        </p>
      ))}
      <hr />
      {printedBind.map((line, index) => (
        <p key={index} className="printed-bind">
          {line}
        </p>
      ))}
      <BindControls />
    </div>
  );
};

export default BindsOutput;
