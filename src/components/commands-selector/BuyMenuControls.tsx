import { FC } from "react";
import { useUiStore } from "../../store/uiStore";
import "./../../assets/css/buy-menu-controls.css";
import otherWeaponsICON from "./../../assets/icons/other-weapons.webp";
import tIcon from "./../../assets/icons/t-side.webp";
import ctIcon from "./../../assets/icons/ct-side.webp";
import Uinput from "../UI/Uinput";

const BuyMenuControls: FC = () => {
  const { showHeavyWeapon, setShowHeavyWeapon, setCurrSide, currSide } = useUiStore();

  return (
    <div className="buy-menu-controls">
      <Uinput
        checkedCondition={showHeavyWeapon}
        title="Show other weapons"
        htmlFor="ShowOtherWeapons"
        id="ShowOtherWeapons"
        type="checkbox"
        OnChange={() => setShowHeavyWeapon(!showHeavyWeapon)}
        imgSource={otherWeaponsICON}
        imageClassName="wide-img"
      />
      <Uinput
        checkedCondition={currSide === "ct"}
        title="CT side weapons"
        htmlFor="SetSideCt"
        id="SetSideCt"
        type="radio"
        OnChange={() => setCurrSide("ct")}
        imgSource={ctIcon}
        imageClassName="default-img"
      />
      <Uinput
        checkedCondition={currSide === "t"}
        title="T side weapons"
        htmlFor="SetSideT"
        id="SetSideT"
        type="radio"
        OnChange={() => setCurrSide("t")}
        imgSource={tIcon}
        imageClassName="default-img"
      />
    </div>
  );
};

export default BuyMenuControls;
