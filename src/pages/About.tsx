import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const aboutFeatures = [
  "10+ Years of Industry Experience",
  "100+ Successful Projects Delivered",
  "24/7 Technical Support",
  "Award-winning Development Team",
  "Industry-leading Security Standards",
  "Continuous Innovation & Learning",
];

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    avatar: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    name: "Alice Johnson",
    position: "Lead Developer",
    avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    name: "Bob Brown",
    position: "Project Manager",
    avatar: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    name: "Eve Davis",
    position: "UX/UI Designer",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    name: "Mike Davis",
    position: "Quality Assurance",
    avatar: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
];

const About = () => {
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
              About Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              Learn more about our mission, vision, and the team behind Recursive Pareto.
            </motion.p>
          </div>
          <div className="glass-card rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              At Recursive Pareto, our mission is to empower businesses with innovative technology solutions that drive growth, enhance productivity, and improve customer engagement.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              We envision a world where businesses of all sizes can leverage cutting-edge technology to achieve their goals and stay ahead in a rapidly evolving digital landscape.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              Our team is composed of experienced professionals who are passionate about technology and innovation. We work collaboratively to deliver the best solutions for our clients.
            </p>
            <Button className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90">
              Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="glass-card rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Our Features</h3>
            <ul className="space-y-4 mb-8">
              {aboutFeatures.map((feature) => (
                <li key={feature} className="flex items-center text-[var(--color-gray-700)]">
                  <span className="mr-2 text-[var(--color-primary)]">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="glass-card p-4 rounded-xl shadow-md flex items-center space-x-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-[var(--color-gray-600)]">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;