import { SectionHeader } from "../components/SectionHeader";

export const Works = () => {
  return (
    <section id="works" className="flex flex-col gap-0">
      <SectionHeader title="Работы" secondTitle="works" />
      <div className="py-4 grid grid-cols-3 gap-4 w-full">
        <div className="col-span-2 bg-gray-300">1 (span 2)</div>
        <div className="bg-gray-300">2</div>
        <div className="bg-gray-300">3</div>
        <div className="bg-gray-300">4</div>
        <div className="bg-gray-300">5</div>
        <div className="bg-gray-300">6</div>
      </div>
    </section>
  );
};
