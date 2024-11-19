import React, { useState } from 'react';
import Loader from './Loader';

interface LoadingImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
}

const LoadingImage: React.FC<LoadingImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '' 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${containerClassName}`}>
      {isLoading && (
        <div id="loader-wrapper">
          <Loader />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
    </div>
  );
};

export default LoadingImage; 