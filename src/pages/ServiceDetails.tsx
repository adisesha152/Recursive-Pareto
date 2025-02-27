import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, Users, Clock } from 'lucide-react';
import { useServices } from "@/hooks/useServices";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { get_by_id } = useServices(); // This is correct now
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await get_by_id(id);
        setService(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Button onClick={() => navigate('/services')}>Back to Services</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <Button
          variant="ghost"
          className="mb-8 flex items-center gap-2"
          onClick={() => navigate('/services')}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl mb-8">
                <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>

            {service.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {service.benefits && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
                <div className="grid grid-cols-1 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow">
                      <Sparkles className="h-5 w-5 text-primary mt-1" />
                      <p>{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-6 sticky top-24"
            >
              <h3 className="text-lg font-semibold mb-6">Service Information</h3>
              <div className="space-y-4">
                {service.expertise && (
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Expertise Level</p>
                      <p className="font-medium">{service.expertise}</p>
                    </div>
                  </div>
                )}

                {service.deliveryTime && (
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Delivery Time</p>
                      <p className="font-medium">{service.deliveryTime}</p>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full mt-6"
                  onClick={() => navigate('/contact')}
                >
                  Request Service
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
