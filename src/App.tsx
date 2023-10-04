import { FC, useEffect } from "react";
import "./App.css";
import BindsOutput from "./components/binds-output/BindsOutput";
import ControlPanel from "./components/UI/ControlPanel";
import { useMainStore } from "./store";
import TabContent from "./components/UI/TabContent";
import { useUiStore } from "./store/uiStore";
import { replaceChar } from "./utils";
import Keyboard from "./components/keys-selector/Keyboard";
import Mouse from "./components/keys-selector/Mouse";
import Header from "./components/UI/Header";

const App: FC = () => {
  const {
    selectedKey,
    selectedMouseKey,
    setKeyToBind,
    setSetSelectedEquip,
    setSelectedKey,
    setSelectedMouseKey,
    setSelectedAction,
    setCurrentBind,
    keyToBind,
    selectedEquip,
    selectedAction,
  } = useMainStore();

  const { currSide, currTab } = useUiStore();

  const resetSelected = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setSelectedKey("");
    setSelectedMouseKey("");
    setSetSelectedEquip("");
    setSelectedAction([]);
  };

  useEffect(() => {
    setSetSelectedEquip("");
    setSelectedAction([]);
  }, [currSide, currTab]);
  useEffect(() => {
    // пишем в стейт текущю кнопку (мышь или клава)
    setKeyToBind(selectedKey || selectedMouseKey);
  }, [selectedKey, selectedMouseKey]);
  useEffect(() => {
    // Отображатем текущий бинд
    // Исходя из выбраного таба
    if (currTab === "buy-menu") {
      setCurrentBind([`bind "${keyToBind}" "buy ${selectedEquip};"`]);
    } else {
      setCurrentBind(selectedAction.length ? replaceChar(selectedAction, keyToBind) : [`${keyToBind}`]);
    }
  }, [keyToBind, selectedEquip, selectedAction]);

  return (
    <div onContextMenu={(e) => resetSelected(e)}>
      <Header />
      <ControlPanel />
      <main className="main">
        <TabContent />
        <div className="key-selector">
          <Keyboard />
          <Mouse />
        </div>
        <BindsOutput />
      </main>

      <footer>FOOTER</footer>
    </div>
  );
};

export default App;
