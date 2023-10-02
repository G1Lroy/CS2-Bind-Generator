import React, { FC } from "react";
import { useMainStore } from "../store";
import { SkeletonLoader } from "./SkeletonLoader";

interface BuyMenyitemProps {
  item: { title: string; value: string; img: string };
  clickHandler: (value: string) => void;
}

const BuyMenuItem: FC<BuyMenyitemProps> = React.memo(({ item, clickHandler }) => {
  const MemoizedSkeletonLoader = React.memo(SkeletonLoader);
  const { selectedEquip } = useMainStore();
  
  return (
    <div
      title={item.title}
      onClick={() => clickHandler(item.value)}
      className={`buy-menu-item ${selectedEquip === item.value ? "selected" : ""}`}
    >
      <div className="buy-menu-item__img">
        {item.img ? <img loading="lazy" src={item.img} alt={item.title} /> : <MemoizedSkeletonLoader />}
      </div>
    </div>
  );
});

export default BuyMenuItem;
