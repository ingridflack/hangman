import { Button } from "./styles";
import { IconType } from "react-icons/lib/cjs/iconBase";

interface ActionButtonProps {
  text: string;
  icon?: IconType;
  onClick?: any;
}

const ActionButton = ({ text, icon: Icon, onClick }: ActionButtonProps) => {
  return (
    <Button onClick={onClick}>
      <>
        {Icon && <Icon />}
        {text}
      </>
    </Button>
  );
};

export default ActionButton;
