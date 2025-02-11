import { FC, ReactNode } from "react";
import "./landing-background.component.scss";

interface LandingBackgroundComponentProps {
  className?: string;
  children?: ReactNode;
}

const LandingBackgroundComponent: FC<LandingBackgroundComponentProps> = (
  props
) => {
  return (
    <div className={"landing_background " + props.className}>
      {props.children}
    </div>
  );
};

export default LandingBackgroundComponent;
