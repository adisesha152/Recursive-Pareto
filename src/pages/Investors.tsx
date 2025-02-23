import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DollarSign, TrendingUp, Shield, ChartBar, Users, Globe } from 'lucide-react';

const keyInvestors = [
  {
    name: "Blue Horizon Ventures",
    role: "Lead Investor - Series A",
    investment: "$25M",
    image: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Leading technology investment firm specializing in early-stage startups",
  },
  {
    name: "Redwood Capital",
    role: "Strategic Partner",
    investment: "$15M",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Global venture capital firm focused on breakthrough technologies",
  },
  {
    name: "Global Tech Partners",
    role: "Series B Lead",
    investment: "$40M",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "International investment group specializing in tech scale-ups",
  },
];

const metrics = [
  { label: "Total Funding", value: "$80M+", icon: DollarSign },
  { label: "YoY Growth", value: "150%", icon: TrendingUp },
  { label: "Global Clients", value: "200+", icon: Globe },
  { label: "Team Size", value: "150+", icon: Users },
  { label: "Success Rate", value: "95%", icon: ChartBar },
  { label: "Security Score", value: "A+", icon: Shield },
];

const Investors = () => {
  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      <section className="p-10 mt-10 relative">
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
              Investors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              Learn more about investment opportunities with Recursive Pareto.
            </motion.p>
          </div>
          <div className="glass-card rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Why Invest in Us</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              Recursive Pareto is at the forefront of technological innovation, delivering cutting-edge solutions that drive business growth and efficiency. Our proven track record, experienced team, and commitment to excellence make us a valuable investment opportunity.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Achievements</h3>
            <ul className="list-disc list-inside text-[var(--color-gray-600)] mb-6">
              <li>10+ Years of Industry Experience</li>
              <li>100+ Successful Projects Delivered</li>
              <li>Award-winning Development Team</li>
              <li>Industry-leading Security Standards</li>
              <li>Continuous Innovation & Learning</li>
            </ul>
          </div>

          {/* Add new investor relations section */}
          <section className="glass-card rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-semibold mb-4">Investor Relations & Growth</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              Our recent funding rounds have successfully propelled us into new markets, 
              while strong strategic partnerships continue to expand our global presence. 
              We remain committed to transparent communication, ensuring all stakeholders 
              are informed of developments around growth, returns, and market opportunities.
            </p>
            <ul className="list-disc list-inside text-[var(--color-gray-600)] mb-6">
              <li>Ongoing global expansion with key tech partners</li>
              <li>Strong pipeline of future-ready products</li>
              <li>Comprehensive investor updates and quarterly reports</li>
            </ul>
          </section>

          {/* Key Metrics Section */}
          <section className="py-16 bg-gradient-to-b from-white/80 via-[var(--color-accent)]/5 to-white/80">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)]/10 mb-4">
                      <metric.icon className="w-6 h-6 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-primary)]">{metric.value}</h3>
                    <p className="text-[var(--color-gray-600)] text-sm">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Investors Section */}
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
              >
                Our Key Investors
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {keyInvestors.map((investor, index) => (
                  <motion.div
                    key={investor.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-xl">
                      <img
                        src={investor.image}
                        alt={investor.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-1">{investor.name}</h3>
                      <p className="text-white/80 text-sm mb-2">{investor.role}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[var(--color-primary)] font-semibold">{investor.investment}</span>
                        <span className="text-white/60 text-sm">{investor.description}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
            >
              Investment Benefits
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
              <DollarSign size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">High Returns</h3>
              <p className="text-[var(--color-gray-600)]">Potential for significant financial returns on your investment.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-xl p-8 shadow-lg text-center"
            >
              <TrendingUp size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Growth Potential</h3>
              <p className="text-[var(--color-gray-600)]">Invest in a company with strong growth prospects and market potential.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-xl p-8 shadow-lg text-center"
            >
              <Shield size={48} className="text-[var(--color-primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security</h3>
              <p className="text-[var(--color-gray-600)]">Invest with confidence knowing your investment is secure.</p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Investors;