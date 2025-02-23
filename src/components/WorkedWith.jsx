import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const WorkedWith = () => {
  // Filter out unique company logos and names
  const companies = experiences.map(exp => ({
    name: exp.company_name,
    logo: exp.icon,
    link: exp.company_link
  }));

  return (
    <div className="mt-[100px] relative z-0 bg-primary">
      <motion.div variants={textVariant()} className="text-center mb-12">
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Trusted by Industry Leaders
        </h2>
        <p className={`${styles.sectionSubText} mt-4 text-secondary max-w-3xl mx-auto`}>
          Delivering exceptional solutions to innovative companies across the tech landscape
        </p>
      </motion.div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 max-w-7xl mx-auto px-6">
        {companies.map((company, index) => (
          <motion.a
            key={company.name}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="bg-tertiary rounded-xl flex items-center justify-center p-3 md:p-4 hover:bg-[#2A0E61] transition-colors cursor-pointer aspect-video"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-full h-full object-contain filter brightness-100 hover:brightness-125 transition-all p-2"
            />
          </motion.a>
        ))}
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-12 text-secondary text-[16px] md:text-[18px] max-w-3xl mx-auto text-center px-6"
      >
        With over 6 years of experience, I've had the privilege of working with these 
        innovative companies, delivering impactful solutions and driving technological advancement.
      </motion.p>
    </div>
  );
};

export default SectionWrapper(WorkedWith, "");
