import FounderCard from "./FounderCard";

export default function FounderGrid({ founders }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {founders.map((founder, i) => (
        <FounderCard key={founder.name} founder={founder} index={i} />
      ))}
    </div>
  );
}
