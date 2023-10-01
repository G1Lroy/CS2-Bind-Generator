import { FC,  } from "react";
import "./App.css";
import KeySelector from "./components/KeySelector";
import BindsOutput from "./components/BindsOutput";
import ControlPanel from "./components/ControlPanel";
import { useMainStore } from "./store";
import TabContent from "./components/TabContent";

const App: FC = () => {
  const { setSetSelectedEquip, setSelectedKey, setSelectedMouseKey } = useMainStore();
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setSelectedKey("");
        setSelectedMouseKey("");
        setSetSelectedEquip("");
      }}
    >
      <ControlPanel />
      <TabContent />
      <KeySelector />
      <BindsOutput />
    </div>
  );
};

export default App;
