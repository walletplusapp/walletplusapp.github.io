import CTA from "./(sections)/CTA";
import Features from "./(sections)/Features";
import HeroSection from "./(sections)/Hero";
import HowItWorks from "./(sections)/HowItWorks";
import Screenshots from "./(sections)/Screenshot";
import Security from "./(sections)/Security";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Security />
      {/* <Screenshots /> */}
      {/* <CTA /> */}
    </>
  );
}
