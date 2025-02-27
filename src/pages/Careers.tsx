import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Briefcase, Award, Globe, Heart, Star, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useJobs } from '@/hooks/useJobs';

const ITEMS_PER_PAGE = 3;

const Careers = () => {
  const [jobOpenings, setjobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { getAll } = useJobs();
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const totalPages = Math.ceil(jobOpenings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentJobs = jobOpenings.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await getAll();
        console.log(res);
        setjobs(res)
      } catch (error) {
        console.error("Error fetching the Jobs");
      }
    };
    getJobs();
  }, [])

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setShowApplyForm(true);
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
              Careers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[var(--color-gray-600)] max-w-2xl mx-auto"
            >
              Join our team and be a part of our innovative journey.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-xl p-8 shadow-lg mb-12"
          >
            <h3 className="text-2xl font-semibold mb-4">Why Join Us</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              We offer a dynamic work environment, opportunities for growth, and a chance to make a real impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4">
                <Users className="text-[var(--color-primary)]" />
                <span className="text-lg font-medium">Collaborative Team</span>
              </div>
              <div className="flex items-center space-x-4">
                <Briefcase className="text-[var(--color-primary)]" />
                <span className="text-lg font-medium">Career Growth</span>
              </div>
              <div className="flex items-center space-x-4">
                <Award className="text-[var(--color-primary)]" />
                <span className="text-lg font-medium">Recognition</span>
              </div>
              <div className="flex items-center space-x-4">
                <Globe className="text-[var(--color-primary)]" />
                <span className="text-lg font-medium">Global Impact</span>
              </div>
              <div className="flex items-center space-x-4">
                <Heart className="text-[var(--color-primary)]" />
                <span className="text-lg font-medium">Passionate Team</span>
              </div>
              <div className="flex items-center space-x-4">
                <Star className="text-[var(--color-primary)]" />
                <span className="text-lg font-medium">Excellence</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card rounded-xl p-8 shadow-lg mb-12"
          >
            <h3 className="text-2xl font-semibold mb-4">Our Culture</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              At Recursive Pareto, we foster a culture of innovation, collaboration, and continuous learning. Our team members are encouraged to think creatively, take initiative, and contribute to our shared success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                <p className="text-[var(--color-gray-600)]">
                  We believe in pushing the boundaries of technology and finding new ways to solve problems.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Collaboration</h4>
                <p className="text-[var(--color-gray-600)]">
                  Our team works together to achieve common goals, leveraging each other's strengths and expertise.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Growth</h4>
                <p className="text-[var(--color-gray-600)]">
                  We provide opportunities for professional development and career advancement.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Work-Life Balance</h4>
                <p className="text-[var(--color-gray-600)]">
                  We understand the importance of maintaining a healthy work-life balance and support our team in achieving it.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Current Openings</h3>
            <p className="text-[var(--color-gray-600)] mb-6">
              We are always looking for talented individuals to join our team. Check out our current job openings below.
            </p>
            <ul className="space-y-8">
              {currentJobs.map((job, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 shadow-lg"
                >
                  <h4 className="text-xl font-semibold mb-2">{job.title}</h4>
                  <p className="text-[var(--color-gray-600)] mb-2">{job.location} - {job.type}</p>
                  <p className="text-[var(--color-gray-600)] mb-4">{job.description}</p>
                  <h5 className="text-lg font-medium mb-2">Requirements:</h5>
                  <ul className="list-disc list-inside text-[var(--color-gray-600)] mb-4">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                  <Button 
                    className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] hover:opacity-90"
                    onClick={() => handleApplyNow(job)}
                  >
                    Apply Now
                  </Button>
                </motion.li>
              ))}
            </ul>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                variant="outline"
                className="px-4 py-2"
              >
                Previous
              </Button>
              
              <div className="flex items-center space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    variant={currentPage === page ? "default" : "outline"}
                    className={`px-4 py-2 ${
                      currentPage === page 
                        ? "bg-[var(--color-primary)] text-white" 
                        : "text-[var(--color-gray-700)]"
                    }`}
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                variant="outline"
                className="px-4 py-2"
              >
                Next
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplyForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-lg p-8 max-w-lg w-full m-4 shadow-xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Apply for {selectedJob?.title}</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowApplyForm(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowApplyForm(false);
                }}
              >
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="resume">Resume (PDF only)</Label>
                    <div className="mt-1 flex items-center">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf"
                        required
                        className="block w-full text-sm text-gray-500
                          file:mr-4 file:py- file:px-4 
                          file:rounded-full file:border-0
                          file:text-sm file:font-semibold
                          file:bg-[var(--color-primary)]/10 
                          file:text-[var(--color-primary)]
                          hover:file:bg-[var(--color-primary)]/20
                          focus:outline-none focus:ring-2
                          focus:ring-[var(--color-primary)]/20
                          cursor-pointer"
                      />
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Please upload your resume in PDF format</p>
                  </div>

                  <div className="flex justify-end space-x-4 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowApplyForm(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90"
                    >
                      Submit Application
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;