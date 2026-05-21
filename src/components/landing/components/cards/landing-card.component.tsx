import { FC, ReactNode } from "react";
import "./landing-card.component.scss";

interface LandingCardComponentProps {
  title: string | ReactNode;
  description: string;
}

const LandingCardComponent: FC<LandingCardComponentProps> = (props) => {
  return (
    <div className="landing-card w-full">
      <div className="landing-card_title">
        <h2 className="text-green-accent">{props.title}</h2>
      </div>
      <div className="landing-card_description">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default LandingCardComponent;
