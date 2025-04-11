import Image from "next/image";
import HomeHeroSection from "./components/HomeHeroSection";
import PastClients from "./components/PastClients";
import KeyProblem from "./components/KeyProblem";
import Testimony from "./components/Testimony";
import Plan from "./components/Plan";
import ClientShowcase from "./components/ClientShowCase";
import Packages from "./components/Packages";
import PersonalStory from "./components/PersonalStory";
import FAQ from "./components/FAQ";
import Reassurance from "./components/Reassurance";

export default function Home() {
  return (
    <><HomeHeroSection/><PastClients/><KeyProblem/><Testimony/><Plan/><ClientShowcase/><Packages/><PersonalStory/><FAQ/><Reassurance/></>
  );
}
