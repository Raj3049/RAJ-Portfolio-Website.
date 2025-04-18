
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

// Sample experience data - Replace with your own
const experiences = [
  {
    id: 1,
    type: "work",
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Lead development of the company's flagship SaaS platform. Implemented modern React architecture and improved performance by 40%.",
    achievements: [
      "Migrated legacy codebase to React with TypeScript",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Mentored junior developers and led technical interviews"
    ]
  },
  {
    id: 2,
    type: "work",
    role: "Frontend Developer",
    company: "Digital Solutions LLC",
    period: "2018 - 2021",
    description: "Developed responsive web applications and collaborated with designers to implement pixel-perfect UI.",
    achievements: [
      "Created reusable component library that increased development speed by 30%",
      "Optimized application load time from 6s to 2s",
      "Integrated third-party APIs and payment gateways"
    ]
  },
  {
    id: 3,
    type: "education",
    role: "Master's in Computer Science",
    company: "University of Technology",
    period: "2016 - 2018",
    description: "Specialized in Web Technologies and Human-Computer Interaction.",
    achievements: [
      "Graduated with distinction",
      "Published research paper on UI optimization techniques",
      "Completed thesis on Progressive Web Applications"
    ]
  },
  {
    id: 4,
    type: "education",
    role: "Bachelor's in Computer Science",
    company: "State University",
    period: "2012 - 2016",
    description: "Fundamental computer science education with focus on software engineering.",
    achievements: [
      "Dean's List all semesters",
      "Led student web development club",
      "Completed internship at local tech startup"
    ]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 gradient-text"
        >
          Experience & Education
        </motion.h2>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50 transform md:-translate-x-px"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-12 h-12 bg-card rounded-full border-4 border-primary/30 flex items-center justify-center transform -translate-x-6 md:-translate-x-6 z-10">
                  {exp.type === 'work' ? (
                    <Briefcase className="text-primary" size={20} />
                  ) : (
                    <GraduationCap className="text-accent" size={20} />
                  )}
                </div>
                
                {/* Content card */}
                <div className={`md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:pr-12 md:text-right' 
                    : 'md:pl-12 md:text-left'
                }`}>
                  <div className="ml-16 md:ml-0 bg-card rounded-lg p-6 shadow-lg shadow-primary/5 card-hover">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs 
                      ${exp.type === 'work' 
                        ? 'bg-primary/20 text-primary' 
                        : 'bg-accent/20 text-accent'
                      } mb-2`}
                    >
                      {exp.period}
                    </div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-primary/80 mb-2">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <ul className={`text-sm space-y-1 ${
                      index % 2 === 0 
                        ? 'md:list-inside' 
                        : 'list-inside'
                    }`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-secondary-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
