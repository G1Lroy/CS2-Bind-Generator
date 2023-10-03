import { useUiStore } from "../store/uiStore";
import { FC } from "react";
import "./../assets/css/control-panel.css";

const ControlPanel: FC = () => {
  const { setSound, isSound, currTab, setCurrTab } = useUiStore();

  return (
    <div className="control-panel">
      <label htmlFor="disable-isSound">
        <input
          id="disable-isSound"
          type="checkbox"
          checked={isSound}
          onChange={() => setSound(!isSound)}
        ></input>
        Sound
      </label>

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
    </div>
  );
};

export default ControlPanel;
