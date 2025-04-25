
import React, { useState } from 'react';

interface Mentor {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Reid Hoffman",
    role: "Co-founder, LinkedIn",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "Reid is the co-founder of LinkedIn and partner at Greylock. He's an accomplished entrepreneur, executive, and investor known for his strategic insights on professional networking and startup scaling."
  },
  {
    id: 2,
    name: "Patrick Collison",
    role: "Co-founder & CEO, Stripe",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "Patrick is the CEO and co-founder of Stripe, a technology company that builds economic infrastructure for the internet. Patrick has grown Stripe into one of the most valuable private technology companies globally."
  },
  {
    id: 3,
    name: "Sara Clemens",
    role: "Former COO, Twitch",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "Sara is the former COO of Twitch and has held leadership roles at LinkedIn, Microsoft, and other tech giants. She specializes in scaling global businesses and building innovative products."
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "Investor & Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    bio: "Michael has invested in over 50 early-stage companies and advised founders through critical growth stages. His expertise spans across fintech, healthtech, and enterprise SaaS."
  }
];

const MentorsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="mentors" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-ef-secondary uppercase tracking-widest font-medium mb-2">Expert Guidance</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Featured Mentors</h2>
          <div className="w-20 h-1 bg-ef-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div 
              key={mentor.id}
              className="relative overflow-hidden rounded-lg bg-gray-50 group cursor-pointer"
              onMouseEnter={() => setActiveIndex(mentor.id)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={mentor.image} 
                  alt={mentor.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6 bg-white">
                <h3 className="font-playfair text-xl font-bold">{mentor.name}</h3>
                <p className="text-gray-600">{mentor.role}</p>
              </div>
              
              <div className={`absolute inset-0 bg-ef-secondary/95 p-6 flex flex-col justify-center text-white transform transition-all duration-300 ${
                activeIndex === mentor.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
              }`}>
                <h3 className="font-playfair text-xl font-bold mb-2">{mentor.name}</h3>
                <p className="text-white/80 mb-4">{mentor.role}</p>
                <p>{mentor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
