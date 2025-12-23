import { FaFigma, FaReact, FaHtml5, FaCss3Alt, FaLaravel, FaDatabase, FaGithub, FaPhp } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
import { motion } from "motion/react";

const iconVariants = (delay = 0) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay: delay
    },
  },
});

const SkillCard = ({ title, icon: Icon, color, delay }) => (
  <motion.div
    variants={iconVariants(delay)}
    initial="initial"
    animate="animate"
    className="flex flex-col items-center p-6 rounded-xl border-2 border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-800/50 transition-colors"
  >
    <div className={`text-5xl mb-3 ${color}`}>
      <Icon />
    </div>
    <h3 className="text-lg font-medium text-white">{title}</h3>
  </motion.div>
);

const SoftSkill = ({ skill, delay }) => (
  <motion.div
    variants={iconVariants(delay * 0.2)}
    initial="initial"
    animate="animate"
    className="px-6 py-4 bg-neutral-800/50 rounded-xl text-center hover:bg-neutral-700/50 transition-colors border border-neutral-700"
  >
    <p className="text-gray-200 font-medium">{skill}</p>
  </motion.div>
);

const Technologies = () => {
  const technicalSkills = [
    { title: "Figma", icon: FaFigma, color: "text-purple-500" },
    { title: "React", icon: FaReact, color: "text-cyan-400" },
    { title: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { title: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { title: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { title: "Laravel", icon: FaLaravel, color: "text-red-500" },
    { title: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { title: "GitHub", icon: FaGithub, color: "text-gray-200" },
    { title: "PHP", icon: FaPhp, color: "text-purple-400" },
  ];

  const softSkills = [
    "Project Management",
    "Leadership",
    "Teamwork",
    "Time Management",
    "Critical Thinking"
  ];

  return (
    <div id="skills" className="border-b border-neutral-800 py-20">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Skills</h1>
        <p className="text-xl text-gray-400">My technical and professional abilities</p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technicalSkills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                icon={skill.icon}
                color={skill.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">Soft Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <SoftSkill key={skill} skill={skill} delay={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;