import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Filter, 
  Calendar, 
  ArrowRight,
  Car,
  Sparkles,
  Shield,
  Wrench
} from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work', icon: null },
    { id: 'interior', label: 'Interior', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'exterior', label: 'Exterior', icon: <Car className="w-4 h-4" /> },
    { id: 'ceramic', label: 'Ceramic Coating', icon: <Shield className="w-4 h-4" /> },
    { id: 'correction', label: 'Paint Correction', icon: <Wrench className="w-4 h-4" /> }
  ];

  // Placeholder gallery items - in a real app, these would come from a database
  const galleryItems = [
    {
      id: 1,
      category: 'exterior',
      title: 'BMW M3 Complete Detail',
      description: 'Full exterior detail with ceramic coating protection',
      beforeImage: 'placeholder-before-1.jpg',
      afterImage: 'placeholder-after-1.jpg',
      service: 'Exterior Detailing + Ceramic Coating'
    },
    {
      id: 2,
      category: 'interior',
      title: 'Mercedes Interior Restoration',
      description: 'Deep cleaning and leather conditioning',
      beforeImage: 'placeholder-before-2.jpg',
      afterImage: 'placeholder-after-2.jpg',
      service: 'Premium Interior Detailing'
    },
    {
      id: 3,
      category: 'correction',
      title: 'Audi Paint Correction',
      description: 'Scratch removal and paint enhancement',
      beforeImage: 'placeholder-before-3.jpg',
      afterImage: 'placeholder-after-3.jpg',
      service: 'Multi-Stage Paint Correction'
    },
    {
      id: 4,
      category: 'ceramic',
      title: 'Tesla Model S Ceramic Coating',
      description: '5-year ceramic coating with paint correction',
      beforeImage: 'placeholder-before-4.jpg',
      afterImage: 'placeholder-after-4.jpg',
      service: 'Paint Correction + Ceramic Coating'
    },
    {
      id: 5,
      category: 'interior',
      title: 'Range Rover Interior Detail',
      description: 'Complete interior cleaning and protection',
      beforeImage: 'placeholder-before-5.jpg',
      afterImage: 'placeholder-after-5.jpg',
      service: 'Elite Interior Package'
    },
    {
      id: 6,
      category: 'exterior',
      title: 'Porsche 911 Exterior Detail',
      description: 'Hand wash, polish, and wax protection',
      beforeImage: 'placeholder-before-6.jpg',
      afterImage: 'placeholder-after-6.jpg',
      service: 'Premium Exterior Detail'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
              Our Work
              <br />
              <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8 max-w-3xl mx-auto">
              See the transformative results of our professional auto detailing services. Real cars, real results from our Edmonton workshop.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {filter.icon}
                <span>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-2xl text-neutral-600 mb-2">
                No items found
              </h3>
              <p className="text-neutral-500">
                Try selecting a different filter to see more work samples.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden"
                >
                  {/* Before/After Images */}
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-0">
                      {/* Before */}
                      <div className="relative aspect-square bg-gradient-to-br from-neutral-300 to-neutral-400">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-neutral-600 font-semibold mb-1">BEFORE</p>
                            <p className="text-neutral-500 text-sm">Image Coming Soon</p>
                          </div>
                        </div>
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Before
                        </div>
                      </div>
                      {/* After */}
                      <div className="relative aspect-square bg-gradient-to-br from-primary-100 to-primary-200">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <p className="text-primary-700 font-semibold mb-1">AFTER</p>
                            <p className="text-primary-600 text-sm">Image Coming Soon</p>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          After
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-heading font-bold text-xl text-neutral-800">
                        {item.title}
                      </h3>
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold capitalize">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500 font-medium">
                        {item.service}
                      </span>
                      <Link 
                        to="/contact"
                        className="text-primary-500 hover:text-primary-600 font-semibold text-sm flex items-center space-x-1"
                      >
                        <span>Get This Service</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
                Behind the Scenes
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Every transformation starts with our meticulous process and attention to detail
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We carefully evaluate your vehicle's condition and discuss your specific needs and goals."
              },
              {
                step: "02", 
                title: "Preparation",
                description: "Proper preparation is key. We protect surrounding areas and select the right products for your vehicle."
              },
              {
                step: "03",
                title: "Transformation",
                description: "Using professional techniques and premium products, we restore your vehicle to its best condition."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 text-white rounded-full text-2xl font-bold mb-4">
                  {process.step}
                </div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">
                  {process.title}
                </h3>
                <p className="text-neutral-600">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Vehicles Detailed" },
              { number: "100%", label: "Customer Satisfaction" },
              { number: "50+", label: "5-Star Reviews" },
              { number: "3+", label: "Years Experience" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
              Join the hundreds of satisfied customers who've experienced the AutoDetailGeeks difference. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Detail
              </Link>
              <Link to="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutral-900 space-x-2">
                <span>View Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;