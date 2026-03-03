import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GoUp from '../components/GoUp'

const Datenschutz = () => {
    const sections = [
        {
            id: '1',
            title: '1. Datenschutz auf einen Blick',
            content: (
                <>
                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Allgemeine Hinweise</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>

                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Datenerfassung auf dieser Website</h3>
                    <ul className="list-disc list-inside text-black/80 leading-relaxed space-y-3 ml-2">
                        <li>
                            <span className="font-semibold">Wer ist verantwortlich?</span> Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber (siehe Impressum).
                        </li>
                        <li>
                            <span className="font-semibold">Wie erfassen wir Ihre Daten?</span> Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.&nbsp;B. durch Anmeldung zum Newsletter oder Teilnahme an der Abstimmung). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z.&nbsp;B. IP-Adresse, Browser, Uhrzeit).
                        </li>
                        <li>
                            <span className="font-semibold">Wofür nutzen wir Ihre Daten?</span> Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten (E-Mail) nutzen wir für den Newsletter-Versand.
                        </li>
                        <li>
                            <span className="font-semibold">Welche Rechte haben Sie?</span> Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten.
                        </li>
                    </ul>
                </>
            )
        },
        {
            id: '2',
            title: '2. Hosting',
            content: (
                <>
                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Hosting bei Hetzner</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Wir hosten unsere Website bei folgendem Anbieter:
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Hetzner Online GmbH<br />
                        Industriestr. 25<br />
                        91710 Gunzenhausen<br />
                        Deutschland
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Wenn Sie unsere Website besuchen, erfasst Hetzner verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Hetzner:{' '}
                        <a href="https://www.hetzner.com/de/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-pink underline hover:text-pink/70 transition">
                            hetzner.com/de/legal/privacy-policy
                        </a>.
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Die Verwendung von Hetzner erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Hetzner speichert Daten ausschließlich in Rechenzentren in Deutschland/Europa.
                    </p>

                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Auftragsverarbeitung</h3>
                    <p className="text-black/80 leading-relaxed">
                        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen.
                    </p>
                </>
            )
        },
        {
            id: '3',
            title: '3. Allgemeine Hinweise und Pflichtinformationen',
            content: (
                <>
                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Verantwortliche Stelle</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Felicitas Strickmann<br />
                        Donaustraße. 44<br />
                        12043 Berlin
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        E-Mail: datenschutz@grundgesetzt.de<br />
                        Impressum:{' '}
                        <a href="https://grundgesetzt.de/impressum" className="text-pink underline hover:text-pink/70 transition">
                            grundgesetzt.de/impressum
                        </a>
                    </p>

                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Speicherdauer</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Soweit in dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht.
                    </p>

                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">SSL- bzw. TLS-Verschlüsselung</h3>
                    <p className="text-black/80 leading-relaxed">
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                    </p>
                </>
            )
        },
        {
            id: '4',
            title: '4. Datenerfassung auf dieser Website',
            content: (
                <>
                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Server-Log-Dateien</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                    </p>
                    <ul className="list-disc list-inside text-black/80 leading-relaxed space-y-1 ml-2 mb-4">
                        <li>Browsertyp und Browserversion</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Referrer URL (die zuvor besuchte Seite)</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                        <li>IP-Adresse</li>
                    </ul>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                    </p>

                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Teilnahme an Abstimmungen (Polls)</h3>
                    <p className="text-black/80 leading-relaxed mb-2">
                        Wenn Sie an unseren interaktiven Abstimmungen teilnehmen, speichern wir technisch notwendige Informationen, um Mehrfachabstimmungen zu verhindern. Hierzu wird eine anonymisierte Kennung (Visitor-ID) oder Ihre IP-Adresse zusammen mit Ihrer Wahl und dem Zeitstempel in unserer Datenbank gespeichert.
                    </p>
                    <p className="text-black/80 leading-relaxed">
                        <span className="font-semibold">Rechtsgrundlage:</span> Die Verarbeitung erfolgt auf Grundlage unseres berechtigten Interesses (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO), ein faires Abstimmungsergebnis sicherzustellen und Manipulationen zu verhindern.
                    </p>
                </>
            )
        },
        {
            id: '5',
            title: '5. Newsletter',
            content: (
                <>
                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Newsletter-Daten</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse. Wir verwenden das sogenannte Double-Opt-In-Verfahren. Das heißt, Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um Bestätigung Ihrer Anmeldung gebeten werden. Erst nach Klick auf den Bestätigungslink werden Sie in den Verteiler aufgenommen.
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den „Austragen"-Link im Newsletter.
                    </p>

                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Brevo (ehemals Sendinblue)</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Diese Website nutzt Brevo für den Versand von Newslettern. Anbieter ist die:
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Sendinblue GmbH<br />
                        Köpenicker Straße 126<br />
                        10179 Berlin<br />
                        Deutschland
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Brevo ist ein Dienst, mit dem der Newsletterversand organisiert und analysiert werden kann. Die von Ihnen eingegebenen Daten (z.&nbsp;B. E-Mail-Adresse) werden auf den Servern von Brevo in Deutschland gespeichert.
                    </p>

                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Datenanalyse durch Brevo</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Mit Hilfe von Brevo können wir unsere Newsletter-Kampagnen analysieren. So können wir z.&nbsp;B. sehen, ob eine Newsletter-Nachricht geöffnet und welche Links ggf. angeklickt wurden. Näheres entnehmen Sie der Datenschutzerklärung von Brevo:{' '}
                        <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-pink underline hover:text-pink/70 transition">
                            brevo.com/de/legal/privacypolicy
                        </a>.
                    </p>

                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Auftragsverarbeitung</h3>
                    <p className="text-black/80 leading-relaxed">
                        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen.
                    </p>
                </>
            )
        },
        {
            id: '6',
            title: '6. Plugins und Tools',
            content: (
                <>
                    <h3 className="font-['Teko'] text-xl md:text-2xl text-black mt-6 mb-2">Google Fonts (Web Fonts)</h3>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO dar.
                    </p>
                    <p className="text-black/80 leading-relaxed mb-4">
                        Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.
                    </p>
                    <p className="text-black/80 leading-relaxed">
                        Weitere Informationen zu Google Web Fonts finden Sie unter{' '}
                        <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-pink underline hover:text-pink/70 transition">
                            developers.google.com/fonts/faq
                        </a>{' '}
                        und in der Datenschutzerklärung von Google:{' '}
                        <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-pink underline hover:text-pink/70 transition">
                            policies.google.com/privacy
                        </a>.
                    </p>
                </>
            )
        }
    ]

    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="py-24 px-8 flex-1">
                <div className="max-w-3xl mx-auto">
                    <motion.h1
                        className="font-['Teko'] text-5xl md:text-6xl lg:text-7xl text-black mb-16 text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Datenschutzerklärung
                    </motion.h1>

                    <div className="flex flex-col space-y-12">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="font-['Teko'] text-3xl md:text-4xl text-black mb-2">
                                    {section.title}
                                </h2>
                                <div className="border-l-4 border-pink pl-6">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <GoUp className="mt-8" />
            <Footer />
        </div>
    )
}

export default Datenschutz