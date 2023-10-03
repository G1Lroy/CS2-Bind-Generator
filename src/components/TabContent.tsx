import { FC } from "react";
import { useUiStore } from "../store/uiStore";
import BuyMenu from "./BuyMenu";
import OtherBinds from "./OtherBinds";

const TabContent: FC = () => {
  const { currTab } = useUiStore();

  return <div className="tab-content">{currTab === "buy-menu" ? <BuyMenu /> : <OtherBinds />}</div>;
};

export default TabContent;
