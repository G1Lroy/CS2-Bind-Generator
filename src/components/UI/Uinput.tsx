import { FC } from "react";

interface UinputProps {
  title: string;
  htmlFor: string;
  id: string;
  type: string;
  checkedCondition?: boolean;
  OnChange: () => void;
  imgSource: string;
  imageClassName?: string;
}

const Uinput: FC<UinputProps> = ({ ...p }) => {
  return (
    <label title={p.title} htmlFor={p.htmlFor}>
      <input id={p.id} type={p.type} checked={p.checkedCondition} onChange={() => p.OnChange()}></input>
      <img className={p.imageClassName} src={p.imgSource} alt={p.title} />
    </label>
  );
};

export default Uinput;
