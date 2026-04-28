import { SectionHeader } from "../components/SectionHeader";
import MaxLogo from "../assets/images/Max_logo_2025.png";
import TelegramLogo from "../assets/images/BxlTelegram.svg?react";
import { PriceCardsArray } from "../utils/priceCardsArray";
import { PriceCard } from "../components/PriceCard";

export const Price = () => {
  return (
    <section id="price" className="">
      <SectionHeader title="Прайс" secondTitle="price" />
      <ul className="flex items-start justify-between gap-4 p-0">
        {PriceCardsArray.map((card) => (
          <li>
            <PriceCard card={card} />
          </li>
        ))}
      </ul>
      <div className="p-4 flex flex-col gap-8 items-center justify-center">
        <p className="font-normal text-base text-white/50">
          Цены указаны на стандартные пакеты и варируются в зависимостри от
          сложности проекта. Реализую все ваши хотелки, чтобы узнать точную цену
          лучше написать лично.<span className="text-sky-400">*</span>
        </p>
        <div className="flex items-center justify-center gap-2">
          <a className="cursor-pointer">
            <img src={MaxLogo} alt="" className="w-12 h-12" />
          </a>
          <a
            href=""
            className="cursor-pointer flex items-center justify-center gap-1 px-4 py-2 rounded-[10px] bg-sky-400 text-white text-2xl font-medium"
          >
            Написать в Telegram <TelegramLogo className="text-white w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};
