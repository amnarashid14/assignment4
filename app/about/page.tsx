import Navbar from '@/Components/Navbar'
import React from 'react'
import Image from 'next/image'
import Footer from '@/Components/Footer'
const About = () => {
  return (
    <div className='flex justify-center items-center flex-col m-12 '>
      <Navbar />

      <div className=" w-[1120px] h-[590px] top-[360px] left-[190px] flex justify-evenly items-center  mt-7">
        {/* border-green-950 border-2 */}
        <div className=" w-[1120px] ">
          {/* border-2 border-red-800 */}
          <h1 className='w-[480px] h-[199px] top-[360px] left-[160px] font-medium text-6xl leading-[58.32px]'>Hi I'm Mehmet Akif Karasu, 3D artist & sculptor.</h1>
          <p className='w-[575px] h-[359px] top-[591px] left-[160px] text-[#606060] font-normal text-[28px] leading-[37.44px]'>My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
            <br /><br />
            Now Im an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.</p>
        </div>

        <div className=" w-[421px] h-[590px] top-[360px] left-[859px] ">
          {/* border-2 border-green-600 */}
          <Image height={590} width={421} src="/images/about image.jpeg" alt="Loading..." className='w-[421px] h-[590px]' />
        </div>
      </div>



      <div className="w-[1120px] h-[216px] top-[1086px] left-[160px]  flex p-3 mt-24">
        {/* border-2 border-yellow-600 */}
        <div className="w-1/5">
          <h1 className='w-[124px] h-1/2 top-[1089] left-40 font-medium text-lg leading-[21.87px] text-[#181717]'>Main Software</h1>

          <h1 className='w-[124px] h-5 top-[1261] left-40 font-medium text-lg leading-[21.87px] text-[#181717]'>Main Skills</h1>
        </div>
        <div className=" w-3/5">

          <p className='font-normal text-lg leading-[21.87px] tracking-tight text-left h-1/2'>Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger
            <br />
            <br />
            Adobe CC, Figma, Ableton
          </p>

          <p className='font-normal text-lg leading-[21.87px] tracking-tight text-left '>Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Ilustration, Sound Design

          </p>

        </div>
      </div>


      <div className="w-[1120px] h-[166px] top-[1432px] left-[160px]  flex justify-between items-end border-t-2 border-black mb-32">
        {/**/}
        <div className="w-[347px] h-[71px] top-[1509px] left-[160px] text-[32px] font-normal leading-[37.44px] tracking-tight ">
          {/* border-2 border-black */}
          I am thrilled to answer to your next project →

        </div>



        <div >

          <h1 className=" text-[32px] text-left font-medium leading-[37.44px] tracking-tight ">makifkarasu@outlook.com</h1>
          {/* border-2 border-black */}
          View Resume
        </div>
      </div>

      <Footer />
    </div>

  )
}

export default About
