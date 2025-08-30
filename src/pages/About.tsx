import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Shield, 
  Clock, 
  CheckCircle, 
  Star,
  Calendar,
  Heart,
  Target,
  Leaf
} from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Excellence",
      description: "We're car enthusiasts who understand the pride you take in your vehicle. Every detail matters to us."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "We use only premium products and proven techniques to ensure lasting results and complete satisfaction."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Eco-Friendly Approach",
      description: "Our commitment to the environment means using biodegradable products that are safe for you and the planet."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer Focus",
      description: "Your satisfaction is our success. We tailor our services to meet your specific needs and exceed expectations."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "3+", label: "Years Experience" },
    { number: "5", label: "Star Rating" },
    { number: "100%", label: "Satisfaction Rate" }
  ];

  const certifications = [
    {
      title: "Professional Detailing Certification",
      issuer: "International Detailing Association",
      description: "Certified in advanced automotive detailing techniques"
    },
    {
      title: "Ceramic Coating Specialist",
      issuer: "Industry Leading Brands",
      description: "Authorized installer for premium ceramic coating systems"
    },
    {
      title: "Environmental Safety Certified",
      issuer: "Environmental Protection Agency",
      description: "Certified in eco-friendly detailing practices and products"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
                About
                <br />
                <span className="text-gradient">AutoDetailGeeks</span>
              </h1>
              <p className="text-xl text-neutral-200 mb-8">
                We're passionate car enthusiasts dedicated to delivering Edmonton's finest auto detailing services. Our mission is simple: bring back the showroom shine your vehicle deserves.
              </p>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Work With Us
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-neutral-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  AutoDetailGeeks was born from a simple passion: the love of cars and the satisfaction of seeing them at their absolute best. What started as a hobby quickly grew into Edmonton's most trusted auto detailing service.
                </p>
                <p>
                  Our founder, a lifelong car enthusiast, noticed a gap in the Edmonton market for truly professional, detail-oriented auto care. Too many services focused on speed over quality, leaving customers with mediocre results that didn't last.
                </p>
                <p>
                  That's why we built AutoDetailGeeks differently. We take the time to do things right, using premium products and proven techniques that deliver results you can see and feel. Every vehicle that leaves our care is a testament to our commitment to excellence.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl p-8 text-center">
                <p className="text-neutral-500 text-lg">
                  Professional Team Photo
                  <br />
                  <span className="text-sm">Coming Soon</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
                Our Mission & Values
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                We're driven by core values that guide everything we do, from the products we choose to the service we provide.
              </p>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="card p-8 mb-16 text-center"
          >
            <h3 className="font-heading font-bold text-2xl text-neutral-800 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto italic">
              "To deliver unmatched auto detailing services with precision, care, and eco-friendly products, while building lasting relationships with our customers through exceptional service and guaranteed satisfaction."
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl text-primary-500">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
                Professional Certifications
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Our team maintains industry certifications and partnerships to ensure we deliver the highest quality service.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-xl text-accent-500 mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-3">
                  {cert.issuer}
                </p>
                <p className="text-neutral-600">
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
                Why Edmonton Chooses Us
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                We've built our reputation on trust, quality, and exceptional customer service.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Trained professionals with years of detailing experience"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality Guarantee",
                description: "100% satisfaction guarantee on all our services"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Reliable Service",
                description: "On-time service with efficient turnaround times"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "5-Star Reviews",
                description: "Consistently rated 5 stars by our satisfied customers"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-xl text-primary-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-6">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Premium Products Only</h3>
                    <p className="text-neutral-600">We use only the highest quality, professional-grade products from trusted brands.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Meticulous Attention to Detail</h3>
                    <p className="text-neutral-600">Every surface, every crevice - we ensure no detail is overlooked in our thorough process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Continuous Education</h3>
                    <p className="text-neutral-600">We stay current with the latest techniques and technologies in automotive care.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-neutral-800 mb-1">Customer-First Approach</h3>
                    <p className="text-neutral-600">Your satisfaction drives every decision we make and service we provide.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
                <h3 className="font-heading font-bold text-2xl text-neutral-800 mb-4 text-center">
                  Our Promise to You
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-700">Transparent pricing with no hidden fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-700">Respect for your time and schedule</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-700">Safe handling of your valuable investment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-neutral-700">Guaranteed satisfaction or we make it right</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Experience the AutoDetailGeeks Difference
            </h2>
            <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us with their vehicles. Book your appointment today and see why Edmonton chooses AutoDetailGeeks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Link>
              <Link to="/services" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-neutral-900">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;