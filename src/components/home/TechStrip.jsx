import Container from "../common/Container";

const stack = [
  "React",
  "Node.js",
  "Python",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "OpenAI",
];

export default function TechStrip() {
  return (
    <section className="border-y border-border bg-bg-raised">
      <Container className="flex flex-col sm:flex-row sm:items-center gap-5 py-7">
        <p className="eyebrow shrink-0">Built With</p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3 sm:pl-8 sm:border-l sm:border-border">
          {stack.map((name) => (
            <span
              key={name}
              className="font-display text-[15px] tracking-wide text-ink-faint uppercase hover:text-ink-soft transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
