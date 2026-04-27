import type { PriceCard } from "../components/PriceCard";

export const PriceCardsArray: PriceCard[] = [
  {
    id: 0,
    name: "Мобильное приложение",
    secondName: "mobile app",
    price: "Договорная",
    secondPrice: "negotiable",
    services: [
      "разработка дизайна",
      "верстка интерфейса",
      "разработка логики",
      "подключение платежки",
      "комплект правок *(10шт)",
      "24/7 на связи",
    ],
  },
  {
    id: 1,
    name: "Сайт визитка",
    secondName: "landing page",
    price: "9.999 ₽",
    secondPrice: "$ 133",
    services: [
      "шапка",
      "5 блоков",
      "нижний колонтитул",
      "комплект правок *(5шт)",
    ],
  },
  {
    id: 2,
    name: "Интернет магазин",
    secondName: "online store",
    price: "от 39.999 ₽",
    secondPrice: "$ ~530",
    services: [
      "шапка",
      "нижний колонтитул",
      "комплект правок *(5шт)",
      "4 страницы",
      "страница оплаты",
      "корзина",
      "каталог",
      "карточка товара",
    ],
  },
];
