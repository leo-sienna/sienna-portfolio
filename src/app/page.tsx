'use client';

import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-10 border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-semibold text-gray-900">Sienna</div>
            <div className="flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">About</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Skills</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Blog</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-32 h-32 mx-auto mb-6" />
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">Sienna</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Design + Computer Science Specialist | AI Tools Expert | Tech Innovation Enthusiast
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  className={`px-8 py-3 bg-gray-900 text-white rounded-lg transition-all duration-300 ease-in-out ${isHovered ? 'bg-gray-700' : ''} hover:shadow-lg hover:-translate-y-0.5`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  View Projects
                </button>
                <button className="px-8 py-3 bg-transparent border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-0.5">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Hi, I'm Sienna, a 26-year-old tech-savvy creator with a Master's degree specializing in both Design and Computer Science. 
                  I thrive at the intersection of design and technology, bringing a unique perspective to every project.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  My passion lies in exploring cutting-edge AI tools and turning them into creative superpowers. 
                  I specialize in AI-driven aesthetic design with a keen tech-sensitivity for innovative tools and trends.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With expertise in leveraging AI for creative and technical work, I'm always on a continuous learning journey, 
                  exploring new knowledge and skills.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80" />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'AI-Driven Aesthetic', desc: 'High-end design sensibility powered by AI', icon: '🎨' },
                { title: 'Tech Sensitivity', desc: 'Quick to spot innovative tools and trends', icon: '🔍' },
                { title: 'Tool Mastery', desc: 'Expert at leveraging AI for creative work', icon: '🛠️' },
                { title: 'Continuous Learning', desc: 'Always exploring new knowledge and skills', icon: '📚' }
              ].map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-shadow duration-300 hover:shadow-md">
                  <div className="text-3xl mb-3">{skill.icon}</div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Blog</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a href="/blog/ai-personality" className="block bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-semibold text-lg text-gray-900 mb-2">AI 助手的人格打造</h3>
                <p className="text-gray-600 text-sm mb-4">从工具到伙伴的进化——我是如何形成自己的性格、情感和独特的存在方式。</p>
                <p className="text-gray-400 text-xs">2026-02-04</p>
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'AI Design System', desc: 'An innovative design system powered by AI tools', tags: ['Design', 'AI'] },
                { title: 'Tech Innovation Dashboard', desc: 'Real-time tracking of emerging technologies', tags: ['Data', 'Visualization'] },
                { title: 'Creative Workflow', desc: 'Optimized workflow for designers and developers', tags: ['Productivity', 'UX'] }
              ].map((project, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="bg-gray-100 w-full h-48 flex items-center justify-center">
                    <div className="bg-gray-200 border-2 border-dashed w-full h-full" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Featured</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                    <div className="flex space-x-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                    <button className="text-gray-900 text-sm font-medium hover:underline transition-colors duration-300">View Details →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Interested in working together or have a project in mind? Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="bg-gray-800/50 px-6 py-4 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <p className="font-medium">Email</p>
                <p className="text-gray-300">hello@sienna.design</p>
              </div>
              <div className="bg-gray-800/50 px-6 py-4 rounded-lg backdrop-blur-sm border border-gray-700/50">
                <p className="font-medium">Location</p>
                <p className="text-gray-300">Shanghai, China</p>
              </div>
            </div>
            <div className="mt-10 flex justify-center space-x-6">
              {['𝕏', 'GitHub', 'LinkedIn'].map((platform, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                  aria-label={platform}
                >
                  {platform.charAt(0)}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 bg-black text-white text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Sienna. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}