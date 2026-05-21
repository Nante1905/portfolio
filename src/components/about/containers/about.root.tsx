import AboutDescriptionComponent from "../components/about-descri/about-descri.component";
import AcademicTimelineComponent from "../components/academic-timeline/academic-timeline.component";
import "./about.root.scss";

interface AcademicItem {
  degree: string;
  institution: string;
  field: string;
  year: string;
  description?: string;
}

const academicMockData: AcademicItem[] = [
  {
    degree: "MSc. BigData Intelligence for Human Augmented Reality (BIHAR)",
    institution:
      "Ecole supérieure des technologies industrielles avancées, France",
    field: "IA & Big Data",
    year: "2025 - 2026",
    description:
      "Spécialisation en analyse de données avancées et intelligence artificielle",
  },
  {
    degree: "Master en Informatique",
    institution: "IT University, Madagascar",
    field: "Informatique & Mathématiques",
    year: "2024 - 2025",
    description:
      "Formation approfondie en informatique avec focus sur développement logiciel et gestion de projets",
  },
  {
    degree: "Licence en Informatique",
    institution: "IT University, Madagascar",
    field: "Informatique & Développement Logiciel",
    year: "2021 - 2024",
    description:
      "Formation complète en génie logiciel avec focus sur développement web et mobile",
  },
];

const AboutRoot = () => {
  return (
    <div className="about-root">
      {/* <AboutBackgroundComponent /> */}
      <div className="about-root_content">
        {/* <div className="about-root_img">
          <AboutImgComponent />
        </div> */}
        <div className="about-root_description">
          <AboutDescriptionComponent />
        </div>
        <div className="about-root_academic flex justify-center items-center">
          <AcademicTimelineComponent items={academicMockData} />
        </div>
      </div>
    </div>
  );
};

export default AboutRoot;
