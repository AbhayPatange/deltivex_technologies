import Hero from "../components/home/Hero";
import TechStrip from "../components/home/TechStrip";
import Solutions from "../components/home/Solutions";
import Process from "../components/home/Process";
import SelectedWork from "../components/home/SelectedWork";
import WhyDeltivex from "../components/home/WhyDeltivex";
import TeamPreview from "../components/home/TeamPreview";
import CTA from "../components/home/CTA";
import Pricing from "../components/home/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStrip />
      <Pricing />
      <Solutions />
      <CTA />
    </>
  );
}
