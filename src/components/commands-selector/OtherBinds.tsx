import { FC, useRef } from "react";
import "./../../assets/css/other-binds.css";
import { useMainStore } from "../../store";
import { animationCards, otherBinds } from "../../constans/mockObjects";
import { animated, useSpring } from "react-spring";
import AudioRef from "../UI/AudioRef";
import { useUiStore } from "../../store/uiStore";
import zoomSound from "./../../assets/sounds/zoom.mp3";
import { playSound } from "../../utils";

const OtherBinds: FC = () => {
  const zoomSoudRef = useRef<HTMLAudioElement>(null);
  const { setSelectedAction, selectedAction } = useMainStore();
  const { isSound } = useUiStore();

  const clikHandler = (bind: string[]) => {
    setSelectedAction(bind);
    playSound(zoomSoudRef);
  };
  const animationProps = useSpring(animationCards);

  return (
    <div className="other-binds">
      <div className="commands-container">
        {otherBinds.map((b, i) => (
          <animated.div
            style={animationProps}
            title={b.action}
            className={`command ${b.text === selectedAction ? "active" : ""}`}
            key={i}
            onClick={() => clikHandler(b.text)}
          >
            {b.action}
            <img src={b.img} alt={`bind key "${b.action}"`} />
          </animated.div>
        ))}
      </div>
      {isSound && <AudioRef ref={zoomSoudRef} src={zoomSound} />}
    </div>
  );
};

export default OtherBinds;
