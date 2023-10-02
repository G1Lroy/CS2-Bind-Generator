import { FC, useEffect } from "react";
import { useMainStore } from "../store";
import "./../assets/css/bindsOutput.css";

const BindsOutput: FC = () => {
  const { currentBind, printedBind, setCurrentBind, keyToBind, selectedEquip } = useMainStore();

  useEffect(() => {
    setCurrentBind([`bind "${keyToBind}" "buy ${selectedEquip};"`]);
  }, [keyToBind, selectedEquip]);

  return (
    <div className="output">
      {<p style={{ color: "blue", fontWeight: 500, padding: "15px 0" }}>{currentBind}</p>}
      {printedBind.map((line, index) => (
        <p key={index} style={{ color: "black" }}>
          {line}
        </p>
      ))}
    </div>
  );
};

export default BindsOutput;
