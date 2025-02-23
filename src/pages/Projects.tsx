import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    description: "Complete transformation of an online retail platform, improving user experience and increasing sales by 150%.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    technologies: ["React", "Node.js", "AWS", "MongoDB"],
  },
  {
    title: "Healthcare Management System",
    description: "Innovative solution for managing patient records, appointments, and medical data with strict security compliance.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["TypeScript", "Azure", "PostgreSQL", "Docker"],
  },
  {
    title: "Financial Analytics Dashboard",
    description: "A comprehensive dashboard for financial analytics, providing real-time insights and data visualization.",
    image: "https://images.unsplash.com/photo-1556742400-b5b7c512f1f7",
    technologies: ["Python", "Django", "React", "PostgreSQL"],
  },
  {
    title: "Social Media App",
    description: "A scalable social media application with real-time messaging and multimedia sharing capabilities.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de1a3c6",
    technologies: ["React Native", "Firebase", "GraphQL"],
  },
  {
    title: "IoT Smart Home System",
    description: "An IoT-based smart home system for remote monitoring and control of home appliances.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    technologies: ["IoT", "Node.js", "AWS IoT", "React"],
  },
  {
    title: "Online Learning Platform",
    description: "A robust online learning platform with interactive courses, quizzes, and progress tracking.",
    image: "https://images.unsplash.com/photo-1584697964403-6c8e4e6f7c3d",
    technologies: ["Angular", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Travel Booking System",
    description: "A comprehensive travel booking system with real-time availability and secure payment integration.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    technologies: ["Vue.js", "Node.js", "MySQL", "AWS"],
  },
  {
    title: "Fitness Tracking App",
    description: "A mobile app for tracking fitness activities, setting goals, and monitoring progress.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de1a3c6",
    technologies: ["React Native", "Firebase", "GraphQL"],
  },
  {
    title: "Real Estate Management System",
    description: "A platform for managing real estate listings, client interactions, and property transactions.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS"],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
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
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
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
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-[var(--color-gray-600)] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] bg-[var(--color-secondary)]/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;