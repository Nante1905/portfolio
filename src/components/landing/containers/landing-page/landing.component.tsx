import LandingCardComponent from "../../components/cards/landing-card.component";
import ProfilePremiumComponent from "../../components/profile-premium/profile-premium.component";
import "./landing.component.scss";

const LandingComponent = () => {
  return (
    // <section>

    <div className="landing-warper">
      {/* <div className="landing-background"></div> */}
      <div className="landing flex-wrap md:flex-nowrap">
        <section className="landing_title">
          <span className="landing_title_greeting">
            <p>
              Hello, je suis{" "}
              <span className="text-green-accent">Nantenaina</span>.
            </p>
          </span>
          <h1>
            Développeur Fullstack <br />
            <span className="text-green-primary">Web & Mobile</span>
          </h1>
          <p className="my-4 text-sm font-light">
            - <i>Propulsons votre business ensemble.</i>
          </p>
        </section>
        <section className="landing_cards">
          <ProfilePremiumComponent
            imageSrc="/IMG_0608.png"
            imageAlt="Nantenaina - Développeur Fullstack"
          />
          <div className="flex flex-row gap-3 md:gap-3  md:flex-nowrap justify-center md:items-center w-full">
            <LandingCardComponent title="Msc." description="BIHAR" />
            <LandingCardComponent title="3" description="année d'expérience" />
            <LandingCardComponent title="+4" description="Projets réels" />
          </div>
          {/* <Link
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
          </Link> */}
        </section>
      </div>
    </div>
  );
};

export default LandingComponent;
