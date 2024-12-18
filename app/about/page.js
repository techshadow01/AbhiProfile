'use client'

import { React } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Image from 'next/image';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { styled } from '@mui/material/styles';
import Mongo from './assets/m.svg'
import Express from './assets/e.svg'
import React1 from './assets/r.svg'
import Node from './assets/n.svg'

import { motion } from "motion/react"

const page = () => {

    const MTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "#47A248",
            color: 'white',
            boxShadow: theme.shadows[1],
            borderRadius: 25,
            fontSize: 11,
        },
    }));

    const ETooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "white",
            color: 'black',
            boxShadow: theme.shadows[1],
            borderRadius: 25,
            fontSize: 11,
        },
    }));

    const RTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "#61DAFB",
            color: 'white',
            boxShadow: theme.shadows[1],
            borderRadius: 25,
            fontSize: 11,
        },
    }));

    const NTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: "#71C750",
            color: 'white',
            boxShadow: theme.shadows[1],
            borderRadius: 25,
            fontSize: 11,
        },
    }));

    return (
        <div id="aboutmove" className='relative w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-4'>
            <div className='w-[100vw] h-[100px]  flex items-center justify-center max-sm:flex-col'>
                <motion.div
                    id="aboutbox"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='min-w-[16%] border-[6px] border-pink-600 text-white text-center text-4xl font-bold p-4 flex items-center justify-center gap-3'>
                    <div>About</div>
                    <div className='text-pink-600'>Me</div>

                </motion.div>
            </div>
            <div className='w-[95vw] h-[calc(100%-100px)] flex max-sm:flex-col-reverse after: max-sm:h-auto'>
                <div className=' relative w-[50%] h-[100%] flex items-center justify-center flex-col gap-4 max-sm:w-full'>
                    <div className='flex flex-col text-white w-[60%] gap-4 text-center text-xl max-sm:text-base max-sm:w-[90%]'>
                        <div> Hello! I'm Abhishek , a passionate and detail-oriented web developer with a strong focus on creating dynamic, user-friendly websites and web applications. With [X] years of experience in front-end and back-end development, I specialize in transforming ideas into functional, visually appealing online experiences.</div>

                        <div> I have a deep understanding of HTML, CSS, JavaScript, and various frameworks like React, Vue, and Node.js, as well as experience with back-end technologies such as PHP, Python, and Ruby on Rails. I’m constantly exploring new tools and techniques to stay ahead in an ever-evolving industry.</div>
                    </div>
                    <div className='text-pink-600 text-3xl font-bold'>
                        MERN STACK
                    </div>
                    <motion.div
                        className='flex items-center justify-center text-center gap-5 text-xl mt-6'>
                        <MTooltip title="MongoDB" placement="top" slots={{
                            transition: Zoom,
                        }} >
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.8 } }}
                                viewport={{ once: true, amount: 1 }}
                                className='text-[#47A248]'><Image src={Mongo} alt="" />M</motion.div>
                        </MTooltip>

                        <ETooltip title="ExpressJS" placement="top" slots={{
                            transition: Zoom,
                        }} >
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.6 } }}
                                viewport={{ once: true, amount: 1 }}
                                className='text-white'><Image src={Express} alt="" />E</motion.div>
                        </ETooltip>

                        <RTooltip title="ReactJS" placement="top" slots={{
                            transition: Zoom,
                        }} >
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
                                viewport={{ once: true, amount: 1 }}
                                className='text-[#61DAFB]'><Image src={React1} alt="" />R</motion.div>
                        </RTooltip>

                        <NTooltip title="NodeJS" placement="top" slots={{
                            transition: Zoom,
                        }} >
                            <motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
                                viewport={{ once: true, amount: 1 }}
                                className='text-[#71C750]'><Image src={Node} alt="" />N</motion.div>
                        </NTooltip>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                    viewport={{ once: true, amount: 0.4 }}
                    className='w-[50%] h-[100%] max-sm:hidden'>
                    <DotLottieReact
                        src="https://lottie.host/434ae11f-39d1-4664-939b-b9b8ba611416/4OWn8nRbWG.lottie"
                        loop
                        autoplay
                    />
                </motion.div>
            </div >
        </div >
    )
}

export default page