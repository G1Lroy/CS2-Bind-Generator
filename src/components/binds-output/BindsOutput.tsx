import { FC } from "react";
import { useMainStore } from "../../store";
import "./../../assets/css/bindsOutput.css";
import BindControls from "./BindControls";

const BindsOutput: FC = () => {
  const { currentBind, printedBind } = useMainStore();

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
