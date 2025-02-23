import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div className="mt-10">
      <motion.div variants={textVariant()} className="text-center mb-12">
        <h2 className={`${styles.sectionHeadText} text-white`}>
          Technologies I Work With
        </h2>
        <p className={`${styles.sectionSubText} mt-4 text-secondary max-w-3xl mx-auto`}>
          Expert in modern web and mobile development technologies
        </p>
      </motion.div>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto px-6">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-white/5 rounded-xl p-4 hover:bg-[#2A0E61] transition-colors w-full aspect-square flex items-center justify-center group">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-12 h-12 md:w-14 md:h-14 object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <p className="text-white/60 text-sm text-center">{technology.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
