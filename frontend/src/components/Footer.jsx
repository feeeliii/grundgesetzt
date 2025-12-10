import { Link } from 'react-router-dom'
import Star from './Star'
import Logoicon from '../assets/Logoicon.png'

const Footer = () => {
    return (
        <footer className="py-8 px-8 mt-auto">
            {/* Star Line */}
            <div className="flex overflow-hidden w-screen -mx-8 mb-8">
                {[...Array(1000)].map((_, i) => (
                    <Star key={i} className="w-1 h-1 text-black shrink-0" />
                ))}
            </div>

            {/* Footer Content */}
            <div className="flex justify-between items-end">
                {/* Logo links */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logoicon} alt="Logo" className="h-10 lg:h-12" />
                    <span className="font-['Teko'] text-2xl lg:text-[36px] font-medium text-black leading-none">
                        grundgesetzt
                    </span>
                </Link>

                {/* Links rechts */}
                <div className="flex flex-col items-end gap-1">
                    <Link 
                        to="/impressum" 
                        className="font-['Teko'] text-lg lg:text-xl text-black hover:text-pink transition-colors"
                    >
                        Impressum
                    </Link>
                    <Link 
                        to="/datenschutz" 
                        className="font-['Teko'] text-lg lg:text-xl text-black hover:text-pink transition-colors"
                    >
                        Datenschutz
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
