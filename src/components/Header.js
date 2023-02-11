

import React from 'react'
import Link from 'next/link';


const Header = () => {
return (
    
        <nav className="p-3 bg-primary font-serif text-highlight mx-4 rounded-md flex justify-evenly">
            <Link 
            href="/"
            className='red'
            >
                Home
            </Link>
            <Link href="/about-me">
                About Me
            </Link>
            <Link href="/contact">
                Projects
            </Link>
            <Link href="/contact">
                Resume
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </nav>
    
  )
}

export default Header
