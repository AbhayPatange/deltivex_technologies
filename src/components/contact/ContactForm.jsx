import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import Button from "../common/Button";
const WEB3FORMS_ACCESS_KEY = "fde744c9-cef7-4ae4-8309-c8cd0724e39e";

const projectTypes = [
  "Web Development",
  "AI / GenAI Solutions",
  "Custom Software",
  "Business Automation",
  "Backend & API Development",
  "Cloud / Deployment",
  "Not sure yet",
];

const inputClasses =
  "w-full rounded-none bg-surface border border-border px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-pink";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: projectTypes[0],
    message: "",
  });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,

          name: form.name,
          email: form.email,
          company: form.company,
          projectType: form.projectType,
          message: form.message,

          subject: `New Deltivex Inquiry — ${form.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("idle");

      alert(
        "We couldn't send your message. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-8 flex flex-col items-center text-center gap-3"
      >
        <CheckCircle2 className="h-9 w-9 text-pink" />
        <h3 className="font-display text-lg uppercase">Message sent</h3>
        <p className="text-sm text-ink-soft max-w-xs">
          Thanks for reaching out — we'll get back to you shortly at{" "}
          {form.email || "the email you provided"}.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wide text-ink-faint mb-2">
            Name
          </label>
          <input
            id="name"
            required
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wide text-ink-faint mb-2">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wide text-ink-faint mb-2">
          Company <span className="normal-case text-ink-faint/70">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          placeholder="Company name"
          className={inputClasses}
        />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-wide text-ink-faint mb-2">
          What do you need?
        </label>
        <select
          id="projectType"
          value={form.projectType}
          onChange={(e) => update("projectType", e.target.value)}
          className={`${inputClasses} appearance-none`}
        >
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wide text-ink-faint mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us a bit about what you're building..."
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        icon={false}
        disabled={status === "submitting"}
        className="w-full sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending
          </>
        ) : (
          "Send message"
        )}
      </Button>
    </form>
  );
}
