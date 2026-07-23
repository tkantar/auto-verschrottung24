import { useState } from 'react'
import heroImage from './assets/auto-verschrottung-hero.jpg'
import './App.css'

const phoneDisplay = '+49 177 4275378'
const phoneLink = '+491774275378'
const whatsappUrl = `https://wa.me/${phoneLink.replace('+', '')}?text=${encodeURIComponent('Hallo, ich möchte ein Fahrzeug zur Abholung anfragen.')}`

const Icon = ({ name, size = 22 }) => {
  const paths = {
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92z" /></>,
    message: <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7A8.38 8.38 0 0 1 4 11.5a8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" /></>,
    truck: <><path d="M10 17h4V5H2v12h3"/><path d="M14 9h4l4 4v4h-3"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/></>,
    recycle: <><path d="m7.2 7.9-2.8-.7-.7-2.8"/><path d="M4.5 7A9 9 0 0 1 20 6"/><path d="m16.8 16.1 2.8.7.7 2.8"/><path d="M19.5 17A9 9 0 0 1 4 18"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h6"/></>,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    map: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="2.5"/></>,
    star: <path d="m12 2 3.1 6.3 6.9 1-5 4.8 1.2 6.9-6.2-3.2L5.8 21 7 14.1l-5-4.8 6.9-1L12 2z" />,
    menu: <><path d="M4 6h16M4 12h16M4 18h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const benefits = [
  { icon: 'truck', title: 'Abholung vor Ort', text: 'Wir holen Ihr Fahrzeug bequem am vereinbarten Standort ab.' },
  { icon: 'recycle', title: 'Fachgerechte Verwertung', text: 'Ihr Altfahrzeug wird verantwortungsvoll dem Recycling zugeführt.' },
  { icon: 'file', title: 'Saubere Abwicklung', text: 'Transparent, persönlich und mit den benötigten Unterlagen.' },
]

const faqs = [
  ['Was kostet die Abholung?', 'Die Abholung im vereinbarten Einsatzgebiet ist für Sie in der Regel kostenlos. Nach Ihrer Anfrage bestätigen wir Ihnen alle Konditionen transparent.'],
  ['Muss mein Auto noch fahrbereit sein?', 'Nein. Wir holen auch Unfallwagen, Fahrzeuge mit Motorschaden und Autos ohne TÜV ab. Bitte beschreiben Sie den Zustand möglichst genau.'],
  ['Welche Unterlagen werden benötigt?', 'Bitte halten Sie Fahrzeugschein, Fahrzeugbrief und einen gültigen Ausweis bereit. Fehlende Unterlagen können wir vorab telefonisch besprechen.'],
  ['Wie schnell ist eine Abholung möglich?', 'Oft können wir kurzfristige Termine anbieten. Der genaue Termin richtet sich nach Standort und Auslastung und wird persönlich mit Ihnen abgestimmt.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formNote, setFormNote] = useState('')
  const [openFaq, setOpenFaq] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      'Neue Fahrzeuganfrage über Auto-Verschrottung24', '',
      `Name: ${data.get('name')}`,
      `Telefon: ${data.get('phone')}`,
      `E-Mail: ${data.get('email') || '–'}`,
      `Fahrzeug: ${data.get('vehicle')}`,
      `Baujahr: ${data.get('year') || '–'}`,
      `Standort: ${data.get('location')}`,
      `Zustand / Nachricht: ${data.get('message') || '–'}`,
    ].join('\n')
    setFormNote('Ihr E-Mail-Programm wird geöffnet. Bitte senden Sie die vorbereitete Nachricht dort ab.')
    window.location.href = `mailto:miguel.ruben@web.de?subject=${encodeURIComponent('Fahrzeuganfrage – Auto-Verschrottung24')}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="site-shell">
      <div className="topbar">
        <div className="container topbar-inner">
          <span><Icon name="map" size={15} /> Bundesweit in Deutschland</span>
          <span className="topbar-contact">Persönlich erreichbar: <a href={`tel:${phoneLink}`}><Icon name="phone" size={14}/>{phoneDisplay}</a><i></i><a href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={14}/>WhatsApp</a></span>
        </div>
      </div>

      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Auto-Verschrottung24 Startseite">
            <span className="brand-mark"><Icon name="recycle" size={25} /></span>
            <span>AUTO-<strong>VERSCHROTTUNG</strong><i>24</i></span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü öffnen" aria-expanded={menuOpen}>
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
          <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Hauptnavigation">
            <a href="#leistungen" onClick={closeMenu}>Leistungen</a>
            <a href="#ablauf" onClick={closeMenu}>So geht’s</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <div className="nav-contact">
              <a className="nav-cta nav-call" href={`tel:${phoneLink}`}><Icon name="phone" size={18} /> Anrufen</a>
              <a className="nav-cta nav-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={18} /> WhatsApp</a>
            </div>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section" style={{ '--hero-image': `url(${heroImage})` }}>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span></span> Einfach. Schnell. Verantwortungsbewusst.</div>
              <h1>Ihr altes Auto.<br/><em>Unser Auftrag.</em></h1>
              <p>Wir holen Ihr Altfahrzeug bundesweit in ganz Deutschland unkompliziert ab und führen es einer fachgerechten Verwertung zu.</p>
              <div className="hero-highlights">
                <span><Icon name="check" size={18}/> Kostenlose Anfrage</span>
                <span><Icon name="check" size={18}/> Schnelle Rückmeldung</span>
                <span><Icon name="check" size={18}/> Faire Abwicklung</span>
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#anfrage">Fahrzeug anfragen <Icon name="arrow" size={19}/></a>
                <div className="hero-contact-actions">
                  <a className="contact-action" href={`tel:${phoneLink}`}><Icon name="phone" size={19}/><span><small>Direkt anrufen</small>{phoneDisplay}</span></a>
                  <a className="contact-action whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={19}/><span><small>Nachricht senden</small>WhatsApp</span></a>
                </div>
              </div>
            </div>
            <div className="hero-card" id="anfrage">
              <div className="card-kicker">Kostenlos & unverbindlich</div>
              <h2>Fahrzeug jetzt anfragen</h2>
              <p>Wir melden uns schnellstmöglich bei Ihnen.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-direct-contact">
                  <span>Lieber direkt Kontakt aufnehmen?</span>
                  <a href={`tel:${phoneLink}`}><Icon name="phone" size={16}/> Anrufen</a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={16}/> WhatsApp</a>
                </div>
                <div className="field-row">
                  <label><span>Name *</span><input name="name" type="text" placeholder="Ihr Name" required /></label>
                  <label><span>Telefon *</span><input name="phone" type="tel" placeholder="Ihre Nummer" required /></label>
                </div>
                <label><span>E-Mail</span><input name="email" type="email" placeholder="name@beispiel.de" /></label>
                <div className="field-row">
                  <label><span>Marke & Modell *</span><input name="vehicle" type="text" placeholder="z. B. VW Golf" required /></label>
                  <label><span>Baujahr</span><input name="year" type="number" min="1950" max="2026" placeholder="2010" /></label>
                </div>
                <label><span>Fahrzeugstandort *</span><input name="location" type="text" placeholder="PLZ, Ort" required /></label>
                <label><span>Zustand / Nachricht</span><textarea name="message" rows="3" placeholder="Kurze Beschreibung, Schäden, Fahrbereitschaft …"></textarea></label>
                <label className="consent"><input type="checkbox" required/><span>Ich stimme der Kontaktaufnahme zu und habe die <a href="#datenschutz">Datenschutzhinweise</a> gelesen.</span></label>
                <button className="button button-primary submit" type="submit">Kostenlose Anfrage senden <Icon name="arrow" size={19}/></button>
                {formNote && <div className="form-note" role="status">{formNote}</div>}
              </form>
            </div>
          </div>
          <div className="trust-strip">
            <div className="container trust-inner">
              <div><Icon name="shield"/><span><strong>Zuverlässig</strong><small>Klare Absprachen</small></span></div>
              <div><Icon name="clock"/><span><strong>Flexibel</strong><small>Termine nach Absprache</small></span></div>
              <div><Icon name="recycle"/><span><strong>Verantwortungsvoll</strong><small>Fachgerechte Verwertung</small></span></div>
            </div>
          </div>
        </section>

        <section className="section services" id="leistungen">
          <div className="container">
            <div className="section-heading centered">
              <span className="section-label">Unser Rundum-Service</span>
              <h2>Autoverschrottung, die Ihnen<br/>Arbeit abnimmt.</h2>
              <p>Von der ersten Anfrage bis zur Abholung bleiben wir Ihr persönlicher Ansprechpartner.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map((item, index) => <article className="benefit-card" key={item.title}>
                <span className="step-no">0{index + 1}</span><div className="benefit-icon"><Icon name={item.icon} size={28}/></div>
                <h3>{item.title}</h3><p>{item.text}</p>
              </article>)}
            </div>
          </div>
        </section>

        <section className="section process" id="ablauf">
          <div className="container process-grid">
            <div className="process-copy">
              <span className="section-label light">So einfach geht’s</span>
              <h2>In drei Schritten<br/>ist alles erledigt.</h2>
              <p>Kein kompliziertes Hin und Her. Sie senden uns die wichtigsten Fahrzeugdaten, wir klären die Details persönlich und kümmern uns um den Rest.</p>
              <a className="button button-light" href="#anfrage">Jetzt Anfrage starten <Icon name="arrow" size={19}/></a>
            </div>
            <ol className="timeline">
              <li><span>1</span><div><h3>Fahrzeug anfragen</h3><p>Formular ausfüllen oder kurz per Telefon bzw. WhatsApp melden.</p></div></li>
              <li><span>2</span><div><h3>Termin vereinbaren</h3><p>Wir besprechen Fahrzeugzustand, Standort und den passenden Abholtermin.</p></div></li>
              <li><span>3</span><div><h3>Abholen lassen</h3><p>Wir übernehmen das Fahrzeug wie vereinbart und sorgen für die weitere Verwertung.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="section types">
          <div className="container types-grid">
            <div className="types-visual">
              <div className="stat"><strong>1</strong><span>Ansprechpartner<br/>für alles</span></div>
              <div className="car-line" aria-hidden="true">⌁</div>
            </div>
            <div className="types-copy">
              <span className="section-label">Wir holen viele Fahrzeugarten</span>
              <h2>Auch wenn nichts mehr fährt.</h2>
              <p>Ob altersbedingt, nach einem Schaden oder ohne gültige Hauptuntersuchung – fragen Sie Ihr Fahrzeug einfach an.</p>
              <ul className="check-list">
                <li><Icon name="check" size={18}/> Altautos & Schrottfahrzeuge</li>
                <li><Icon name="check" size={18}/> Unfallwagen</li>
                <li><Icon name="check" size={18}/> Fahrzeuge mit Motorschaden</li>
                <li><Icon name="check" size={18}/> Fahrzeuge ohne TÜV</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq-grid">
            <div className="section-heading">
              <span className="section-label">Gut zu wissen</span>
              <h2>Häufige Fragen</h2>
              <p>Ihre Frage ist nicht dabei? Rufen Sie uns einfach an – wir helfen persönlich weiter.</p>
              <div className="faq-contact-actions">
                <a className="text-link dark" href={`tel:${phoneLink}`}><Icon name="phone" size={19}/> {phoneDisplay}</a>
                <a className="text-link dark whatsapp-link" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={19}/> Per WhatsApp schreiben</a>
              </div>
            </div>
            <div className="accordion">
              {faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? 'active' : ''}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{question}</span><i>{openFaq === index ? '−' : '+'}</i>
                </button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>)}
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="container contact-banner-inner">
            <div><span className="section-label light">Bereit für die Abholung?</span><h2>Jetzt Fahrzeug unverbindlich anfragen.</h2></div>
            <div className="banner-actions">
              <a className="button button-primary" href="#anfrage">Online anfragen <Icon name="arrow" size={19}/></a>
              <a className="button button-outline" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={19}/> WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="legal-section" id="impressum">
          <div className="container legal-grid">
            <div><span className="section-label">Rechtliches</span><h2>Impressum</h2></div>
            <div className="legal-copy">
              <h3>Angaben gemäß § 5 DDG</h3>
              <p>Ruben Eloi Miguel<br/>Aldenraderstr. 15D<br/>47169 Duisburg</p>
              <h3>Kontakt</h3>
              <p>Telefon: <a href={`tel:${phoneLink}`}>{phoneDisplay}</a><br/>E-Mail: <a href="mailto:miguel.ruben@web.de">miguel.ruben@web.de</a></p>
            </div>
          </div>
        </section>

        <section className="legal-section muted" id="datenschutz">
          <div className="container legal-grid">
            <div><span className="section-label">Ihre Daten</span><h2>Datenschutz</h2></div>
            <div className="legal-copy">
              <h3>Verantwortlicher</h3><p>Ruben Eloi Miguel, Aldenraderstr. 15D, 47169 Duisburg, E-Mail: miguel.ruben@web.de.</p>
              <h3>Kontaktaufnahme</h3><p>Wenn Sie uns per E-Mail, Telefon, WhatsApp oder über das Anfrageformular kontaktieren, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage. Das Formular öffnet Ihr lokales E-Mail-Programm; auf dieser Webseite werden dabei keine Formulardaten gespeichert.</p>
              <h3>Ihre Rechte</h3><p>Sie haben im Rahmen der gesetzlichen Vorgaben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit sowie ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.</p>
              <p className="legal-note">Hinweis: Vor dem gewerblichen Livegang sollten Impressum und Datenschutz rechtlich geprüft und um Angaben zur Unternehmensform, Umsatzsteuer-ID oder Aufsichtsbehörde ergänzt werden, sofern diese auf Ihr Angebot zutreffen.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div><a className="brand footer-brand" href="#top"><span className="brand-mark"><Icon name="recycle" size={25}/></span><span>AUTO-<strong>VERSCHROTTUNG</strong><i>24</i></span></a><p>Ihr persönlicher Ansprechpartner für die unkomplizierte Fahrzeugabholung bundesweit in ganz Deutschland.</p></div>
          <div><h3>Kontakt</h3><a href={`tel:${phoneLink}`}><Icon name="phone" size={14}/> {phoneDisplay}</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={14}/> WhatsApp schreiben</a><a href="mailto:miguel.ruben@web.de">miguel.ruben@web.de</a><span>47169 Duisburg</span></div>
          <div><h3>Navigation</h3><a href="#leistungen">Leistungen</a><a href="#ablauf">So geht’s</a><a href="#faq">FAQ</a></div>
          <div><h3>Rechtliches</h3><a href="#impressum">Impressum</a><a href="#datenschutz">Datenschutz</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Auto-Verschrottung24</span><span>Aus Duisburg. Bundesweit für Sie da.</span></div>
      </footer>

      <div className="mobile-bar">
        <a href={`tel:${phoneLink}`}><Icon name="phone" size={19}/> Anrufen</a>
        <a className="mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer"><Icon name="message" size={19}/> WhatsApp</a>
        <a href="#anfrage"><Icon name="file" size={19}/> Anfrage</a>
      </div>
    </div>
  )
}

export default App
