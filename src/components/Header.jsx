import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <div>
      <header className="bg-green-400 text-white-4 px-4 py-3 border-b-2 border-b-black flex justify-between items-center flex-wrap ">
          <h2 className="text-2xl font-bold">
            
           <Link href="/"> Dev Story</Link>
            </h2>
          <nav className="flex gap-4">
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <Link href="/about/contact">Contact</Link>
            <Link href="/register">Register</Link>
          </nav>
        </header>
        
    </div>
  )
}

export default header
