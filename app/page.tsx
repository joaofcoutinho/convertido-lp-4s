import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogosCarousel from "@/components/LogosCarousel";
import Manifesto from "@/components/Manifesto";
import Methodology from "@/components/Methodology";
import Discovery from "@/components/Discovery";
import Services from "@/components/Services";
import ProcessBanner from "@/components/ProcessBanner";
import Proof from "@/components/Proof";
import CtaFinal from "@/components/CtaFinal";
import Footer from "@/components/Footer";
import ScrollEffects from "@/components/ScrollEffects";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogosCarousel />
        <Manifesto />
        <Methodology />
        <Discovery />
        <Services />
        <ProcessBanner />
        <Proof />
        <CtaFinal />
      </main>
      <Footer />
      <ScrollEffects />
    </>
  );
}
