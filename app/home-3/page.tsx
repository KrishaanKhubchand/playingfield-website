"use client"

import { useState } from "react"
import Link from "next/link"

/* ────────────────────────────────────────────────────────────
   home-3 — exact port of the "blue poster" design
   (Archivo + IBM Plex Mono), wired to real routes + a working
   subscribe capture, matching the live home page behaviour.
   ──────────────────────────────────────────────────────────── */

type Pub = {
  href: string
  index: string
  sector: string
  loc: string
  name: string
  desc: string
  stat: string
}

const pubs: Pub[] = [
  {
    href: "/african-infrastructure-journal",
    index: "01",
    sector: "INFRASTRUCTURE",
    loc: "LAGOS / NAIROBI",
    name: "The African Infrastructure Journal",
    desc: "Projects, financing and development — from the continent building fastest.",
    stat: "QUARTERLY · 480K READERS · 220 LEADERS ON RECORD",
  },
  {
    href: "/hotel-capital-journal",
    index: "02",
    sector: "HOSPITALITY",
    loc: "LONDON / DUBAI",
    name: "The Hotel Capital Journal",
    desc: "Where hotel capital flows — deals, operators and strategy.",
    stat: "QUARTERLY · 310K READERS · 180 LEADERS ON RECORD",
  },
  {
    href: "/private-credit-journal",
    index: "03",
    sector: "PRIVATE CREDIT",
    loc: "NEW YORK",
    name: "The Private Credit Journal",
    desc: "How lenders, funds and CFOs navigate the credit cycle.",
    stat: "QUARTERLY · 390K READERS · 240 LEADERS ON RECORD",
  },
  {
    href: "/technology-investment-journal",
    index: "04",
    sector: "TECHNOLOGY",
    loc: "SINGAPORE / SF",
    name: "The Technology Investment Journal",
    desc: "Where technology capital is actually going, from the people allocating it.",
    stat: "QUARTERLY · 520K READERS · 260 LEADERS ON RECORD",
  },
]

const tickerItems = (
  <>
    <b>AFRICAN INFRASTRUCTURE JOURNAL</b> who is financing the corridor projects
    &nbsp;··&nbsp; <b>HOTEL CAPITAL JOURNAL</b> operators on the post-luxury bet
    &nbsp;··&nbsp; <b>PRIVATE CREDIT JOURNAL</b> how lenders price the next default
    cycle &nbsp;··&nbsp; <b>TECHNOLOGY INVESTMENT JOURNAL</b> spring issue 2026 out
    now &nbsp;··&nbsp; <b>THE STUDIO</b> three fellowships open for autumn
    &nbsp;··&nbsp;{" "}
  </>
)

export default function Home3() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  return (
    <>
      <style>{`
:root{
  --blue:#1B2BE3;
  --blue-lt:#9AA4FF;
  --ink:#0B0D12;
  --white:#FFFFFF;
  --grey:#F1EFE8;
  --hair:rgba(11,13,18,.14);
  --hairm:rgba(11,13,18,.18);
  --hairw:rgba(255,255,255,.28);
  --mut:rgba(11,13,18,.55);
  --mut7:rgba(11,13,18,.7);
  --sans:"Archivo",sans-serif;
  --mono:"IBM Plex Mono",ui-monospace,monospace;
}
.pf3 *{margin:0;padding:0;box-sizing:border-box}
.pf3{background:var(--white);color:var(--ink);font-family:var(--sans);font-size:17px;line-height:1.6;-webkit-font-smoothing:antialiased}
.pf3 .wrap{max-width:1240px;margin:0 auto;padding:0 32px}
@media(max-width:640px){.pf3 .wrap{padding:0 20px}}
.pf3 a{color:inherit}
.pf3 :focus-visible{outline:2px solid currentColor;outline-offset:3px}
.pf3 .mono{font-family:var(--mono)}

/* HERO — full-bleed blue poster */
.pf3 .hero{background:var(--blue);color:var(--white)}
.pf3 .hero .top{display:flex;justify-content:space-between;align-items:center;padding:22px 0;border-bottom:1px solid var(--hairw);font-family:var(--mono);font-size:12.5px;letter-spacing:.18em}
.pf3 .hero .top a{text-decoration:none}
.pf3 .hero .top a:hover{text-decoration:underline;text-underline-offset:4px}
.pf3 .hero h1{
  font-variation-settings:"wdth" 118;
  font-weight:900;text-transform:uppercase;
  font-size:clamp(38px,5.6vw,88px);
  line-height:.94;letter-spacing:-.02em;
  padding:72px 0 52px;
}
.pf3 .hero .sub{
  display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:48px;
  padding-bottom:72px;align-items:end;
}
.pf3 .hero .oneliner{font-size:clamp(19px,2.2vw,25px);line-height:1.45;font-weight:500;max-width:26em}
.pf3 .hero .ctacol{justify-self:end;text-align:right}
.pf3 .btn{
  display:inline-block;background:var(--white);color:var(--blue);
  font-family:var(--mono);font-size:13.5px;letter-spacing:.2em;text-transform:uppercase;
  padding:18px 34px;text-decoration:none;border:1px solid var(--white);font-weight:500;cursor:pointer;
}
.pf3 .btn:hover{background:transparent;color:var(--white)}
.pf3 .btn.blue{background:var(--blue);color:var(--white);border-color:var(--blue)}
.pf3 .btn.blue:hover{background:transparent;color:var(--blue)}
.pf3 .btn.ghost{background:transparent;color:var(--ink);border-color:var(--ink)}
.pf3 .btn.ghost:hover{background:var(--ink);color:var(--white)}
.pf3 .hero .note{font-family:var(--mono);font-size:12px;letter-spacing:.08em;opacity:.85;margin-top:16px}
@media(max-width:840px){.pf3 .hero .sub{grid-template-columns:1fr}.pf3 .hero .ctacol{justify-self:start;text-align:left}}

/* ticker */
.pf3 .ticker{background:var(--ink);color:var(--white);overflow:hidden;white-space:nowrap;font-family:var(--mono);font-size:12.5px;letter-spacing:.06em;padding:11px 0}
.pf3 .ticker .reel{display:inline-block;animation:pf3scroll 38s linear infinite}
.pf3 .ticker b{color:var(--blue-lt);font-weight:500}
@keyframes pf3scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
@media(prefers-reduced-motion:reduce){.pf3 .ticker .reel{animation:none}}

/* sections */
.pf3 section{border-bottom:1px solid var(--hair)}
.pf3 .sec{display:grid;grid-template-columns:260px minmax(0,1fr);gap:48px;padding:84px 0}
.pf3 .sec .lab{font-family:var(--mono);font-size:12.5px;letter-spacing:.26em;text-transform:uppercase;color:var(--blue);font-weight:500}
.pf3 .sec h2{font-variation-settings:"wdth" 112;font-weight:800;text-transform:uppercase;font-size:clamp(26px,3.2vw,40px);letter-spacing:-.01em;line-height:1.05;margin-bottom:30px}
.pf3 .sec p{font-size:22px;line-height:1.55;max-width:66ch;margin-bottom:24px}
.pf3 .sec p:last-child{margin-bottom:0}
.pf3 .kicker{font-weight:700}
@media(max-width:840px){.pf3 .sec{grid-template-columns:1fr;gap:22px;padding:60px 0}}

/* portfolio */
.pf3 .porthead{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:28px;gap:16px;flex-wrap:wrap}
.pf3 .porthead .count{font-family:var(--mono);font-size:12.5px;letter-spacing:.12em;color:var(--mut)}
.pf3 .grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media(max-width:760px){.pf3 .grid{grid-template-columns:1fr}}
.pf3 .pub{border:1px solid var(--hairm);padding:28px;background:var(--white);text-decoration:none;display:block;transition:border-color .15s ease}
.pf3 .pub:hover{border-color:var(--blue)}
.pf3 .pub:hover .pubname{color:var(--blue)}
.pf3 .pub .meta{display:flex;justify-content:space-between;gap:14px;font-family:var(--mono);font-size:12px;letter-spacing:.14em;color:var(--blue);margin-bottom:18px}
.pf3 .pub .meta .loc{color:var(--mut)}
.pf3 .pubname{font-variation-settings:"wdth" 112;font-weight:800;text-transform:uppercase;font-size:clamp(22px,2.6vw,30px);letter-spacing:-.01em;line-height:1.05;margin-bottom:10px;transition:color .15s ease}
.pf3 .pub .desc{font-size:15.5px;line-height:1.55;color:var(--mut7);margin-bottom:22px}
.pf3 .pub .stat{font-family:var(--mono);font-size:12px;letter-spacing:.1em;color:var(--mut);border-top:1px solid var(--hair);padding-top:14px}
.pf3 .utility{grid-column:1 / -1;background:none;padding:18px 0 0;display:flex;justify-content:center;align-items:center;gap:14px;flex-wrap:wrap}
.pf3 .utility .btn{font-size:12.5px;padding:16px 28px}

/* mission */
.pf3 .mission h2{font-variation-settings:"wdth" 116;font-weight:900;font-size:clamp(32px,5vw,62px);line-height:.98;letter-spacing:-.015em;margin-bottom:18px}
.pf3 .mission .lede{font-size:clamp(16px,1.8vw,19px);color:var(--mut7);max-width:34em;margin-bottom:44px}
.pf3 .beliefs{display:grid;grid-template-columns:1fr 1fr;gap:32px 48px}
@media(max-width:760px){.pf3 .beliefs{grid-template-columns:1fr}}
.pf3 .belief{border-top:1px solid var(--hairm);padding-top:18px}
.pf3 .belief .code{font-family:var(--mono);font-size:12px;letter-spacing:.1em;color:var(--blue);margin-bottom:10px}
.pf3 .belief p{font-size:15.5px;line-height:1.6;margin:0;max-width:none}
.pf3 .belief b{font-weight:700}

/* studio */
.pf3 .studio p{max-width:66ch}
.pf3 .studio .fhead{font-weight:700;margin-bottom:14px}
.pf3 .studio .flist{list-style:none;margin:0 0 26px;max-width:66ch}
.pf3 .studio .flist li{position:relative;padding-left:28px;font-size:22px;line-height:1.55;margin-bottom:12px}
.pf3 .studio .flist li:last-child{margin-bottom:0}
.pf3 .studio .flist li::before{content:"›";position:absolute;left:0;top:0;color:var(--blue);font-family:var(--mono);font-weight:500}
.pf3 .fel{display:flex;justify-content:space-between;align-items:baseline;gap:24px;padding:20px 0;border-bottom:1px solid var(--hair);text-decoration:none}
.pf3 .fel:first-of-type{border-top:1px solid var(--hairm)}
.pf3 .fel .name{font-weight:700;font-size:16.5px}
.pf3 .fel:hover .name{color:var(--blue)}
.pf3 .fel .code{font-family:var(--mono);font-weight:500;font-size:12.5px;color:var(--blue);margin-right:16px}
.pf3 .fel .tag{font-family:var(--mono);font-size:12px;letter-spacing:.1em;color:var(--mut);white-space:nowrap;text-align:right}
.pf3 .studio .btn{margin-top:36px}
@media(max-width:560px){.pf3 .fel{flex-direction:column;gap:6px}.pf3 .fel .tag{text-align:left}}

/* final */
.pf3 .final{background:var(--blue);color:var(--white);border-bottom:none}
.pf3 .final .wrap{padding-top:96px;padding-bottom:104px;text-align:center}
.pf3 .final h2{font-variation-settings:"wdth" 116;font-weight:900;text-transform:uppercase;font-size:clamp(34px,5.5vw,72px);line-height:.96;letter-spacing:-.015em;margin-bottom:30px}
.pf3 .subform{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
.pf3 .subform input{
  font-family:var(--mono);font-size:13px;letter-spacing:.06em;
  background:transparent;border:1px solid var(--hairw);color:var(--white);
  padding:18px 22px;min-width:280px;
}
.pf3 .subform input::placeholder{color:rgba(255,255,255,.6)}
.pf3 .subform input:focus{outline:none;border-color:var(--white)}
.pf3 .subnote{font-family:var(--mono);font-size:12px;letter-spacing:.1em;opacity:.85;margin-top:20px}
.pf3 footer{background:var(--blue);color:var(--white)}
.pf3 footer .wrap{display:flex;justify-content:space-between;flex-wrap:wrap;gap:14px;padding:24px 32px;border-top:1px solid var(--hairw);font-family:var(--mono);font-size:12px;letter-spacing:.12em}
.pf3 footer a{text-decoration:none}
.pf3 footer a:hover{text-decoration:underline}

/* mobile refinements */
@media(max-width:640px){
  /* hero top bar: stack brand over nav links so it never overflows */
  .pf3 .hero .top{flex-direction:column;align-items:flex-start;gap:12px;letter-spacing:.14em;font-size:12px}
  .pf3 .hero h1{padding:48px 0 40px}
  .pf3 .hero .note{font-size:11px}
  /* subscribe form goes full-width and stacks */
  .pf3 .subform{flex-direction:column;align-items:stretch;gap:10px}
  .pf3 .subform input{min-width:0;width:100%}
  .pf3 .subform .btn{width:100%;text-align:center}
  .pf3 .final .wrap{padding-top:64px;padding-bottom:72px}
  .pf3 .sec{padding:48px 0}
  .pf3 .sec p{font-size:18px}
  .pf3 .studio .flist li{font-size:18px}
  /* footer: stack the two lines, match wrap padding */
  .pf3 footer .wrap{flex-direction:column;gap:10px;padding:24px 20px}
}
      `}</style>

      <div className="pf3">
        <header className="hero">
          <div className="wrap">
            <div className="top">
              <Link href="/">PLAYING FIELD</Link>
              <span>
                <a href="#portfolio">PORTFOLIO</a>&nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="#studio">STUDIO</a>&nbsp;&nbsp;·&nbsp;&nbsp;
                <a href="#subscribe">SUBSCRIBE</a>
              </span>
            </div>
            <h1>
              We build the
              <br />
              publications
              <br />
              leaders read.
            </h1>
            <div className="sub">
              <p className="oneliner">
                An international media group building research-driven journals on the
                firsthand insight of the people running each sector.
              </p>
              <div className="ctacol">
                <a className="btn" href="#portfolio">
                  See the portfolio
                </a>
                <p className="note">4 JOURNALS · 4 CONTINENTS · GROWING</p>
              </div>
            </div>
          </div>
        </header>

        <div className="ticker" aria-hidden="true">
          <div className="reel">
            <span>{tickerItems}</span>
            <span>{tickerItems}</span>
          </div>
        </div>

        <section>
          <div className="wrap sec">
            <div className="lab">About</div>
            <div>
              <p className="kicker">
                Playing Field is a media holding company that builds in-depth,
                research-driven publications.
              </p>
              <p>
                The mosaic of markets that makes modern life run is the greatest story
                there is.
              </p>
              <p>
                From the cocoa farms of Ghana to the container ports of India, from
                luxury hotels to the data centres training AI, every corner of it moves
                capital, people and ideas.
              </p>
              <p>
                We want to sit at the centre of it, building the connections and insight
                each industry deserves.
              </p>
              <p>
                To do that, we launch and own specialist titles — each built to be the
                definitive source for the insiders of its industry.
              </p>
              <p className="kicker">
                And it all comes from the people themselves: Playing Field is where CEOs,
                investors and executives talk shop about their work, on the record.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="wrap sec">
            <div className="lab">The portfolio</div>
            <div>
              <div className="porthead">
                <h2 style={{ marginBottom: 0 }}>Covering the most dynamic industries in the world.</h2>
                <span className="count">04 TITLES · GROWING</span>
              </div>
              <div className="grid">
                {pubs.map((p) => (
                  <Link className="pub" href={p.href} key={p.href}>
                    <div className="meta">
                      <span>
                        {p.index} / {p.sector}
                      </span>
                      <span className="loc">{p.loc}</span>
                    </div>
                    <div className="pubname">{p.name}</div>
                    <p className="desc">{p.desc}</p>
                    <div className="stat">{p.stat}</div>
                  </Link>
                ))}
                <div className="utility">
                  <a className="btn blue" href="#portfolio">
                    See full portfolio
                  </a>
                  <Link className="btn ghost" href="/fellowships">
                    Request a publication for your industry
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="studio" className="studio">
          <div className="wrap sec">
            <div className="lab">The studio</div>
            <div>
              <h2>Join a fellowship. Go deeper on an industry than anyone else.</h2>
              <p className="kicker">
                Playing Field Studios is our incubator for new publications.
              </p>
              <p>
                Each month we launch a new title and bring on a small team of researchers
                to build it.
              </p>
              <p>
                They pick an industry, interview the people who run it, and turn what they
                find into the first issues. Recent titles cover energy storage, sports
                capital, and specialty insurance.
              </p>
              <p>
                The aim is for every title to become the centre of insight for its
                industry.
              </p>
              <p className="fhead">Fellows who join get:</p>
              <ul className="flist">
                <li>Original research on an industry few people understand</li>
                <li>Direct access to the people who run it</li>
                <li>A reputation and personal brand that grow with the title</li>
              </ul>
              <p>We open a new cohort every month. Apply to join the next one.</p>
              <div style={{ marginTop: 40 }}>
                <Link className="fel" href="/fellowships">
                  <span className="name">
                    <span className="code">F/01</span>Founding editor fellowship
                  </span>
                  <span className="tag">LAUNCH A NEW TITLE</span>
                </Link>
                <Link className="fel" href="/fellowships">
                  <span className="name">
                    <span className="code">F/02</span>Research fellowship
                  </span>
                  <span className="tag">12 WKS · PORTFOLIO-WIDE</span>
                </Link>
                <Link className="fel" href="/fellowships">
                  <span className="name">
                    <span className="code">F/03</span>Data &amp; design fellowship
                  </span>
                  <span className="tag">VISUAL LANGUAGE OF NEW TITLES</span>
                </Link>
              </div>
              <Link className="btn blue" href="/fellowships">
                Apply to the studio
              </Link>
            </div>
          </div>
        </section>

        <section className="final" id="subscribe">
          <div className="wrap">
            <h2>
              Read what
              <br />
              leaders read.
            </h2>
            {subscribed ? (
              <p className="subnote" style={{ opacity: 1, fontSize: 14 }}>
                ✓ YOU&rsquo;RE ON THE LIST — WE&rsquo;LL BE IN TOUCH AS PLAYING FIELD GROWS.
              </p>
            ) : (
              <>
                <form
                  className="subform"
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!email.trim()) return
                    setSubscribed(true)
                  }}
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL"
                    aria-label="Your email"
                  />
                  <button className="btn" type="submit">
                    Subscribe
                  </button>
                </form>
                <p className="subnote">
                  ONE SHORT NOTE A WEEK · FREE · UNSUBSCRIBE ANYTIME
                </p>
              </>
            )}
          </div>
        </section>

        <footer>
          <div className="wrap">
            <span>PLAYING FIELD · LAGOS · LONDON · NEW YORK · SINGAPORE</span>
            <span>
              <Link href="/fellowships">STUDIO</Link> ·{" "}
              <Link href="/about">PARTNERSHIPS</Link> ·{" "}
              <Link href="/about">CONTACT</Link>
            </span>
          </div>
        </footer>
      </div>
    </>
  )
}
