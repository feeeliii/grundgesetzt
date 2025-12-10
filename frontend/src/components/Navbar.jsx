import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Star from './Star'
import Logoicon from '../assets/Logoicon.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const menuItems = [
    { name: 'Das Buch', href: '/home' },
    { name: 'Das Projekt', href: '/projekt' },
    { name: 'Vorgehensweise', href: '/#vorgehensweise' },
    { name: 'Kontakt', href: '/kontakt' }
  ]

  const isActive = (href) => {
    if (href.startsWith('/#')) {
        return location.pathname === '/' && location.hash === href.replace('/', '')
    }
    return location.pathname === href
}

  return (
    <nav className="py-6 px-8">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center gap-[42px]">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="flex items-center gap-1 cursor-pointer"
          >
            <Star 
              className={`${
                isActive(item.href) 
                  ? 'w-[50px] h-[48px] text-pink' 
                  : 'w-[32px] h-[30px] text-black'
              }`} 
            />
            <span className="font-['Teko'] text-[28px] text-black leading-none">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Mobile/Tablet Navigation */}
      <div className="flex lg:hidden justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logoicon} alt="Logo" className="h-12" />
          <span className="font-['Teko'] text-[36px] font-medium text-black leading-none">
            grundgesetzt
          </span>
        </Link>

        {/* Hamburger Menu */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1"
        >
          <div className="flex">
            {'*'.repeat(6).split('').map((_, i) => (
              <Star key={i} className="w-2 h-2 text-black" />
            ))}
          </div>
          <div className="flex">
            {'*'.repeat(6).split('').map((_, i) => (
              <Star key={i} className="w-2 h-2 text-black" />
            ))}
          </div>
          <div className="flex">
            {'*'.repeat(6).split('').map((_, i) => (
              <Star key={i} className="w-2 h-2 text-black" />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden mt-6 flex flex-col gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-1"
            >
              <Star 
                className={`${
                  isActive(item.href) 
                    ? 'w-[50px] h-[48px] text-pink' 
                    : 'w-[32px] h-[30px] text-black'
                }`} 
              />
              <span className="font-['Teko'] text-[24px] text-black leading-none">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Star Line */}
      <div className="flex mt-6 overflow-hidden w-screen -mx-8">
        {[...Array(1000)].map((_, i) => (
          <Star key={i} className="w-1 h-1 text-black shrink-0" />
        ))}
      </div>

    </nav>
  )
}

export default Navbar
