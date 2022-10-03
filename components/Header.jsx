import Link from 'next/link'
import React, { useState } from 'react'

const menuItems = [
  { 'title': 'home', 'url': '/' },
  { 'title': 'about', 'url': '/#about' },
  { 'title': 'portfolio', 'url': '/portfolio' },
  { 'title': 'gallery', 'url': '/gallery' },
  { 'title': 'contact', 'url': '/#contact' },
]

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <header className='w-full bg-slate-50 border-b border-slate-900/5 sticky top-0 z-50'>
      <div className='sm:container mx-auto sm:px-6 px-3 relative'>
        <nav className="flex justify-between items-center h-20">
          <div className='cursor-pointer'>
            <Link href='/'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='w-16 h-16'>
                <path fill="#EB1D36" d="M126.1 472.9L3.1 260c-1.4-2.5-1.4-5.5 0-8l123-212.9c1.4-2.5 4.1-4 6.9-4h246c2.9 0 5.5 1.5 6.9 4l123 212.9c1.4 2.5 1.4 5.5 0 8l-123 212.9c-1.4 2.5-4.1 4-6.9 4H133c-2.9 0-5.5-1.5-6.9-4z"></path>
                <path fill="#FFF" d="M484.2 251.5c1.4 2.5 1.4 5.5 0 8L377.9 443.7c-3 5.1-10.4 5.1-13.3 0l-13.3-23c-1.4-2.4-1.4-5.3 0-7.7l57.9-100.1 11.1-18.7 4.3-7.4c3-5.1-.7-11.5-6.7-11.5H310.8c-4.2 0-7.7 3.4-7.7 7.7v165.2c0 4.2-3.4 7.7-7.7 7.7h-23c-4.2 0-7.7-3.4-7.7-7.7V63.9c0-4.2 3.4-7.7 7.7-7.7h23c4.2 0 7.7 3.4 7.7 7.7v165.2c0 4.2 3.4 7.7 7.7 7.7h106.5c6.1 0 10-6.7 6.9-12L351.3 98c-1.4-2.4-1.4-5.3 0-7.7l13.3-23c3-5.1 10.4-5.1 13.3 0l106.3 184.2z M207 209.9V102.4c0-4.2-3.4-7.7-7.7-7.7h-32c-2.7 0-5.3 1.5-6.7 3.8l-73 126.8c-3 5.1.7 11.5 6.7 11.5h143.4c4.2 0 7.7 3.4 7.7 7.7v203.6c0 4.2-3.4 7.7-7.7 7.7h-92.6c-2.7 0-5.3-1.5-6.7-3.8L58.8 313.4l-.3-.4-4.1-7.1c-3-5.1.7-11.5 6.6-11.5h26.6c2.7 0 5.3 1.4 6.6 3.8l8.6 14.7.3.6 57.6 100c1.4 2.4 3.9 3.8 6.7 3.8h32c4.2 0 7.7-3.4 7.7-7.7V282.9c0-4.2-3.4-7.7-7.7-7.7H41.1c-2.8 0-5.3-1.5-6.7-3.9l-6.7-11.8c-1.3-2.4-1.3-5.3 0-7.6L138.6 60.1c1.4-2.4 3.9-3.8 6.7-3.8h92.6c4.2 0 7.7 3.4 7.7 7.7v146c0 4.2-3.4 7.7-7.7 7.7h-23c-4.4-.1-7.9-3.6-7.9-7.8z M103.4 198L92.3 217.2 103.3 198z"></path>
              </svg>
            </Link>
          </div>
          <ul className={isMobile ? 'absolute top-20 right-0 bg-slate-50 text-center flex flex-col gap-6 py-10 border border-slate-900/5' : 'sm:flex gap-6 hidden'} onClick={() => setIsMobile(false)}>
            {
              menuItems.map((data, key) => (
                <li key={key}>
                  <Link href={data.url} aria-label={`${data.title} link`}>
                    <a href={data.url} className={isMobile ? `font-semibold uppercase px-20` : `font-semibold uppercase py-6 hover:text-[#eb1d36]`}>{data.title}</a>
                  </Link>
                </li>
              ))
            }
          </ul>
          <button className='block sm:hidden border rounded-md bg-slate100 bg-[#eb1d36]' onClick={() => setIsMobile(!isMobile)} aria-label='menu toggle button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10 text-white">{isMobile ?
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              :
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
            }
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header