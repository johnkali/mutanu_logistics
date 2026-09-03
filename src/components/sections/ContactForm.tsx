import { useState } from "react";
import type { FormEvent } from "react";
import { Send } from "lucide-react";
import { serviceOptions } from "../../data/contact";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  // Update a single form field
  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // Temporary submit handler.
  // Connect this to the final email/API service before launch.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Mutanu enquiry:", formData);

    setSubmitted(true);
    setFormData(initialFormData);
  };

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

      {submitted && (
        <div
          role="status"
          className="mb-6 border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
        >
          Thank you. Your enquiry has been received.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
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
            onChange={handleChange}
            required
            autoComplete="name"
            className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-[#0b1b2b] outline-none transition placeholder:text-slate-400 focus:border-[#0b1b2b] focus:ring-1 focus:ring-[#0b1b2b]"
            placeholder="Your name"
          />
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
            onChange={handleChange}
            required
            autoComplete="email"
            className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-[#0b1b2b] outline-none transition placeholder:text-slate-400 focus:border-[#0b1b2b] focus:ring-1 focus:ring-[#0b1b2b]"
            placeholder="you@example.com"
          />
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
            onChange={handleChange}
            autoComplete="tel"
            inputMode="tel"
            className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-[#0b1b2b] outline-none transition placeholder:text-slate-400 focus:border-[#0b1b2b] focus:ring-1 focus:ring-[#0b1b2b]"
            placeholder="+254..."
          />
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
            onChange={handleChange}
            required
            className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-[#0b1b2b] outline-none transition focus:border-[#0b1b2b] focus:ring-1 focus:ring-[#0b1b2b]"
          >
            <option value="">Select a service</option>

            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
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
            onChange={handleChange}
            required
            rows={5}
            className="w-full resize-y border border-slate-200 bg-white px-4 py-3 text-sm text-[#0b1b2b] outline-none transition placeholder:text-slate-400 focus:border-[#0b1b2b] focus:ring-1 focus:ring-[#0b1b2b]"
            placeholder="Tell us briefly about your requirements..."
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex min-h-11 items-center gap-2 bg-[#0b1b2b] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-[#d9232e] focus:outline-none focus:ring-2 focus:ring-[#0b1b2b] focus:ring-offset-2"
        >
          Send Enquiry
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
