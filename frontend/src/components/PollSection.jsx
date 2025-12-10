import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Link } from 'react-router-dom'

const options = [
    { id: 1, text: 'Die Landesverfassungen (z.B. Bayern)' },
    { id: 2, text: 'Das Strafgesetzbuch (StGB)' },
    { id: 3, text: 'Das Informationsfreiheitsgesetz' },
    { id: 4, text: 'Ich will nur die Ergebnisse sehen' },]

// Generate or get visitor ID
const getVisitorId = () => {
    let visitorId = localStorage.getItem('visitorId')
    if (!visitorId) {
        visitorId = 'visitor_' + Math.random().toString(36).substring(2) + Date.now().toString(36)
        localStorage.setItem('visitorId', visitorId)
    }
    return visitorId
}

const PollSection = () => {
    const [selected, setSelected] = useState(null)
    const [hasVoted, setHasVoted] = useState(false)
    const [results, setResults] = useState([])
    const [totalVotes, setTotalVotes] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        checkIfVoted()
    }, [])

    const checkIfVoted = async () => {
        try {
            const visitorId = getVisitorId()
            const response = await axios.get(`http://localhost:3001/api/poll/check/${visitorId}`)
            if (response.data.hasVoted) {
                setHasVoted(true)
                fetchResults()
            }
        } catch (error) {
            console.error('Fehler beim Prüfen')
        } finally {
            setLoading(false)
        }
    }

    const fetchResults = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/poll/results')
            setResults(response.data.results)
            setTotalVotes(response.data.totalVotes)
        } catch (error) {
            console.error('Fehler beim Laden der Ergebnisse')
        }
    }

    const handleVote = async () => {
        if (!selected) return

        try {
            const visitorId = getVisitorId()
            await axios.post('http://localhost:3001/api/poll/vote', {
                optionId: selected,
                visitorId
            })
            setHasVoted(true)
            fetchResults()
        } catch (error) {
            console.error('Fehler beim Abstimmen')
        }
    }

    if (loading) {
        return (
            <section className="py-16 px-8 bg-white">
                <p className="text-center">Laden...</p>
            </section>
        )
    }

    return (
        <section className="py-16 px-8 bg-white">
            <motion.h2
                className="font-['Teko'] text-4xl md:text-5xl text-center text-black mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Welches Gesetz sollen wir als nächstes umschreiben?
            </motion.h2>

            <div className="max-w-2xl mx-auto">
                {!hasVoted ? (
                    <div className="space-y-4">
                        {options.map((option) => (
                            <motion.button
                                key={option.id}
                                onClick={() => setSelected(option.id)}
                                className={`w-full p-4 text-left border-2 transition-colors ${
                                    selected === option.id
                                        ? 'border-pink bg-pink/10'
                                        : 'border-black/20 hover:border-pink/50'
                                }`}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <span>{option.text}</span>
                            </motion.button>
                        ))}

                        <motion.button
                            onClick={handleVote}
                            disabled={!selected}
                            className={`w-full p-4 mt-6 font-['Teko'] text-2xl transition-colors ${
                                selected
                                    ? 'bg-pink text-white hover:bg-pink/90'
                                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                            whileHover={selected ? { scale: 1.02 } : {}}
                            whileTap={selected ? { scale: 0.98 } : {}}
                        >
                            Abstimmen
                        </motion.button>
                    </div>
                ) : (
                    <div className="space-y-4">
                        {options.map((option) => {
                            const result = results.find(r => r.optionId === option.id)
                            const votes = result?.votes || 0
                            const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0

                            return (
                                <div key={option.id} className="relative">
                                    <div className="p-4 border-2 border-black/20 rounded-lg overflow-hidden">
                                        <motion.div
                                            className="absolute inset-0 bg-pink/20"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 0.8, delay: 0.2 }}
                                        />
                                        <div className="relative flex justify-between">
                                            <span>{option.text}</span>
                                            <span className="font-['Teko'] text-xl">{percentage}%</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <p className="text-center text-black/60 mt-4">
                            {totalVotes} Stimmen insgesamt
                        </p>
                    </div>
                )}
            </div>
            <p className="text-center mt-4">
                Du hast eine andere Idee?{' '}
                <Link to="/kontakt" className="text-pink underline hover:text-pink/80 transition-colors">
                    Schreib uns!
                </Link>
            </p>
        </section>
    )
}

export default PollSection
