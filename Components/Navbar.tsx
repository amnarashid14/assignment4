import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-[1120px] h-[35px]  top-[102px] left-[160px] flex justify-between items-center'>
<h1 className='text-[24px] w-1/5 '>ma</h1>
      <div className="w-1/2">
        <ul className='flex justify-evenly'>
            <li> <Link href="/">Work</Link></li>
            <li> <Link href="/about">About</Link></li>
            <li> <Link href="/">Playground</Link></li>
            <li> <Link href="/">Contact</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
// border-2 border-blue-900