"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { WhatsappLogo, EnvelopeSimple, CheckCircle } from "@phosphor-icons/react";
import { packages } from "@/data/packages";
import { site, whatsappLink } from "@/data/site";

type Errors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

/**
 * The site is statically hosted, so the form hands the enquiry to WhatsApp or
 * the user's mail client rather than pretending to POST somewhere. Validation
 * runs locally and errors render inline under each field.
 */
export function EnquiryForm() {
  const params = useSearchParams();
  const presetTour = params.get("tour") ?? "";

  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    tour: presetTour,
    people: "",
    dates: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[0-9+\-\s()]{8,}$/.test(values.phone.trim()))
      next.phone = "Enter a phone number we can reach you on.";
    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = "That email address does not look right.";
    if (values.message.trim().length < 10)
      next.message = "Tell us a little more, at least a sentence.";
    return next;
  }

  function compose() {
    const lines = [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : "",
      values.tour ? `Tour: ${values.tour}` : "",
      values.people ? `Group size: ${values.people}` : "",
      values.dates ? `Preferred dates: ${values.dates}` : "",
      "",
      values.message,
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }
    window.open(whatsappLink(compose()), "_blank", "noopener");
    setSent(true);
  }

  function mailtoHref() {
    const subject = values.tour
      ? `Enquiry: ${values.tour}`
      : "Tour enquiry from the 2XBT website";
    return `${site.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose())}`;
  }

  if (sent) {
    return (
      <div className="surface grid place-items-center gap-4 px-6 py-20 text-center">
        <CheckCircle size={36} weight="duotone" style={{ color: "var(--accent)" }} />
        <h2 className="font-display text-2xl font-semibold">Your enquiry is ready to send</h2>
        <p className="max-w-[46ch] leading-relaxed" style={{ color: "var(--ink-soft)" }}>
          We opened WhatsApp with your details filled in. If the tab did not
          open, use the email button below and we will pick it up there.
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a href={mailtoHref()} className="btn btn-ghost">
            <EnvelopeSimple size={18} />
            Send it by email instead
          </a>
          <button type="button" onClick={() => setSent(false)} className="btn btn-ghost">
            Edit the enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Your name"
          required
          value={values.name}
          onChange={set("name")}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="phone"
          label="Phone number"
          type="tel"
          required
          value={values.phone}
          onChange={set("phone")}
          error={errors.phone}
          autoComplete="tel"
          hint="We reply on WhatsApp first."
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          autoComplete="email"
          hint="Optional, for the full itinerary."
        />

        <div className="grid gap-2">
          <label htmlFor="tour" className="text-[0.875rem] font-medium">
            Which tour
          </label>
          <select id="tour" value={values.tour} onChange={set("tour")} className="field">
            <option value="">Not decided yet</option>
            {packages.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value="Custom group trip">Something custom</option>
          </select>
        </div>

        <Field
          id="people"
          label="Group size"
          value={values.people}
          onChange={set("people")}
          hint="Prices on the site assume 6 people."
        />
        <Field
          id="dates"
          label="Preferred dates"
          value={values.dates}
          onChange={set("dates")}
          hint="A month or a window is fine."
        />
      </div>

      <div className="mt-5 grid gap-2">
        <label htmlFor="message" className="text-[0.875rem] font-medium">
          What are you planning
          <span aria-hidden className="ml-1" style={{ color: "var(--accent)" }}>
            *
          </span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={values.message}
          onChange={set("message")}
          aria-invalid={errors.message ? "true" : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="field resize-y"
          style={errors.message ? { borderColor: "#c0392b" } : undefined}
          placeholder="Six of us from Mumbai, looking at Kedarnath in June. Do you have seats left?"
        />
        {errors.message ? (
          <p id="message-error" className="text-[0.8125rem]" style={{ color: "#c0392b" }}>
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary">
          <WhatsappLogo size={18} weight="fill" />
          Send on WhatsApp
        </button>
        <a href={mailtoHref()} className="btn btn-ghost">
          <EnvelopeSimple size={18} />
          Email instead
        </a>
      </div>
      <p className="mt-4 text-[0.8125rem]" style={{ color: "var(--ink-faint)" }}>
        Your details go straight to our team. Nothing is stored on this website.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  hint,
  type = "text",
  required = false,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  hint?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-[0.875rem] font-medium">
        {label}
        {required ? (
          <span aria-hidden className="ml-1" style={{ color: "var(--accent)" }}>
            *
          </span>
        ) : null}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
        className="field"
        style={error ? { borderColor: "#c0392b" } : undefined}
      />
      {error ? (
        <p id={`${id}-error`} className="text-[0.8125rem]" style={{ color: "#c0392b" }}>
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-[0.8125rem]" style={{ color: "var(--ink-faint)" }}>
          {hint}
        </p>
      ) : null}
    </div>
  );
}
