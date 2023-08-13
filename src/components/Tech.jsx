import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <img
            src={technology.icon}
            alt=""
            style={{
              padding: "0.5rem",
              width: "5rem",
              height: "5rem",
              background: "white",
              borderRadius: "50%",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
