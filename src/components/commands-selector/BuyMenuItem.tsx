import React, { FC } from "react";
import { useMainStore } from "../../store";
import { SkeletonLoader } from "../UI/SkeletonLoader";
import { animated, useSpring } from "react-spring";
import { animationCards } from "../../constans/mockObjects";

interface BuyMenyitemProps {
  item: { title: string; value: string; img: string };
  clickHandler: (value: string) => void;
}

const BuyMenuItem: FC<BuyMenyitemProps> = React.memo(({ item, clickHandler }) => {
  const MemoizedSkeletonLoader = React.memo(SkeletonLoader);
  const { selectedEquip } = useMainStore();
  const animationProps = useSpring(animationCards);

  return (
    <animated.div
      onClick={() => clickHandler(item.value)}
      className={`buy-menu-item ${selectedEquip === item.value ? "selected" : ""}`}
      style={animationProps}
    >
      {item.img ? (
        <img loading="lazy" className={`item-img `} src={item.img} title={item.title} alt={item.title} />
      ) : (
        <MemoizedSkeletonLoader />
      )}
    </animated.div>
  );
});

export default BuyMenuItem;
