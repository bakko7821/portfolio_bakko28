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
    <li id={`${card.id}`}>
      <article className="p-4 flex flex-col gap-6">
        <span className="flex items-center justify-start gap-2">
          <p>{card.name}</p>
          <p>{card.secondName}</p>
        </span>
        <div className="flex items-center justify-between">
          <span className="flex items-center">
            <p>{card.price}</p>
            <p>{card.secondPrice}</p>
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
