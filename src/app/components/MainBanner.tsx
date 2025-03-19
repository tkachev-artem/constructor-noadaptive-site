import Link from 'next/link';
import ImagePlaceholder from './ImagePlaceholder';

interface MainBannerProps {
  title: string;
  subtitle: string;
  backgroundColor: string;
  imageSrc: string;
  ctaLabel: string;
  ctaHref: string;
}

const MainBanner = ({
  title,
  subtitle,
  backgroundColor,
  imageSrc,
  ctaLabel,
  ctaHref
}: MainBannerProps) => {
  return (
    <div 
      className="w-[650px] h-[260px] rounded-[20px] relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Фоновое изображение */}
      <div className="absolute inset-0 w-full h-full">
        <ImagePlaceholder
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Содержимое */}
      <div className="absolute p-6 flex flex-col h-full w-full">
        <div className="text-white text-sm mb-1">{subtitle}</div>
        
        <h2 className="text-white text-3xl font-bold whitespace-pre-line">
          {title}
        </h2>
        
        <div className="mt-auto self-start">
          <Link 
            href={ctaHref}
            className="px-5 py-2 border border-white text-white rounded-[20px] inline-block hover:bg-white/10 transition-colors"
            tabIndex={0}
            aria-label={`Перейти к ${ctaLabel}`}
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner; 