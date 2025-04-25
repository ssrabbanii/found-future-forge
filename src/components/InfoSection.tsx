
import React from 'react';

interface InfoSectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  reverse?: boolean;
}

const InfoSection: React.FC<InfoSectionProps> = ({
  id,
  title,
  subtitle,
  content,
  imageUrl,
  reverse = false
}) => {
  return (
    <section id={id} className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <div className="lg:w-1/2" data-aos={reverse ? "fade-left" : "fade-right"}>
            <div className="overflow-hidden rounded-lg">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                style={{ height: '400px' }}
              />
            </div>
          </div>
          
          <div className="lg:w-1/2" data-aos={reverse ? "fade-right" : "fade-left"}>
            <p className="text-ef-secondary uppercase tracking-widest font-medium mb-2">{subtitle}</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">{title}</h2>
            <div className="w-20 h-1 bg-ef-primary mb-6"></div>
            <p className="text-gray-700 text-lg leading-relaxed">{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
