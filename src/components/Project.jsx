import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Project = () => {
  return (
    <div id="projects" className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-neutral-300">
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 
          bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }} 
        className="my-20 text-center text-4xl">
        My Projects
      </motion.h1>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative flex flex-col bg-neutral-900/50 backdrop-blur-sm border border-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="p-6 px-8 text-center">
              
              
              <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-white mb-3">
                {project.title}
              </h5>
              
              <p className="block antialiased font-sans text-base leading-relaxed font-normal text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-green-900/50 text-green-300 text-xs font-medium rounded-full border border-green-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-center space-x-3 mt-4">
                <a 
                  href={project.Github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-red-500/20"
                >
                  View Code
                </a>
                {project.liveDemo && (
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-pink-600 text-pink-400 hover:bg-pink-900/30 rounded-md transition-all duration-300 text-sm font-medium hover:shadow-lg hover:shadow-pink-500/10"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Project