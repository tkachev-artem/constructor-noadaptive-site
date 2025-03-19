import Header from './components/Header';
import Footer from './components/Footer';
import MainBanner from './components/MainBanner';
import PromoBanner from './components/PromoBanner';
import NewsletterBanner from './components/NewsletterBanner';
import CommunitySection from './components/CommunitySection';
import ProductGrid from './components/ProductGrid';
import { banners, popularProducts, fairytaleProducts } from './config';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F3F3F3]">
      <Header />
      
      <main className="flex-grow">
        {/* Секция основных баннеров */}
        <section className="w-full max-w-[1440px] mx-auto flex justify-center items-end gap-5 h-[260px] mt-5">
          {banners.mainBanners.map((banner) => (
            <MainBanner
              key={banner.id}
              title={banner.title}
              subtitle={banner.subtitle}
              backgroundColor={banner.backgroundColor}
              imageSrc={banner.imageSrc}
              ctaLabel={banner.ctaLabel}
              ctaHref={banner.ctaHref}
            />
          ))}
        </section>
        
        {/* Секция популярных товаров */}
        <section className="w-full max-w-[1440px] mx-auto mt-10">
          <ProductGrid products={popularProducts} />
        </section>
        
        {/* Розовый баннер */}
        <section className="w-full max-w-[1440px] mx-auto flex justify-center items-center h-[445px] mt-10">
          <PromoBanner
            title={banners.pinkBanner.title}
            backgroundColor={banners.pinkBanner.backgroundColor}
            imageSrc={banners.pinkBanner.imageSrc}
            ctaLabel={banners.pinkBanner.ctaLabel}
            ctaHref={banners.pinkBanner.ctaHref}
          />
        </section>
        
        {/* Секция сообщества */}
        <section className="w-full max-w-[1440px] mx-auto mt-10">
          <CommunitySection
            title="#НАШЕКОМЬЮНИТИ"
            ctaLabel="узнать больше"
            ctaHref="/community"
          />
        </section>
        
        {/* Секция сказочных наборов */}
        <section className="w-full max-w-[1440px] mx-auto mt-10">
          <div className="w-full max-w-[1320px] mx-auto">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-4xl uppercase font-normal">отправьтесь в сказку</h2>
              <button 
                className="h-[50px] bg-[#FFCF03] rounded-full px-8 flex items-center justify-center text-2xl"
                aria-label="Смотреть наборы"
              >
                смотреть наборы
              </button>
            </div>
          </div>
          <ProductGrid products={fairytaleProducts} />
        </section>
        
        {/* Баннер подписки на рассылку */}
        <section className="w-full max-w-[1440px] mx-auto flex justify-center items-center h-[335px] mt-10">
          <NewsletterBanner
            title={banners.newsletterBanner.title}
            backgroundColor={banners.newsletterBanner.backgroundColor}
            imageSrc={banners.newsletterBanner.imageSrc}
            inputPlaceholder={banners.newsletterBanner.inputPlaceholder}
          />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
