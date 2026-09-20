import type { Metadata } from "next"
import Link from "next/link"
import { Archivo } from "next/font/google"
import { Menu } from "lucide-react"

import styles from "./page.module.css"

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gallery",
  axes: ["wdth"],
})

export const metadata: Metadata = {
  title: "Proximity Group | Gallery",
  description:
    "Proximity builds media and events brands focused on the world's industries.",
}

type Publication = {
  name: string
  story: string
  industry: string
  variant: string
}

const publications: Publication[] = [
  {
    name: "HULL",
    story: "Why the world's biggest ships are getting smaller",
    industry: "Shipping and ports",
    variant: "hull",
  },
  {
    name: "Kiln",
    story: "The decarbonisation issue",
    industry: "Cement and materials",
    variant: "kiln",
  },
  {
    name: "TONNAGE",
    story: "The 40 people who decide where copper comes from",
    industry: "Mining",
    variant: "tonnage",
  },
  {
    name: "Sortie",
    story: "Inside the airline that never cancels",
    industry: "Aviation",
    variant: "sortie",
  },
  {
    name: "GRID",
    story: "Who pays for the interconnector?",
    industry: "Power and utilities",
    variant: "grid",
  },
  {
    name: "COLD CHAIN",
    story: "The last mile is a refrigerator",
    industry: "Food logistics",
    variant: "coldChain",
  },
  {
    name: "Yield",
    story: "Who owns the world's farmland now",
    industry: "Agriculture",
    variant: "yield",
  },
  {
    name: "BACKHAUL",
    story: "The cable that carries the internet",
    industry: "Telecoms",
    variant: "backhaul",
  },
  {
    name: "Derrick",
    story: "The last barrel and the first molecule",
    industry: "Oil and gas",
    variant: "derrick",
  },
  {
    name: "Ward",
    story: "The hospital as a business",
    industry: "Healthcare",
    variant: "ward",
  },
  {
    name: "SCAFFOLD",
    story: "Why nothing gets built on time",
    industry: "Construction",
    variant: "scaffold",
  },
]

const desktopRows = [publications.slice(0, 6), [...publications.slice(6), null]]
const mobileRows: Array<Array<Publication | null>> = []

for (let index = 0; index < publications.length; index += 2) {
  mobileRows.push(publications.slice(index, index + 2))
}

mobileRows[mobileRows.length - 1].push(null)

function CoverDecoration({ variant }: { variant: string }) {
  switch (variant) {
    case "hull":
      return <span className={styles.hullBar} />
    case "kiln":
      return <span className={styles.kilnBlock} />
    case "tonnage":
      return <span className={styles.tonnageNumber}>40</span>
    case "sortie":
      return (
        <svg className={styles.sortieLine} viewBox="0 0 200 260" aria-hidden="true">
          <path d="M-10 250 C 60 170, 120 130, 220 60" />
        </svg>
      )
    case "grid":
      return <span className={styles.gridLines} />
    case "coldChain":
      return <span className={styles.coldDots} />
    case "yield":
      return <span className={styles.yieldLines} />
    case "backhaul":
      return <span className={styles.backhaulLines} />
    case "derrick":
      return <span className={styles.derrickBars} />
    case "ward":
      return <span className={styles.wardCross} />
    case "scaffold":
      return <span className={styles.scaffoldGrid} />
    default:
      return null
  }
}

function PublicationCover({ publication }: { publication: Publication | null }) {
  if (!publication) {
    return <div className={`${styles.cover} ${styles.nextLaunch}`}>Next launch</div>
  }

  return (
    <article className={`${styles.cover} ${styles[publication.variant]}`}>
      <h3>{publication.name}</h3>
      <p>{publication.story}</p>
      <CoverDecoration variant={publication.variant} />
      <span className={styles.industry}>{publication.industry}</span>
    </article>
  )
}

function ShelfRows({
  rows,
  className,
}: {
  rows: Array<Array<Publication | null>>
  className: string
}) {
  return (
    <div className={className}>
      {rows.map((row, rowIndex) => (
        <div className={styles.shelfRow} key={rowIndex}>
          {row.map((publication, itemIndex) => (
            <PublicationCover
              publication={publication}
              key={publication?.name ?? `next-${rowIndex}-${itemIndex}`}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function GalleryHomePage() {
  return (
    <main className={`${archivo.variable} ${archivo.className} ${styles.page}`}>
      <header className={styles.header}>
        <a href="#top" className={styles.brand}>
          Proximity Group
        </a>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <a href="#brands">Brands</a>
          <a href="#careers">Careers</a>
          <a href="#company">Company</a>
        </nav>

        <details className={styles.mobileMenu}>
          <summary aria-label="Open menu">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            <a href="#brands">Brands</a>
            <a href="#careers">Careers</a>
            <a href="#company">Company</a>
          </nav>
        </details>
      </header>

      <section className={styles.intro} id="top">
        <h1>Building media brands focused on the real economy</h1>
        <div className={styles.introCopy}>
          <p>
            Proximity is a holding company dedicated to launching and growing media and events
            brands for the world&apos;s industries. Our ambition is to build the largest, most
            profitable portfolio of them anywhere.
          </p>
          <p>
            Each publication sits at the front row of its industry, from the people leading it to
            the ideas moving it forward.
          </p>
          <p className={styles.hiringLink}>
            We&apos;re hiring: <Link href="/careers-2">see open roles</Link>.
          </p>
        </div>
      </section>

      <section id="brands" className={styles.shelves} aria-label="Publication concepts">
        <ShelfRows rows={desktopRows} className={styles.desktopShelves} />
        <ShelfRows rows={mobileRows} className={styles.mobileShelves} />
      </section>

      <section id="careers" className={styles.careers}>
        <div className={styles.careersIntro}>
          <h2>We&apos;re hiring.</h2>
          <p>Every brand on the shelf needs people to sell it and people to fill its rooms.</p>
        </div>

        <Link
          href="/careers-2#commercial-partnerships"
          className={`${styles.role} ${styles.salesRole}`}
        >
          <h3>Sales</h3>
          <p>Sell pages, rooms and audiences to the companies that supply an industry.</p>
          <strong>See sales roles</strong>
        </Link>

        <Link
          href="/careers-2#events-and-community"
          className={`${styles.role} ${styles.eventsRole}`}
        >
          <h3>Events and community</h3>
          <p>Build the conferences, dinners and networks where each industry meets.</p>
          <strong>See events roles</strong>
        </Link>
      </section>

      <footer id="company" className={styles.footer}>
        <p>Proximity Group. Magazines and events for the world&apos;s industries.</p>
        <a href="mailto:hey@playingfield.co?subject=Start%20a%20brand%20with%20Proximity">
          Start a brand with us
        </a>
      </footer>
    </main>
  )
}
