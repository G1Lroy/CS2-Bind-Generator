import { useUiStore } from "../../store/uiStore";
import { FC } from "react";
import "./../../assets/css/control-panel.css";
import Ubutton from "./Ubutton";
import Uinput from "./Uinput";

const ControlPanel: FC = () => {
  const { setSound, isSound, currTab, setCurrTab } = useUiStore();

  return (
    <div className="control-panel">
      <Ubutton
        OnClick={() => setCurrTab("buy-menu")}
        text="Buy menu binds🔵"
        disabled={currTab === "buy-menu"}
        className={`control-btn ${currTab === "buy-menu" ? "active" : ""}`}
        title="🛒💲"
      ></Ubutton>
      <Ubutton
        OnClick={() => setCurrTab("other-binds")}
        text=" Helpful binds🔴"
        disabled={currTab === "other-binds"}
        className={`control-btn ${currTab === "other-binds" ? "active" : ""}`}
        title="♿⚙️"
      ></Ubutton>
      <Uinput
        text="Sound 🔊"
        htmlFor="toggle-sound"
        id="toggle-sound"
        type="checkbox"
        checkedCondition={isSound}
        OnChange={() => setSound(!isSound)}
      ></Uinput>
    </div>
  );
};

export default ControlPanel;
