import ButtonComponent from "@/shared/components/button/button.component";
import "./about-descri.component.scss";

const AboutDescriptionComponent = () => {
  return (
    <div className="about-descri flex justify-center items-center">
      <section className="about-descri_text">
        <h2 className="text-green-primary">A PROPOS</h2>
        <p>
          Je m&apos;appelle{" "}
          <span className="text-green-secondary">
            Minohary Nantenaina ANDRIAMAZAORO
          </span>
          . <span className="text-green-accent">Étudiant en Msc. BIHAR</span>,
          mais aussi un{" "}
          <span className="text-green-secondary">
            développeur fullstack Web & Mobile
          </span>{" "}
          diplomé de l&apos;IT University, Madagascar.
        </p>
        <p>
          Je crée et conçois{" "}
          <span className="text-green-accent">des applications sur mesure</span>{" "}
          pour les particuliers et entreprises pour faciliter et/ou automatiser
          votre travail quotidien.
        </p>
        <p>
          Avec mes connaissances, je peux vous accompagner depuis{" "}
          <span className="text-green-secondary">
            l&apos;analyse de vos besoins
          </span>
          , en passant par{" "}
          <span className="text-green-secondary">le développement</span>,
          jusqu&apos;au{" "}
          <span className="text-green-secondary">déploiement</span> de votre
          projet.
        </p>
        <div className="text-center">
          <a
            href="https://drive.google.com/file/d/1Or_a2-LtQ9tw9qKrSG_aPzFOuepxqguT/view?usp=drive_link"
            target="_blank"
          >
            <ButtonComponent className="about-btn">
              <span className="py-8">Voir mon CV</span>
            </ButtonComponent>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutDescriptionComponent;
