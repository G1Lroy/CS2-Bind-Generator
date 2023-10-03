import { FC } from "react";

interface UbuttonProps {
  title?: string;
  disabled?: boolean;
  OnClick: () => void;
  text: string;
}

const Ubutton: FC<UbuttonProps> = ({ title, OnClick, disabled, text }) => {
  return (
    <button title={title} disabled={disabled} onClick={() => OnClick()}>
      {text}
    </button>
  );
};

export default Ubutton;
