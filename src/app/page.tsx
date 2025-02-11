import LandingComponent from "@/components/landing/components/landing-page/landing.component";
import "./page.scss";

export default function Home() {
  return (
    <div className="app">
      <LandingComponent />

      <div className="circles">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

