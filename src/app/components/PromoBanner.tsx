import Link from 'next/link';
import ImagePlaceholder from './ImagePlaceholder';

interface PromoBannerProps {
  title: string;
  backgroundColor: string;
  imageSrc: string;
  ctaLabel: string;
  ctaHref: string;
}

const PromoBanner = ({
  title,
  backgroundColor,
  imageSrc,
  ctaLabel,
  ctaHref
}: PromoBannerProps) => {
  return (
    <div 
      className="w-full max-w-[1320px] h-[445px] rounded-[20px] relative overflow-hidden"
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
      <div className="absolute p-10 flex flex-col h-full justify-center items-end w-full">
        <div className="flex flex-col items-center pr-[90px]">
          <h2 className="text-black text-4xl font-semibold whitespace-pre-line mb-8 text-center">
            {title}
          </h2>
        
          <Link 
            href={ctaHref}
            className="px-8 py-3 border border-black text-black rounded-full text-2xl hover:bg-black/5 transition-colors"
            tabIndex={0}
            aria-label={ctaLabel}
          >
          {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner; 