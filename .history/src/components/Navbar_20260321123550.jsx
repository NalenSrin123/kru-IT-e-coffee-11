import { useState } from 'react'
import logo from '../assets/images/branding/logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  return (
    <nav className='w-full bg-white text-gray-200 sticky top-0 z-100 shadow-md bg-gradient-to-t py-1 from-orange-950 to-orange-950/50  border-b border-white ' >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>

          {/* Left Menu - Desktop */}
          <ul className='hidden lg:flex gap-10 text-lg font-medium'>
            <li className='cursor-pointer hover:text-orange-400 transition'>Home</li>
            <li className='cursor-pointer hover:text-orange-400 transition'>About</li>
            <li className='cursor-pointer hover:text-orange-400 transition'>Menu</li>
            <li className='cursor-pointer hover:text-orange-400 transition'>Contact</li>
          </ul>

          {/* Logo */}
          <div className='w-14 rounded-full p-[1px] bg-amber-50'>
            <img className='w-[100%] h-[100%] object-contain' src={logo} alt='Logo' />
          </div>

          {/* Right Menu - Desktop */}
          <ul className='hidden lg:flex gap-6 items-center text-lg font-medium'>
            <li className='cursor-pointer hover:text-orange-400 transition'>Blog</li>
            <li className='cursor-pointer hover:text-orange-400 transition'>Cart (0)</li>
            <Link to="/login">
  <button className='px-4 py-2 border rounded-xl hover:bg-blue-600 hover:text-white transition'>
    Login
  </button>
</Link>
          </ul>

          {/* Mobile Button */}
          <button
            className='lg:hidden text-white'
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='lg:hidden pb-6 '>
            <ul className='flex flex-col gap-4 text-lg font-medium'>
  <li>
    <Link to="/" className='cursor-pointer hover:text-orange-400 transition block'>Home</Link>
  </li>
  <li>
    <Link to="/about" className='cursor-pointer hover:text-orange-400 transition block'>About</Link>
  </li>
  <li>
    <Link to="/menu" className='cursor-pointer hover:text-orange-400 transition block'>Menu</Link>
  </li>
  <li>
    <Link to="/contact" className='cursor-pointer hover:text-orange-400 transition block'>Contact</Link>
  </li>
  <li className='cursor-pointer hover:text-orange-400 transition'>Blog</li>
  <li className='cursor-pointer hover:text-orange-400 transition'>Cart (0)</li>
  <li>
    <Link to="/login">
      <button className='w-full px-4 py-2 border rounded-xl hover:bg-blue-600 hover:text-white transition'>
        Login
      </button>
    </Link>
  </li>
</ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
