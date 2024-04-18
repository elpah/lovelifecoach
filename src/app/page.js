import HomePage from "@/components/home/HomePage";
import Navbar from "@/components/navbar/Navbar";
import AboutMe from "@/components/about/AboutMe";
import Services from "@/components/services/Services";
import ContactSection from "@/components/contact/ContactSection";
export default function page() {
  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Services />
      <ContactSection />
    </>
  );
}
