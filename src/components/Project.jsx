import { PROJECTS } from "../constants"
import { motion } from "motion/react";

const Project = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4 pt-20">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1}} 
        className="my-20 text-center text-4xl">Project</motion.h1>
        <div>{PROJECTS.map((project,index) =>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <div className="w-full lg:w-1/4">
                <motion.img 
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:0.5}}

                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => console.log('hover started!')}
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
                />
            </div>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:0.5}}

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log('hover started!')}
            className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                
                {project.technologies.map((tech,index) => (
                    <span key={index} className="mr-2 rounded bg-neutral-900 px-1 py-1 text-sm font-medium text-purple-400">{tech}</span>
                ))}
                <a href={project.Github} target="_blank"><button className="bg-red-700 w-16 rounded-md">Github</button></a>
            </motion.div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default Project