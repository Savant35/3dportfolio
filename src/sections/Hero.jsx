import React from 'react';

// Social media data for easy mapping
const socialLinks = [
  { href: "https://github.com/Savant35", src: "/assets/github.svg", alt: "github" },
  { href: "https://www.linkedin.com/in/arthur-ngendanan/", src: "/assets/linkedin.svg", alt: "linkedin" },
];

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center relative c-space" id="home">
      <div className="grid lg:grid-cols-2 gap-y-20 gap-x-16 items-center w-full max-w-7xl mx-auto border-white">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col text-center lg:text-left">
          <p className="hero_tag text-gray_gradient">
            Ali Arthur
          </p>
          <p className="grid-subtext mt-4 max-w-lg mx-auto lg:mx-0">
            <b>Welcome to my portfolio!</b> I am a full-stack developer with experience in building dynamic and user-focused web applications. My expertise includes front-end and back-end development, turning ideas into engaging digital experiences.
          </p>
        </div>

        {/* Right Column: Profile Image & Socials */}
        <div className="flex justify-center items-center relative order-first lg:order-last">
          <div className="relative w-64 h-64 lg:w-80 lg:h-96">
            {/* The "Frame" element */}
            <div className="absolute w-full h-full bg-transparent border-4 border-neutral-700 -bottom-3 -right-3 lg:-bottom-4 lg:-right-4"></div>
            
            <img 
              src="/assets/Home.jpg" 
              alt="photo of Ali Arthur" 
              className="relative w-full h-full object-cover"
            />
            
            {/* Decorative Arrow pointing to text */}
            <img 
              src="/assets/curved-arrow.svg" 
              alt="Curved arrow decoration" 
              className="absolute w-16 top-1/2 -translate-y-1/2 -left-12 lg:w-24 lg:-left-20 transform -scale-x-100 rotate-[25deg]"
            />

            {/* Decorative Lines */}
            <img 
              src="/assets/random-lines.svg" 
              alt="Random lines decoration" 
              className="absolute w-16 -bottom-10 -right-10 lg:w-20 lg:-bottom-12 lg:-right-12"
            />
            
            {/* Social Links positioned to the right of the image (Large Screens Only) */}
            <div className="absolute top-1/2 right-0 transform translate-x-[150%] -translate-y-1/2 hidden lg:flex flex-col gap-4">
              {socialLinks.map((link) => (
                <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer">
                  <div className="social-icon">
                    <img src={link.src} alt={link.alt} className="w-1/2 h-1/2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links for Mobile View (below image) */}
        <div className="flex gap-4 justify-center lg:hidden order-first -mt-8">
          {socialLinks.map((link) => (
            <a key={link.alt} href={link.href} target="_blank" rel="noopener noreferrer">
              <div className="social-icon">
                <img src={link.src} alt={link.alt} className="w-1/2 h-1/2" />
              </div>
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Hero;