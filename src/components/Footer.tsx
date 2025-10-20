import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-heading font-bold text-xl text-white">
                AutoDetailGeeks
              </span>
            </div>
            <p className="text-neutral-300 mb-4">
              Edmonton's premier auto detailing service. We deliver unmatched detailing services with precision, care, and eco-friendly products.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-neutral-300 hover:text-primary-500 transition-colors">Interior Detailing</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-primary-500 transition-colors">Exterior Detailing</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-primary-500 transition-colors">Ceramic Coating</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-primary-500 transition-colors">Paint Correction</Link></li>
              <li><Link to="/services" className="text-neutral-300 hover:text-primary-500 transition-colors">Engine Bay Cleaning</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-neutral-300 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-neutral-300 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/gallery" className="text-neutral-300 hover:text-primary-500 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-primary-500 transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="text-neutral-300 hover:text-primary-500 transition-colors">Get Quote</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg text-white mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-500 mt-0.5" />
                <div>
                  <a href="tel:+14313746004" className="text-neutral-300 hover:text-primary-500 transition-colors">
                    +1 431 374 6004
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-500 mt-0.5" />
                <div>
                  <a href="mailto:info@autodetailgeeks.com" className="text-neutral-300 hover:text-primary-500 transition-colors">
                    info@autodetailgeeks.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-500 mt-0.5" />
                <div>
                  <span className="text-neutral-300">
                    Edmonton, Alberta<br />
                    Canada
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-500 mt-0.5" />
                <div>
                  <span className="text-neutral-300">
                    Mon-Fri: 8AM-6PM<br />
                    Sat: 9AM-5PM<br />
                    Sun: Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-400 text-sm">
              © 2024 AutoDetailGeeks. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-neutral-400 hover:text-primary-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-400 hover:text-primary-500 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
