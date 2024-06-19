import React from 'react'
import NavBar from './NavBar'

const Home = () => {
  return (
    <div>
            <div className='h-[140vh] w-screen bg-[url("/hero3.jpg")] bg-no-repeat bg-cover bg-left-bottom text-white '>
         <NavBar/>
         <div id='leftSection' className='h-[60vh] w-[40vw]  mt-96 p-10'>
            <h1 className='text-9xl'>Hey Folks!</h1>
            <p className='w-[60%] mt-16 text-xl leading-8'>I'm Sambhav, a web developer dedicated to creating visually stunning and highly functional websites. Let's turn your ideas into digital masterpieces!</p>
            <button className='px-5 py-3 bg-red-500 mt-5 text-xl'>Know More</button>
         </div>
    </div>
    </div>
  )
}

export default Home