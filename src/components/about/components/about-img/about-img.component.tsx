import Image from "next/image";
import "./about-img.component.scss";

const AboutImgComponent = () => {
  return (
    <div className="about-img">
      <div className="img-container">
        <Image
          src={"/IMG_0608.png"}
          alt={""}
          width={350}
          height={400}
          className="img"
        />
      </div>
    </div>
  );
};

export default AboutImgComponent;
