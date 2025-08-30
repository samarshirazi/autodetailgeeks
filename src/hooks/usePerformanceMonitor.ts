import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export const usePerformanceMonitor = () => {
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const metrics: PerformanceMetrics = {};

      entries.forEach((entry) => {
        switch (entry.entryType) {
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input':
            metrics.fid = entry.processingStart - entry.startTime;
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              metrics.cls = (metrics.cls || 0) + (entry as any).value;
            }
            break;
        }
      });

      // Send metrics to analytics (console.log in dev)
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }
    });

    // Observe various performance entries
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // TTFB measurement
    if ('navigation' in performance) {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        if (process.env.NODE_ENV === 'development') {
          console.log('TTFB:', ttfb);
        }
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);
};

// Web Vitals tracking function
export const trackWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric.name, metric.value);
  }
  
  // In production, you would send this to your analytics service
  // analytics.track('Web Vital', {
  //   name: metric.name,
  //   value: metric.value,
  //   id: metric.id,
  //   delta: metric.delta
  // });
};