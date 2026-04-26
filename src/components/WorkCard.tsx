export interface WorkCard {
  id: number;
  name: string;
  description: string;
  link: string;
  images: [{ id: number; imagePath: string }];
}

interface WorkCardProps {
  card: WorkCard;
}
export const WorkCard = ({ card }: WorkCardProps) => {
  return <article key={card.id}></article>;
};
