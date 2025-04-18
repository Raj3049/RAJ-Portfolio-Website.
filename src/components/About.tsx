
import { motion } from "framer-motion";
import { Code, Server, Figma, Database, GitBranch, Globe } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code },
  { name: "TypeScript", icon: Code },
  { name: "React", icon: Code },
  { name: "Node.js", icon: Server },
  { name: "Next.js", icon: Code },
  { name: "Tailwind CSS", icon: Figma },
  { name: "GraphQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "Responsive Design", icon: Globe },
];

const values = [
  {
    title: "Quality First",
    description: "I believe in delivering high-quality work that exceeds expectations and stands the test of time."
  },
  {
    title: "Continuous Learning",
    description: "The tech landscape is always evolving, and I'm committed to growing my skills and knowledge."
  },
  {
    title: "User-Centered",
    description: "I create solutions with the end-user in mind, focusing on usability, accessibility, and experience."
  }
];

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 gradient-text"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto md:mx-0 border-4 border-primary/20">
              <img
                src="https://github.com/yourusername.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 space-y-6 text-lg text-secondary-foreground"
          >
            <p>
              I'm a passionate full-stack developer with a focus on creating intuitive
              and performant web applications. With years of experience in modern web
              technologies, I enjoy turning complex problems into simple, beautiful
              solutions.
            </p>
            <p>
              My journey in tech began with a curiosity about how things work,
              which led me to pursue formal education in computer science. Since then,
              I've worked on a variety of projects, from small business websites to
              complex enterprise applications.
            </p>
          </motion.div>
        </div>
        
        <div>
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-foreground text-center"
          >
            Skills & Technologies
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.2)" }}
                className="px-4 py-3 bg-card rounded-lg flex items-center gap-2 card-hover"
              >
                <skill.icon size={18} className="text-primary" />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl font-semibold mb-6 text-foreground text-center"
          >
            My Values
          </motion.h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-card p-6 rounded-lg shadow-lg shadow-primary/5 card-hover"
              >
                <motion.h4 
                  className="text-lg font-semibold mb-3 gradient-text" 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {value.title}
                </motion.h4>
                <p className="text-secondary-foreground">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
