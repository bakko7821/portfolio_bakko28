import { SectionHeader } from "../components/SectionHeader";
import MaxLogo from "../assets/images/Max_logo_2025.png";
import TelegramLogo from "../assets/images/BxlTelegram.svg?react";

export const Price = () => {
  return (
    <section id="price" className="">
      <SectionHeader title="Прайс" secondTitle="price" />
      <div className="p-4 flex flex-col gap-8 items-center justify-center">
        <p className="font-normal text-base text-white/50">
          Цены указаны на стандартные пакеты и варируются в зависимостри от
          сложности проекта. Реализую все ваши хотелки, чтобы узнать точную цену
          лучше написать лично.<span className="text-sky-400">*</span>
        </p>
        <div className="flex items-center justify-center gap-2">
          <button>
            <img src={MaxLogo} alt="" />
          </button>
          <button>
            Написать в Telegram <TelegramLogo width={} height={} className="" />
          </button>
        </div>
      </div>
    </section>
  );
};
