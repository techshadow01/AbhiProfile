'use client'

import Stars from './ui/stars2.jsx'

import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import Sidebar from "./components/sidebar";

import Scroll from './components/assets/scroll.svg'
import Rarrow from './components/assets/resumearrow.svg'

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
      <Stars className="w-full h-full fixed -z-20" />
      <div className='h-[50px]'></div>

      {/* home */}
      <div className='relative w-full h-[93.4vh] flex items-center justify-center'>

        {/* home-left */}
        <div className='w-[calc(100vw-100px)] sm:ml-[60px] sm:pl-[100px] max-sm:w-screen max-sm:ml-0 max-sm:pl-[30px] flex  max-sm:justify-start'>

          {/* home-left-in */}
          <motion.div className=' relative w-[80%] h-[80%] text-white max-sm:w-[100%]'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
          >
            <div className='flex items-start justify-center flex-col gap-5 max-sm:gap-1 h-full  max-sm:items-start'>
              <div className='text-7xl font-bold gap-3 flex items-end  max-sm:text-2xl'>
                <div>Hi, its</div>
                <div className=' cursor-pointer text-8xl max-sm:text-5xl neontext' style={{
                  background: 'linear-gradient(to bottom, white, #38495a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}> Abhishek</div>
              </div>
              <div className='text-4xl gap-3 flex max-sm:text-3xl'>
                <div>I'm a</div>
                <div className='text-slate-500 font-bold'><Typewriter
                  words={['Web Developer', 'Software Tester', 'UI/Ux Designer', 'Software Engineer']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={70}
                  delaySpeed={2000}
                /></div>
              </div>
              <div className='max-w-[60%] text-start max-sm:max-w-full max-sm:hidden'>
                I’m a passionate web developer with expertise in front-end and back-end technologies. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and various frameworks. Committed to continuous learning, I focus on delivering efficient and secure solutions.
              </div>
              <div className='flex items-center justify-start gap-3'>
                <motion.div className='max-sm:hidden'> <a download href="https://drive.google.com/file/d/1EVLWndDgrapcnCMMNDr3f9_VdAjwynxH/view?usp=sharing" target='_blank'><button className='border-slate-400 border rounded-full glow uppercase w-[120px] h-[40px] bg-white bg-opacity-10' >Resume</button></a></motion.div>
                <motion.div className='max-sm:hidden'> <button className='text-white border-slate-400 border rounded-full glow uppercase w-[120px] h-[40px]  bg-white bg-opacity-10' onClick={() => { Move("contactmove") }}>Hire Me</button></motion.div>
                <a download href="https://drive.google.com/file/d/1EVLWndDgrapcnCMMNDr3f9_VdAjwynxH/view?usp=sharing" target='_blank'><div className='flex gap-3 sm:hidden'>
                  <div className='flex items-center justify-center font-bold text-xl'><div>RESUME</div></div>
                  <div><Image src={Rarrow} alt="" width={30} /></div>
                </div></a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ transition: { duration: 1.5, delay: 1 }, opacity: 1, x: 0 }}
              className='absolute right-[-100px] -top-12 w-[470px] aspect-square max-md:hidden'>
              <DotLottieReact
                src="https://lottie.host/00a2d387-0819-480f-a42a-75bdbfc18c94/sADWaht3qJ.lottie"
                loop
                autoplay
              />

            </motion.div>
          </motion.div>
        </div>
        <Sidebar />
      </div>

      <motion.div
        animate={{ y: [-5, 5], transition: { duration: 1, repeat: Infinity, repeatType: "mirror", delay: 1 } }}
        className='absolute bottom-3 left-[49vw] opacity-60 max-sm:hidden'>
        <Image src={Scroll} alt="" width={50} />
      </motion.div>


    </div >
  )
}

export default page
