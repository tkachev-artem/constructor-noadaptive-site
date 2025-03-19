'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navItems } from '../config';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // Заглушка для количества товаров в корзине
  const cartCount = 0;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementation of search logic would go here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="w-full bg-[#F3F3F3]">
      {/* Top Menu */}
      <div className="flex justify-center py-5">
        <div className="w-full max-w-[1320px]">
          <nav className="flex justify-start items-center gap-5">
            {navItems.topMenu.map((item, index) => (
              <Link 
                href={item.href} 
                key={index}
                className="uppercase text-sm hover:opacity-70 transition-opacity"
                tabIndex={0}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Second Menu with Logo, Search and Cart */}
      <div className="flex justify-center">
        <div className="w-full max-w-[1320px] flex justify-between items-center h-10">
          {/* Logo */}
          <div className="h-10 w-10 relative">
            <Link href="/" aria-label="На главную">
              <div className="w-10 h-10 relative">
                {/* Replace with actual logo */}
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white text-xs">
                  ЛОГО
                </div>
              </div>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <form onSubmit={handleSearch} className="flex items-center">
              <div className="h-10 w-[400px] border border-[#D6D6D6] bg-white rounded-full flex items-center justify-between">
                <input
                  type="text"
                  placeholder="поиск по сайту"
                  className="h-full px-5 py-2 rounded-full bg-transparent outline-none w-full text-[#D6D6D6] uppercase"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="h-8 w-8 bg-[#FFCF03] rounded-full flex items-center justify-center mr-1"
                  aria-label="Поиск"
                >
                  <div className="w-5 h-5 flex items-center justify-center">
                    {/* Replace with actual search icon */}
                    <span className="text-xs">🔍</span>
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 relative flex items-center justify-center">
              {/* Replace with actual cart icon */}
              <div className="w-10 h-10 rounded-full border border-[#D6D6D6] bg-white flex items-center justify-center">
                <span className="text-xs">🛒</span>
              </div>
            </div>
            <div className="h-10 border border-[#D6D6D6] bg-white rounded-full px-5 flex items-center">
              <span className="uppercase text-base">корзина ({cartCount})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Menu */}
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-[1320px] flex justify-center items-center gap-10 h-10">
          {navItems.categoryMenu.map((item, index) => (
            <Link 
              href={item.href} 
              key={index} 
              className="h-10 rounded-full border border-[#D6D6D6] bg-white px-5 flex items-center justify-center uppercase"
              tabIndex={0}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header; 