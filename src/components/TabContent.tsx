import { FC } from "react";
import { animated, useTransition } from "react-spring";
import { useUiStore } from "../store/uiStore";
import BuyMenu from "./BuyMenu";
import OtherBinds from "./OtherBinds";
import { animationTabs } from "../constans/mockObjects";

const TabContent: FC = () => {
  const { currTab } = useUiStore();
  const transitions = useTransition(currTab, animationTabs);

  return (
    <div className="tab-content">
      {transitions((style, item) => (
        <animated.div style={style} key={item}>
          {item === "buy-menu" ? <BuyMenu /> : <OtherBinds />}
        </animated.div>
      ))}
    </div>
  );
};

export default TabContent;
