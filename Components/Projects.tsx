import React from 'react'

type propVariables = {
    text : string,
    exp : string,
    link : string,
    moreText : string,
   
}


const Projects = (props : propVariables ) => {
  return (
    <div className='w-[1120px] h-[473px]  border-black border-b-2  flex justify-evenly items-center mt-16'>
      {/*  */}
      <div className="w-2/5  h-4/5 text-justify">
      {/* border-red-700 border-2 */}
<p className='font-Inter font-500 text-lg leading-[21.87px] '>{props.text}</p>
<span className='text-[18px] font-[400] leading-[21.87px] tracking-[-0.03em] text-left'><br/></span>
<p className='h-[134px] w-[356px]  top-[144px] font-Inter font-500 text-lg leading-[21.87px] text-left'>{props.exp}</p>

<p className='w-[315.34px] h-[35px] top-[145px]'>{props.moreText}</p>

<br/><br/><br/>
<p className='w-[326.21px] h-5 top-[347px] text-[18px] font-medium leading-[21.87px] underline'>{props.link}</p>


      </div>
      <div className="bg-[#606060] w-[640px] h-[364.68px]">

      </div>

      
    </div>
  )
}

export default Projects
