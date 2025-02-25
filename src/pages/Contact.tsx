import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sendContact } from '@/services/api.service';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');

    try {
      const response = await sendContact(formData);
      setResponseMessage('Message sent successfully!');
      setFormData({ fullName: '', companyName: '', email: '', phoneNumber: '', message: '' });
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="phoneNumber">
                  Phone number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="+91-9999999999"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your message"
                />
              </div>
              <div className="flex items-center justify-between">
                <Button type="submit" disabled={loading} className="bg-[var(--color-primary)] text-[var(--color-white)] py-2 px-4 rounded">
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
              {responseMessage && (
                <p className={`mt-4 text-sm ${responseMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                  {responseMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
