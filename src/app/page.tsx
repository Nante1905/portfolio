import AboutRoot from "@/components/about/containers/about.root";
import LandingComponent from "@/components/landing/containers/landing-page/landing.component";
import NumbersComponent from "@/components/numbers/numbers.component";
import "./page.scss";

export default function Home() {
  return (
    <div className="app">
      <LandingComponent />
      <AboutRoot />

      <NumbersComponent />
    </div>
  );
}

