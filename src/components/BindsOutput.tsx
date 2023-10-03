import { FC, useEffect } from "react";
import { useMainStore } from "../store";
import "./../assets/css/bindsOutput.css";
import BindControls from "./BindControls";

const BindsOutput: FC = () => {
  const { currentBind, printedBind, setCurrentBind, keyToBind, selectedEquip } = useMainStore();

  useEffect(() => {
    setCurrentBind([`bind "${keyToBind}" "buy ${selectedEquip};"`]);
  }, [keyToBind, selectedEquip]);

  return (
    <div className="output">
      {<p className="current-bind">{currentBind}</p>}
      {printedBind.map((line, index) => (
        <p key={index} style={{ color: "black" }}>
          {line}
        </p>
      ))}
      <BindControls />
    </div>
  );
};

export default BindsOutput;
