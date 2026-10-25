import type { Metadata } from "next"
import Link from "next/link"
import { Archivo } from "next/font/google"

import styles from "./page.module.css"

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gallery",
  axes: ["wdth"],
})

export const metadata: Metadata = {
  title: "Playingfield Group",
  description:
    "Playingfield is a holding company dedicated to launching and growing media and events brands for the world's industries.",
}

export default function Home() {
  return (
    <main className={`${archivo.variable} ${styles.page}`}>
      <div className={styles.column}>
        <h1 className={styles.wordmark}>playingfield</h1>

        <div className={styles.body}>
          <p>
            Playingfield is a holding company dedicated to launching and growing media and events
            brands for the world&rsquo;s industries.
          </p>
          <p>
            Everything around us, from the clothes we wear to the fuel in our cars and the internet
            on our phones, is the product of a deep and intricate mosaic of industries: textile
            manufacturing, oil trading, cold storage, undersea cables, and thousands more.
          </p>
          <p>
            Each of those industries is a world of its own, with its own people, leaders, stories
            and concerns.
          </p>
          <p>
            Our mission over the next five years is to launch a media and events brand for every
            industry in the world, and to build a group of businesses at the centre of each one.
          </p>
          <p>To do so, every quarter we:</p>
          <ul>
            <li>Recruit curious, hungry and tenacious people to lead new brands</li>
            <li>Launch those brands in batches</li>
          </ul>
        </div>

        <p className={styles.hiring}>Want to join Playingfield? We&rsquo;re hiring:</p>

        <div className={styles.cards}>
          <Link
            href="/careers-2#commercial-partnerships"
            className={`${styles.role} ${styles.salesRole}`}
          >
            <div>
              <h3>Sales</h3>
              <p>Sell pages, rooms and audiences to the companies that supply an industry.</p>
            </div>
            <strong>See sales roles &rarr;</strong>
          </Link>

          <Link
            href="/careers-2#events-and-community"
            className={`${styles.role} ${styles.eventsRole}`}
          >
            <div>
              <h3>Events and community</h3>
              <p>Build the conferences, dinners and networks where each industry meets.</p>
            </div>
            <strong>See events roles &rarr;</strong>
          </Link>
        </div>

        <footer className={styles.footer}>&copy; 2026 Playingfield Group</footer>
      </div>
    </main>
  )
}
