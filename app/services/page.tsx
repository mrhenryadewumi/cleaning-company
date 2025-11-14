export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Header */}
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-400 mb-2">
            Services
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">
            Cleaning services by RainClean Service Ltd
          </h1>
          <p className="text-sm md:text-base text-slate-300 max-w-3xl">
            RainClean provides trusted domestic and commercial cleaning across
            the UK. Choose from regular home cleaning, deep cleans, end of
            tenancy, and office cleaning. One-off, weekly, bi-weekly and
            monthly visits available.
          </p>
        </header>

        {/* Service grid */}
        <section className="grid gap-5 md:grid-cols-2 mb-12">
          {/* Regular domestic cleaning */}
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Regular home cleaning
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              Weekly or bi-weekly cleans to keep your home fresh. Ideal for busy
              professionals, families and shared houses.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-4 list-disc list-inside">
              <li>Kitchen and bathrooms cleaned</li>
              <li>Dusting and wiping of surfaces</li>
              <li>Vacuuming and mopping of floors</li>
              <li>Bed making and general tidy-up</li>
            </ul>
            <p className="text-xs text-slate-400 mb-3">
              From around <span className="font-semibold text-sky-300">
                2–3 hours per visit
              </span>, depending on property size.
            </p>
          </article>

          {/* Deep cleaning */}
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              One-off &amp; deep cleaning
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              A detailed top-to-bottom clean for when your home needs extra
              attention – before guests, after building works or just a reset.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-4 list-disc list-inside">
              <li>Detailed bathroom &amp; kitchen descaling</li>
              <li>Inside cupboards, skirting boards and doors</li>
              <li>Heavier limescale and grease removal</li>
              <li>Add-ons available (inside oven, fridge, windows)</li>
            </ul>
            <p className="text-xs text-slate-400 mb-3">
              Priced by property size &amp; condition – ask for a tailored
              quote.
            </p>
          </article>

          {/* End of tenancy */}
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 md:col-span-2">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              End of tenancy cleaning
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              Fully-detailed move-out cleaning designed to help meet landlord
              and letting-agent standards. Perfect for tenants, landlords and
              Airbnb hosts.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-4 list-disc list-inside">
              <li>Thorough clean of all rooms, fixtures and fittings</li>
              <li>Inside kitchen cupboards, fridge/freezer and oven (on
                  request)</li>
              <li>Bathrooms descaled and sanitised</li>
              <li>Surfaces, skirting boards, doors and sockets wiped</li>
            </ul>
            <p className="text-xs text-slate-400 mb-4">
              Tell us your <span className="font-semibold text-sky-300">
                postcode, number of bedrooms and bathrooms
              </span>{" "}
              and we&apos;ll estimate the price for you.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/book"
                className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-sky-500"
              >
                Book end of tenancy clean
              </a>
              <a
                href="https://wa.me/447343015367?text=Hi%20RainClean,%20I%20need%20an%20end%20of%20tenancy%20clean.%20My%20postcode%20is%20[POSTCODE]%20and%20it%27s%20a%20[number]%20bed%20[property%20type]."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-green-500 hover:text-green-300"
              >
                Get WhatsApp quote
              </a>
            </div>
          </article>

          {/* Office / commercial */}
          <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 md:col-span-2">
            <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
              Office &amp; commercial cleaning
            </h2>
            <p className="text-sm text-slate-300 mb-3">
              Flexible cleaning for offices, shops and small commercial spaces.
              Early morning, evening and weekend slots available.
            </p>
            <ul className="text-xs text-slate-300 space-y-1 mb-4 list-disc list-inside">
              <li>Desks, meeting rooms and reception areas</li>
              <li>Kitchenettes, staff rooms and washrooms</li>
              <li>Rubbish removal and basic supplies restock (on request)</li>
              <li>Custom cleaning schedules for your business</li>
            </ul>
            <p className="text-xs text-slate-400">
              Contact us with your address, opening hours and how often you
              need cleaning, and we&apos;ll build a tailored plan.
            </p>
          </article>
        </section>

        {/* Bottom CTA */}
        <section className="border-t border-slate-800 pt-6 mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm">
          <p className="text-slate-300">
            Not sure which service you need? Chat with the{" "}
            <span className="font-semibold text-sky-300">RainClean Assistant</span>{" "}
            in the corner of the screen or send us a quick message.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/book"
              className="inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-sky-500"
            >
              Book a clean
            </a>
            <a
              href="tel:07343015367"
              className="inline-flex items-center justify-center rounded-md border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-sky-500"
            >
              Call 07343 015 367
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
