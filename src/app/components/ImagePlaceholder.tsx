'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
}

const ImagePlaceholder = ({
  src,
  alt,
  width = 300,
  height = 200,
  fill = false,
  className = ''
}: ImagePlaceholderProps) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setError(false);
  }, [src]);

  const handleError = () => {
    setError(true);
    setImgSrc('/images/placeholder.jpg');
  };

  if (error || !src) {
    return (
      <div 
        className={`bg-white flex items-center justify-center text-gray-400 ${className}`}
        style={fill ? {position: 'relative', width: '100%', height: '100%'} : {width, height}}
      >
        {alt || 'Изображение'}
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      className={className}
      onError={handleError}
    />
  );
};

export default ImagePlaceholder; 