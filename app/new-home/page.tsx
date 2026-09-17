import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Proximity Group",
  description:
    "Proximity launches and grows high-quality media and events businesses for the world's industries.",
}

const publications = [
  {
    title: "The Private Credit Journal",
    description:
      "Reporting and convening for the people allocating, raising and deploying private credit.",
    image: "/images/private-credit-journal-print.png",
    imageClassName: "object-contain p-5 md:p-8",
    stageClassName: "bg-[#302b27]",
  },
  {
    title: "The African Infrastructure Journal",
    description:
      "The projects, financing and developers shaping Africa's next era of infrastructure.",
    image: "/images/african-infrastructure-journal-print.png",
    imageClassName: "object-contain p-5 md:p-8",
    stageClassName: "bg-[#e9e5dc]",
  },
  {
    title: "The Technology Investment Journal",
    description:
      "The capital, companies and ideas shaping how technology is financed and built.",
    image: "/images/technology-investment-journal.png",
    imageClassName: "object-contain p-6 md:p-10",
    stageClassName: "bg-[#17191c]",
  },
  {
    title: "Industry Edge",
    description:
      "Conversations with founders building the next generation of category-defining companies.",
    image: "/images/beyond-fundraise.png",
    imageClassName: "object-cover",
    stageClassName: "bg-[#245f68]",
  },
]

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Company", href: "#mission" },
  { label: "Publications", href: "#publications" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "mailto:hey@playingfield.co" },
]

function ProximityWordmark() {
  return (
    <span className="text-[20px] font-medium leading-none tracking-normal md:text-[22px]">
      Proximity
    </span>
  )
}

export default function NewHomePage() {
  return (
    <main
      id="top"
      className="min-h-screen scroll-smooth bg-[#050505] text-[#f3f0e8] selection:bg-[#c7d9d3] selection:text-[#050505]"
    >
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-[#050505]/95 backdrop-blur">
        <div className="mx-auto grid h-[72px] w-full max-w-[1440px] grid-cols-[auto_auto] items-center justify-between px-5 md:h-20 md:grid-cols-[auto_minmax(0,1fr)] md:px-16">
          <a
            href="#top"
            aria-label="Proximity home"
            className="inline-flex items-center text-[#f3f0e8] transition-colors hover:text-[#c7d9d3]"
          >
            <ProximityWordmark />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-5 text-[16px] leading-[1.25] md:flex md:justify-self-end"
          >
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`transition-colors hover:text-[#c7d9d3] ${
                  index === 0 ? "text-[#c7d9d3]" : "text-[#f3f0e8]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#publications"
              className="inline-flex h-9 items-center justify-center border border-[#f3f0e8]/70 px-3 pt-px text-[16px] leading-[1.3] transition-colors hover:bg-[#f3f0e8] hover:text-black"
            >
              Our publications
            </a>
          </nav>

          <details className="group relative md:hidden">
            <summary className="inline-flex h-8 cursor-pointer list-none items-center justify-center border border-[#f3f0e8]/70 px-2.5 pt-px text-[14px] leading-[1.3] transition-colors hover:bg-[#f3f0e8] hover:text-black [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-10 z-50 grid min-w-[190px] border border-white/15 bg-[#050505] p-2 text-[14px] leading-[1.3] shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
            >
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 transition-colors hover:text-[#c7d9d3] ${
                    index === 0 ? "text-[#c7d9d3]" : "text-[#f3f0e8]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#publications"
                className="mx-3 my-2 border border-white/35 px-3 py-2 text-[#f3f0e8] transition-colors hover:border-[#c7d9d3] hover:text-[#c7d9d3]"
              >
                Our publications
              </a>
            </nav>
          </details>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-32 md:px-16 md:pb-24 md:pt-40">
        <div className="md:grid md:grid-cols-[78px_minmax(0,1fr)]">
          <p className="hidden select-none font-mono text-[10px] leading-[1.5] text-white/50 md:col-start-1 md:block">
            01
          </p>
          <section className="md:col-start-2 md:max-w-[1060px]">
            <p className="mb-3 font-mono text-[10px] leading-[1.5] text-white/50 md:hidden">
              01
            </p>
            <p className="mb-4 inline-flex h-8 items-center border border-white/15 px-2.5 font-mono text-[11px] leading-none text-[#d8d4ca]">
              Media &amp; events
            </p>
            <h1 className="text-balance text-[36px] font-normal leading-[1.05] tracking-normal md:text-[54px]">
              <span className="md:block">Proximity launches and grows</span>{" "}
              <span className="md:block">high-quality media and events</span>{" "}
              <span className="md:block">businesses for the world&apos;s industries.</span>
            </h1>
            <p className="mt-8 max-w-[735px] text-[15px] leading-[1.6] text-[#e2ded2] md:text-[17px]">
              We build specialist publications and year-round event platforms that become
              essential to the industries they serve&mdash;bringing the people, information and
              opportunities that move a market closer together.
            </p>
          </section>

          <p className="mt-16 hidden select-none font-mono text-[10px] leading-[1.5] text-white/50 md:col-start-1 md:block">
            02
          </p>
          <section
            id="mission"
            className="mt-16 scroll-mt-28 bg-[#050505] md:col-start-2"
          >
            <p className="mb-3 font-mono text-[10px] leading-[1.5] text-white/50 md:hidden">
              02
            </p>
            <h2 className="mb-5 text-[24px] font-normal leading-[1.2] md:text-[32px]">
              Mission
            </h2>
            <div className="max-w-[800px] space-y-4 text-[15px] leading-[1.6] text-[#e2ded2] md:text-[17px]">
              <p>
                The industries that shape the real economy still run on specialist knowledge and
                trusted relationships. Yet their best information rarely lives where the wider
                internet looks. It lives in trade publications, conferences, executive dinners and
                conversations between the people doing the work. Proximity exists to build the
                institutions at the centre of these industries&mdash;bringing operators, investors,
                vendors and emerging ideas closer together.
              </p>
              <p>
                Our ambition is to build a mosaic of publications and events, each distinct to its
                market and indispensable to the people moving it forward.
              </p>
            </div>

            <div
              id="publications"
              className="-mx-5 mt-8 scroll-mt-28 overflow-x-auto px-5 pb-4 [scrollbar-color:#f3f0e8_#161616] [scrollbar-width:thin] md:mx-0 md:px-0"
            >
              <div className="flex w-max snap-x snap-mandatory gap-4 pr-5 md:gap-5">
                {publications.map((publication, index) => (
                  <figure
                    key={publication.title}
                    className="w-[min(82vw,680px)] shrink-0 snap-start"
                  >
                    <div
                      className={`aspect-[16/9] overflow-hidden border border-white/15 ${publication.stageClassName}`}
                    >
                      <img
                        src={publication.image}
                        alt={`${publication.title} publication artwork`}
                        className={`h-full w-full ${publication.imageClassName}`}
                      />
                    </div>
                    <figcaption className="mt-3 grid grid-cols-[36px_minmax(0,1fr)] gap-3">
                      <span className="font-mono text-[10px] leading-[1.5] text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-[16px] leading-[1.25] text-[#f3f0e8] md:text-[17px]">
                          {publication.title}
                        </span>
                        <span className="mt-1 block max-w-[560px] text-[14px] leading-[1.4] text-white/55 md:text-[15px]">
                          {publication.description}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <p className="mt-16 hidden select-none font-mono text-[10px] leading-[1.5] text-white/50 md:col-start-1 md:block">
            03
          </p>
          <section
            id="careers"
            className="mt-16 scroll-mt-28 md:col-start-2 md:max-w-[760px]"
          >
            <p className="mb-3 font-mono text-[10px] leading-[1.5] text-white/50 md:hidden">
              03
            </p>
            <h2 className="text-[24px] font-normal leading-[1.2] md:text-[32px]">Careers</h2>
            <p className="mt-5 max-w-[735px] text-[15px] leading-[1.6] text-[#e2ded2] md:text-[17px]">
              We are building a small, ambitious team of editors, operators and commercial leaders
              to create the defining media and events businesses in the world&apos;s industries. Join
              us.
            </p>
            <Link
              href="/careers"
              className="mt-6 inline-flex h-8 items-center justify-center bg-[#f3f0e8] px-2.5 pt-px text-[15px] leading-[1.3] text-black transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c7d9d3] md:h-9 md:px-3 md:text-[16px]"
            >
              Get in touch
            </Link>
          </section>
        </div>
      </div>

      <footer className="mx-auto w-full max-w-[1440px] px-5 pb-8 pt-12 md:px-16 md:pb-10">
        <div className="md:grid md:grid-cols-[78px_minmax(0,1fr)]">
          <div className="border-t border-white/15 pt-6 md:col-start-2">
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
              <div>
                <ProximityWordmark />
                <p className="mt-4 max-w-[580px] text-[14px] leading-[1.5] text-white/55 md:text-[15px]">
                  Proximity is an incubator for specialist media and events businesses at the
                  centre of the world&apos;s industries.
                </p>
              </div>
              <nav
                aria-label="Footer navigation"
                className="grid gap-2 text-[14px] leading-[1.4] text-[#f3f0e8] md:min-w-[180px] md:text-[15px]"
              >
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-colors hover:text-[#c7d9d3]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <p className="mt-8 font-mono text-[10px] leading-[1.5] text-white/40">
              Proximity Group
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
