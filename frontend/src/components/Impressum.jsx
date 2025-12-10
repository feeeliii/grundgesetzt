import { motion } from 'framer-motion'

const Impressum = () => {
    return (
        <section className="py-16 px-8 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.h2
                    className="font-['Teko'] text-4xl md:text-5xl text-black mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Impressum
                </motion.h2>

                <motion.div
                    className="space-y-8 text-black/80"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <p>© Copyright Texte by Felicitas Strickmann</p>
                        <p>© Copyright Umschlaggestaltung by Josy</p>
                    </div>

                    <div>
                        <h3 className="font-['Teko'] text-2xl text-black mb-2">Verlag</h3>
                        <p>Felicitas Strickmann</p>
                        <p>Donaustraße 44</p>
                        <p>12043 Berlin</p>
                        <p>
                            <a href="mailto:hallo@grundgesetzt.de" className="text-pink hover:underline">
                                hallo@grundgesetzt.de
                            </a>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-['Teko'] text-2xl text-black mb-2">Herstellung</h3>
                        <p>epubli – ein Service der neopubli GmbH</p>
                        <p>Köpenicker Straße 154a</p>
                        <p>10997 Berlin</p>
                    </div>

                    <div>
                        <h3 className="font-['Teko'] text-2xl text-black mb-2">Kontaktadresse nach EU-Produktsicherheitsverordnung</h3>
                        <p>
                            <a href="mailto:produktsicherheit@epubli.com" className="text-pink hover:underline">
                                produktsicherheit@epubli.com
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Impressum
