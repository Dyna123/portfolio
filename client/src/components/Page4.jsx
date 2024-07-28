import React from 'react'
import IconCloud from './IconCloud';
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
    'sass',
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
  return (
    <div className='h-screen w-screen bg-black text-white'>
      <h1></h1>
      <div id='leftSection' className='h-full w-1/2 '>
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </div>
  )
}

export default Page4