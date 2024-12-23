import React from 'react'
import Pics from '../assets/pics.jpg'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24'>
    <img src={Pics} alt="" 
    className='mx-auto mb-8 w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
    <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>BADMUS EMMANUEL</span>
        , Front-End Developer
    </h1>
    <p className='mt-4 text-lg text-gray-300'>
        I specialize in building modern and responsive web applications.
    </p>
    <div className='mt-8 space-x-4'>
        <button
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
        <button
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
    </div>

</div>
  )
}

export default Hero