import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Page3 = () => {
    const imgContainer = useRef(null);
    const heading=useRef(null);
    const main=useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(imgContainer.current, {
                opacity: 0,
                scrollTrigger:{
                    trigger:imgContainer.current,
                    scroller:"body",
                    start:"top 30%",
                    end:"top 40%",
                    scrub:1,
                },
            });
            gsap.from(heading.current,{
                opacity:0,
                scrollTrigger:{
                    trigger:heading.current,
                    scroller:"body",
                    start:"top 70%",
                    scrub:2,
                },
                y:-100
            })  
        });

        return () => ctx.revert();  
    }, []);

    return (
        <div className='h-screen w-screen bg-black relative' ref={main}>
            <div ref={imgContainer} className='h-full w-full bg-[url("/aye2.jpg")] bg-contain bg-no-repeat bg-center'>
            </div>
            <div id='headingContainer' className='absolute bottom-52 text-7xl font-semibold tracking-widest w-full flex items-center justify-center text-white'>
                <h1 ref={heading}>Expertise Unleashed</h1>
            </div>
        </div>
    );
}

export default Page3;
