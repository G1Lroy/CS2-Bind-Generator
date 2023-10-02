import { FC, useEffect } from "react";
import "./App.css";
import KeySelector from "./components/KeySelector";
import BindsOutput from "./components/BindsOutput";
import ControlPanel from "./components/ControlPanel";
import { useMainStore } from "./store";
import TabContent from "./components/TabContent";
import { useUiStore } from "./store/user";

const App: FC = () => {
  const { setSetSelectedEquip, setSelectedKey, setSelectedMouseKey } = useMainStore();
  const { currSide, currTab } = useUiStore();

  const resetSelected = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    setSelectedKey("");
    setSelectedMouseKey("");
    setSetSelectedEquip("");
  };

  useEffect(() => {
    setSetSelectedEquip("");
  }, [currSide, currTab]);

  return (
    <div onContextMenu={(e) => resetSelected(e)}>
      <header>HEADER</header>
      <main>
        <ControlPanel />
        <section className="main">
          <KeySelector />
          <TabContent />
          <BindsOutput />
        </section>
      </main>
      <footer>FOOTER</footer>
    </div>
  );
};

export default App;
