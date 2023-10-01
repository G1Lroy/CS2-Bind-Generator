import { FC } from "react";
import "./App.css";
import KeySelector from "./components/KeySelector";
import BuyMenu from "./components/BuyMenu";
import BindsOutput from "./components/BindsOutput";
import ControlPanel from "./components/ControlPanel";

const App: FC = () => {
  return (
    <>
      <BuyMenu />

      <ControlPanel />

      <KeySelector />

      <BindsOutput />
    </>
  );
};

export default App;
