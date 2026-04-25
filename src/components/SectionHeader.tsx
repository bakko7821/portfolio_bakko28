interface SectionHeaderProps {
  title: string;
  secondTitle: string;
}
export const SectionHeader = ({ title, secondTitle }: SectionHeaderProps) => {
  return (
    <div className="w-full p-4 flex bg-white items-end gap-2">
      <h2 className="text-4xl font-bold text-black">{title}</h2>
      <p className="text-xl font-medium text-gray-400">{secondTitle}</p>
    </div>
  );
};
