import Features from "./(sections)/Features";
import HeroSection from "./(sections)/Hero";
import HowItWorks from "./(sections)/HowItWorks";
import Security from "./(sections)/Security";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <HowItWorks />
      <Security />
    </>
  );
}
