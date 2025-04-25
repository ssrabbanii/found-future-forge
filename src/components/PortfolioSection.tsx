
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Company {
  id: number;
  name: string;
  founder: string;
  pitch: string;
  funding: string;
  logo: string;
}

const companies: Company[] = [
  {
    id: 1,
    name: "Quantum Labs",
    founder: "Elena Martinez & James Wilson",
    pitch: "Revolutionizing quantum computing for enterprise solutions",
    funding: "Series B - $45M",
    logo: "https://images.unsplash.com/photo-1516876437184-593fda40c8ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "EcoSphere",
    founder: "Michael Chen",
    pitch: "Sustainable packaging solutions for global supply chains",
    funding: "Series A - $12M",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Finovo",
    founder: "Sarah Johnson & David Park",
    pitch: "AI-powered financial planning for the digital generation",
    funding: "Seed - $3.5M",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "MediBloc",
    founder: "Dr. Aisha Patel",
    pitch: "Blockchain for secure, portable healthcare records",
    funding: "Series A - $18M",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    name: "Neurolink",
    founder: "Thomas Reyes & Claire Zhang",
    pitch: "Brain-computer interfaces for enhanced human capabilities",
    funding: "Series B - $67M",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 px-6 bg-ef-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-ef-secondary uppercase tracking-widest font-medium mb-2">Success Stories</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
          <div className="w-20 h-1 bg-ef-primary mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We've backed some of the most innovative startups that are reshaping industries and creating massive impact.
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <Carousel className="w-full">
            <CarouselContent>
              {companies.map((company) => (
                <CarouselItem key={company.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                    <div className="p-1 bg-gradient-to-r from-ef-primary to-ef-secondary">
                      <div className="h-48 bg-white flex items-center justify-center p-6">
                        <img 
                          src={company.logo} 
                          alt={company.name} 
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-playfair text-xl font-bold mb-1">{company.name}</h3>
                      <p className="text-sm text-gray-600 mb-3">Founded by {company.founder}</p>
                      <p className="text-gray-700 mb-4">"{company.pitch}"</p>
                      <div className="flex items-center">
                        <span className="bg-ef-secondary/10 text-ef-secondary px-3 py-1 rounded-full text-sm">
                          {company.funding}
                        </span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-ef-secondary/10 text-ef-secondary hover:bg-ef-secondary hover:text-white" />
              <CarouselNext className="static translate-y-0 bg-ef-secondary/10 text-ef-secondary hover:bg-ef-secondary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
