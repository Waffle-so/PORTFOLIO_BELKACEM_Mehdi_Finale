import Header       from '@/components/layout/Header';
import Footer       from '@/components/layout/Footer';
import HeroSection  from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import WhoAmISection from '@/components/sections/WhoAmISection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import GallerySection from '@/components/sections/GallerySection';
import WorkExperiencesSection from '@/components/sections/WorkExperiencesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import WayOfWorkSection from '@/components/sections/WayOfWorkSection';
import FaqSection from '@/components/sections/FaqSection';
import ContactSection from '@/components/sections/ContactSection';
import ScrollAnimator from '@/components/layout/ScrollAnimator';

/** Page 1 — Homepage, fidèle au design Figma */
export default function HomePage() {
  return (
    <>
      <Header />
      <ScrollAnimator>
        <main style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(40px, 8vw, 160px)', paddingBottom: '40px' }}>
          <HeroSection />
          <AboutSection />
          <WhoAmISection />
          <ExperienceSection />
          <GallerySection />
          <WorkExperiencesSection />
          <ServicesSection />
          <WayOfWorkSection />
          <FaqSection />
          <ContactSection />
          <Footer />
        </main>
      </ScrollAnimator>
    </>
  );
}

