import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      slug: 'winter-car-detailing-edmonton-guide',
      title: 'Complete Winter Car Detailing Guide for Edmonton Drivers',
      excerpt: 'Protect your vehicle from harsh Alberta winters with our comprehensive detailing guide. Learn about salt removal, interior protection, and winter-specific maintenance.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-20',
      readTime: '8 min read',
      category: 'Seasonal Care',
      image: '/images/blog/winter-detailing.jpg'
    },
    {
      slug: 'ceramic-coating-vs-wax-edmonton',
      title: 'Ceramic Coating vs Wax: Which is Best for Edmonton Climate?',
      excerpt: 'Discover the differences between ceramic coating and traditional wax, and why ceramic coating is the superior choice for Edmonton\'s extreme weather conditions.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-18',
      readTime: '6 min read',
      category: 'Paint Protection',
      image: '/images/blog/ceramic-vs-wax.jpg'
    },
    {
      slug: 'remove-road-salt-car-edmonton',
      title: 'How to Remove Road Salt from Your Car: Edmonton Edition',
      excerpt: 'Road salt is destroying Edmonton vehicles. Learn the proper techniques to remove salt buildup and prevent corrosion on your car\'s paint and undercarriage.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-15',
      readTime: '7 min read',
      category: 'Maintenance',
      image: '/images/blog/road-salt-removal.jpg'
    },
    {
      slug: 'paint-correction-worth-it',
      title: 'Is Paint Correction Worth It? A Complete Cost-Benefit Analysis',
      excerpt: 'Thinking about paint correction for your vehicle? We break down the costs, benefits, and long-term value of professional paint correction services.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-12',
      readTime: '9 min read',
      category: 'Paint Protection',
      image: '/images/blog/paint-correction.jpg'
    },
    {
      slug: 'mobile-detailing-benefits-edmonton',
      title: '10 Reasons Why Mobile Detailing is Perfect for Busy Edmonton Professionals',
      excerpt: 'Save time and get professional results with mobile detailing. Discover why Edmonton professionals are choosing on-site detailing services.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-10',
      readTime: '5 min read',
      category: 'Mobile Detailing',
      image: '/images/blog/mobile-detailing.jpg'
    },
    {
      slug: 'car-interior-detailing-checklist',
      title: 'Ultimate Car Interior Detailing Checklist: 25-Point Professional Guide',
      excerpt: 'Follow our professional 25-point checklist to achieve showroom-quality interior detailing results. Perfect for DIY enthusiasts and professionals alike.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-08',
      readTime: '10 min read',
      category: 'Interior Care',
      image: '/images/blog/interior-checklist.jpg'
    },
    {
      slug: 'headlight-restoration-before-after',
      title: 'Headlight Restoration: Dramatic Before & After Results from Edmonton',
      excerpt: 'See stunning before and after photos from our headlight restoration services. Learn why cloudy headlights are dangerous and how we fix them.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Restoration',
      image: '/images/blog/headlight-restoration.jpg'
    },
    {
      slug: 'spring-car-detailing-edmonton',
      title: 'Spring Car Detailing: Preparing Your Vehicle After Edmonton Winter',
      excerpt: 'Spring is here! Learn our step-by-step process for bringing your vehicle back to life after a brutal Edmonton winter season.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-03',
      readTime: '8 min read',
      category: 'Seasonal Care',
      image: '/images/blog/spring-detailing.jpg'
    },
    {
      slug: 'best-car-detailing-products-2025',
      title: 'Best Car Detailing Products 2025: Professional Recommendations',
      excerpt: 'Discover the top detailing products used by professionals in 2025. From cleaners to protectants, we review the best products on the market.',
      author: 'AutoDetailGeeks Team',
      date: '2025-01-01',
      readTime: '12 min read',
      category: 'Products',
      image: '/images/blog/best-products.jpg'
    },
    {
      slug: 'how-often-detail-car-edmonton',
      title: 'How Often Should You Detail Your Car in Edmonton? Expert Advice',
      excerpt: 'Get expert recommendations on detailing frequency for Edmonton\'s climate. Learn when to schedule interior, exterior, and full detailing services.',
      author: 'AutoDetailGeeks Team',
      date: '2024-12-28',
      readTime: '7 min read',
      category: 'Maintenance',
      image: '/images/blog/detailing-frequency.jpg'
    }
  ];

  const categories = ['All', 'Seasonal Care', 'Paint Protection', 'Maintenance', 'Interior Care', 'Mobile Detailing', 'Restoration', 'Products'];

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "AutoDetailGeeks Blog - Edmonton Auto Detailing Tips & Guides",
    "description": "Expert auto detailing advice, seasonal care tips, and product reviews for Edmonton vehicle owners.",
    "url": "https://www.autodetailgeeks.ca/blog",
    "publisher": {
      "@type": "Organization",
      "name": "AutoDetailGeeks",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.autodetailgeeks.ca/mainlogo.png"
      }
    }
  };

  return (
    <>
      <SEO
        title="Auto Detailing Blog - Tips, Guides & Advice for Edmonton Drivers"
        description="Expert auto detailing tips, seasonal maintenance guides, and product reviews from Edmonton's premier detailing professionals. Learn how to protect and maintain your vehicle."
        keywords="car detailing tips, auto detailing guide, winter car care, ceramic coating guide, paint correction tips, Edmonton car care, vehicle maintenance"
        canonical="https://www.autodetailgeeks.ca/blog"
        structuredData={blogSchema}
      />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-16 hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
                Auto Detailing Tips & Guides
              </h1>
              <p className="text-xl text-neutral-200 max-w-3xl mx-auto">
                Expert advice from Edmonton's premier auto detailing professionals. Learn how to protect, maintain, and enhance your vehicle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                      <span className="text-sm">Image Coming Soon</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                      <span className="inline-flex items-center gap-1">
                        <Tag className="w-4 h-4" />
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-semibold text-xl text-neutral-800 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-neutral-500 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-primary-500 hover:text-primary-600 font-medium inline-flex items-center gap-1"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-neutral-800 mb-6">
              Ready to Experience Professional Detailing?
            </h2>
            <p className="text-xl text-neutral-600 mb-8">
              Stop reading and start experiencing showroom-quality results. Book your detailing appointment today!
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Book Your Appointment
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
