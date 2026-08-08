import { seoPages, seoPageMap } from './seoPages.js'
import './SeoPage.css'

const phoneDisplay = '+49 177 4275378'
const phoneLink = '+491774275378'
const whatsappUrl = `https://wa.me/491774275378?text=${encodeURIComponent('Hallo, ich möchte ein Fahrzeug zur Abholung anfragen.')}`

const serviceLinks = seoPages.filter((page) => page.type === 'service')
const guideLinks = seoPages.filter((page) => page.type === 'guide')

function JsonLd({ value }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }} />
}

export default function SeoPage({ page }) {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://auto-verschrottung24.de/' },
      ...(page.type === 'guide' ? [{ '@type': 'ListItem', position: 2, name: 'Ratgeber', item: 'https://auto-verschrottung24.de/ratgeber/' }] : []),
      { '@type': 'ListItem', position: page.type === 'guide' ? 3 : 2, name: page.h1, item: `https://auto-verschrottung24.de${page.path}` },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(([question, answer]) => ({
      '@type': 'Question', name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return <div className="seo-shell">
    <JsonLd value={breadcrumb} />
    <JsonLd value={faqSchema} />
    <div className="seo-topbar"><div className="container"><span>Bundesweit in Deutschland</span><span><a href={`tel:${phoneLink}`}>{phoneDisplay}</a> · <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></span></div></div>
    <header className="seo-header">
      <div className="container seo-nav">
        <a className="seo-brand" href="/"><span>↻</span>AUTO-<strong>VERSCHROTTUNG</strong><i>24</i></a>
        <nav aria-label="Hauptnavigation">
          <a href="/autoverschrottung/">Autoverschrottung</a>
          <a href="/fahrzeugabholung/">Fahrzeugabholung</a>
          <a href="/ratgeber/auto-verschrotten-ablauf/">Ratgeber</a>
          <a className="seo-nav-cta" href="/#anfrage">Fahrzeug anfragen</a>
        </nav>
      </div>
    </header>
    <main>
      <section className="seo-hero">
        <div className="container seo-hero-inner">
          <nav className="breadcrumbs" aria-label="Brotkrümelnavigation">
            <a href="/">Startseite</a><span>/</span>{page.type === 'guide' && <><span>Ratgeber</span><span>/</span></>}<span aria-current="page">{page.nav}</span>
          </nav>
          <span className="seo-kicker">{page.type === 'guide' ? 'Ratgeber' : 'Bundesweiter Fahrzeugservice'}</span>
          <h1>{page.h1}</h1>
          <p>{page.intro}</p>
          <div className="seo-hero-actions">
            <a className="seo-button primary" href="/#anfrage">Fahrzeug anfragen</a>
            <a className="seo-button secondary" href={`tel:${phoneLink}`}>Direkt anrufen</a>
          </div>
        </div>
      </section>

      <div className="container seo-content-layout">
        <article className="seo-article">
          {page.sections.map(([heading, text, bullets]) => <section key={heading}>
            <h2>{heading}</h2><p>{text}</p>
            {bullets && <ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
          </section>)}
          <section className="seo-faq">
            <span className="seo-kicker">Gut zu wissen</span><h2>Häufige Fragen</h2>
            {page.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </section>
        </article>
        <aside className="seo-aside">
          <div className="seo-contact-card"><span className="seo-kicker">Persönliche Klärung</span><h2>Fahrzeug individuell anfragen</h2><p>Senden Sie Zustand und Standort. Wir melden uns zur Abstimmung der Einzelheiten.</p><a className="seo-button primary" href="/#anfrage">Zur Fahrzeuganfrage</a><a href={`tel:${phoneLink}`}>{phoneDisplay}</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Per WhatsApp schreiben</a></div>
          <div className="seo-related"><h2>Passende Themen</h2>{page.related.map((path) => { const related = seoPageMap.get(path); return <a key={path} href={path}>{related?.nav ?? path}<span>→</span></a> })}</div>
        </aside>
      </div>

      <section className="seo-directory"><div className="container"><div><h2>Fahrzeugservice</h2>{serviceLinks.map((item) => <a href={item.path} key={item.path}>{item.nav}</a>)}</div><div><h2>Ratgeber</h2>{guideLinks.map((item) => <a href={item.path} key={item.path}>{item.nav}</a>)}</div></div></section>
    </main>
    <footer className="seo-footer"><div className="container"><a className="seo-brand light" href="/">AUTO-<strong>VERSCHROTTUNG</strong><i>24</i></a><p>Bundesweite Fahrzeuganfragen und persönliche Abstimmung.</p><div><a href="/#impressum">Impressum</a><a href="/#datenschutz">Datenschutz</a></div></div></footer>
    <div className="seo-mobile-bar"><a href={`tel:${phoneLink}`}>Anrufen</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a><a href="/#anfrage">Anfrage</a></div>
  </div>
}
