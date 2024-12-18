'use client'

import Homebg from './ui/homebgs'

import React from 'react'
import Image from 'next/image';
import { easeIn, easeInOut, motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import Sidebar from "./components/sidebar";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Scroll from './components/assets/scroll.svg'

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
      <Homebg />
      <div className='h-[50px]'></div>

      {/* home */}
      <div className='relative w-full h-[93.4vh] flex items-center justify-center '>

        {/* home-left */}
        <div className='w-[calc(100vw-100px)] ml-[60px] pl-[100px] max-sm:w-screen max-sm:ml-0 max-sm:pl-[30px] flex'>

          {/* home-left-in */}
          <motion.div className=' relative w-[80%] h-[80%] text-white max-sm:w-[90%]'
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 2 } }}
          >
            <div className='flex items-center justify-center flex-col gap-5 h-full '>
              <div className='text-7xl font-bold gap-3 flex max-sm:text-4xl'>
                <div>Hi, its</div>
                <div className='text-pink-600 cursor-pointer'> Abhishek</div>
              </div>
              <div className='text-4xl gap-3 flex max-sm:text-3xl'>
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
              <div className='max-w-[60%] text-center max-sm:max-w-full'>
                I’m a passionate web developer with expertise in front-end and back-end technologies. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and various frameworks. Committed to continuous learning, I focus on delivering efficient and secure solutions.
              </div>
              <div className='sm:hidden w-full flex items-start justify-center gap-3 text-xl'>
                <a href='https://github.com/techshadow01' target="_blank"> <motion.div className='border-2  rounded-full p-2 flex items-center justify-center  border-pink-600'><GitHubIcon className='text-pink-600 cursor-pointer' /></motion.div></a>
                <a href='https://www.linkedin.com/in/abhishek-jangid-079b9726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank"> <motion.div className='border-2  rounded-full p-2 flex items-center justify-center  border-pink-600'><LinkedInIcon className='text-pink-600 cursor-pointer' /></motion.div></a>
                <a href='https://x.com/AbhishekJa94069?t=T_vVqs7Bbcj1GjLx0tei4g&s=08' target="_blank"> <motion.div className='border-2  rounded-full p-2 flex items-center justify-center  border-pink-600'><XIcon className='text-pink-600 cursor-pointer' /></motion.div></a>
                <a href="mailto:shadow459434@gmail.com"> <motion.div className='border-2  rounded-full p-2 flex items-center justify-center  border-pink-600'><MailOutlineIcon className='text-pink-600 cursor-pointer' /></motion.div></a>
              </div>
              <div className='flex items-center justify-start gap-3'>
                <motion.div> <a download href="https://drive.google.com/file/d/1EVLWndDgrapcnCMMNDr3f9_VdAjwynxH/view?usp=sharing" target='_blank'><button className='text-white bg-pink-600 rounded-full glow uppercase w-[120px] h-[40px]' >Resume</button></a></motion.div>
                <motion.div> <button className='text-white bg-pink-600 rounded-full glow uppercase w-[120px] h-[40px]' onClick={() => { Move("contactmove") }}>Hire Me</button></motion.div>

              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ transition: { duration: 1.5, delay: 1 }, opacity: 1, x: 0 }}
              className='absolute right-[-100px] top-0 w-[370px] aspect-square max-md:hidden'>
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
