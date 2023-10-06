import { FC } from "react";
import TabContent from "./TabContent";
import Keyboard from "../keys-selector/Keyboard";
import Mouse from "../keys-selector/Mouse";
import BindsOutput from "../binds-output/BindsOutput";
import './../../assets/css/main.css'

const Main: FC = () => {
  return (
    <main className="main">
      <TabContent />
      <section className="key-selector">
        <Keyboard />
        <Mouse />
      </section>
      <BindsOutput />
    </main>
  );
};

export default Main;
