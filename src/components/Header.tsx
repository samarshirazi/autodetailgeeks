import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/mainlogo.png';
import logoSmall from '../assets/mainlogo-48.webp';
import logoLarge from '../assets/mainlogo-96.webp';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const servicePages = [
    { name: 'All Services', href: '/services' },
    { name: 'Auto Detailing', href: '/services/auto-detailing-edmonton.html' },
    { name: 'Ceramic Coating', href: '/services/ceramic-coating-edmonton.html' },
    { name: 'Mobile Detailing', href: '/services/mobile-detailing-edmonton.html' },
    { name: 'Interior Detailing', href: '/services/interior-detailing-edmonton.html' },
    { name: 'Headlight Restoration', href: '/services/headlight-restoration-edmonton.html' },
    { name: 'Paint Correction', href: '/services/paint-correction-edmonton.html' },
    { name: 'Car Waxing', href: '/services/car-waxing-edmonton.html' },
    { name: 'Engine Detailing', href: '/services/engine-detailing-edmonton.html' },
    { name: 'Steam Cleaning', href: '/services/steam-cleaning-edmonton.html' },
    { name: 'Seat Shampooing', href: '/services/seat-shampooing-edmonton.html' },
    { name: 'Clay Bar Treatment', href: '/services/clay-bar-treatment-edmonton.html' },
    { name: 'Wheel Washing', href: '/services/wheel-washing-edmonton.html' },
    { name: 'Full Body Wash', href: '/services/full-body-wash-edmonton.html' },
    { name: 'Odor Removal', href: '/services/odor-removal-edmonton.html' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <picture>
              <source
                srcSet={logoLarge}
                media="(min-width: 1024px)"
                type="image/webp"
                width={48}
                height={48}
              />
              <source
                srcSet={logoSmall}
                type="image/webp"
                width={40}
                height={40}
              />
              <img
                src={logo}
                alt="AutoDetailGeeks logo"
                width={40}
                height={40}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-10 w-10 lg:h-12 lg:w-12 object-contain drop-shadow-sm"
              />
            </picture>
            <span className="font-heading font-bold text-xl lg:text-2xl text-neutral-800">
              AutoDetailGeeks
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`font-medium transition-colors duration-200 flex items-center gap-1 ${
                  location.pathname.includes('/services')
                    ? 'text-primary-500'
                    : 'text-neutral-600 hover:text-primary-500'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 z-50">
                  {servicePages.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-150"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+14313746004" 
              className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">+1 431 374 6004</span>
            </a>
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-neutral-600 hover:text-neutral-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-neutral-200 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-primary-500'
                      : 'text-neutral-600 hover:text-primary-500'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`w-full flex items-center justify-between py-2 font-medium transition-colors duration-200 ${
                    location.pathname.includes('/services')
                      ? 'text-primary-500'
                      : 'text-neutral-600 hover:text-primary-500'
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    {servicePages.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block py-2 text-sm text-neutral-600 hover:text-primary-500 transition-colors duration-150"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setMobileServicesOpen(false);
                        }}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href="tel:+14313746004"
                  className="flex items-center space-x-2 text-primary-500 hover:text-primary-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+1 431 374 6004</span>
                </a>
                <Link
                  to="/contact"
                  className="btn-primary block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
