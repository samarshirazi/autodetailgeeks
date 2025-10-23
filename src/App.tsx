import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const WinterCarDetailingEdmontonGuide = lazy(() => import('./pages/blog/WinterCarDetailingEdmontonGuide'));
const CeramicCoatingVsWaxEdmonton = lazy(() => import('./pages/blog/CeramicCoatingVsWaxEdmonton'));
const NotFound = lazy(() => import('./pages/NotFound'));

const LoadingFallback: React.FC = () => null;

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/winter-car-detailing-edmonton-guide" element={<WinterCarDetailingEdmontonGuide />} />
            <Route path="/blog/ceramic-coating-vs-wax-edmonton" element={<CeramicCoatingVsWaxEdmonton />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
