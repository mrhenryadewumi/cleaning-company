"use client";

import type { FormEvent } from "react";

export default function ContactPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string) || "";
    const contact = (data.get("contact") as string) || "";
    const postcode = (data.get("postcode") as string) || "";
    const propertyType = (data.get("propertyType") as string) || "";
    const date = (data.get("date") as string) || "";
    const message = (data.get("message") as string) || "";

    const subject = encodeURIComponent(
      `New cleaning enquiry from ${name || "RainClean website"}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Contact (email/phone): ${contact}`,
        `Postcode: ${postcode}`,
        `Property type: ${propertyType}`,
        `Preferred date: ${date}`,
        "",
        "Details:",
        message || "-",
      ].join("\n")
    );

    // open email client
    window.location.href = `mailto:info@raincleanservice.co.uk?subject=${subject}&body=${body}`;

    // optional: reset form
    form.reset();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Heading */}
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-2">
            Contact
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Contact RainClean Service Ltd
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            Have a question, need a quote, or ready to book a clean? Reach us
            by phone, WhatsApp, or email — or send a quick message using the
            form below.
          </p>
        </header>

        {/* Quick contact methods */}
        <section className="grid gap-4 md:grid-cols-3 mb-12">
          {/* 📞 Phone */}
          <a
            href="tel:07343015367"
            className="flex flex-col items-start gap-1 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 hover:border-sky-500 hover:bg-slate-900 transition"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Call Us
            </span>
            <span className="text-sm md:text-base font-medium text-white">
              07343 015 367
            </span>
            <span className="text-xs text-slate-400">
              Mon–Sat, 8:00am – 6:00pm
            </span>
          </a>

          {/* 💬 WhatsApp */}
          <a
            href="https://wa.me/447343015367?text=Hi%20RainClean,%20I%27d%20like%20a%20cleaning%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start gap-1 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 hover:border-green-500 hover:bg-slate-900 transition"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              WhatsApp
            </span>
            <span className="text-sm md:text-base font-medium text-white">
              Chat on WhatsApp
            </span>
            <span className="text-xs text-slate-400">
              Fast replies during working hours
            </span>
          </a>

          {/* ✉️ Email tile */}
          <a
            href="mailto:info@raincleanservice.co.uk"
            className="flex flex-col items-start gap-1 rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 hover:border-sky-500 hover:bg-slate-900 transition"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Email
            </span>
            <span className="text-sm md:text-base font-medium text-white">
              info@raincleanservice.co.uk
            </span>
            <span className="text-xs text-slate-400">
              We usually reply within one working day
            </span>
          </a>
        </section>

        {/* Enquiry form */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
            Send RainClean a message
          </h2>
          <p className="text-xs md:text-sm text-slate-300 mb-5">
            Leave a short message with your postcode, property type, and
            preferred date. We&apos;ll get back to you with availability and a
            quote.
          </p>

          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Email or Phone
                </label>
                <input
                  name="contact"
                  type="text"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Postcode
                </label>
                <input
                  name="postcode"
                  type="text"
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 uppercase"
                />
              </div>

              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Property type
                </label>
                <select
                  name="propertyType"
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>Flat / Apartment</option>
                  <option>House</option>
                  <option>Office / Commercial</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Preferred date
                </label>
                <input
                  name="date"
                  type="date"
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-xs font-medium text-slate-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Tell us what you need cleaned, how many bedrooms/bathrooms, and any special requests."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1 focus:ring-offset-slate-950"
            >
              Send enquiry
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
