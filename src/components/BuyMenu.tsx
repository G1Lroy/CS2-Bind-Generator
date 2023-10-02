import { FC, useRef } from "react";
import { useUiStore } from "../store/user";
import { useMainStore } from "../store";
import { playSound } from "../utils";
import zoomSound from "./../assets/sounds/zoom.mp3";
import BuyMenuItem from "./BuyMenuItem";
import "./../assets/css/buyMenu.css";

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

  return (
    <div className="buy-menu">
      <div className="buy-menu-inner">
        {menu.map((col, idx) => (
          <div key={idx} className="buy-menu-col">
            {col.map((item) =>
              item.side === currSide || item.side === "both" ? (
                <BuyMenuItem key={item.title} item={item} clickHandler={clickHandler} />
              ) : null
            )}
          </div>
        ))}
      </div>

      {isSound && (
        <audio ref={zoomSoudRef}>
          <source src={zoomSound} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
};

export default BuyMenu;
