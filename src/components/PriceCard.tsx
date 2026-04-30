import ArrowIcon from "../assets/images/ArrowAltLrightAlt.svg?react";
export interface PriceCard {
  id: number;
  name: string;
  secondName: string;
  services: string[];
  price: string;
  secondPrice: string;
}

interface PriceCardProps {
  card: PriceCard;
}

export const PriceCard = ({ card }: PriceCardProps) => {
  return (
    <li
      id={`${card.id}`}
      className="cursor-pointer bg-transparent group hover:bg-white transition-colors"
    >
      <article className="p-4 flex flex-col gap-6">
        <span className="flex items-end justify-start gap-2">
          <p className="text-4xl font-medium text-white group-hover:text-black transition-colors">
            {card.name}
          </p>
          <p className="text-xl font-medium text-gray-400">{card.secondName}</p>
        </span>

        <div className="flex items-center justify-between">
          <span className="flex items-end gap-2">
            <p className="text-2xl font-medium text-white group-hover:text-black transition-colors">
              {card.price}
            </p>
            <p className="text-sm text-gray-400 font-medium">
              {card.secondPrice}
            </p>
          </span>
          <a
            href=""
            className="text-sky-400 flex gap-1 items-center justify-center"
          >
            Написать
            <ArrowIcon className="w-6.5 h-6.5 text-sky-400" />
          </a>
        </div>
      </article>
    </li>
  );
};
