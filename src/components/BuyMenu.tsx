import { FC, useRef } from "react";
import { useUiStore } from "../store/user";
import { useMainStore } from "../store";
import { playSound } from "../utils";
import zoomSound from "./../assets/sounds/zoom.mp3";

const BuyMenu: FC = () => {
  const zoomSoudRef = useRef<HTMLAudioElement>(null);
  const { menuToRender, isSound } = useUiStore();
  const { selectedEquip, setSetSelectedEquip } = useMainStore();
  const menu = menuToRender();

  const clickHandler = (item: string) => {
    if (selectedEquip === item) return;
    setSetSelectedEquip(item);
    playSound(zoomSoudRef);
  };

  return (
    <div className="buy-menu">
      {menu.map((col, idx) => (
        <div key={idx} className="buy-menu-col">
          {col.map((item) => (
            <div
              title={item.title}
              key={item.title}
              onClick={() => clickHandler(item.value)}
              className={`buy-menu-item ${selectedEquip === item.value ? "selected" : ""}`}
            >
              <div className="buy-menu-item__img">{item.img && <img src={item.img}></img>}</div>
            </div>
          ))}
        </div>
      ))}

      {isSound && (
        <audio ref={zoomSoudRef}>
          <source src={zoomSound} type="audio/mp3" />
        </audio>
      )}
    </div>
  );
};

export default BuyMenu;
