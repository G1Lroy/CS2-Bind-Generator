import { FC, useEffect } from "react";
import Keyboard from "./Keyboard";
import Mouse from "./Mouse";
import { useMainStore } from "../store";

const KeySelector: FC = () => {
  const { selectedKey, selectedMouseKey, setKeyToBind } = useMainStore();

  useEffect(() => {
    setKeyToBind(selectedKey || selectedMouseKey);
  }, [selectedKey, selectedMouseKey]);

  return (
    <div className="key-selector">
      <Keyboard />
      <Mouse />
    </div>
  );
};

export default KeySelector;
