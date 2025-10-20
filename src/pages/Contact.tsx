import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Calendar,
  User,
  MessageCircle,
  Car
} from 'lucide-react';
import { sendToGHL } from '../services/ghl-webhook';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carType: '',
    service: '',
    date: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Interior Detailing',
    'Exterior Detailing',
    'Ceramic Coating',
    'Paint Correction',
    'Engine Bay Cleaning',
    'Headlight Restoration',
    'Complete Detail Package',
    'Custom Service'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to GoHighLevel webhook
      const result = await sendToGHL({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        vehicle: formData.carType,
        service: formData.service,
        preferred_date: formData.date,
        message: formData.message,
        source: 'Contact Page Form',
        page_url: window.location.href
      });

      if (result.success) {
        console.log('Successfully submitted to GoHighLevel');
      } else {
        console.error('GHL submission error:', result.error);
      }
      
      // Always show success to user (even if GHL fails, we don't want to confuse the customer)
      setIsSubmitting(false);
      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      // Still show success to user
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-neutral-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-8 text-center max-w-md mx-4"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-4">
            Thank You!
          </h2>
          <p className="text-neutral-600 mb-6">
            We've received your booking request and will contact you within 24 hours to confirm your appointment.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-primary"
          >
            Book Another Service
          </button>
        </motion.div>
      </div>
    );
  }

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
              Book Your
              <br />
              <span className="text-gradient">Appointment</span>
            </h1>
            <p className="text-xl text-neutral-200 mb-8 max-w-3xl mx-auto">
              Ready to transform your vehicle? Get in touch with Edmonton's premier auto detailing experts. We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="card p-8"
            >
              <h2 className="font-heading font-bold text-3xl text-neutral-800 mb-6">
                Book Your Service
              </h2>
              <p className="text-neutral-600 mb-8">
                Fill out the form below and we'll get back to you with a quote and available appointment times.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      placeholder="(587) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      <Car className="w-4 h-4 inline mr-2" />
                      Vehicle Make & Model
                    </label>
                    <input
                      type="text"
                      name="carType"
                      value={formData.carType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      placeholder="e.g., 2020 Honda Civic"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-neutral-700 font-semibold mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-700 font-semibold mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all resize-none"
                    placeholder="Tell us more about your vehicle's condition or any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Book Appointment
                    </div>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="card p-8">
                <h3 className="font-heading font-bold text-2xl text-neutral-800 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Phone</h4>
                      <a href="tel:+14313746004" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        +1 431 374 6004
                      </a>
                      <p className="text-neutral-500 text-sm mt-1">Call or text anytime</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Email</h4>
                      <a href="mailto:info@autodetailgeeks.com" className="text-neutral-600 hover:text-primary-500 transition-colors">
                        info@autodetailgeeks.com
                      </a>
                      <p className="text-neutral-500 text-sm mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Location</h4>
                      <p className="text-neutral-600">Edmonton, Alberta</p>
                      <p className="text-neutral-500 text-sm mt-1">Mobile service available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Hours</h4>
                      <div className="text-neutral-600 space-y-1">
                        <p>Monday: 07:00 AM - 11:30 PM</p>
                        <p>Tuesday: 07:00 AM - 11:30 PM</p>
                        <p>Wednesday: 07:00 AM - 11:30 PM</p>
                        <p>Thursday: 07:00 AM - 11:30 PM</p>
                        <p>Friday: 07:00 AM - 11:30 PM</p>
                        <p>Saturday: 07:00 AM - 11:30 PM</p>
                        <p>Sunday: 07:00 AM - 11:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="card p-6 bg-accent-50 border-accent-200">
                <h4 className="font-heading font-semibold text-xl text-neutral-800 mb-3">
                  Need Immediate Service?
                </h4>
                <p className="text-neutral-600 mb-4">
                  For urgent detailing needs or last-minute appointments, call us directly.
                </p>
                <a 
                  href="tel:+14313746004" 
                  className="btn-secondary inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </div>

              {/* Service Area */}
              <div className="card p-6">
                <h4 className="font-heading font-semibold text-xl text-neutral-800 mb-3">
                  Service Area
                </h4>
                <p className="text-neutral-600 mb-4">
                  We proudly serve Edmonton and surrounding areas including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-neutral-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                    <span>Edmonton</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                    <span>Sherwood Park</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                    <span>St. Albert</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                    <span>Leduc</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-neutral-600">
                Quick answers to common questions about our services
              </p>
            </motion.div>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical detailing service take?",
                answer: "Service times vary depending on the package. Basic details take 4-5 hours, while premium services can take 6-8 hours. We'll provide an accurate timeframe when you book."
              },
              {
                question: "Do you offer mobile detailing services?",
                answer: "Yes! We bring our professional equipment directly to your location anywhere in the Edmonton area. Mobile service includes the same high-quality results as our workshop."
              },
              {
                question: "What's included in your satisfaction guarantee?",
                answer: "If you're not completely satisfied with our work, we'll make it right at no additional cost. Your satisfaction is our top priority."
              },
              {
                question: "How often should I have my car detailed?",
                answer: "For most vehicles, we recommend professional detailing every 3-6 months. Luxury vehicles or those exposed to harsh conditions may benefit from more frequent service."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <h4 className="font-heading font-semibold text-lg text-neutral-800 mb-3">
                  {faq.question}
                </h4>
                <p className="text-neutral-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
