import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { serviceOptions } from "../../data/contact";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const initialErrors: FormErrors = {};

/*
 * Validate the form before submission.
 * Keeping validation in one place makes it easier to maintain.
 */
const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  // Name validation
  if (!data.name.trim()) {
    errors.name = "Please enter your full name.";
  } else if (data.name.trim().length < 2) {
    errors.name = "Your name must contain at least 2 characters.";
  } else if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(data.name.trim())) {
    errors.name = "Please enter a valid name using letters only.";
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Phone validation
  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (!/^\+?[0-9\s()-]+$/.test(data.phone.trim())) {
    errors.phone =
      "Please enter a valid phone number using numbers, spaces, +, - or parentheses.";
  } else {
    const digitsOnly = data.phone.replace(/\D/g, "");

    if (digitsOnly.length < 9) {
      errors.phone = "Please enter a valid phone number.";
    } else if (digitsOnly.length > 15) {
      errors.phone = "Phone number cannot exceed 15 digits.";
    }
  }

  // Service validation
  if (!data.service) {
    errors.service = "Please select the service you need.";
  }

  // Message validation
  if (!data.message.trim()) {
    errors.message = "Please tell us briefly about your requirements.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Please provide a little more detail about your enquiry.";
  }

  return errors;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /*
   * Update a field and immediately revalidate it.
   * This gives the user useful feedback while they complete the form.
   */
  const handleChange = (field: keyof FormData, value: string) => {
    // Phone input: only allow characters that belong in phone numbers.
    if (field === "phone") {
      value = value.replace(/[^\d+\s()-]/g, "");
    }

    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    // Clear the field error once the user starts correcting it.
    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
    }

    // Hide the success state if the user starts a new enquiry.
    if (submitted) {
      setSubmitted(false);
    }
  };

  /*
   * Validate the form before sending.
   *
   * SyntheticEvent is used instead of the deprecated FormEvent type.
   */
  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm(formData);

    setErrors(validationErrors);

    // Stop submission if validation fails.
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      /*
       * Temporary submission simulation.
       *
       * Replace this section later with the actual API/email service.
       */
      await new Promise((resolve) => setTimeout(resolve, 1200));

      console.log("Mutanu enquiry:", formData);

      setSubmitted(true);
      setFormData(initialFormData);
      setErrors(initialErrors);
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * Reusable input styling.
   */
  const getInputClasses = (field: keyof FormErrors) => `
    w-full border bg-white px-4 py-3 text-sm text-[#0b1b2b]
    outline-none transition
    placeholder:text-slate-400
    focus:ring-1
    ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-slate-200 focus:border-[#0b1b2b] focus:ring-[#0b1b2b]"
    }
  `;

  return (
    <div>
      <div className="mb-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d9232e]">
          Send An Enquiry
        </p>

        <h2 className="mt-2 text-2xl font-semibold uppercase text-[#0b1b2b] sm:text-3xl">
          How Can We Help?
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Share a few details about your requirements and our team will get back
          to you.
        </p>
      </div>

      {/* Success message */}
      {submitted && (
        <div
          role="status"
          aria-live="polite"
          className="mb-6 border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
        >
          Thank you. Your enquiry has been received. We&apos;ll get back to you
          shortly.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0b1b2b]"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={(event) => handleChange("name", event.target.value)}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={getInputClasses("name")}
            placeholder="Your name"
          />

          {errors.name && (
            <p
              id="name-error"
              className="mt-1.5 text-xs text-red-600"
              role="alert"
            >
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0b1b2b]"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(event) => handleChange("email", event.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={getInputClasses("email")}
            placeholder="you@example.com"
          />

          {errors.email && (
            <p
              id="email-error"
              className="mt-1.5 text-xs text-red-600"
              role="alert"
            >
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0b1b2b]"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(event) => handleChange("phone", event.target.value)}
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={getInputClasses("phone")}
            placeholder="+254 700 000 000"
          />

          {errors.phone && (
            <p
              id="phone-error"
              className="mt-1.5 text-xs text-red-600"
              role="alert"
            >
              {errors.phone}
            </p>
          )}
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0b1b2b]"
          >
            Service Required
          </label>

          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={(event) => handleChange("service", event.target.value)}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={getInputClasses("service")}
          >
            <option value="">Select a service</option>

            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>

          {errors.service && (
            <p
              id="service-error"
              className="mt-1.5 text-xs text-red-600"
              role="alert"
            >
              {errors.service}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#0b1b2b]"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(event) => handleChange("message", event.target.value)}
            rows={5}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${getInputClasses("message")} resize-y`}
            placeholder="Tell us briefly about your requirements..."
          />

          {errors.message && (
            <p
              id="message-error"
              className="mt-1.5 text-xs text-red-600"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#0b1b2b] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#d9232e] focus:outline-none focus:ring-2 focus:ring-[#0b1b2b] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle
                className="h-4 w-4 animate-spin"
                aria-hidden="true"
              />
              Sending...
            </>
          ) : (
            <>
              Send Enquiry
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
