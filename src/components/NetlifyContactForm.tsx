import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send,
  CheckCircle,
  User,
  Mail,
  Phone,
  Car,
  Calendar,
  MessageCircle
} from 'lucide-react';

const NetlifyContactForm: React.FC = () => {
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

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 text-center max-w-md mx-auto"
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
    );
  }

  return (
    <div className="card p-8">
      <h2 className="font-heading font-bold text-3xl text-neutral-800 mb-6">
        Book Your Service
      </h2>
      <p className="text-neutral-600 mb-8">
        Fill out the form below and we'll get back to you with a quote and available appointment times.
      </p>

      {/* Netlify Form */}
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/contact?success=true"
        className="space-y-6"
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <div style={{ display: 'none' }}>
          <label>Don't fill this out if you're human: <input name="bot-field" /></label>
        </div>

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
          <div className="flex items-center justify-center space-x-2">
            <Send className="w-5 h-5" />
            <span>Book Appointment</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default NetlifyContactForm;