import { FC, forwardRef } from "react";

interface AudioRefProps {
  src: string;
}

const AudioRef: FC<AudioRefProps> = ({ src }, ref) => {
  return (
    <audio ref={ref}>
      <source src={src} type="audio/mp3" />
    </audio>
  );
};
//@ts-ignore
export default forwardRef<HTMLAudioElement, AudioRefProps>(AudioRef);
