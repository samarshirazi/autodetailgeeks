import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  // Create responsive srcSet for different screen sizes
  const createSrcSet = (baseSrc: string) => {
    if (baseSrc.startsWith('http') || baseSrc.startsWith('data:')) {
      return undefined;
    }
    
    const ext = baseSrc.split('.').pop();
    const name = baseSrc.replace(`.${ext}`, '');
    
    return `
      ${name}-400.webp 400w,
      ${name}-800.webp 800w,
      ${name}-1200.webp 1200w
    `;
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse"
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        srcSet={createSrcSet(src)}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{ width, height }}
      />
    </div>
  );
};

export default OptimizedImage;