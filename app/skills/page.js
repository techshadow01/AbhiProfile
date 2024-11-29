'use client'

import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, useSpring } from "motion/react"
import Pop from './pop'

const Tools = [
    {
        name: "Languages"
    },
    {
        name: "Framework"
    },
    {
        name: "Database"
    },
    {
        name: "Library"
    },
    {
        name: "Other"
    }
]

const page = () => {

    const Varient1 = {
        show: (index) => (
            {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    delay: 0.05 * index,
                },
                type: useSpring,
            }
        ),
    }

    return (
        <div id="skillsmove" className='relative w-[100vw] h-[100vh] flex'>
            <div className='w-[50%] h-[100%] flex flex-col items-center justify-center'>
                <div className='absolute text-white text-5xl font-bold z-1 top-[15%] flex items-center justify-center'>
                    <div className='text-7xl text-pink-600 pb-4'>S</div>
                    <div>kills</div>
                </div>
                <DotLottieReact
                    src="https://lottie.host/644ec44c-c759-4d99-8f29-62c252f97f47/97O0ayu7y6.lottie"
                    loop
                    autoplay
                />
            </div>
            <motion.div
                className='w-[50%] h-[100%] flex flex-col items-center justify-center gap-3 '>
                {Tools.map((item, index) => {
                    return <motion.div key={index}
                        variants={Varient1}
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={index}
                        initial={{ x: 500, opacity: 0 }}
                        whileHover={{ scale: 1, x: -30, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 0.95 }}
                        className=' relative h-[15%] w-[90%] text-white bg-pink-600 bg-opacity-15 border-4 border-pink-600 rounded-[10px] flex items-center justify-center cursor-pointer text-5xl font-bold glow'
                    > <Pop curid={index}  style={{ fontSize: 48 }} skill={item.name} /></motion.div>
                })}
            </motion.div>
        </div>
    )
}

export default page
