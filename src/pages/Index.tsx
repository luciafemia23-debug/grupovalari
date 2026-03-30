import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ClassesSection from "@/components/ClassesSection";
import GallerySection from "@/components/GallerySection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ClassesSection />
      <GallerySection />
      <ScheduleSection />
      <ContactSection />
    </div>
  );
};

export default Index;
