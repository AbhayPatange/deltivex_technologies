import Container from "../components/common/Container";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <section className="pt-36 pb-24 md:pt-44 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <Container className="relative grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
        <ContactInfo />
        <div className="border border-border p-6 md:p-8">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
