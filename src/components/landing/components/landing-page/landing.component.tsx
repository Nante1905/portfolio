import Image from "next/image";
import Link from "next/link";
import LandingCardComponent from "../cards/landing-card.component";
import AppTypeWriter from "../typewriter/typewriter.component";
import "./landing.component.scss";

const LandingComponent = () => {
  return (
    <div className="landing">
      <section className="landing_title">
        <span className="landing_title_greeting">
          <h1>Hey, I&apos;m Nantenaina.</h1>
        </span>
        <h1>
          Building{" "}
          <span className="colored">
            <AppTypeWriter />
            <span style={{ display: "none" }}>web applications</span>.
            <br />
          </span>
          Make your dream project a reality with me.
        </h1>
      </section>
      <section className="landing_cards">
        <LandingCardComponent title="BSc." description="in computer science" />
        <LandingCardComponent title="1" description="year of experience" />
        <Link href="mailto:minoharynantenaina@gmail.com" target="_blank">
          <LandingCardComponent
            title={
              <Image
                src={"/arrow_forward.svg"}
                quality={100}
                alt="Arrow"
                width={84}
                height={84}
                style={{ margin: "auto" }}
              />
            }
            description="Contact me"
          />
        </Link>
        <LandingCardComponent title="+3" description="Real projects" />
      </section>
    </div>
  );
};

export default LandingComponent;
