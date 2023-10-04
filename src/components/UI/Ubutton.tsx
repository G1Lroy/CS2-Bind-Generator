import { FC } from "react";

interface UbuttonProps {
  title?: string;
  disabled?: boolean;
  OnClick: () => void;
  text: string;
  className?: string;
}

const Ubutton: FC<UbuttonProps> = ({ title, OnClick, disabled, text, className }) => {
  return (
    <button className={className} title={title} disabled={disabled} onClick={() => OnClick()}>
      {text}
    </button>
  );
};

export default Ubutton;
