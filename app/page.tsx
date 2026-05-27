import { HeroVideo } from "@/components/sections/home/HeroVideo";
import { Manifesto } from "@/components/sections/home/Manifesto";
import { ServicesShowcase } from "@/components/sections/home/ServicesShowcase";
import { FeaturesBento } from "@/components/sections/home/FeaturesBento";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { StatsBand } from "@/components/sections/home/StatsBand";
import { ProcessPreview } from "@/components/sections/home/ProcessPreview";
import { SocialProof } from "@/components/sections/home/SocialProof";
import { FinalCTA } from "@/components/sections/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <Manifesto />
      <ServicesShowcase />
      <FeaturesBento />
      <FeaturedWork />
      <StatsBand />
      <ProcessPreview />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
