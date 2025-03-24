import { HERO_CONTENT } from "../constants";
import proPic from "../assets/projects/1.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { motion } from "motion/react";

const container = (delay) => ({
  hidden:{
    x:-100,
    opacity:0
  },
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay},
  },
});

const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35  pt-32">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <motion.h1
            variants={container(0)}
             initial="hidden"
             animate="visible"
            className="pb-16 text-4xl font-thin font-serif tracking-tight lg:mt-16 lg:text-6xl">
              Shenal Prasanka
            </motion.h1>
            <motion.span 
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter text-base">
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img 
             initial={{x:100,opacity:0}}
             animate={{x:0,opacity:1}}
             transition={{duration: 1,delay: 1.2}}

            src={proPic} alt="Profile" className="w-80 h-80 rounded-full object-cover" />
          </div>
        </div>
        <motion.div 
  variants={container(1.5)}
  initial="hidden"
  animate="visible"
  className="flex gap-5 text-3xl mt-10"
>
  {/* LinkedIn */}
  <motion.a 
    href="https://www.linkedin.com/in/shenal-prasanka-51044b2b4/" 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaLinkedin className="text-gray-500 hover:text-white transition-colors duration-300" />
  </motion.a>

  {/* GitHub */}
  <motion.a 
    href="https://github.com/Shenal-Prasanka" 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaGithub className="text-gray-500 hover:text-white transition-colors duration-300" />
  </motion.a>

  {/* Facebook */}
  <motion.a 
    href="https://www.facebook.com/profile.php?id=100012333733803" 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    <FaFacebook className="text-gray-500 hover:text-white transition-colors duration-300" />
  </motion.a>

</motion.div>
      </div>
    </div>
  );
};

export default Hero;
