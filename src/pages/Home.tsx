import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { 
  Car, 
  Sparkles, 
  Shield, 
  Wrench, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react';
import heroVideo from '../assets/perfect.mp4';

const Home: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Interior Detailing",
      description: "Deep cleaning, vacuuming, stain removal, and leather conditioning"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Exterior Detailing", 
      description: "Hand wash, clay bar treatment, waxing, and professional polishing"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ceramic Coating",
      description: "Ultimate paint protection with hydrophobic finish and lasting shine"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Paint Correction",
      description: "Scratch and swirl removal with precision machine polishing"
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-500" />,
      title: "Certified & Experienced",
      description: "Professional detailing team with years of expertise"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-500" />,
      title: "Eco-Friendly Products", 
      description: "Safe, biodegradable products that protect your car and environment"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-500" />,
      title: "Fast Turnaround",
      description: "Quick and efficient service without compromising quality"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-500" />,
      title: "100% Satisfaction Guarantee",
      description: "Your satisfaction is our priority - we guarantee our work"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely incredible service! My car looks better than when I first bought it. The team was professional and the results speak for themselves."
    },
    {
      name: "Mike Chen", 
      rating: 5,
      text: "Best detailing service in Edmonton! The ceramic coating has kept my car looking pristine for months. Highly recommended!"
    },
    {
      name: "Jennifer Davis",
      rating: 5,
      text: "Amazing attention to detail. They transformed my car's interior completely. Will definitely be coming back regularly."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background media with overlay */}
        <div className="absolute inset-0">
          {shouldReduceMotion ? (
            <div className="hero-gradient w-full h-full" />
          ) : (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          )}
          <div className="absolute inset-0 bg-black/55" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          >
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-7xl mb-6">
              Edmonton's Premium
              <br />
              <span className="text-gradient">Auto Detailing Experts</span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-200 mb-8 max-w-3xl mx-auto">
              From deep interior cleaning to ceramic coating, we bring back the showroom shine your car deserves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </Link>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutral-900">
                Get Free Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
              Our Premium Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Professional auto detailing services designed to keep your vehicle looking its absolute best
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl text-primary-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary space-x-2">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
              See The Difference
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Real results from our professional detailing services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-neutral-800 mb-4">
                Professional Results You Can Trust
              </h3>
              <p className="text-neutral-600 mb-6">
                Our experienced team uses professional-grade equipment and premium products to deliver exceptional results every time. From paint correction to interior restoration, we transform your vehicle inside and out.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Professional-grade equipment and products</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Experienced and certified technicians</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-500" />
                  <span>Satisfaction guarantee on all services</span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/gallery" className="btn-primary space-x-2">
                  <span>View Full Gallery</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-8 text-center">
                <p className="text-neutral-500 text-lg">
                  Before & After Gallery
                  <br />
                  <span className="text-sm">Coming Soon</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
              Why Choose AutoDetailGeeks?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We're committed to delivering the highest quality auto detailing services in Edmonton
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex space-x-4"
              >
                <div className="flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from satisfied customers across Edmonton
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-600 mb-4">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-neutral-800">
                  {testimonial.name}
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
              Your Car Deserves Expert Care
            </h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
              Ready to give your vehicle the professional treatment it deserves? Book your appointment today and experience the AutoDetailGeeks difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <a href="tel:+14313746004" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutral-900">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
