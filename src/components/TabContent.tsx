import { FC } from "react";
import { animated, useTransition } from "react-spring";
import { useUiStore } from "../store/user";
import BuyMenu from "./BuyMenu";
import OtherBinds from "./OtherBinds";

const TabContent: FC = () => {
  const { currTab } = useUiStore();
  const transitions = useTransition([currTab], {
    config: { duration: 400 },
    from: { opacity: 0, transform: "translate3d(100%, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-100%, 0, 0)" },
  });

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
