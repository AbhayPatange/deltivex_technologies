import Container from "../components/common/Container";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center pt-24">
      <Container className="text-center">
        <p className="font-mono text-pink text-sm">404</p>
        <h1 className="mt-4 text-[32px] md:text-[42px] font-medium tracking-wider">
          This page doesn&rsquo;t exist.
        </h1>
        <p className="mt-4 text-ink-soft max-w-md mx-auto">
          The page you're looking for might have moved, or the link might be
          incorrect.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/">Back home</Button>
        </div>
      </Container>
    </section>
  );
}
