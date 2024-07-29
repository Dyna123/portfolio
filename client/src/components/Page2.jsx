import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const light = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(light.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: light.current,
          scroller: "body",
          start: "top 20%",
          end: "top 40%",
          scrub: 2,
        },
      });
    });

    return () => ctx.revert(); // Clean up on component unmount
  }, []);

  return (
    <div className='h-screen w-screen bg-black '>
      <div className='h-full w-full bg-[url("/spotLight3.png")] bg-no-repeat bg-center flex items-center justify-center ' ref={light}>
        <div className='h-[60%] w-1/2 flex items-center  text-white bg-[url("/page2Hands.png")] bg-cover bg-top  bg-no-repeat '>
          <p className='text-3xl opacity-35 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas reiciendis itaque quia ab voluptates fugiat, perferendis nam totam rerum.</p>
        </div>
        <div id='socialMediaContainer' className='h-52 w-20 absolute left-0 flex flex-col gap-10 text-white text-3xl items-center justify-center'>
          <Link to="https://www.instagram.com/aye_sambhav/" target='_blank'><FaInstagram className='cursor-pointer' /></Link>
          <Link to="https://www.linkedin.com/in/sambhav-sharma-93b589251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><FaLinkedin className='cursor-pointer' /></Link>
          <Link to="https://github.com/Dyna123" target='_blank'><FaGithub className='cursor-pointer' /></Link>
        </div>
      </div>
    </div>
  );
};

export default Page2;
