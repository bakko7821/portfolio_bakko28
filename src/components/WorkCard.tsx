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
}

export const WorkCard = ({ card }: WorkCardProps) => {
  return (
    <article id={`${card.id}`} className="h-full overflow-hidden bg-red-300">
      <img className="w-full h-full object-cover" src="" alt="" />
    </article>
  );
};
