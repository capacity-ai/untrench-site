import Nav from '@/components/Nav';
import Hero from '@/components/sections/Hero';
import CustomerLogos from '@/components/sections/CustomerLogos';
import Approach from '@/components/sections/Approach';
import WhyUs from '@/components/sections/WhyUs';
import Examples from '@/components/sections/Examples';
import OtherShapes from '@/components/sections/OtherShapes';
import Manifesto from '@/components/sections/Manifesto';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Hero />
      <CustomerLogos />
      <Approach />
      <WhyUs />
      <Examples />
      <OtherShapes />
      <Manifesto />
      <Pricing />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}
