import { ComponentProps, FC } from "react";
import "./button.component.scss";

type ButtonComponentProps = ComponentProps<"button">;

const ButtonComponent: FC<ButtonComponentProps> = (props) => {
  return (
    <button {...props} className={"app-button " + props.className}>
      {props.children}
    </button>
  );
};

export default ButtonComponent;
