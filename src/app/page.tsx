import { Footer } from "../components/Footer";
import { WhatsApp } from "../components/WhatsApp";
import { AboutSection } from "./sections/About";
import { HeroSection } from "./sections/Hero";
import { InstagramSection } from "./sections/Instagram";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <InstagramSection /> */}
      <Footer />
      <WhatsApp />
    </>
  );
}
