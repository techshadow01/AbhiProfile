'use client'

import React from 'react'
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import Sidebar from "./components/sidebar";
import { Meteors } from "./ui/meteor";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const page = () => {

  const Move = (e) => {
    const yOffset = -50;
    const element = document.getElementById(e);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <div id="homemove" className=' bg-black w-[100vw] h-[100vh]'>
      {/* <Spotlight className="w-full h-[100vh] -right-5 -z-10" fill="red" /> */}
      <Meteors
        className="bg-white "
        number={25}
      />
      <div className='h-[50px]'></div>

      {/* home */}
      <div className='relative w-full h-[93.4vh] flex items-center justify-center '>

        {/* home-left */}
        <div className='w-[calc(100vw-100px)] ml-[60px]'>

          {/* home-left-in */}
          <div className=' relative w-[80%] h-[80%] text-white'>
            <div className='flex items-center justify-center flex-col gap-3 h-full'>
              <div className='text-5xl font-bold gap-3 flex'>
                <div>Hi, its</div>
                <div className='text-pink-600'> Abhishek</div>
              </div>
              <div className='text-3xl gap-3 flex'>
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
                <motion.div><Button className='text-white bg-pink-600 rounded-full border-none glow' variant="outlined" >Resume</Button></motion.div>
                <motion.div> <Button className='text-white bg-pink-600 rounded-full border-none glow' variant="outlined" onClick={() => { Move("contactmove") }}>Hire Me</Button></motion.div>

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
