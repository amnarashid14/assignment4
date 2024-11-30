import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-[1120px] h-5  top-[2598px] left-[160px] flex justify-between items-center'>
        {/* border-2 border-pink-700 */}
<h1 className='text-[21px] w-[270.82px] font-medium leading-[25.2px] text-[#2429AF]'>Mehmet Akif Karasu ⏤ 2020
</h1>
      <div className="w-2/6">
        <ul className='flex justify-evenly'>
            <li> <Link href="/">Artstation</Link></li>
            <li> <Link href="/">LinkedIn</Link></li>
            <li> <Link href="/">Twitter</Link></li>
            
        </ul>
      </div>
    </div>
  )
}

export default Footer
