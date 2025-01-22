'use client'

import { React, useRef } from 'react'
import Image from 'next/image'

import Chat from './assets/chatbot.png'
import Swing from './assets/swing.png'
import Alice from './assets/Alice.png'
import Spotify from './assets/spotify.png'
import Portofolio from './assets/portofolio.png'

import Github from './assets/github.svg'
import React1 from '../test/assets/framework/react.svg'
import Next1 from '../test/assets/framework/next.svg'
import Vite from '../test/assets/framework/vite.svg'
import Html from '../test/assets/language/html.svg'
import Css from '../test/assets/language/css.svg'
import Javascript from '../test/assets/language/javascript.svg'
import Motion1 from '../test/assets/library/motion.svg'
import Mui from '../test/assets/library/mui.svg'
import Tailwind from '../test/assets/library/tailwind.svg'
import MongoDB from '../test/assets/database/mongodb.svg'
import { motion, useScroll, useSpring, useTransform } from "motion/react"

import BasicModal from './Modal1'

const Project = [{
    index1: 'top-[10px]',
    title: "Alice AI",
    img: Alice,
    desc: "Transform your projects with our AI image generator. Generate high-quality, AI generated images with unparalleled speed and style ",
    live: "https://alice-ai-ten.vercel.app/",
    code: "https://github.com/techshadow01/AliceAI",
    text: "text-pink-600",
    tech: [
        React1,
        Vite,
        Tailwind,
        Javascript
    ]
},
{
    index1: 'top-[30px]',
    title: "Swing",
    img: Swing,
    desc: "Swing is a project fund website connects investors with projects and opportunities to support innovative ventures.",
    live: "https://fund-website-five.vercel.app/",
    code: "https://github.com/techshadow01/fund-website",
    text: "text-[#1978D0]",
    tech: [
        Next1,
        Motion1,
        Tailwind,
        Mui,
        MongoDB
    ]
},
{
    index1: 'top-[50px]',
    title: "Portofolio",
    img: Portofolio,
    desc: "A portfolio website showcasing my work, skills, and achievements, highlighting expertise and creative projects.",
    live: "https://abhi-profile.vercel.app/",
    code: "https://github.com/techshadow01/AbhiProfile",
    text: "text-pink-600",
    tech: [
        Next1,
        Motion1,
        Tailwind,
        Mui,
    ]
},
{
    index1: 'top-[70px]',
    title: "Spotify Clone",
    img: Spotify,
    desc: "a Music player that offers seamless playback, high-quality sound, and an intuitive interface. It allows easy navigation through playlists.",
    live: "https://abhiproject.freewebhostmost.com/",
    code: "https://github.com/techshadow01/spotify",
    text: "text-[#222222]",
    tech: [
        Html,
        Css,
        Javascript
    ]
}, {
    index1: 'top-[90px]',
    title: "AI ChatBot",
    img: Chat,
    desc: "A good AI chatbot which understands user inputs, provides relevant responses, and adapts to different contexts. ",
    live: "https://chat-bot-delta-six.vercel.app/",
    code: "https://github.com/techshadow01/chat_bot",
    text: "text-[#8737EA]",
    tech: [
        React1,
        Vite,
        Tailwind,
        Motion1
    ]
}];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-250, 250])

    return <motion.div ref={ref} className='max-sm:sticky ${item.index1} w-[100vw] h-[calc(100vh-250px)] max-sm:h-auto max-sm:py-5 flex items-center justify-center gap-3 text-white max-sm:flex-col max-sm:mt-6' >
        <div className='relative flex items-center justify-center '>
            <motion.div
                initial={{ x: 40 }}
                whileInView={{ x: 80, transition: { duration: 0.5 } }}
                viewport={{ once: true, amount: 1 }}
                className='max-sm:hidden'
            >
                <Image className='rounded-[10px]  cursor-pointer' src={item.img} alt="" width={700} />
            </motion.div>

            <motion.div
                className='sm:hidden w-[95%] shadow-lg '
            >
                <Image className='rounded-[10px] cursor-pointer' src={item.img} alt="" width={700} />
                <BasicModal item={item} />
            </motion.div>

            <motion.div
                initial={{ y: 100, x: -40 }}
                whileInView={{ x: -80, transition: { duration: 0.5 } }}
                viewport={{ once: true, amount: 0.8 }}
                className='max-sm:hidden  flex items-center justify-center h-[100%] w-[400px] flex-col gap-4 p-2 max-sm:w-[80vw] max-sm:items-center projecttrans rounded-xl '>
                <div className='text-4xl font-bold text-white'>{item.title}</div>
                <div className='w-[300px] text-xl text-center'>{item.desc}</div>
                <div className='flex gap-4 '>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} ><a href={item.live} target='_blank'><button className=' border border-slate-500 text-white projecttrans rounded-full min-w-[100px] h-10 normal-case'>Live</button></a></motion.div>
                    <a href={item.code} target='_blank'><motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><button className=' bg-slate-500 text-white rounded-full w-10 h-10 normal-case flex items-center justify-center' ><Image src={Github} alt="" width={65} /></button></motion.div></a>
                </div>

                <div className='flex gap-2 max-sm:border max-sm:border-slate-500 rounded-full max-sm:px-4'>
                    {(item.tech).map((item1, index1) => {
                        return <div key={index1} className='px-2 rounded-full max-sm:border-none max-sm:px-0'>
                            <Image src={item1} alt="" width={30} />
                        </div>
                    })}
                </div>
            </motion.div>
        </div >

    </motion.div >
}


const Page = () => {

   const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <motion.div id="projectsmove" ref={ref} className='flex flex-col max-sm:gap-3'>
            <div className='sticky max-sm:relative top-[50px] flex items-center justify-center flex-col gap-3 max-sm:top-[0px] max-sm:trans '
                style={{ zIndex: 10 }}>
                <div className=' text-white text-center text-5xl flex gap-3'>
                    <div className='text-pink-600 font-bold '>Latest</div>
                    <div className='text-white font-semibold'>Works</div>
                </div>
                <motion.div className='max-sm:hidden bg-white h-2 w-[95vw] rounded-full' style={{ scaleX }} />
            </div >

            <motion.div className='max-sm:sticky mx-auto sm:hidden top-0 bg-white h-2 w-[95vw] rounded-full' style={{ scaleX, zIndex: 10 }} />

            <motion.div className='flex items-center justify-center flex-col'>
                {Project.map((item, index) => {
                    return <Single item={item} key={index} />
                })}
            </motion.div>
        </motion.div >
    )
}

export default Page
