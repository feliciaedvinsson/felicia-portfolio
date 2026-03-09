import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Global blurry pink background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[150px]" />
        <div className="absolute top-[60%] left-[20%] w-80 h-80 rounded-full bg-primary/12 blur-[100px]" />
        <div className="absolute bottom-20 right-[15%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute top-[40%] left-[60%] w-64 h-64 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-[40%] left-0 w-72 h-72 rounded-full bg-primary/8 blur-[110px]" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
