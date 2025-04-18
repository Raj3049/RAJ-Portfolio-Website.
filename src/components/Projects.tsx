
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application with modern features",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.com",
  },
  // Add more projects as needed
];

export const Projects = () => {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card rounded-lg p-6 card-hover"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-secondary-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-muted rounded-full text-sm text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground hover:text-accent transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
