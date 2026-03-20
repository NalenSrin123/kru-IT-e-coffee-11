import { useState } from 'react'
import logo from '../assets/images/branding/logo.png'
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  return (
    <nav className='w-full bg-white text-gray-200 sticky top-0 z-100 shadow-md bg-gradient-to-t from-orange-950/50 to-orange-400 border-orange-900' >
      <div className='max-w-7xl mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>

          {/* Left Menu - Desktop */}
          <ul className='hidden lg:flex gap-10 text-lg font-medium'>
            <li className='cursor-pointer hover:text-blue-600 transition'>Home</li>
            <li className='cursor-pointer hover:text-blue-600 transition'>About</li>
            <li className='cursor-pointer hover:text-blue-600 transition'>Menu</li>
            <li className='cursor-pointer hover:text-blue-600 transition'>Contact</li>
          </ul>

          {/* Logo */}
          <div className='w-14'>
            <img className='w-full h-full object-contain' src={logo} alt='Logo' />
          </div>

          {/* Right Menu - Desktop */}
          <ul className='hidden lg:flex gap-6 items-center text-lg font-medium'>
            <li className='cursor-pointer hover:text-blue-600 transition'>Blog</li>
            <li className='cursor-pointer hover:text-blue-600 transition'>Cart (0)</li>
            <Link to="/login">
  <button className='px-4 py-2 border rounded-xl hover:bg-blue-600 hover:text-white transition'>
    Login
  </button>
</Link>
          </ul>

          {/* Mobile Button */}
          <button
            className='lg:hidden text-gray-700'
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
          <div className='lg:hidden pb-6'>
            <ul className='flex flex-col gap-4 text-lg font-medium'>
              <li className='cursor-pointer hover:text-blue-600 transition'>Home</li>
              <li className='cursor-pointer hover:text-blue-600 transition'>About</li>
              <li className='cursor-pointer hover:text-blue-600 transition'>Menu</li>
              <li className='cursor-pointer hover:text-blue-600 transition'>Contact</li>
              <li className='cursor-pointer hover:text-blue-600 transition'>Blog</li>
              <li className='cursor-pointer hover:text-blue-600 transition'>Cart (0)</li>
              <li>
                <button className='w-full px-4 py-2 border rounded-xl hover:bg-blue-600 hover:text-white transition'>
                  Login
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
