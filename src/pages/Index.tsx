import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  // SEO meta tags update
  useEffect(() => {
    document.title = "MINDMESHAI | AI Automation Services & Solutions";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'MINDMESHAI offers AI automation services, custom solutions, and expert consulting. Meet our team of AI specialists and explore our portfolio of successful projects.');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Team />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
