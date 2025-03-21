import ContactSection from "@/component/ContactSection";
import DoctorsSection from "@/component/DoctorsSection";
import Footer from "@/component/Footer";
import HeroSection from "@/component/HeroSection";
import Navbar from "@/component/Navbar";
import ServiceSection from "@/component/ServiceSection";
import TestimonialsSection from "@/component/TestimonialSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServiceSection/>
        <DoctorsSection/>
        <TestimonialsSection/>
        <ContactSection/>
        <Footer/>
      </main>
    </div>
  );
}
