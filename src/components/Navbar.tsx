
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold tracking-tight">
            <span className="font-playfair text-ef-secondary">Entrepreneurs</span>
            <span className="font-playfair text-ef-primary">First</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#why" className="text-gray-800 hover:text-ef-primary transition-colors">Why</a>
          <a href="#how" className="text-gray-800 hover:text-ef-primary transition-colors">How</a>
          <a href="#what" className="text-gray-800 hover:text-ef-primary transition-colors">What</a>
          <a href="#mentors" className="text-gray-800 hover:text-ef-primary transition-colors">Mentors</a>
          <a href="#portfolio" className="text-gray-800 hover:text-ef-primary transition-colors">Portfolio</a>
        </div>
        
        <Button className="bg-ef-primary hover:bg-ef-primary/90 text-white rounded-md">
          Apply Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
