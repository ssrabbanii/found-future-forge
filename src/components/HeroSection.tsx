
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-ef-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-ef-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-ef-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 z-10 text-center">
        <h1 className="opacity-0 animate-fade-in-delay-1 text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Don't follow. <span className="text-ef-primary">Found.</span>
        </h1>
        
        <p className="opacity-0 animate-fade-in-delay-2 text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-700">
          We invest in extraordinary individuals to shape the future.
        </p>
        
        <div className="opacity-0 animate-fade-in-delay-3">
          <Button size="lg" className="bg-ef-primary hover:bg-ef-primary/90 text-white font-medium px-8 py-6 text-lg">
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
