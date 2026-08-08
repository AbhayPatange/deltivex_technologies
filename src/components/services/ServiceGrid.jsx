import ServiceCard from "./ServiceCard";

export default function ServiceGrid({ services }) {
  return (
    <div>
      {services.map((service, i) => (
        <ServiceCard
          key={service.id}
          service={service}
          index={i}
          reverse={i % 2 === 1}
        />
      ))}
    </div>
  );
}
