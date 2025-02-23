import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Daniel Osariemen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-Stack Engineer with 6+ years of expertise in <br className="sm:block hidden" />
            building scalable web applications and systems.
          </p>

          {/* Tech Stack Pills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["Node.js", "React", "TypeScript", "NestJS", "AWS"].map((tech) => (
              <span key={tech} className="px-3 py-1 text-sm bg-[#2A0E61] text-white rounded-full">
                {tech}
              </span>
            ))}
          </div>

          {/* Brief Introduction */}
          <p className="mt-6 text-white-100 text-[17px] max-w-3xl leading-[30px]">
            Specializing in full-stack development with a focus on building 
            high-performance applications using modern technologies. 
            Expert in API development, system architecture, and creating 
            seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a 
              href="/cv/DanielOsariemenSSE.pdf" 
              download
              className="bg-[#915EFF] hover:bg-[#7d4fdd] text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
            <a 
              href="#contact" 
              className="border-2 border-[#915EFF] text-[#915EFF] hover:bg-[#915EFF] hover:text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Hire Me
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-white-100 text-sm flex flex-wrap gap-4">
            <a href="mailto:osazeepeter79@gmail.com" className="flex items-center gap-2 hover:text-[#915EFF]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              osazeepeter79@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Nigeria
            </span>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            <a 
              href="https://github.com/thexovc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-osariemen-095772210/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          {/* <h2 className={`${styles.heroHeadText} text-white mt-10`}>
            <span className="text-[#915EFF]">Journey Through My Portfolio</span>
          </h2> */}
        </div>
      </div>

      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
