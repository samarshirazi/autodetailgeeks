import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Phone } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-neutral-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-8xl font-bold text-primary-500 mb-6">404</div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary space-x-2">
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <Link to="/services" className="btn-outline space-x-2">
              <span>View Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="mt-12 p-6 bg-white rounded-xl shadow-card">
            <h3 className="font-heading font-semibold text-xl text-neutral-800 mb-3">
              Need Help?
            </h3>
            <p className="text-neutral-600 mb-4">
              If you're looking for our auto detailing services, we're here to help!
            </p>
            <a 
              href="tel:+15875551234" 
              className="inline-flex items-center space-x-2 text-primary-500 hover:text-primary-600 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call us at (587) 555-1234</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;