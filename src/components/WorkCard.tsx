export interface WorkCard {
  id: number;
  name: string;
  description: string;
  link: string;
  images: Image[];
}

interface Image {
  id: number;
  imagePath: string;
}

interface WorkCardProps {
  card: WorkCard;
  vertical?: boolean;
}

export const WorkCard = ({ card, vertical = false }: WorkCardProps) => {
  return (
    <article id={`${card.id}`} className="h-full p-4 flex flex-col gap-6">
      <img className="w-full h-full object-cover aspect-video" src="" alt="" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-white font-medium text-4xl">{card.name}</h3>
          <p className="text-gray-400 text-base font-normal">
            {card.description}
          </p>
        </div>
        <a href={card.link} className="text-sky-400 text-base font-normal">
          Посмотреть...
        </a>
      </div>
    </article>
  );
};
