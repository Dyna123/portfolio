import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'

const page5 = () => {
    const card=useRef(null);
    const detailContainer=useRef(null);
    useLayoutEffect(()=>{
        let ctx=gsap.context(()=>{
            gsap.from(card.current,{
                opacity:0,
                scrollTrigger:{
                    scroller:'body',
                    trigger:card.current,
                    start:'top 40%',
                    end:'top 300%',
                    scrub:2
                }
            })
        })
        return ()=>ctx.revert();
    },[])
  return (
    <div className='h-screen w-screen bg-black text-white '>
        <h1 className=' text-8xl mx-auto w-fit font-thin'> Projects </h1>
        <div ref={card} className='h-[80%] w-[90%]  mt-10 mx-auto flex '>
        <div id='projectContainer' className= 'group relative h-full w-1/6  hover:w-3/6 transition-all duration-300 cursor-pointer flex bg-[url("/sakhiDemoImg.jpg")] bg-no-repeat object-cover '>
                <div className='group h-full group-hover:w-1/2 transition-all duration-300 bg-zinc-900 opacity-0 group-hover:opacity-100  absolute right-0 p-10 overflow-hidden' ref={detailContainer}>
                    <h1 className='opacity-0 group-hover:opacity-100  text-7xl transition-all duration-50000 '>Sakhi</h1>
                    <ul className='list-disc'>
                        <h2 className='text-xl mb-2'>Sakhi is a women Safety app.</h2>
                        <li className='m-3'>Features:
                            <ul className='list-decimal'>
                                <li>OTP Verification</li>
                                <li>SMS  Alert</li>
                                <li>Location Sharing</li>
                                <li>Custom Alert Sharing List</li>
                            </ul>
                        </li>
                        <li className='m-3'>Descitption:
                            <ul className='text-sm list-decimal'>
                                <li>A web app enabling women to send instant alert messages to pre-selected contacts with a single click during emergencies.</li>
                                <li>The alert message includes the user's current location for accurate assistance.</li>
                                <li>Designed to enhance safety by providing real-time location-based alerts in dangerous situations.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id='projectContainer' className= 'group relative h-full w-1/6  hover:w-3/6 transition-all duration-300 cursor-pointer flex bg-[url("/indifoods.jpg")] bg-no-repeat bg-cover bg-center '>
                <div className='group h-full group-hover:w-1/2 transition-all duration-300 bg-zinc-900 opacity-0 group-hover:opacity-100  absolute right-0 p-10 overflow-hidden' ref={detailContainer}>
                    <h1 className='opacity-0 group-hover:opacity-100  text-7xl transition-all duration-50000 '>IndiFood</h1>
                    <ul className='list-disc'>
                        <h2 className='text-xl mb-2'>IndiFood is an Only-Frontend Project for Restraunts.</h2>
                        <li className='m-3'>Features:
                            <ul className='list-decimal'>
                                <li>User Friendly UI.</li>
                                <li>Multiple Pages.</li>
                            </ul>
                        </li>
                        <li className='m-3'>Descitption:
                            <ul className='text-sm list-decimal'>
                                <li>Developed a user-friendly front-end interface for a restaurant-focused web app.</li>
                                <li>The design enhances customer engagement by simplifying menu browsing, ordering, and reservation processes.</li>
                                <li>Focused on optimizing the user experience with responsive layouts and modern UI elements for both desktop and mobile users.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id='projectContainer' className= 'group relative h-full w-1/6  hover:w-3/6 transition-all duration-300 cursor-pointer flex bg-blue-900 bg-no-repeat object-cover '>
                <div className='group h-full group-hover:w-1/2 transition-all duration-300 bg-zinc-900 opacity-0 group-hover:opacity-100  absolute right-0 p-10 overflow-hidden' ref={detailContainer}>
                    <h1 className='opacity-0 group-hover:opacity-100  text-7xl transition-all duration-50000 '>IndiTodo</h1>
                    <ul className='list-disc'>
                        <h2 className='text-xl mb-2'>Employee Task Tracker & Leaderboard System.</h2>
                        <li className='m-3'>Features:
                            <ul className='list-decimal'>
                                <li>Monitors which employees are working on specific projects in real-time.</li>
                                <li>HR assigns points to employees upon task completion, promoting motivation and accountability</li>
                                <li> Displays employee rankings based on accumulated points, fostering a competitive work environment</li>
                            </ul>
                        </li>
                        <li className='m-3'>Descitption:
                            <ul className='text-sm list-decimal'>
                                <li>Developed an app to track employees' project assignments and task completions in a company.</li>
                                <li>HR credits points to employees upon task completion.</li>
                                <li>Aimed at enhancing productivity and fostering a competitive work environment with real-time tracking and point-based rewards.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div id='projectContainer' className= 'group relative h-full w-1/6  hover:w-3/6 transition-all duration-300 cursor-pointer flex bg-yellow-700 bg-no-repeat object-cover '>
                <div className='group h-full group-hover:w-1/2 transition-all duration-300 bg-zinc-900 opacity-0 group-hover:opacity-100  absolute right-0 p-10 overflow-hidden' ref={detailContainer}>
                    <h1 className='opacity-0 group-hover:opacity-100  text-7xl transition-all duration-50000 '>Ease-Ed</h1>
                    <ul className='list-disc'>
                        <h2 className='text-xl mb-2'>Student Performance Management</h2>
                        <li className='m-3'>Features:
                            <ul className='list-decimal'>
                                <li>Organizes students' post-school time into slots</li>
                                <li>Provides live tracking of student performance, ensuring real-time updates on task completion.</li>
                                <li>Teachers award points for task completion within assigned time slots</li>
                            </ul>
                        </li>
                        <li className='m-3'>Descitption:
                            <ul className='text-sm list-decimal'>
                                <li>Developed a system to manage students' post-school time by organizing it into slots.</li>
                                <li>Implemented live performance tracking to monitor student progress in real-time.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page5
