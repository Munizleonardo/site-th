import Header from "@/app/_components/Header";
import HeroCarousel from "@/app/_components/home/HeroCarousel";
import AboutSection from "@/app/_components/home/AboutSection";
import CertificatesCarousel from "@/app/_components/home/CertificatesCarousel";
import HealthPlansCarousel from "@/app/_components/home/HealthPlansCarousel";
import ContactSection from "@/app/_components/ContactSection";
import Footer from "@/app/_components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <AboutSection />
      <CertificatesCarousel />
      <HealthPlansCarousel />
      <ContactSection />
      <Footer />
    </div>
  );
};
