import AboutRoot from "@/components/about/containers/about.root";
import ExperiencesRoot from "@/components/experiences/containers/ExperiencesRoot";
import LandingComponent from "@/components/landing/containers/landing-page/landing.component";
import NumbersComponent from "@/components/numbers/numbers.component";
import "./page.scss";

export default function Home() {
  return (
    <div className="app">
      <LandingComponent />
      <AboutRoot />
      <ExperiencesRoot />

      <NumbersComponent />
    </div>
  );
}
