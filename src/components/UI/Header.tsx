import  { FC, useState } from "react";
import "./../../assets/css/header.css";

const Header: FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <header className="header">
      <h1>CS 2 Binds Generator</h1>
      <div className="header-inner">
        <span onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Hide Details" : "Show Details"}
          ⚙️
        </span>
        <div hidden={!isExpanded}>
          <p>You can generate buy binds and useful commands in one place</p>
          <p>
            After creating commands, download cfg file and paste it to:
            <br />
            <strong> ...\Counter-Strike Global Offensive\game\csgo\cfg</strong>
          </p>
          <p>
            Add this command to your launch options: <strong>+exec autoexec.cfg</strong>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
