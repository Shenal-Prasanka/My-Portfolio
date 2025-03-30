import aboutImg from "../assets/dev.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion"; // Corrected import from "framer-motion"

const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4 pt-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl h-80" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}
          >
            {/* Updated Download CV Button */}
            <a
              href="./K.L.A.S.Prasanka-CV.pdf" // Path to your CV file in the public folder
              download="K.L.A.S.Prasanka-CV.pdf" // Optional: Specify the downloaded file name
              className="w-36 bg-red-600 text-white py-2 px-4 rounded-md text-center block"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;