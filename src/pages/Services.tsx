import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Car, 
  Shield, 
  Wrench, 
  Cog, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Star
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'interior',
      icon: <Sparkles className="w-12 h-12" />,
      title: "Interior Detailing",
      description: "Complete interior restoration and protection",
      features: [
        "Deep vacuum of carpets, seats, and crevices",
        "Steam cleaning of upholstery and fabrics", 
        "Leather conditioning and protection",
        "Dashboard and trim restoration",
        "Stain and odor removal",
        "Window cleaning (interior)"
      ],
      pricing: {
        basic: { name: "Basic Interior", price: 89, duration: "2-3 hours" },
        premium: { name: "Premium Interior", price: 149, duration: "3-4 hours" },
        elite: { name: "Elite Interior", price: 199, duration: "4-5 hours" }
      }
    },
    {
      id: 'exterior',
      icon: <Car className="w-12 h-12" />,
      title: "Exterior Detailing",
      description: "Professional exterior cleaning and protection",
      features: [
        "Hand wash with premium soap",
        "Clay bar treatment for contaminant removal",
        "Machine polishing for shine enhancement", 
        "High-quality wax or sealant application",
        "Tire and rim deep cleaning",
        "Chrome and trim restoration"
      ],
      pricing: {
        basic: { name: "Basic Exterior", price: 99, duration: "2-3 hours" },
        premium: { name: "Premium Exterior", price: 169, duration: "3-4 hours" },
        elite: { name: "Elite Exterior", price: 229, duration: "4-5 hours" }
      }
    },
    {
      id: 'ceramic',
      icon: <Shield className="w-12 h-12" />,
      title: "Ceramic Coating",
      description: "Ultimate paint protection and hydrophobic finish",
      features: [
        "Paint decontamination and correction",
        "Professional-grade ceramic coating application",
        "3-5 years of protection",
        "Hydrophobic water-repelling finish",
        "Enhanced gloss and depth",
        "Easy maintenance and cleaning"
      ],
      pricing: {
        basic: { name: "1-Year Coating", price: 599, duration: "6-8 hours" },
        premium: { name: "3-Year Coating", price: 899, duration: "8-10 hours" },
        elite: { name: "5-Year Coating", price: 1299, duration: "10-12 hours" }
      }
    },
    {
      id: 'paint',
      icon: <Wrench className="w-12 h-12" />,
      title: "Paint Correction",
      description: "Professional scratch and swirl removal",
      features: [
        "Paint assessment and analysis",
        "Machine polishing with various compounds",
        "Scratch and swirl mark removal",
        "Paint depth restoration", 
        "Clear coat enhancement",
        "Protection application"
      ],
      pricing: {
        basic: { name: "Single Stage", price: 299, duration: "4-6 hours" },
        premium: { name: "Two Stage", price: 499, duration: "6-8 hours" },
        elite: { name: "Multi-Stage", price: 699, duration: "8-12 hours" }
      }
    },
    {
      id: 'engine',
      icon: <Cog className="w-12 h-12" />,
      title: "Engine Bay Cleaning",
      description: "Safe and thorough engine compartment detailing",
      features: [
        "Engine degreasing and cleaning",
        "Safe water-free cleaning methods",
        "Plastic and rubber restoration",
        "Metal surface polishing",
        "Protective coating application",
        "Final inspection and testing"
      ],
      pricing: {
        basic: { name: "Basic Engine", price: 79, duration: "1-2 hours" },
        premium: { name: "Premium Engine", price: 129, duration: "2-3 hours" },
        elite: { name: "Show-Ready Engine", price: 179, duration: "3-4 hours" }
      }
    },
    {
      id: 'headlight',
      icon: <Eye className="w-12 h-12" />,
      title: "Headlight Restoration",
      description: "Restore clarity and brightness to foggy headlights",
      features: [
        "Headlight assessment and masking",
        "Multi-stage sanding process",
        "Polishing and clarity restoration",
        "UV protection coating",
        "Improved visibility and safety",
        "Long-lasting results"
      ],
      pricing: {
        basic: { name: "Standard Restoration", price: 89, duration: "1-2 hours" },
        premium: { name: "Premium Restoration", price: 129, duration: "2-3 hours" },
        elite: { name: "Show Quality", price: 169, duration: "3-4 hours" }
      }
    }
  ];

  const packages = [
    {
      name: "Basic Detail",
      price: 169,
      duration: "4-5 hours",
      popular: false,
      includes: [
        "Basic Interior Detailing",
        "Basic Exterior Detailing", 
        "Tire & Rim Cleaning",
        "Window Cleaning"
      ]
    },
    {
      name: "Premium Detail",
      price: 289,
      duration: "6-7 hours", 
      popular: true,
      includes: [
        "Premium Interior Detailing",
        "Premium Exterior Detailing",
        "Clay Bar Treatment",
        "Machine Polish",
        "Tire & Rim Deep Clean",
        "All Window Cleaning"
      ]
    },
    {
      name: "Elite Detail",
      price: 399,
      duration: "8-10 hours",
      popular: false,
      includes: [
        "Elite Interior Detailing",
        "Elite Exterior Detailing",
        "Paint Enhancement Polish",
        "Premium Wax Application", 
        "Engine Bay Basic Clean",
        "Complete Vehicle Protection"
      ]
    }
  ];

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
              Professional Auto Detailing
              <br />
              <span className="text-gradient">Services in Edmonton</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8 max-w-3xl mx-auto">
              From basic washes to premium ceramic coatings, we offer comprehensive detailing services to keep your vehicle looking its absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose from our range of professional detailing services, each designed to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl text-primary-500">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-2xl text-neutral-800 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                          <span className="text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-neutral-500">{service.pricing.basic.name}</span>
                        <span className="font-semibold text-neutral-800">${service.pricing.basic.price}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-neutral-500">{service.pricing.premium.name}</span>
                        <span className="font-semibold text-neutral-800">${service.pricing.premium.price}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-neutral-500">{service.pricing.elite.name}</span>
                        <span className="font-semibold text-neutral-800">${service.pricing.elite.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
              Complete Detailing Packages
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Save money with our comprehensive detailing packages that combine multiple services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card relative p-8 ${
                  pkg.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-heading font-bold text-2xl text-neutral-800 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-neutral-800 mb-2">
                    ${pkg.price}
                  </div>
                  <div className="text-neutral-500">
                    {pkg.duration}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`block text-center font-semibold py-3 px-6 rounded-lg transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                      : 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white'
                  }`}
                >
                  Book Package
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
              Our Professional Process
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Every vehicle receives our systematic, thorough approach to ensure exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Assessment", description: "Thorough inspection and consultation" },
              { step: 2, title: "Preparation", description: "Safe masking and area setup" },
              { step: 3, title: "Detailing", description: "Professional service execution" },
              { step: 4, title: "Quality Check", description: "Final inspection and delivery" }
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
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-2">
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

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
              Choose your service and book an appointment today. Our team is ready to deliver exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Service
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutral-900 space-x-2">
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;