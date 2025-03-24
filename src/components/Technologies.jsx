import {RiReactjsLine} from "react-icons/ri";
import {SiMongodb} from "react-icons/si";
import {DiRedis} from "react-icons/di";
import {FaNodeJs} from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "motion/react";

const iconVarients = (duration) => ({
    initial:{y:-10},
    animate:{y:[10,-10],
    transition:{
        duration: duration,
        ease:"linear",
        repeat:Infinity,
        repeatType: "reverse",
    },
},
});

const Technologies = () => {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-40 pt-40">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}} 
        className="my-20 text-center text-4xl">Skills</motion.h1>
        
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVarients(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div 
             variants={iconVarients(7)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div
             variants={iconVarients(9)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-700"/>
            </motion.div>

            <motion.div
             variants={iconVarients(11)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div
             variants={iconVarients(13)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp  className="text-7xl text-purple-600"/>
            </motion.div>

            <motion.div 
             variants={iconVarients(15)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-7xl text-blue-500"/>
            </motion.div>
          
        </motion.div>
    </div>
  )
}

export default Technologies