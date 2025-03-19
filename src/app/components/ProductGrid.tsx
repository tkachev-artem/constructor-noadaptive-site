import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: string;
  model: string;
  imageSrc: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
}

const ProductGrid = ({ 
  products,
  title,
  ctaLabel,
  ctaHref,
  onCtaClick
}: ProductGridProps) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="w-full flex flex-col items-center gap-5">
      {title && (
        <div className="w-full max-w-[1320px] flex justify-between items-center h-[50px] mb-5">
          <h2 className="text-4xl uppercase font-normal">{title}</h2>
          
          {ctaLabel && (
            <button 
              onClick={onCtaClick}
              className="h-[50px] bg-[#FFCF03] rounded-full px-8 flex items-center justify-center text-2xl"
              tabIndex={0}
              aria-label={ctaLabel}
            >
              {ctaLabel}
            </button>
          )}
        </div>
      )}
      
      <div className="w-full max-w-[1320px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            model={product.model}
            imageSrc={product.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid; 