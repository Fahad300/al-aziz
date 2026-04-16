import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import IntroductionSection from './sections/IntroductionSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import EquipmentSection from './sections/EquipmentSection';
import MaterialsSection from './sections/MaterialsSection';
import ClientsSection from './sections/ClientsSection';
import CertificationsSection from './sections/CertificationsSection';
import ContactSection from './sections/ContactSection';
import { siteData } from './data/siteData';

function App() {
  return (
    <>
      <Navbar
        logo={siteData.brand}
        navLinks={siteData.navLinks}
        cta={siteData.hero.primaryCta}
      />
      <main>
        <Hero brand={siteData.brand} hero={siteData.hero} />
        <IntroductionSection intro={siteData.introduction} />
        <AboutSection about={siteData.about} />
        <ServicesSection services={siteData.services} />
        <EquipmentSection equipment={siteData.equipment} />
        <MaterialsSection materials={siteData.materials} />
        <ClientsSection clients={siteData.clients} />
        <CertificationsSection certifications={siteData.certifications} />
        <ContactSection contact={siteData.contact} />
      </main>
      <Footer footer={siteData.footer} navLinks={siteData.navLinks} />
    </>
  );
}

export default App;
