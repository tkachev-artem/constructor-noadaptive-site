'use client';

import Link from 'next/link';
import ImagePlaceholder from './ImagePlaceholder';

interface ProductCardProps {
  id: number;
  title: string;
  price: string;
  model: string;
  imageSrc: string;
}

const ProductCard = ({ id, title, price, model, imageSrc }: ProductCardProps) => {
  const handleAddToCart = () => {
    console.log(`Added product ${id} to cart`);
    // Implementation of cart logic would go here
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleAddToCart();
    }
  };

  return (
    <div 
      className="bg-white rounded-[20px] p-4 flex flex-col relative w-[320px] h-[430px]"
    >
      <Link href={`/product/${id}`} className="block flex-grow">
        <div className="w-full h-[280px] relative mb-4">
          <div className="w-full h-full bg-gray-100 rounded-[10px] flex items-center justify-center">
            <ImagePlaceholder
              src={imageSrc}
              alt={title}
              fill
              className="object-contain rounded-[10px]"
            />
          </div>
        </div>
        
        <h3 className="text-xl font-normal mb-1 whitespace-pre-line">{title}</h3>
        <p className="text-xs text-[#828282] mb-2">{model}</p>
      </Link>
      
      <div className="flex justify-between items-center mt-auto">
        <div className="bg-[#F1F1F1] rounded-full px-5 py-2.5">
          <span className="text-2xl font-normal uppercase">{price}</span>
        </div>
        
        <button
          onClick={handleAddToCart}
          onKeyDown={handleKeyDown}
          className="w-12 h-12 bg-[#F1F1F1] rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#FFCF03]"
          aria-label="Добавить в корзину"
          tabIndex={0}
        >
          <div className="relative w-6 h-6">
            {/* Shopping cart icon placeholder */}
            <span className="text-xl">🛒</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 