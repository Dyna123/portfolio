import React, { useEffect, useRef } from 'react'
import NavBar from './NavBar'
import Page2 from "./Page2.jsx"
import gsap from 'gsap';
import Page3 from './Page3.jsx';
import Page4 from './Page4.jsx';
import Marque from './Marque.jsx';
const Home = () => {
  const curtain = useRef(null);
  const name = useRef(null);
  const mainDiv = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(name.current, {

      delay: 1,
      y: -312,
      x: -685,
      duration: 1,
      scale: 0.13
    })
    tl.to(curtain.current, {
      opacity: 0,
      display: "none",
      duration: 1,
      scrub: 3
    })


  }, [])

  return (
    <div>
      <div ref={mainDiv} className='h-[150vh] w-screen bg-[url("/hero4.jpg")] bg-no-repeat bg-cover bg-bottom  text-white '>
        <div ref={curtain} className='h-full w-full bg-black fixed flex items-center justify-center z-10'>
          <h1 className='text-9xl' ref={name}>Sambhav</h1>
        </div>
        <NavBar />
        <div id='leftSection' className='h-[80%] w-[50vw] flex flex-col items-center justify-center '>
          <h1 className='text-9xl'>Hey Folks!</h1>
          <p className='w-[75%] text-xl leading-8 mt-5 text-left'>I'm Sambhav, a web developer dedicated to creating visually stunning and highly functional websites. Let's turn your ideas into digital masterpieces!</p>
          <div className='w-[75%]'>
            <button className='px-5 py-3 bg-red-500 mt-5 text-xl font-semibold rounded-md'>Know More</button>
          </div>
        </div>
      </div>
      <Page2 />
      <Page3/>
      <Page4/>
      <Marque/>
      <div className='h-screen w-screen'> </div>
    </div>
  )
}

export default Home
