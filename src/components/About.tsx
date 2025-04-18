
import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "GraphQL",
  "PostgreSQL",
];

export const About = () => {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          About Me
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg text-secondary-foreground"
        >
          <p>
            I'm a passionate full-stack developer with a focus on creating intuitive
            and performant web applications. With years of experience in modern web
            technologies, I enjoy turning complex problems into simple, beautiful
            solutions.
          </p>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card rounded-lg text-sm card-hover"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
