import AboutDescriptionComponent from "../components/about-descri/about-descri.component";
import AboutImgComponent from "../components/about-img/about-img.component";
import AboutBackgroundComponent from "../components/background/about-background.component";
import "./about.root.scss";

const AboutRoot = () => {
  return (
    <div className="about-root">
      <AboutBackgroundComponent />
      <div className="about-root_content">
        <div className="about-root_img">
          <AboutImgComponent />
        </div>
        <div className="about-root_description">
          <AboutDescriptionComponent />
        </div>
      </div>
    </div>
  );
};

export default AboutRoot;
