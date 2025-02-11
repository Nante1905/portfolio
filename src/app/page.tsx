import AboutRoot from "@/components/about/containers/about.root";
import LandingComponent from "@/components/landing/containers/landing-page/landing.component";
import "./page.scss";

export default function Home() {
  return (
    <div className="app">
      <LandingComponent />
      <AboutRoot />

      <div className="circles">
        <div>1</div>
        <div>0</div>
        <div>1</div>
        <div>0</div>
        <div>0</div>
        <div>1</div>
      </div>
    </div>
  );
}

