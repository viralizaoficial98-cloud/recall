import HeroSlider from '../components/HeroSlider/HeroSlider';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import CompanyVideo from '../components/CompanyVideo/CompanyVideo';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Portfolio from '../components/Portfolio/Portfolio';
import WorkProcess from '../components/WorkProcess/WorkProcess';
import Testimonials from '../components/Testimonials/Testimonials';
import Partners from '../components/Partners/Partners';
import ProposalForm from '../components/ProposalForm/ProposalForm';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <About />
      <Services />
      <CompanyVideo />
      <WhyChooseUs />
      <Portfolio />
      <WorkProcess />
      <Testimonials />
      <Partners />
      <ProposalForm />
      <Contact />
    </>
  );
}
