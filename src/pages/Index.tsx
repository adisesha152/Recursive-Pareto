import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code, Rocket, Users, Zap, CheckCircle2, MessageSquare, ArrowRight as ArrowRightIcon, BrainCircuit, Timer, Target, BarChart3, Laptop, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import "../styles/globals.css";

const Index = () => {
  const [showForm, setShowForm] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleGetInTouchClick = () => {
    setShowForm(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-16">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center justify-between relative text-center lg:text-left">
        <div className="absolute inset-0 -z-10" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[100px] -z-10" />
        <div className="max-w-2xl mt-24 lg:ml-36">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full text-sm font-medium mb-4 shadow-lg backdrop-blur-sm"
          >
            Innovate. Transform. Succeed
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl mb-4 leading-tight bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent"
          >
            Innovative Software Solutions for Modern Businesses
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--color-gray-600)] mb-6 max-w-2xl mx-auto"
          >
            Empowering your business with cutting-edge technology solutions that drive growth
            and enhance productivity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90 transition-all duration-300 shadow-lg">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/30 border-[var(--color-primary)]/20 hover:bg-white/50">
              Learn More
            </Button>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <motion.img
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            src="https://www.focussoftnet.com/industries-all-images/focus-manufacturing-banner-2024-01.webp"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg"
            style={{width: "500px"}}
          />
        </div>
      </section>

      <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-xl p-8 mb-8 mt-16 max-w-6xl bg-gradient-to-b from-[var(--color-accent)]/20 to-[var(--color-white)] -z-10 mx-auto backdrop-blur-sm"
          >
            <h1 className="text-3xl bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] bg-clip-text text-transparent">Empowering Businesses with Cutting-Edge Software Solutions</h1>
            <p className="text-lg text-[var(--color-gray-700)] leading-relaxed mb-6 mt-4">
              At <span className="font-semibold text-[var(--color-primary)]">RecursivePareto</span>, we specialize in delivering 
              innovative and scalable software solutions
              tailored to meet the unique needs of businesses across various industries. Our expertise spans 
              custom software development, enterprise solutions, web and mobile applications, AI-powered 
              systems, and cloud-based platforms, ensuring that our clients stay ahead in a rapidly evolving 
              digital landscape.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">Our Core Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {coreServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2 text-[var(--color-gray-700)]"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)] flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 text-lg text-[var(--color-gray-800)] font-medium"
            >
              Our mission is to <span className="font-semibold text-[var(--color-primary)]">empower businesses</span> 
              with innovative technology solutions that drive growth, enhance productivity, and improve 
              customer engagement.
            </motion.p>
          </motion.div>

      {/* Services Section */}
      <section id="services" className="p-10 relative mt-14">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/20 to-[var(--color-white)] -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
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
              Comprehensive solutions tailored to transform your business through technology
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
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 rounded-xl transform group-hover:scale-105 transition-all duration-300 -z-10" />
                <div className="glass-card rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-[var(--color-white)]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-[var(--color-gray-600)]">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 relative">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                          className="text-sm px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
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

      {/* Process Section */}
      <section id="process" className="p-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-white)] via-[var(--color-accent)]/20 to-[var(--color-white)] -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
            >
              Our Development Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              A structured approach to delivering exceptional software solutions
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-[var(--color-white)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-[var(--color-gray-600)]">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="p-10 relative overflow-hidden">
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
              Why Choose Our Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              Discover how our technology solutions can transform your business operations
            </motion.p>
          </div>
      
          <div className="space-y-8 md:space-y-16">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-1/2 space-y-8">
                {benefits.flat().slice(0, 3).map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-[var(--color-white)]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[var(--color-gray-800)]">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--color-gray-600)] leading-relaxed text-base">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
              <div className="md:w-9"></div>
              <div className="w-full md:w-1/2 space-y-8 md:mt-20">
                {benefits.flat().slice(3, 6).map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg flex items-center justify-center mb-4 shadow-lg transform group-hover:scale-110 transition-all duration-300">
                      <benefit.icon className="h-6 w-6 text-[var(--color-white)]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[var(--color-gray-800)]">
                      {benefit.title}
                    </h3>
                    <p className="text-[var(--color-gray-600)] leading-relaxed text-base">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-white)] via-[var(--color-accent)]/20 to-[var(--color-white)] -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              Find answers to common questions about our services and solutions
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {faqs.slice(0, 3).map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div onClick={() => toggleFaq(index)} className="cursor-pointer flex justify-between items-center">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    {openFaqIndex === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-[var(--color-gray-600)]">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {faqs.slice(3, 6).map((faq, index) => {
                const originalIndex = index + 3; // Adjust index for right column
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: originalIndex * 0.1 }}
                    className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div onClick={() => toggleFaq(originalIndex)} className="cursor-pointer flex justify-between items-center">
                      <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                      {openFaqIndex === originalIndex ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                    </div>
                    <AnimatePresence>
                      {openFaqIndex === originalIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[var(--color-gray-600)]">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 via-[var(--color-accent)]/10 to-[var(--color-secondary)]/5 -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent"
            >
              Client Testimonials
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              What our clients say about working with us
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 relative"
              >
                <MessageSquare className="h-8 w-8 text-[var(--color-primary)]/20 absolute top-6 right-6" />
                <p className="text-[var(--color-gray-600)] mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--color-gray-600)]">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="p-10 crelative overflow-hidden">
        <div className="flex justify-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-[var(--color-accent)] text-[var(--color-accent-foreground)] rounded-full text-xl font-medium mb-6"
            >
              About Us
            </motion.span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-white)] via-[var(--color-accent)]/20 to-[var(--color-primary)]/5 -z-10" />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-xl p-8 h-full"
            >
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                Empowering Your Digital Transformation Journey
              </h2>
              <p className="text-[var(--color-gray-600)] mb-6">
                With over a decade of experience in delivering cutting-edge software solutions,
                we've helped countless businesses achieve their digital transformation goals.
                Our team of expert developers, designers, and consultants work together to
                create innovative solutions that drive growth and efficiency.
              </p>
              <ul className="space-y-4 mb-8">
                {about.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[var(--color-primary)]" />
                    <span className="text-[var(--color-gray-600)]">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group h-full"
            >
              <div className="glass-card rounded-xl p-8 h-full">
                <h3 className="text-4xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent font-semibold mb-4">Our Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4 mt-8">
                    {teamMembers.slice(0, 3).map((member) => (
                      <div key={member.name} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-[var(--color-gray-600)]">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4 md:mt-8">
                    {teamMembers.slice(3, 6).map((member) => (
                      <div key={member.name} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={member.avatar}
                            alt={member.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{member.name}</h4>
                          <p className="text-sm text-[var(--color-gray-600)]">{member.position}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-[var(--color-gray-600)] mt-6">
                  Our team is composed of experienced professionals who are passionate about technology and innovation. We work collaboratively to deliver the best solutions for our clients.
                </p>
                <p className="text-[var(--color-gray-600)] mt-4">
                  From software developers to project managers, each member of our team brings unique skills and expertise to the table, ensuring that we can tackle any challenge and deliver exceptional results.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="md:p-10 relative overflow-hidden md:mb-10">
        <div className="absolute inset-0 bg-[var(--contact-bg-gradient)] max-w-6xl md:ml-36 sm:m md:rounded-3xl sm:rounded-none -z-10" />
        <div className="absolute inset-0 bg-[var(--contact-overlay)] opacity-[var(--contact-overlay-opacity)]" />
        <div className="md:max-w-6xl md:mx-auto text-center relative p-10 w- sm:w- md:w-10/12 lg:w-8/12 xl:w-6/12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-[var(--contact-text-color)]"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--contact-text-color)] mb-6 md:mb-8 max-w-2xl mx-auto text-base md:text-lg"
          >
            Contact us today to discuss how we can help you achieve your business goals
            through innovative software solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-[var(--contact-button-bg)] text-[var(--contact-button-text)] hover:bg-[var(--contact-button-hover-bg)] shadow-xl backdrop-blur-sm"
              onClick={handleGetInTouchClick}
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-white)]/30 backdrop-blur-sm"
        >
          <div className="bg-[var(--color-white)] rounded-lg p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              setShowForm(false);
            }}>
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
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="companyName">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Company Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="businessEmail">
                  Business Email
                </label>
                <input
                  type="email"
                  id="businessEmail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Business Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[var(--color-gray-700)] text-sm font-bold mb-2" htmlFor="businessNeeds">
                  Business Needs
                </label>
                <textarea
                  id="businessNeeds"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-[var(--color-gray-700)] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Describe your business needs"
                />
              </div>
              <div className="flex items-center justify-between">
                <Button type="submit" className="bg-[var(--color-primary)] text-[var(--color-white)] py-2 px-4 rounded">
                  Submit
                </Button>
              <button
                onClick={() => setShowForm(false)}
                className="text-[var(--color-primary)] border border-[var(--color-primary)] px-4 py-2 rounded hover:bg-[var(--color-primary)]/20"
              >
                Cancel
              </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
};

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to meet your specific business requirements and objectives.",
    icon: Code,
  },
  {
    title: "Digital Transformation and Automation",
    description:
      "Strategic guidance and implementation to modernize your business processes.",
    icon: Zap,
  },
  {
    title: "Cloud Solutions & Hosting Services", 
    description:
      "Scalable and secure cloud infrastructure to power your digital operations.",
    icon: Laptop,
  },
  {
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights for better decision-making.",
    icon: BarChart3,
  },
  {
    title: "IT Consulting",
    description:
      "Expert advice and strategies to optimize your technology investments.",
    icon: BrainCircuit,
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock technical support to ensure your systems run smoothly.",
    icon: Users,
  },
];

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
];

const process = [
  {
    title: "Discovery",
    description: "Understanding your business needs and objectives",
    icon: Target,
  },
  {
    title: "Planning",
    description: "Developing a comprehensive project roadmap",
    icon: BrainCircuit,
  },
  {
    title: "Development",
    description: "Building your solution with cutting-edge technology",
    icon: Code,
  },
  {
    title: "Launch & Support",
    description: "Deployment and ongoing maintenance",
    icon: Rocket,
  },
];

const testimonials = [
  {
    quote: "The team's expertise and dedication transformed our business processes, delivering exceptional results.",
    name: "Sarah Johnson",
    position: "CEO, TechCorp",
    avatar: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
  },
  {
    quote: "Outstanding service and technical expertise. They truly understand business needs.",
    name: "Michael Chen",
    position: "CTO, InnovateTech",
    avatar: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
  },
  {
    quote: "Professional, responsive, and delivered beyond our expectations.",
    name: "Emily Roberts",
    position: "Product Manager, NextGen",
    avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
];

const benefits = [
  [
    {
      title: "Increased Efficiency",
      description: "Streamline your operations with automated workflows and intelligent processes that save time and resources.",
      icon: Zap,
    },
    {
      title: "Data-Driven Decisions",
      description: "Make informed decisions based on real-time analytics and comprehensive business intelligence.",
      icon: BarChart3,
    },
    {
      title: "Scalable Solutions",
      description: "Our solutions grow with your business, ensuring long-term sustainability and ROI.",
      icon: Target,
    },
  ],
  [
    {
      title: "Enhanced Security",
      description: "Protect your business with enterprise-grade security measures and compliance standards.",
      icon: CheckCircle2,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support ensuring your systems run smoothly at all times.",
      icon: Users,
    },
    {
      title: "Competitive Edge",
      description: "Stay ahead of the competition with innovative solutions that drive business growth.",
      icon: Rocket,
    },
  ],
];

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes across various industries, from startups to enterprise-level organizations. Our solutions are tailored to meet your specific needs and goals.",
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary depending on scope and complexity. A typical project can range from 2-6 months, but we'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web and mobile technologies, cloud solutions, AI/ML, and enterprise software development. Our tech stack is constantly evolving to meet industry demands.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages to ensure your solution continues to perform optimally and evolve with your business needs.",
  },
  {
    question: "How do you ensure project security and confidentiality?",
    answer: "We implement industry-leading security measures and follow strict data protection protocols. All our projects are covered by NDAs, and we comply with international security standards.",
  },
  {
    question: "What makes your solutions different from others?",
    answer: "Our solutions are custom-built for your specific needs, scalable, and future-proof. We focus on delivering long-term value through innovation and quality.",
  },
];

const coreServices = [
  "Mobile App Development",
  "Web Development",
  "Software Development",
  "Testing & Quality Assurance",
  "Deployment & Integration",
  "Ongoing Support & Maintenance"
];

const about = {
  features: [
    "10+ Years of Industry Experience",
    "100+ Successful Projects Delivered",
    "24/7 Technical Support",
    "Award-winning Development Team",
    "Industry-leading Security Standards",
    "Continuous Innovation & Learning",
  ],
};

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    avatar: "data:image/png;base64,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",
  },
  {
    name: "Jane Smith",
    position: "CTO",
    avatar: "data:image/png;base64,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",
  },
  {
    name: "Alice Johnson",
    position: "Lead Developer",
    avatar: "data:image/png;base64,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",
  },
  {
    name: "Bob Brown",
    position: "Project Manager",
    avatar: "data:image/png;base64,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",
  },
  {
    name: "Eve Davis",
    position: "UX/UI Designer",
    avatar: "data:image/png;base64,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",
  },
  {
    name: "Mike Davis",
    position: "Quality Assurance",
    avatar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAACUCAMAAAC+99ssAAAAilBMVEX///8wMzj6+voAAAAtMDXx8fEnKjAqLTP39/ckKC7g4OD09PQvMTS9vb5FR0rm5uYeIikjJCfNzc4AAAja2tqdnZ7FxcbU1NUpKiwXHCOkpaYNExsdHyKxsrOrrKwaGx08PT5xcnRpamyEhYaOj5BaWlsPERZRU1Z8fX4AAxFfYmUFDQ86P0QACxSi77sQAAAJU0lEQVR4nO1c63aqvBZ1YSDGBkhQkAjKVbBufP/XO8Fqt90qCUjb74zh/NkiTLLuayVMJi+88MILL7zwwgsvvPD/BsOcr7yghbeam8Zv0/kLY24X+a52GgCMMUDTOLussOe/T9H11gcyjVgYUooQSKAWYcijBTmsPfcXudlFbQmCJKOQJ9X79Iwq5hjLvxJB6sL+FWbGskCCUwqSQ1PnhW97S7fF0tv4RV43pOUdcoGL5Y/L2M6IQED5Mc59e2ne/N9cBn7Op0SKWfDsRxfQ2NScU0SsdG932KdhBvvGkgQJqTc/tn724YgBCSSpKa817X2YUMDvB7l+P8DQzTgHxFjp6j3McEvGEBCefb8Bv/lHAiCc9azHj2ZrJ5bmc/TVa/0UlgcpJvbu910Gd71gUhkOy29h9QFjG1lghcWQJTALElIrWhvfpX2zTLRCHeoebCcBSLI+KtEDyx0DHBdvg2/wVsQhsN23SNejBEjznF+1UwKcBiMxukIAFo3T+ZN3cZsYQjp66NhMEST753VmtheI/tmOwOgKAUO0KsawNqOoKOWjrp6dIMT9kW62lm8ab0a6mcQqkis3FjlJr6Ko8sa629LBEI9HbjLxGYTpSI7FdDhEY5IzJmUE3Bkn6O4FxPm44ceQUSfej3EnPwaSDw8Q9/GWc5qMII9VSHE0fmbmVgjh1bN3MZyQEp3QY843xc5xnEOxvVNm3CLgYDnP6ovPgZXqy1Z+XUXMktW2xao/damxKmVMxZOyXSKKG+UbuhmwkMIZlGJC1Wm64ViIPifbmqBY5TdnZczhHyAW+6qXWnEI62fIBVNgheIaM5OB8192kl+VqdSvYHTxRDZl1iFqFCKaI3ZL7YSYKvIt10GoHu6TNzGN1oon1DdS/QSvFW+2joANTgeMBuO0W3vM3aOVO9Hbda+M4eBQ8YDHsN+VryajXBcSRbTaMHocmurtQqxQi6CbHADr1nqzRng3jFxAqejWOrO2FOwshWy3AsJhZlsymHYrha1aOln+d6uGMUVc5bLuwsVI5esAq9gBwp3kWp+Hh+QYmwhEd5iYL5TkABbdObDHUTTELg4EH7qVpuzyJheI7hzCPGBrgF2Ysq7rTiGMXC1YgFCRVvsEUP94YYeUdwtWBiINdlQRMDwCpH+8KGTV2X3FCrTYqbIkwKS31ZoHi+Tdl3g6ggUaKjKwjFgK/b7FHCltKdAxCmW4mNiy9u7bPAoiOCp+MxK7eQVR33DhC6Qqhz1VGPuQrMK2ZDGPetcXOSGqHupIVjHLCDn0ZEdprCrF5loeBTkqpfIZQj3ZVZSrWoCzg47R4oOqJbllIPqloO4fGirDX8HvVDv/Qu3MbAzHfi5lJessZYdt9UeD3bvyNh5A1K+uDSKk0WCL1YqHmPIu8waJfi5lI1CqTrvWGtmnoqaTcFNVjvovtmp3N2kzd5VdYEf9jtLhMfU7XGPNkKPR/t8qqx6Nx84ku37u2NdjN8m7oxlTJBLfzG6edoUzS2s29H3sJqvmMT2cajmK/uz0rKKFx8kDcqEq/p/R3yr0PMoJK4fddcrM0XSxbtPXo7TeWDclfMvi8Faq8V43OvX3xqtII5JdYARpZF2HDWRFaaAd2FcykvWbS2llAVewszQR5LRDy4qTtNfmnTYL6NkO0MigvsBY2sUOCyHwobD7bXzaEoh6NvEA6wwCbjCkVVgqa9Mb5FyZuY+EIZm7L3D/IaDRou+PhlQ9smKselSZs2WwKYs8PxyyotwEyx5TvyEV4xz0O1cze79LmWCMtGBMxM1ub+vqhay2w77VdtupyLQuDPbTIwm/hgtE+XGaBVqqsedh705Fa0mgvmq2PVSPkigWHbYaC0hR/y7PxCaIqQLlmw1x+LjyQWEMG5UGrtiQDplJlXnN8hCpyh4cqbY9td3FAY3jXdjduTJ8qlPPMugcNg7szE7sCEhHcHbzo06jQsr3mHesjcchGjIqc1HXRGDpMD1ybRfKeSzdIqbWoF0HBaMPpylBotX4PAM/zN8MjQHwAwYYqgd5in1vXtxF79Gmtk0EaNgkytjhB1M8T+hK9QJ0fzBj1siqB45AN8f7E9B52pfco/psI21i6F68GWB8Z8vIzHlUhXXBulOBGo6FYXCethVwu83Q2McDyAHE2c2Lbitgw7cxytTrtqy19VrtN6A3Act08IAk8orJ+81OHpf08SXXQOQfx1bGw+fuJzgWIl/VeT9w6STE110CS0aJ8wy5ycpC4RfDCG4La3183e5VW8h6chdZyeB6EGpkj7efaLC7LqR8eechZd81Zg1GV3O41TB7PYMmf9cqIChMn676VhxR8WlY+RBX9xf8szQ0Y4Q0e1SduN5ZaSrb2N1Al/ecZbFqJq+JjEFy9qTlM1rX4uKfskR65zHITdw0vOzo3Sz6R9gva7f48Mh+BZZuf7AbxmSVYso/upMba6gvlqAo/CC35oD0urY68CoK561uXjNcuDz9MIN1gtCf0XaSG5Nta2Ef8dqtB1oGiuv5qUe1JRSJUc8w2AlF7+XJNAyfD5GuxT9qM6OsAPERjwi02Ep7uBywCNKkf27cBKfunlEKQO/9WuwasGkI4jL1KlPtiuwEnp49ieskj4uM4TBk/CfAL8e1lvtKP2qQKjuXjIHDqWV9w6kjGdNqDjguzxnLKg+19I9yfDg7D6NkGFg9miv5CjMTQKv68upeiSLlBDSi5cV3BLWgNMm/7SzjzG9PClrl5QHuthHcwg9UEBEmmu0lIpil1Iyw8r+zGb3ayeVjx/VnFJr7uSPaM9D/rBkRzMn9z56mu61iCmI3mg++D7OchtI/1NvPhNlwg3UG0XRRJUnMeVxF74sIMj/4eyTf2EqhAlmU33xCVWKeMwuwwF9P9765nr32y7L0txvPvW4pGm4ZxiFYLH/2IJ8WDHu3oFT/ZDQIhPDx505uG1uHEKn1pNkHnafKvaIJuZQpcbY/xe304E3OefvBggWXGnZnPPG2DPwML2RIQYzlP3fi/fPxeytqv7PAYt7ssquvGazsdZHtGpLIVWu/t7DvM1sZEfa+5knYfgnCYkKa6uk7EIv3SBALIaChYPX+d74E8QHX83ds2p43Qn9dnjQCi0XTeOf/6lc0PvDxBRLHSQFZnGBoHGeX/ye+QPKJ89db7NPXW9yfmZ2+8MILL7zwwgsvvPDCmPgfyQGk4Nv+kisAAAAASUVORK5CYII=",
  }
];

export default Index;
