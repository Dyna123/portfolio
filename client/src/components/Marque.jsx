import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { BsFileEarmarkArrowDown } from "react-icons/bs";
const Marque = () => {

  let heading=useRef(null);
  const container=useRef(null);
  const btn=useRef(null);
  useLayoutEffect(()=>{
    let ctx=gsap.context(()=>{
      gsap.to(heading.current,{
        transform:"translateX(-50%)",
        scrollTrigger:{
            scroller:"body",
            trigger:container.current,
            start:"top 0%",
            end:"top -200%",
            scrub:2,
            pin:true,

        }
      })
      gsap.from(btn.current,{
        opacity:0,
        scrollTrigger:{
            scroller:"body",
            trigger:btn.current,
            start:"top 0%",
            end:"top -200%",
            scrub:2,
        }
      })
    })
    return ()=>{
      ctx.revert()
    };
  },[])
  return (
    <div ref={container} className='h-96 w-screen bg-cyan-50 text-zinc-800 flex tracking-widest font-extralight  font-regular text-nowrap'>
        <div> <span ref={heading} className='text-[15rem] whitespace-nowrap ml-20 flex tracking-wider items-center [70%]'>
        Wanna Refer ME?
        <div ref={btn} className='flex items-center gap-4 cursor-pointer border border-solid border-black ml-20 p-2 rounded hover:bg-black hover:text-white transition-colors duration-500'>
        <button className='text-2xl tracking-normal'>Resume </button>
        <BsFileEarmarkArrowDown className='text-2xl'/>
        </div>
    </span></div>
    </div>
  )
}

export default Marque
