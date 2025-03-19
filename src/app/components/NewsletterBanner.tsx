'use client';

import { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import Image from 'next/image';
interface NewsletterBannerProps {
  title: string;
  backgroundColor: string;
  imageSrc: string;
  inputPlaceholder: string;
}

const NewsletterBanner = ({
  title,
  backgroundColor,
  imageSrc,
  inputPlaceholder
}: NewsletterBannerProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing with email:', email);
    // Implementation of newsletter subscription logic would go here
    setEmail('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div 
      className="w-full max-w-[1320px] h-[335px] rounded-[20px] relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <ImagePlaceholder
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
      </div>
      
      {/* Content */}
      <div className="absolute p-10 flex flex-col h-full justify-center items-start w-full">
        <div className="flex flex-col items-center pl-[90px]">
          <h2 className="text-white text-4xl font-semibold whitespace-pre-line mb-8 text-center">
            {title}
          </h2>
          
          <form onSubmit={handleSubmit} className="flex items-center relative max-w-[400px] w-full">
            <input
              type="email"
              value={email}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder={inputPlaceholder}
              className="w-full h-[60px] bg-white rounded-[20px] px-6 py-3 text-[#868686] text-xl outline-none"
              aria-label="Email для подписки на рассылку"
            />
            <button
              type="submit"
              className="absolute right-4 w-12 h-12 bg-[#FFCF03] rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Подписаться на рассылку"
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Image src="/icons/arrow.svg" alt="arrow-right" width={20} height={20} />
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner; 