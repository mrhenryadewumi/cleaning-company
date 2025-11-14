"use client";

import type { FormEvent } from "react";

export default function BookPage() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string) || "";
    const contact = (data.get("contact") as string) || "";
    const service = (data.get("service") as string) || "";
    const bedrooms = (data.get("bedrooms") as string) || "";
    const bathrooms = (data.get("bathrooms") as string) || "";
    const postcode = (data.get("postcode") as string) || "";
    const propertyType = (data.get("propertyType") as string) || "";
    const date = (data.get("date") as string) || "";
    const time = (data.get("time") as string) || "";
    const notes = (data.get("notes") as string) || "";

    const subject = encodeURIComponent(
      `Booking request – ${service || "Cleaning"} – ${name || "RainClean website"}`
    );

    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Contact (email/phone): ${contact}`,
        `Service: ${service}`,
        `Bedrooms: ${bedrooms}`,
        `Bathrooms: ${bathrooms}`,
        `Property type: ${propertyType}`,
        `Postcode: ${postcode}`,
        `Preferred date: ${date}`,
        `Preferred time: ${time}`,
        "",
        "Extra notes:",
        notes || "-",
      ].join("\n")
    );

    window.location.href = `mailto:info@raincleanservice.co.uk?subject=${subject}&body=${body}`;

    form.reset();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-2">
            Book
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Book a clean with RainClean
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl">
            Fill in a few details about your home or workspace and we&apos;ll
            confirm availability and price. For urgent bookings, please call{" "}
            <span className="font-semibold text-sky-300">07343 015 367</span> or
            send a WhatsApp message.
          </p>
        </header>

        {/* Quick contact strip */}
        <section className="flex flex-wrap gap-3 text-xs mb-8">
          <a
            href="tel:07343015367"
            className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 font-semibold text-slate-100 hover:border-sky-500"
          >
            Call 07343 015 367
          </a>
          <a
            href="https://wa.me/447343015367?text=Hi%20RainClean,%20I%27d%20like%20to%20book%20a%20clean.%20My%20postcode%20is%20[POSTCODE]%20and%20it%27s%20a%20[number]%20bed%20[property%20type]."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-slate-700 bg-slate-900/80 px-4 py-2 font-semibold text-slate-100 hover:border-green-500 hover:text-green-300"
          >
            Book via WhatsApp
          </a>
        </section>

        {/* Booking form */}
        <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-3">
            Booking details
          </h2>
          <p className="text-xs md:text-sm text-slate-300 mb-5">
            Please provide as much detail as you can. This helps us give you an
            accurate quote and the right cleaning time.
          </p>

          <form className="space-y-5 text-sm" onSubmit={handleSubmit}>
            {/* Name & contact */}
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
                  Email or phone
                </label>
                <input
                  name="contact"
                  type="text"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Service & property info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Service required
                </label>
                <select
                  name="service"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  <option>Regular home cleaning</option>
                  <option>One-off deep clean</option>
                  <option>End of tenancy clean</option>
                  <option>Office / commercial clean</option>
                  <option>Other / not sure</option>
                </select>
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
                  <option>Flat / apartment</option>
                  <option>House</option>
                  <option>Studio</option>
                  <option>Office</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            {/* Size & postcode */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Bedrooms
                </label>
                <select
                  name="bedrooms"
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>Studio</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5+</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Bathrooms
                </label>
                <select
                  name="bathrooms"
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3+</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Postcode
                </label>
                <input
                  name="postcode"
                  type="text"
                  required
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 uppercase"
                />
              </div>
            </div>

            {/* Date & time */}
            <div className="grid md:grid-cols-2 gap-4">
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
              <div>
                <label className="block mb-1 text-xs font-medium text-slate-300">
                  Preferred time
                </label>
                <input
                  name="time"
                  type="text"
                  placeholder="e.g. Morning, 9–11am"
                  className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block mb-1 text-xs font-medium text-slate-300">
                Anything else we should know?
              </label>
              <textarea
                name="notes"
                rows={4}
                className="w-full rounded-md border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-white outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                placeholder="Tell us about pets, parking, access, heavy limescale/grease, or special requests (inside oven, windows, carpet clean, etc.)."
              />
            </div>

            {/* Submit */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-1 focus:ring-offset-slate-950"
              >
                Send booking request
              </button>
              <p className="text-[11px] text-slate-400">
                By sending this form you&apos;re requesting a quote – we&apos;ll
                confirm the final price and time slot with you before booking.
              </p>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
