import Link from 'next/link';
import ImagePlaceholder from './ImagePlaceholder';
import { communityContent } from '../config';

interface CommunitySectionProps {
  title: string;
  ctaLabel: string;
  ctaHref: string;
}

const CommunitySection = ({ title, ctaLabel, ctaHref }: CommunitySectionProps) => {
  return (
    <section className="w-full max-w-[1440px] flex flex-col items-center gap-5">
      {/* Title section */}
      <div className="w-full max-w-[1320px] flex justify-between items-center h-[50px]">
        <h2 className="text-4xl uppercase font-normal">{title}</h2>
        
        <Link 
          href={ctaHref}
          className="h-[50px] border border-black rounded-full px-8 flex items-center justify-center text-2xl"
          tabIndex={0}
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </Link>
      </div>
      
      {/* Community content */}
      <div className="w-full max-w-[1320px] flex justify-center gap-5 mt-5">
        {communityContent.map((item) => (
          <div 
            key={item.id}
            className="w-[650px] h-[365px] rounded-[20px] relative overflow-hidden"
          >
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full">
              <ImagePlaceholder
                src={item.imageSrc || '/images/community-placeholder.jpg'}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            
            {/* User info */}
            <div className="absolute bottom-5 right-5 flex items-center">
              <div className="bg-white px-5 py-2.5 rounded-full">
                <span className="text-base uppercase">{item.username}</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white ml-3 flex items-center justify-center overflow-hidden">
                <ImagePlaceholder
                  src={item.avatarSrc || '/images/avatar-placeholder.jpg'}
                  alt={item.username}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CommunitySection; 