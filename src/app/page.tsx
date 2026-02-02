'use client';

import { useState, useEffect } from 'react';

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Simple animation effect for section transitions
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">
            <span className="text-gold">S</span>ienna
          </div>
          <div className="hidden md:flex space-x-8">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`apple-transition ${
                  activeSection === section ? 'text-gold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="min-h-screen flex items-center justify-center relative pt-16"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="block">Hello, I'm</span>
              <span className="text-gold">Sienna</span>
            </h1>
            <div className="h-1 w-32 bg-gold mx-auto my-6"></div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Designer & Computer Science Double Major | AI Tools Master | Tech Innovator
            </p>
          </div>
          <div className="mt-12">
            <a 
              href="#contact" 
              className="inline-block bg-gold text-black px-8 py-4 rounded-full font-medium apple-transition hover:bg-gold-light transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About <span className="text-gold">Me</span></h2>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate designer and computer science student with expertise in creating 
              innovative solutions that blend aesthetics with functionality. My dual focus allows 
              me to understand both the creative and technical aspects of digital products.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With a strong foundation in AI tools and emerging technologies, I leverage the latest 
              innovations to create designs that are not only visually stunning but also technically 
              sound and user-centered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-800/50 p-6 rounded-xl apple-transition hover:apple-glow">
                <h3 className="text-xl font-semibold text-gold mb-2">Design Expertise</h3>
                <p className="text-gray-300">Creating beautiful, intuitive interfaces with a focus on user experience</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl apple-transition hover:apple-glow">
                <h3 className="text-xl font-semibold text-gold mb-2">Tech Innovation</h3>
                <p className="text-gray-300">Implementing cutting-edge technologies to solve complex problems</p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl apple-transition hover:apple-glow">
                <h3 className="text-xl font-semibold text-gold mb-2">AI Mastery</h3>
                <p className="text-gray-300">Utilizing artificial intelligence to enhance creativity and efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My <span className="text-gold">Skills</span></h2>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gold mb-6">Design Skills</h3>
                <ul className="space-y-4">
                  {[
                    'UI/UX Design', 
                    'Digital Illustration', 
                    'Typography', 
                    'Brand Identity',
                    'Prototyping',
                    'User Research'
                  ].map((skill, index) => (
                    <li 
                      key={index} 
                      className="flex items-center border-b border-gray-800 pb-4 apple-transition hover:border-gold"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gold mb-6">Technical Skills</h3>
                <ul className="space-y-4">
                  {[
                    'Computer Science Fundamentals', 
                    'AI Tools & Applications', 
                    'Web Development', 
                    'JavaScript/TypeScript',
                    'React/Next.js',
                    'Responsive Design'
                  ].map((skill, index) => (
                    <li 
                      key={index} 
                      className="flex items-center border-b border-gray-800 pb-4 apple-transition hover:border-gold"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-16 bg-gray-900/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gold mb-4">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-gold pl-4 py-2">
                  <h4 className="text-lg font-medium">Double Major: Design + Computer Science</h4>
                  <p className="text-gray-400">Combining creative and technical disciplines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gold">Projects</span></h2>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-gray-800/50 rounded-xl overflow-hidden apple-transition hover:apple-glow"
              >
                <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-5xl">📱</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {item}</h3>
                  <p className="text-gray-400 mb-4">
                    A showcase of design and technical skills combined to create innovative solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind', 'AI'].map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-gray-700 text-gold px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In <span className="text-gold">Touch</span></h2>
            <div className="h-1 w-24 bg-gold mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto bg-gray-900/50 p-8 rounded-2xl">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent apple-transition"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent apple-transition"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent apple-transition"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gold text-black py-3 rounded-lg font-medium apple-transition hover:bg-gold-light transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Sienna. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;