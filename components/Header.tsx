import { useEffect, useState } from 'react'
import Link from 'next/link'
import { BellIcon, SearchIcon } from '@heroicons/react/outline'
import useAuth from 'hooks/useAuth'
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const  { logout, loading} =  useAuth() 

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // if(loading) return 'Loading....'

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          src='https://rb.gy/ulxxee'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />
        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>Tv Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>News & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>
        <div className='flex items-center space-x-4 text-sm font-light'>
          <SearchIcon className='hidden h-6 w-6 sm:inline' />
          <div className='hidden lg:inline'>Kids</div>
          <BellIcon className='h-6 w-6' />
          {/* <Link href='/account'> */}
            <img
              onClick={logout}
              src='https://rb.gy/g1pwyx'
              className='cursor-pointer rounded'
            />
          {/* </Link> */}
        </div>
    </header>
  )
}
