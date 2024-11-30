import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import Project from "../Components/Projects"
const Hero = () => {
    return (
        <div className='w-[1120px] h-[2044px]  top-[360px] left-[160px] flex flex-col items-center mt-12'>
            {/* border-2 border-red-600 */}
            <div className=" w-[1056px] h-[283.22px] top-[360px] left-[260px] flex justify-between items-center font-400 text-[32px] leading-[37.44px]">
                <div className="w-[360px] h-[230px]  flex flex-col justify-between  ">
                    <h1 className='font-semibold text-6xl'>Hello, I'm Mehmit Akif.</h1>
                    <FaArrowDown className='w-[33.61px] h-[38.04px]' />
                </div>
                <div className='w-[580px] h-[111px] '>
                    <p className=''>A senior-year design student who trying to specialize in 3D modeling & texturing.</p>
                </div>

            </div>

            <Project text="01 / PROJECT NAME"
             exp=" Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development." 
             moreText="Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold."
              link="More shots from this project ↗."/>

            <Project text="02 / PROJECT NAME"
             exp=" Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.
" 
             moreText=""
              link="See case study →"/>


            <Project text="03 / PROJECT NAME"
             exp=" Experimental creature modeling for school project.." 
             moreText=""
              link="Project WIP"/>




        </div>
        
    )
}


export default Hero
