import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-7 z-99999`}
      >
        <div className="absolute z-50">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Sidharth Thakur</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web apps.
          </p>
        </div>
        <EarthCanvas />
      </div>
    </section>
  );
};

export default Hero;
