import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useProjects } from "@/hooks/useProjects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const { getAllProjects } = useProjects();

  useEffect(() => {
    const getTheProjects = async () => {
      try {
        const data = await getAllProjects() as []; 
        console.log("in fetch ", data , typeof(data), typeof(projects));
        setProjects(data); // ✅ Set fetched data to state
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    getTheProjects();
  }, []); // ✅ Empty dependency array (runs only once)
console.log(projects,"projects");

  return (
    
    <div className="min-h-screen pt-16">
      <Navbar />
      {projects.length > 0 ? ( // ✅ Check if projects exist before rendering
        <section className="p-10 relative mt-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-white)] via-[var(--color-accent)]/10 to-[var(--color-primary)]/5 -z-10" />
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
              >
                Our Latest Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
              >
                Discover how we've helped businesses achieve their digital transformation goals
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* {projects.toLocaleString()} */}
              {projects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="glass-card rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div className="aspect-video relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                      <p className="text-[var(--color-gray-600)] mb-4">{project.description}</p>
                      { project.technologies ? <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] bg-[var(--color-secondary)]/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div> : <>no technologies</>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center text-gray-500 mt-10">Loading projects...</p>
      )}
      <Footer />
    </div>
  );
};

export default Projects;
