import { FC, useRef } from "react";
import { useUiStore } from "../../store/uiStore";
import { useMainStore } from "../../store";
import { playSound } from "../../utils";
import zoomSound from "./../../assets/sounds/zoom.mp3";
import BuyMenuItem from "./BuyMenuItem";
import "./../../assets/css/buy-menu.css";
import BuyMenuControls from "./BuyMenuControls";
import AudioRef from "../UI/AudioRef";

const BuyMenu: FC = () => {
  const zoomSoudRef = useRef<HTMLAudioElement>(null);
  const { menuToRender, isSound, currSide } = useUiStore();
  const { selectedEquip, setSetSelectedEquip } = useMainStore();
  const menu = menuToRender();

  const clickHandler = (item: string) => {
    if (selectedEquip === item) return;
    setSetSelectedEquip(item);
    playSound(zoomSoudRef);
  };
  const checkSide = (item: { title: string; value: string; img: string; side: string }) => {
    return item.side === currSide || item.side === "both";
  };

  return (
    <>

      <div className="buy-menu">
        <div className="buy-menu-inner">
          {menu.map((col, idx) => (
            <div key={idx} className="buy-menu-col">
              {col.map((item) =>
                checkSide(item) ? (
                  <BuyMenuItem key={item.title} item={item} clickHandler={clickHandler} />
                ) : null
              )}
            </div>
          ))}
        </div>
        <BuyMenuControls />
        {isSound && <AudioRef ref={zoomSoudRef} src={zoomSound} />}
      </div>
    </>
  );
};

export default BuyMenu;
