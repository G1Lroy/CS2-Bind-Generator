import { FC } from "react";
import { animated, useTransition } from "react-spring";
import { useUiStore } from "../store/user";
import BuyMenu from "./BuyMenu";
import OtherBinds from "./OtherBinds";
import { animationConfig } from "../constans/mockObjects";

const TabContent: FC = () => {
  const { currTab } = useUiStore();
  const transitions = useTransition(currTab, animationConfig);

  return (
    <animated.div className="tab-content">
      {transitions((style, item) => (
        <animated.div style={style} key={item}>
          {item === "buy-menu" ? <BuyMenu /> : <OtherBinds />}
        </animated.div>
      ))}
    </animated.div>
  );
};

export default TabContent;
