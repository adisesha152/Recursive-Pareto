import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Code, Zap, CodeXml, ShoppingCart,  Laptop, BarChart3, Target, Cpu, Rocket, BrainCircuit, Cloud, Smartphone, Shield, Database, Link as IconLink, CircuitBoard, Gamepad2, Workflow, HeartPulse, Forklift, Server, Globe } from 'lucide-react';
import { useServices } from '@/hooks/useServices';
import { Service } from '@/types/api.types';
import { Link, useNavigate } from 'react-router-dom';

const iconMap = {
  "code-xml": <CodeXml size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "shopping-cart": <ShoppingCart size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "Laptop": <Laptop size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "BarChart3": <BarChart3 size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "Target": <Target size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "Cpu": <Cpu size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "Rocket": <Rocket size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "BrainCircuit": <BrainCircuit size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "Cloud": <Cloud size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "Smartphone": <Smartphone size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "Shield": <Shield size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "link": <IconLink size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "circuit-board": <CircuitBoard size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "gamepad-2": <Gamepad2 size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "workflow": <Workflow size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "heart-pulse": <HeartPulse size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "forklift": <Forklift size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "server": <Server size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
  "globe": <Globe size={48} className="text-[var(--color-primary)] mb-4 mx-auto" />,
};

const Services = () => {
  const [services, setServices] = useState([]);
  const { getAll } = useServices();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getAll();
        const finalData = data.map((service) => ({
          ...service,
          icon: iconMap[service.icon] || null,
        }));
        setServices(finalData);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <p className="text-center text-gray-500">Loading services...</p>
        </div>
      ) : services.length > 0 ? (
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
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => navigate(`/services/${service.id}`)}
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
      ) : (
        <div className="flex justify-center items-center min-h-[60vh]">
          <p className="text-center text-gray-500">No services available.</p>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Services;