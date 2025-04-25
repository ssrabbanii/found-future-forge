
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import InfoSection from '@/components/InfoSection';
import MentorsSection from '@/components/MentorsSection';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Why Section */}
      <InfoSection
        id="why"
        title="Why We Exist"
        subtitle="Our Vision"
        content="Entrepreneurs First was founded with a singular belief: the world's most talented individuals should be founders. We identify exceptional people, often before they have a team or an idea, and help them find a co-founder, develop an idea, and raise capital. We believe that by supporting extraordinary individuals from the very beginning, we can build companies that transform industries and change the world."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      />
      
      {/* How Section */}
      <InfoSection
        id="how"
        title="How We Help"
        subtitle="Our Process"
        content="Our program provides founders with a structured path to success. We start by bringing together exceptional individuals and helping them form strong co-founding teams based on complementary skills and aligned visions. We then support ideation, business model development, and go-to-market strategies through expert mentorship and workshops. Throughout the journey, we provide pre-seed funding, office space, and access to our global network of investors and partners."
        imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        reverse={true}
      />
      
      {/* What Section */}
      <InfoSection
        id="what"
        title="What We Offer"
        subtitle="Our Support"
        content="We offer a comprehensive support system designed to maximize your chances of success. This includes up to $200,000 in pre-seed funding, a dedicated team of experienced venture partners who provide tailored guidance, a global network spanning technology, industry, and investment communities, and continued support throughout your scaling journey. Our alumni community of 500+ founders also provides an invaluable resource for knowledge sharing and collaboration."
        imageUrl="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      />
      
      <MentorsSection />
      <PortfolioSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
