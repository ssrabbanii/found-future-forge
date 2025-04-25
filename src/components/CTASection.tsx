
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ef-secondary to-ef-primary opacity-90 z-0"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-tight">
            We back you first.
          </h2>
          
          <p className="text-xl mb-10 text-white/90">
            Join a community of founders who are shaping the future. We provide the capital, network, and support you need to turn your vision into reality.
          </p>
          
          <Button size="lg" className="bg-white text-ef-primary hover:bg-white/90 font-medium px-8 py-6 text-lg">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
