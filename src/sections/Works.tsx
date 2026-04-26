import { SectionHeader } from "../components/SectionHeader";
import { WorkCard } from "../components/WorkCard";
import { WorkCardsArray } from "../utils/workCardsArray";

export const Works = () => {
  const [first, ...rest]: WorkCard[] = WorkCardsArray;

  return (
    <section id="works" className="flex flex-col gap-0">
      <SectionHeader title="Работы" secondTitle="works" />

      <ul className="py-4 grid grid-cols-3 gap-4 w-full">
        {first && (
          <li className="col-span-2">
            <WorkCard card={first} />
          </li>
        )}

        {rest.map((card: WorkCard) => (
          <li key={card.id}>
            <WorkCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
};
