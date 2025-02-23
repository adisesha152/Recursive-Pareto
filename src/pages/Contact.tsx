import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
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
              Contact Us
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              We'd love to hear from you! Reach out to us with any questions or inquiries.
            </motion.p>
          </div>
          <div className="glass-card rounded-xl p-8 shadow-lg mb-12">
            <form>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message"
                />
              </div>
              <div className="flex items-center justify-between">
                <Button type="submit" className="bg-[var(--color-primary)] text-[var(--color-white)] py-2 px-4 rounded">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
            >
              Our Locations
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
              <MapPin size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">New York</h3>
              <p className="text-[var(--color-gray-600)]">123 Main Street, New York, NY 10001</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-8 shadow-lg text-center"
            >
              <MapPin size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">San Francisco</h3>
              <p className="text-[var(--color-gray-600)]">456 Market Street, San Francisco, CA 94111</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-8 shadow-lg text-center"
            >
              <MapPin size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">London</h3>
              <p className="text-[var(--color-gray-600)]">789 Oxford Street, London, UK W1D 2ES</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;