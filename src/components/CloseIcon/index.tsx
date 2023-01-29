import { IconContainer } from "./styles";

interface IconProps {
  onClick?: () => void;
  className?: string;
}

const CloseIcon = ({ onClick, className }: IconProps) => {
  return (
    <IconContainer className={className} onClick={onClick}>
      <p>X</p>
    </IconContainer>
  );
};

export default CloseIcon;
