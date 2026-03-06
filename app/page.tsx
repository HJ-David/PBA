export default function Home() {
  const logoUrl =
    "https://res.cloudinary.com/dcyh0tifc/image/upload/v1772835967/logo_vsgyac.png";

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
          >
            <img
              src={logoUrl}
              alt="Page Backcountry Adventures logo"
              className="h-7 w-7 rounded-md bg-white/5 ring-1 ring-white/15"
            />
            <span>Page Backcountry Adventures</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a className="hover:text-white" href="#adventures">
              Adventures
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>

          <a
            href="tel:+19286601490"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black hover:bg-white/90"
          >
            Call
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-svh items-end overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://res.cloudinary.com/dcyh0tifc/video/upload/v1772834750/intro_q19e1z.mp4"
              type="video/mp4"
            />
            <source src="/videos/intro.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-linear-to-b from-black/65 via-black/40 to-black/80" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 sm:pb-20 sm:pt-32">
            <p className="text-sm font-semibold tracking-wide text-white/90">
              Page, Arizona
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Explore the wild side of Page with private SUV backcountry tours.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
              Iconic viewpoints, remote desert tracks, and unforgettable
              photo-stops — guided by locals who know the land.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#adventures"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black hover:bg-white/90"
              >
                View adventures
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/0 px-6 text-sm font-semibold text-white hover:bg-white/10"
              >
                Get in touch
              </a>
            </div>

            <p className="mt-6 text-xs text-white/60">
              Tip: sound is muted by default for autoplay.
            </p>
          </div>
        </section>

        <section
          id="adventures"
          className="scroll-mt-24 border-t border-white/10 bg-zinc-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  Adventures
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
                  A few popular private tours. We can customize based on season,
                  road conditions, and your group’s pace.
                </p>
              </div>
              <a
                href="tel:+19286601490"
                className="text-sm font-semibold text-white/85 hover:text-white"
              >
                Call to plan your day →
              </a>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-base font-semibold">Alstrom Point</h3>
                <p className="mt-2 text-sm text-white/70">
                  Big Lake Powell views, golden-hour magic, and an unforgettable
                  overlook.
                </p>
                <p className="mt-4 text-xs text-white/60">
                  Half-day • Private • Photo-focused
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-base font-semibold">White Pocket</h3>
                <p className="mt-2 text-sm text-white/70">
                  Surreal sandstone formations in the Vermilion Cliffs country.
                </p>
                <p className="mt-4 text-xs text-white/60">
                  Full-day • Private • 4x4 access
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                <h3 className="text-base font-semibold">
                  Wire Pass &amp; Buckskin area
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Explore slot-canyon country with flexible stops and pacing.
                </p>
                <p className="mt-4 text-xs text-white/60">
                  Half-day+ • Private • Scenic drive
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 bg-black">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              About
            </h2>
            <div className="mt-6 grid gap-8 sm:grid-cols-2">
              <p className="text-sm leading-7 text-white/75">
                Page Backcountry Adventures offers private SUV tours designed
                around your group. Whether you want epic viewpoints, off-the-map
                desert tracks, or an easygoing photo day, we’ll build a plan that
                fits.
              </p>
              <ul className="space-y-3 text-sm text-white/75">
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Experienced local guides &amp; route knowledge
                </li>
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Private tours — no strangers in your vehicle
                </li>
                <li className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  Flexible timing for sunrise / sunset
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="scroll-mt-24 border-t border-white/10 bg-zinc-950"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              FAQ
            </h2>

            <div className="mt-8 grid gap-4">
              <details className="group rounded-2xl border border-white/10 bg-black/40 p-6">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                  Is lunch provided?
                </summary>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  Typically lunch isn’t included unless arranged in advance.
                  We’re happy to recommend options and plan stops based on your
                  route and timing.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 bg-black/40 p-6">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                  How many people can go together?
                </summary>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  It depends on the route and vehicle configuration. Call and
                  we’ll confirm capacity and what’s best for comfort and safety.
                </p>
              </details>

              <details className="group rounded-2xl border border-white/10 bg-black/40 p-6">
                <summary className="cursor-pointer list-none text-sm font-semibold text-white">
                  Do you run tours year-round?
                </summary>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  We do, but some routes can be seasonal due to weather and road
                  conditions. We’ll suggest the best options for your dates.
                </p>
              </details>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-black">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Contact
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">
                Tell us your dates, group size, and what you want to see — we’ll
                recommend the best route and timing.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+19286601490"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black hover:bg-white/90"
                >
                  Call +1 (928) 660-1490
                </a>
                <a
                  href="mailto:info@pagebackcountryadventures.com"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/0 px-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Email info@pagebackcountryadventures.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Page Backcountry Adventures</p>
          <p>Page, Arizona • Private SUV tours</p>
        </div>
      </footer>
    </div>
  );
}
