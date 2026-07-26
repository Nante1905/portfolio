import AboutDescriptionComponent from "../components/about-descri/about-descri.component";

const AboutRoot = () => {
  return (
    <div className="relative z-10 w-full">
      <div className="flex min-h-screen w-full items-center justify-center px-[5%] py-16">
        <div className="w-full max-w-3xl">
          <AboutDescriptionComponent />
        </div>
      </div>
    </div>
  );
};

export default AboutRoot;
