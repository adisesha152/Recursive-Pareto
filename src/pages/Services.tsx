import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Zap, Laptop, BarChart3, Target, Cpu, Rocket, BrainCircuit, Cloud, Smartphone, Shield, Database } from 'lucide-react';
import { useServices } from '@/hooks/useServices';
import { Service } from '@/types/api.types';
const iconMap = {
  Laptop: <Laptop size={48} className="text-[var(--color-primary)] mb-4 mx-auto"  />,

  Shield:<Shield size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />
};
const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "We build responsive and modern web applications that scale with your business needs.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "We optimize your applications for maximum speed and efficiency.",
  },
  {
    icon: Laptop,
    title: "Technical Support",
    description: "24/7 technical support to keep your systems running smoothly.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven insights to help you make informed business decisions.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Machine Learning",
    description: "Implement cutting-edge AI solutions to automate and enhance your business processes.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for your growing needs.",
  },
  {
    icon: Smartphone, // Changed from Mobile to Smartphone
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Efficient database design, optimization, and maintenance services.",
  }
];

const Services = () => {
   const [services, setServices] = useState([]);
    const { getAll } = useServices();
  
    useEffect(() => {
      const get = async () => {
        try {
          const data = await getAll() as Service[];
          const finalData =  data.map((step) => {
            console.log(step.icon, "Icon wala", iconMap[step.icon]);
            
            return ({
            ...step,
            icon: iconMap[step.icon] || null, // Convert icon string to component
          })});
          setServices(finalData); // ✅ Set fetched data to state
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
      };
      get();
    }, []); 
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
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              Comprehensive solutions tailored to transform your business through technology.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-[var(--color-gray-600)]">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16 mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
            >
              Our Approach
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-8 shadow-lg text-center"
            >
              <Target size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-[var(--color-gray-600)]">Understanding your business needs and objectives.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-8 shadow-lg text-center"
            >
              <Cpu size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-[var(--color-gray-600)]">Developing a comprehensive project roadmap.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-8 shadow-lg text-center"
            >
              <Rocket size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-[var(--color-gray-600)]">Implementing the plan with precision and expertise.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;