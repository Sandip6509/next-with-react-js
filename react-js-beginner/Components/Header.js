import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="h-8 px-5 bg-green-300 flex items-center justify-between">
        <Link href="/">Logo</Link>
        <div className='flex gap-8'>
          <Link href="/About">About</Link>
          <Link href="/Product">Product</Link>
          <Link href="/Courses">Courses</Link>
        </div>
      </div>
  )
}

export default Header
