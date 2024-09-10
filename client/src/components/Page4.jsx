import React from 'react'
import IconCloud from './IconCloud';
import GitHubCalendarComponent from './GitHubCalendar.jsx';

const Page4 = () => {

  const iconSlugs = [
    'react',
    'typescript',
    'javascript',
    'node-dot-js',
    'graphql',
    'apollo-graphql',
    'redux',
    'html5',
    'css3',
    'git',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'python',
    'java',
    'spring',
    'flutter',
    'android',
    'apple',
    'windows',
    'mongoose',
    'figma',
    'express',
    'postgresql'
    // Add more slugs as needed
  ];
  const skills=['HTML','CSS','Gsap','Tailwind','JS','Node.js','Express.js','MongoDB','Postgres','SQL','Git','Next.js','C','C++']
  return (
    <div className=' w-screen bg-black  text-white flex p-5'>
      <div id='leftSection' className='h-full w-1/2 '>
        <IconCloud iconSlugs={iconSlugs}/>
      </div>
      <div id='rightSection' className=' w-1/2 '>
        <div id='topSection' className='w-[70%] p-10   ml-20'>
          <h1 className='w-full text-3xl '>Capabilities:</h1>
          <div id='skillContainer' className='w-full flex  flex-wrap  '>
            {skills.map((item,index)=>(
              <p className='m-3 border border-solid border-white px-2 py-1 rounded-md cursor-pointer transition-all duration-300 hover:bg-white hover:text-black' key={index}>{item}</p>
            ))}
          </div>
        </div>
        <div className='w-full flex  items-center justify-center'>
        <GitHubCalendarComponent username="Dyna123" />
        </div>
      </div>

    </div>
  )
}

export default Page4