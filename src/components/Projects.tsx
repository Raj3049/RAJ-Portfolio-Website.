import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Sample project data - Replace with your own
const allProjects = [
  {
    id: 1,
    title: "Prediction of Bank Loan Status",
    description: "Developed predictive models for bank loan approval outcomes using K-Nearest Neighbors, Support Vector Classifier, Decision Tree, and Voting Classifier. Conducted extensive experimentation to compare model performances, where the Voting Classifier yielded the highest accuracy through an ensemble approach. Demonstrated how combining multiple classifiers can enhance prediction reliability in real-world finance applications.",
    tags: ["Python", "Scikit-Learn", "Ensemble Methods"],
    category: "Machine Learning",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
    github: "https://github.com/Raj3049", // Placeholder
    live: "",
    period: "Jan 2024 - Apr 2024"
  },
  {
    id: 2,
    title: "Sentiment Analysis on IMDb Reviews",
    description: "Developed a sentiment analysis model to classify IMDb movie reviews as positive or negative using Logistic Regression, Naïve Bayes, and LSTM. Implemented data preprocessing techniques such as tokenization, stopword removal, and vectorization to enhance model accuracy. Compared the performance of traditional machine learning models with deep learning approaches, demonstrating LSTM's capability in handling sequential text data.",
    tags: ["Python", "NLTK", "TensorFlow"],
    category: "Natural Language Processing",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=700&q=80",
    github: "https://github.com/Raj3049", // Placeholder
    live: "",
    period: "Jul 2024 - Sep 2024"
  },
  {
    id: 3,
    title: "Book Recommendation System",
    description: "Designed and implemented a multi-approach recommendation system leveraging Nearest Neighbors, KMeans, and Agglomerative Clustering to enhance recommendation accuracy. Integrated an NLP-based approach by extracting features from book descriptions and reviews, then computing similarities using cosine similarity. Delivered a robust, context-aware recommendation platform that adapts to diverse user preferences and dynamic content.",
    tags: ["Python", "Scikit-Learn", "NLP"],
    category: "Recommendation System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
    github: "https://github.com/Raj3049", // Placeholder
    live: "",
    period: "Oct 2024 - Dec 2024"
  }
];

// Extract unique categories and technologies
const categories = ["All", ...new Set(allProjects.map(project => project.category))];
const technologies = ["All", ...new Set(allProjects.flatMap(project => project.tags))];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Filter projects based on active filters
  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesTech = activeTech === "All" || project.tags.includes(activeTech);
    return matchesCategory && matchesTech;
  });

  return (
    <section id="projects" className="py-20 px-4">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-8 gradient-text"
      >
        Featured Projects
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-10"
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Filter by Category:</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    activeCategory === category 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-muted-foreground">Filter by Technology:</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => setActiveTech(tech)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    activeTech === tech 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative overflow-hidden rounded-lg group"
            >
              <div className="aspect-w-16 aspect-h-9 w-full h-48 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-70" />
              </div>
              
              <div className="bg-card rounded-b-lg p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-secondary-foreground mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="px-2 py-1 bg-muted rounded-full text-xs text-secondary-foreground"
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
                    className="text-secondary-foreground hover:text-primary transition-colors"
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
                
                <AnimatePresence>
                  {hoveredProject === project.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute top-0 left-0 right-0 bottom-0 bg-card/95 backdrop-blur-sm flex items-center justify-center p-6 z-20"
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2 gradient-text">{project.title}</h3>
                        <p className="text-secondary-foreground mb-4">{project.description}</p>
                        <div className="flex justify-center gap-4">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-muted rounded-md hover:bg-primary/20 transition-colors flex items-center gap-2"
                          >
                            <Github size={16} /> GitHub
                          </a>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-muted rounded-md hover:bg-accent/20 transition-colors flex items-center gap-2"
                          >
                            <ExternalLink size={16} /> Live Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
