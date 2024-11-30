'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import Sidebar from "./components/sidebar";
import { Meteors } from "./ui/meteor";
import Button from '@mui/material/Button';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const page = () => {

  const Move = (e) => {
    const yOffset = -50;
    const element = document.getElementById(e);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <div id="homemove" className='relative w-[100vw] h-[100vh]'>
      <Meteors
        className="bg-white "
        number={25}
      />
      {/* <div className='absolute w-full h-full flex items-center justify-end'>
        <DotLottieReact
          className='w-[70%] h-[70%]'
          src="https://lottie.host/afeee050-4970-45a1-b87b-e31761c46375/RB2L62vF9J.lottie"
          loop
          autoplay
        />
      </div> */}
      <div className='h-[50px]'></div>

      {/* home */}
      <div className='relative w-full h-[93.4vh] flex items-center justify-center '>

        {/* home-left */}
        <div className='w-[calc(100vw-100px)] ml-[60px] pl-[100px]'>

          {/* home-left-in */}
          <div className=' relative w-[80%] h-[80%] text-white'>
            <div className='flex items-center justify-center flex-col gap-5 h-full'>
              <div className='text-7xl font-bold gap-3 flex'>
                <div>Hi, its</div>
                <div className='text-pink-600'> Abhishek</div>
              </div>
              <div className='text-4xl gap-3 flex'>
                <div>I'm a</div>
                <div className='text-pink-600 font-bold'><Typewriter
                  words={['Web Developer', 'Software Tester', 'UI/Ux Designer', 'Software Engineer']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={2000}
                /></div>
              </div>
              <div className='max-w-[60%] text-center'>
                I’m a passionate web developer with expertise in front-end and back-end technologies. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and various frameworks. Committed to continuous learning, I focus on delivering efficient and secure solutions.
              </div>
              <div className='flex items-center justify-start gap-3'>
                <motion.div><a href="/AbhiResume.pdf" download="Abhiresume.pdf"><button className='text-white bg-pink-600 rounded-full glow uppercase w-[120px] h-[40px]'  >Resume</button></>a</motion.div>
                <motion.div> <button className='text-white bg-pink-600 rounded-full glow uppercase w-[120px] h-[40px]' onClick={() => { Move("contactmove") }}>Hire Me</button></motion.div>

              </div>
            </div>
          </div>

        </div>
        <Sidebar />
      </div>

    </div>
  )
}

export default page
