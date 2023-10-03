import { FC } from "react";
import "./../assets/css/other-binds.css";
import { useMainStore } from "../store";
import { otherBinds } from "../constans/mockObjects";

const OtherBinds: FC = () => {
  const { setSelectedAction } = useMainStore();

  return (
    <div className="other-binds">
      <h2>Helpful binds generator</h2>
      <div>
        {otherBinds.map((b, i) => (
          <div key={i} onClick={() => setSelectedAction(b.text)}>
            {b.action}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherBinds;
