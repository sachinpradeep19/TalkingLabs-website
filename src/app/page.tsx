import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AuravoShowcase } from "@/components/sections/AuravoShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { Technology } from "@/components/sections/Technology";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { WhyTalkingLabs } from "@/components/sections/WhyTalkingLabs";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <WhyTalkingLabs />
        <AuravoShowcase />
        <HowItWorks />
        <WhoWeServe />
        <Technology />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
