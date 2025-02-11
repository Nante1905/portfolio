import ButtonComponent from "@/shared/components/button/button.component";
import "./about-descri.component.scss";

const AboutDescriptionComponent = () => {
  return (
    <div className="about-descri">
      <section className="about-descri_text">
        <h2 className="red-fade">A PROPOS</h2>
        <p>
          Je m&apos;appelle{" "}
          <span className="blue">Minohary Nantenaina ANDRIAMAZAORO</span>.{" "}
          <span className="red">Étudiant en MASTER</span> en informatique, mais
          aussi un <span className="blue">ingénieur logiciel</span> diplomé de
          l&apos;IT University, Madagascar.
        </p>
        <p>
          Je crée et conçois{" "}
          <span className="red">des applications sur mesure</span> pour les
          particuliers et entreprises pour faciliter et/ou automatiser votre
          travail quotidien.
        </p>
        <p>
          Avec mes connaissances, je peux vous accompagner depuis{" "}
          <span className="blue">l&apos;analyse de vos besoins</span>, en
          passant par <span className="blue">le développement</span>,
          jusqu&apos;au <span className="blue">déploiement</span> de votre
          projet.
        </p>
        <div className="text-center">
          <ButtonComponent>Télécharger mon CV</ButtonComponent>
        </div>
      </section>
    </div>
  );
};

export default AboutDescriptionComponent;
