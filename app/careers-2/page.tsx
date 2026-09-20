import type { Metadata } from "next"
import Link from "next/link"
import { Archivo } from "next/font/google"
import { ArrowUpRight, Menu } from "lucide-react"

import styles from "./page.module.css"

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gallery",
  axes: ["wdth"],
})

export const metadata: Metadata = {
  title: "Careers | Proximity Group",
  description: "Join Proximity Group and help build media and events brands for the world's industries.",
}

const roles = [
  {
    number: "01",
    id: "commercial-partnerships",
    title: "Commercial partnerships",
    description:
      "Build relationships with the companies shaping an industry. You'll create valuable partnerships across our publications, conferences, dinners and executive communities.",
    subject: "Commercial partnerships at Proximity",
  },
  {
    number: "02",
    id: "events-and-community",
    title: "Events and community",
    description:
      "Create the rooms where an industry meets. You'll identify the right people, develop compelling programmes and deliver events that participants genuinely value.",
    subject: "Events and community at Proximity",
  },
]

export default function CareersTwoPage() {
  return (
    <main className={`${archivo.variable} ${archivo.className} ${styles.page}`}>
      <header className={styles.header}>
        <Link href="/new-home-2" className={styles.brand}>
          Proximity Group
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <Link href="/new-home-2#brands">Brands</Link>
          <Link href="/careers-2" aria-current="page">
            Careers
          </Link>
          <Link href="/new-home-2#company">Company</Link>
        </nav>

        <details className={styles.mobileMenu}>
          <summary aria-label="Open menu">
            <Menu aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/new-home-2#brands">Brands</Link>
            <Link href="/careers-2">Careers</Link>
            <Link href="/new-home-2#company">Company</Link>
          </nav>
        </details>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Careers at Proximity</p>
        <h1>Come build the companies at the centre of the world&apos;s industries.</h1>
      </section>

      <section className={styles.note} aria-labelledby="invitation-heading">
        <h2 id="invitation-heading">A note from Proximity</h2>
        <div className={styles.noteCopy}>
          <p>
            Proximity launches media and events brands for industries that deserve better places
            to exchange information, ideas and opportunities.
          </p>
          <p>
            We&apos;re looking for ambitious, commercially minded people who enjoy understanding
            unfamiliar markets and bringing the right people together. We care less about
            conventional media experience than curiosity, independence, good judgement and the
            ability to make things happen.
          </p>
        </div>
      </section>

      <section className={styles.openings} aria-labelledby="openings-heading">
        <div className={styles.sectionHeading}>
          <p>Open areas</p>
          <h2 id="openings-heading">Where we&apos;re hiring now.</h2>
        </div>

        <div className={styles.roleList}>
          {roles.map((role) => (
            <article className={styles.role} id={role.id} key={role.id}>
              <span className={styles.roleNumber}>{role.number}</span>
              <div className={styles.roleCopy}>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </div>
              <a
                href={`mailto:hey@playingfield.co?subject=${encodeURIComponent(role.subject)}`}
                className={styles.roleLink}
              >
                Introduce yourself
                <ArrowUpRight aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.openApplication}>
        <p className={styles.eyebrow}>Don&apos;t see your role?</p>
        <div>
          <h2>Exceptional people rarely fit neatly into a job description.</h2>
          <p>
            Send us a concise note about yourself, what you&apos;re unusually good at and why
            Proximity interests you.
          </p>
          <a href="mailto:hey@playingfield.co?subject=Working%20with%20Proximity">
            Write to us
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/new-home-2">Proximity Group</Link>
        <p>Magazines and events for the world&apos;s industries.</p>
      </footer>
    </main>
  )
}
