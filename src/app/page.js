import HomePage from "@/components/home/HomePage";
import Navbar from "@/components/navbar/Navbar";
import AboutMe from "@/components/about/AboutMe";
import Services from "@/components/services/Services";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
export default function page() {
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "contact", title: "Contact" },
  ];
  return (
    <>
      <Navbar sections={sections} />
      <HomePage />
      <AboutMe />
      <Services />
      <ContactSection />
      <Footer sections={sections} />
    </>
  );
}
