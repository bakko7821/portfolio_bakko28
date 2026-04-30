import { SectionHeader } from "../components/SectionHeader";
import { WorkCard } from "../components/WorkCard";
import { WorkCardsArray } from "../utils/workCardsArray";

export const Works = () => {
  const [first, second, ...rest]: WorkCard[] = WorkCardsArray;

  return (
    <section id="works" className="flex flex-col gap-0">
      <SectionHeader title="Работы" secondTitle="works" />

      <ul className="grid grid-cols-3 gap-4 w-full py-4">
        {first && (
          <li className="col-span-2 row-span-2 h-full">
            <WorkCard card={first} />
          </li>
        )}
        {second && (
          <li className="col-span-1 row-span-2 h-full">
            <WorkCard card={first} vertical />
          </li>
        )}

        {rest.map((card: WorkCard) => (
          <li key={card.id} className="h-full">
            <WorkCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};
