import { Footer, Navbar } from '../../components';
import {
  AboutSection,
  ContactFormSection,
  HeroSection,
  SkillsSection,
  TestimonialsSection,
  WorkSection,
} from './_components';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactFormSection />
      <Footer />
    </div>
  );
};

export default HomePage;
