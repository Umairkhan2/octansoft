import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import FeaturedWork from "@/components/sections/FeaturedWork";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import Process from "@/components/sections/Process";
import Showreel from "@/components/sections/Showreel";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";
import Comparison from "@/components/sections/Comparison";
import Careers from "@/components/sections/Careers";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechMarquee />
        <FeaturedWork />
        <VideoTestimonials />
        <Process />
        <Showreel />
        <Services />
        <Stats />
        <WhyUs />
        <Team />
        <Comparison />
        <Careers />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
