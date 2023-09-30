import { useEffect, useRef, useState } from "react";
import "./App.css";
import { mainLayout, middleLayout, numpadLayout } from "./keyboard";
import { mainValues, midValues, numpadValues } from "./keyboard/keyVaule";
import mouse from "./assets/mouse.png";
import click from "./assets/sounds/ckick.mp3";
import zoom from "./assets/sounds/zoom.mp3";
import { mouseBtns } from "./constans/mouse";
import { buyMenuEquip, buyMenuHeavy, buyMenuPistol, buyMenuRifle, buyMenuSmg } from "./constans/buyMenu";

function App() {
  const [selectedKey, setSelectedKey] = useState<string>("");
  const [selectedMouse, setSelectedMouse] = useState<string>("");

  const [keyBind, setKeyBind] = useState<string>("");
  const [equip, setEquip] = useState<string>("");
  const [sound, setSound] = useState<boolean>(true);

  const [showHeavyWeapon, setShowHeavyWeapon] = useState<boolean>(false);
  const [bindExpression, setBindExpression] = useState<string[]>([""]);
  const [prinText, setPrintText] = useState<string[]>([""]);
  const buyMenu = showHeavyWeapon
    ? [buyMenuPistol, buyMenuSmg, buyMenuRifle, buyMenuHeavy, buyMenuEquip]
    : [buyMenuPistol, buyMenuSmg, buyMenuRifle, buyMenuEquip];

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioRef2 = useRef<HTMLAudioElement>(null);

  const clickOnKeyHandler = (
    key: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    resetState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (key === selectedKey || key === selectedMouse) return;
    resetState("");
    setState(key);
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.play();
    }
  };
  const clickOnEquipmentHandler = (item: string) => {
    if (equip === item) return;
    if (audioRef2.current) {
      audioRef2.current.volume = 0.15;
      audioRef2.current.play();
    }
    setEquip(item);
  };
  const printToConsole = () => {
    if (!keyBind || !equip) return;
    if (prinText.includes(`bind "${keyBind}" "buy ${equip}"`)) return;
    setPrintText((prev) => [...prev, `bind "${keyBind}" "buy ${equip}"`]);
  };

  useEffect(() => {
    setKeyBind(selectedKey || selectedMouse);
  }, [selectedKey, selectedMouse]);

  useEffect(() => {
    setBindExpression([`bind "${keyBind}" "buy ${equip}"`]);
  }, [keyBind, equip]);

  return (
    <>
      <div className="buy-menu">
        {buyMenu.map((col, idx) => (
          <div key={idx} className="buy-menu-col">
            {col.map((item) => (
              <div
                title={item.title}
                key={item.title}
                onClick={() => clickOnEquipmentHandler(item.value)}
                className={`buy-menu-item ${equip === item.value ? "selected" : ""}`}
              >
                <div className="buy-menu-item__img">{item.img && <img src={item.img}></img>}</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="helpers">
        <label htmlFor="showHeavyWeapon">
          <input
            id="showHeavyWeapon"
            type="checkbox"
            checked={showHeavyWeapon}
            onChange={() => setShowHeavyWeapon(!showHeavyWeapon)}
          ></input>
          Show heavy weapon
        </label>
        <label htmlFor="disable-sound">
          <input id="disable-sound" type="checkbox" checked={sound} onChange={() => setSound(!sound)}></input>
          Sounds
        </label>
        <button onClick={() => printToConsole()} type="button">
          Print
        </button>
      </div>

      <div className="key-selector">
        <div
          onContextMenu={(e) => {
            e.preventDefault();
            setSelectedKey("");
          }}
          className="keyboard"
        >
          <div className="main-section">
            {mainLayout.map((row, rIdx) => (
              <div key={rIdx} className="row">
                {row.map((key, kIdx) => (
                  <div
                    onClick={() => clickOnKeyHandler(key, setSelectedKey, setSelectedMouse)}
                    className={`key ${key === "space" ? "space" : ""} ${
                      key === selectedKey ? "selected" : ""
                    }`}
                    key={kIdx}
                  >
                    {mainValues[key] ? mainValues[key] : key}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mid-section">
            {middleLayout.map((row, rIdx) => (
              <div key={rIdx} className="row">
                {row.map((key, kIdx) => (
                  <div
                    onClick={() => clickOnKeyHandler(key, setSelectedKey, setSelectedMouse)}
                    className={`
                  ${key !== "" ? "key" : "empty"} 
                  ${key === selectedKey ? "selected" : ""}
                  `}
                    key={kIdx}
                  >
                    {midValues[key]}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="num-section">
            {numpadLayout.map((row, rIdx) => (
              <div key={rIdx} className="row">
                {row.map((key, kIdx) => (
                  <div
                    onClick={() => clickOnKeyHandler(key, setSelectedKey, setSelectedMouse)}
                    className={`key ${key === selectedKey ? "selected" : ""}`}
                    key={kIdx}
                  >
                    {numpadValues[key]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mouse">
          <img src={mouse} alt="" />
          {mouseBtns.map((btn) => (
            <span
              onClick={() => clickOnKeyHandler(btn.value, setSelectedMouse, setSelectedKey)}
              key={btn.class}
              className={`${btn.class} ${selectedMouse === btn.value ? "selected" : ""}`}
            >
              {btn?.text}
            </span>
          ))}
        </div>
      </div>

      <div>
        <audio ref={sound ? audioRef : null}>
          <source src={click} type="audio/mp3" />
        </audio>
        <audio ref={sound ? audioRef2 : null}>
          <source src={zoom} type="audio/mp3" />
        </audio>
      </div>

      <div className="output">
        {(keyBind || equip) && <p style={{ color: "blue" }}>{bindExpression}</p>}

        {prinText.map((line, index) => (
          <p key={index} style={{ color: "black" }}>
            {line}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
