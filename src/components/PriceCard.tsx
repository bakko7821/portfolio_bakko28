export interface PriceCard {
  id: number;
  name: string;
  secondName: string;
  services: string[];
  price: string;
  secondPrice: string;
}

export const PriceCard = ({ card }: PriceCard) => {
  return <article className=""></article>;
};
