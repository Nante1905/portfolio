import Image from "next/image";
import Link from "next/link";
import LandingCardComponent from "../../components/cards/landing-card.component";
import AppTypeWriter from "../../components/typewriter/typewriter.component";
import "./landing.component.scss";

const LandingComponent = () => {
  return (
    // <section>

    <div className="landing-warper">
      <div className="landing-background"></div>
      <div className="landing">
        <section className="landing_title">
          <span className="landing_title_greeting">
            <h1>
              Hello, je suis <span className="red-fade">Nantenaina</span>.
            </h1>
          </span>
          <h1>
            Construire{" "}
            <span className="colored">
              <AppTypeWriter />
              <span style={{ display: "none" }}>des produits numériques</span>.
              <br />
            </span>
            Faites de votre projet de rêve une réalité avec moi.
          </h1>
        </section>
        <section className="landing_cards">
          <LandingCardComponent title="BSc." description="en informatique" />
          <LandingCardComponent
            title="+1"
            description="année d'expérience"
          />{" "}
          <LandingCardComponent title="+3" description="Projets réels" />
          <Link
            href="mailto:minoharynantenaina@gmail.com"
            target="_blank"
            className="landing-card-link"
          >
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
              description="Contactez moi"
            />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default LandingComponent;
