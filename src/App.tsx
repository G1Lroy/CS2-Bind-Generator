import { FC, useEffect } from "react";
import ControlPanel from "./components/UI/ControlPanel";
import { useMainStore } from "./store";
import { useUiStore } from "./store/uiStore";
import { replaceChar } from "./utils";
import Header from "./components/UI/Header";
import Main from "./components/UI/Main";
import Footer from "./components/UI/Footer";

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
    <div className="App" onContextMenu={(e) => resetSelected(e)}>
      <div className="container">
        <Header />
        <ControlPanel />
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
