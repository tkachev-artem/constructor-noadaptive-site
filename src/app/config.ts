// Site configuration
export const siteConfig = {
  contactPhone: "+7 (777)-77-77",
  workingHours: "9:00 — 22:00,",
  workingInfo: "ежедневно (время московское)",
  copyright: "© Мир конструкторов",
};

export const headerConfig = {
  icons: [
    { href: "/icons/logo.svg", alt: "logo", width: 40, height: 40 },
    { href: "/icons/search.svg", alt: "search", width: 20, height: 20 },
    { href: "/icons/cart.svg", alt: "cart", width: 20, height: 20 },
  ],
};

// Navigation items
export const navItems = {
  topMenu: [
    { label: "магазин", href: "/shop" },
    { label: "ДОСТАВКА", href: "/delivery" },
    { label: "БЛОГ", href: "/blog" },
    { label: "ВАКАНСИИ", href: "/careers" },
    { label: "ГДЕ МОЙ ЗАКАЗ?", href: "/order-status" },
  ],
  categoryMenu: [
    { label: "РАСПРОДАЖА", href: "/sale" },
    { label: "КОНСТРУКТОРЫ", href: "/constructors" },
    { label: "АКСЕССУАРЫ", href: "/accessories" },
  ],
  legalLinks: [
    { label: "Политика конфиденциальности", href: "/privacy" },
    { label: "Copyright", href: "/copyright" },
    { label: "Оферта", href: "/offer" },
    { label: "Cookies", href: "/cookies" },
    { label: "Политика рекомендаций", href: "/recommendations-policy" },
  ],
};

// Banner data
export const banners = {
  mainBanners: [
    {
      id: 1,
      title: "ПОГРУЗИТЕСЬ\nВ ИСТОРИЮ",
      subtitle: "Лучшее за месяц",
      backgroundColor: "#A39F82",
      imageSrc: "/images/banners/banner1.png",
      ctaLabel: "ВСЕ",
      ctaHref: "/all",
    },
    {
      id: 2,
      title: "ДУХ\nРОЖДЕСТВА",
      subtitle: "Рекомендуем вам",
      backgroundColor: "#14A0DD",
      imageSrc: "/images/banners/banner2.png",
      ctaLabel: "ВСЕ",
      ctaHref: "/all",
    },
  ],
  pinkBanner: {
    title: "ПОДАРКИ,\nКОТОРЫЕ ДЕЛАЮТ ВАС БЛИЖЕ",
    backgroundColor: "#FFCDCC",
    imageSrc: "/images/banners/banner3.png",
    ctaLabel: "УЗНАТЬ БОЛЬШЕ",
    ctaHref: "/gifts",
  },
  newsletterBanner: {
    title: "ПОДПИСЫВАЙТЕСЬ\nНА РАССЫЛКУ",
    backgroundColor: "#000000",
    imageSrc: "/images/banners/banner4.png",
    inputPlaceholder: "e-mail",
  },
};

// Products data
export const popularProducts = [
  {
    id: 1,
    title: "Замок и территория\nХогвартс",
    price: "28 999 ₽",
    model: "LEGO Harry Potter 76419",
    imageSrc: "/images/products/product1.png",
  },
  {
    id: 2,
    title: "Избушка Бабы-Яги",
    price: "6 999 ₽",
    model: "Brick Labs AB-1201",
    imageSrc: "/images/products/product2.png",
  },
  {
    id: 3,
    title: "Robot V2",
    price: "6 499 ₽",
    model: "IM.Master 8053_MK",
    imageSrc: "/images/products/product3.png",
  },
  {
    id: 4,
    title: "По щучьему велению",
    price: "4 999 ₽",
    model: "Brick Labs AB-1206",
    imageSrc: "/images/products/product4.png",
  },
];

export const fairytaleProducts = [
  {
    id: 5,
    title: "Кощей Бессмертный",
    price: "5 999 ₽",
    model: "Brick Labs AB-1205",
    imageSrc: "/images/products/product5.png",
  },
  {
    id: 6,
    title: "Конёк-горбунок",
    price: "3 999 ₽",
    model: "Brick Labs AB-1204",
    imageSrc: "/images/products/product6.png",
  },
  {
    id: 7,
    title: "Ночь перед Рождеством",
    price: "5 499 ₽",
    model: "Brick Labs AB-1202",
    imageSrc: "/images/products/product7.png",
  },
  {
    id: 8,
    title: "Терем Морозко",
    price: "11 999 ₽",
    model: "Brick Labs AB-1203",
    imageSrc: "/images/products/product8.png",
  },
];

// Community content
export const communityContent = [
  {
    id: 1,
    username: "CreepyEars059",
    avatarSrc: "/images/community/avatars/avatar1.png",
    imageSrc: "/images/community/community1.jpg",
  },
  {
    id: 2,
    username: "Mosquito100",
    avatarSrc: "/images/community/avatars/avatar2.png",
    imageSrc: "/images/community/community2.jpg",
  },
];

export const footerIcons = {
    icons: [
        {
            id:1,
            href: "/icons/email.svg",
            alt: "email",
            width: 15,
            height: 15,
        },

        {
            id:2,
            href: "/icons/phone.svg",
            alt: "phone",
            width: 15,
            height: 15,
        },

        {
            id:3,
            href: "/icons/vk.svg",
            alt: "vk",
            width: 15,
            height: 15,
        },

        {
            id:4,
            href: "/icons/telegram.svg",
            alt: "telegram",
            width: 15,
            height: 15,
        },
    ]
};