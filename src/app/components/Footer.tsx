import Link from 'next/link';
import { siteConfig, navItems } from '../config';
import Image from 'next/image';
import { footerIcons } from '../config';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F3F3F3] py-10">
      <div className="flex flex-col items-center justify-center gap-5 max-w-[1440px] mx-auto">
        {/* Контактная информация */}
        <div className="w-full max-w-[1320px] flex flex-wrap gap-5">
          <div className="border border-black rounded-full px-5 py-2.5 flex items-center">
            <span className="text-xl uppercase">{siteConfig.contactPhone}</span>
          </div>
          
          <div className="flex flex-col items-start justify-center">
            <p className="text-xl">{siteConfig.workingHours}</p>
            <p className="text-xl">{siteConfig.workingInfo}</p>
          </div>
        </div>
        
        {/* Социальные сети и контактные ссылки */}
        <div className="w-full max-w-[1320px] flex flex-wrap justify-between gap-10 mt-5">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-semibold">Связаться с нами</h3>
            <div className="flex gap-2.5">
              {/* Иконки социальных сетей */}
              <Link 
                href="/contact/email" 
                className="w-8 h-8 flex items-center justify-center bg-black rounded-full"
                aria-label="Написать нам по email"
              >
                <Image
                  src={footerIcons.icons[0].href}
                  alt={footerIcons.icons[0].alt}
                  width={footerIcons.icons[0].width}
                  height={footerIcons.icons[0].height}
                />
              </Link>
              <Link 
                href="/contact/phone" 
                className="w-8 h-8 flex items-center justify-center bg-black rounded-full"
                aria-label="Позвонить"
              >
                <Image
                  src={footerIcons.icons[1].href}
                  alt={footerIcons.icons[1].alt}
                  width={footerIcons.icons[1].width}
                  height={footerIcons.icons[1].height}
                />
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-2.5">
            <h3 className="text-sm font-semibold">Мы в соцсетях</h3>
            <div className="flex gap-2.5">
              {/* Иконки социальных сетей */}
              <Link 
                href="" 
                className="w-8 h-8 flex items-center justify-center bg-black rounded-full"
                aria-label="Наша страница ВКонтакте"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={footerIcons.icons[2].href}
                  alt={footerIcons.icons[2].alt}
                  width={footerIcons.icons[2].width}
                  height={footerIcons.icons[2].height}
                />
              </Link>
              <Link 
                href="" 
                className="w-8 h-8 flex items-center justify-center bg-black rounded-full"
                aria-label="Наш канал в Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={footerIcons.icons[3].href}
                  alt={footerIcons.icons[3].alt}
                  width={footerIcons.icons[3].width}
                  height={footerIcons.icons[3].height}
                />
              </Link>
            </div>
          </div>
        </div>
        
        
        {/* Авторские права и юридическая информация */}
        <div className="w-full max-w-[1320px] mt-2 flex flex-col items-center justify-center">
          <p className="text-xs text-[#868686] mb-3">{siteConfig.copyright}</p>
          
          <div className="flex flex-wrap gap-5">
            {navItems.legalLinks.map((link, index) => (
              <Link 
                key={index} 
                href={link.href}
                className="text-sm text-[#868686] hover:underline"
                tabIndex={0}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 