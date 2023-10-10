import { FC } from "react";

interface UinputProps {
  title?: string;
  htmlFor: string;
  id: string;
  type: string;
  checkedCondition?: boolean;
  OnChange: () => void;
  imgSource?: string;
  imageClassName?: string;
  text?: string;
}

const Uinput: FC<UinputProps> = ({ ...p }) => {
  return (
    <label title={p.title} htmlFor={p.htmlFor}>
      <input id={p.id} type={p.type} checked={p.checkedCondition} onChange={() => p.OnChange()}></input>
      {p.imgSource && <img className={p.imageClassName} src={p.imgSource} alt={`bind ${p.title}`} />}
      {p.text}
    </label>
  );
};

export default Uinput;
