import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { HappyClients } from "@/components/site/HappyClients";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";

export default function HomePage() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <HappyClients />
      {/* <Portfolio /> */}
      <Testimonials />
      {/* <Contact /> */}
    </SiteShell>
  );
}
