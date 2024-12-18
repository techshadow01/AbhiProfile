'use client'

import { React, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Mac from './assets/macbook.png'
import Chat from './assets/chatbot.png'
import Alice from './assets/Alice.png'
import Spotify from './assets/spotify.png'
import { motion, useScroll, useSpring, useTransform } from "motion/react"

import play from './assets/playbtn.svg'
import pause from './assets/pause2.svg'
import Alicevideo from './assets/alicevideo.gif'
import spotifyvideo from './assets/spotifyvideo.gif'
import chatvideo from './assets/chatvideo.gif'

const Project = [{
    id: 1,
    title: "Alice AI",
    img: Alice,
    desc: "Transform your projects with our AI image generator. Generate high-quality, AI generated images with unparalleled speed and style ",
    live: "https://alice-ai-ten.vercel.app/",
    video: Alicevideo,
    tech: [
        "#React",
        "#Vite",
        "#tailwind",
        "#javscript"
    ]
},
{
    id: 2,
    title: "Spotify Clone",
    img: Spotify,
    desc: "a Music player that offers seamless playback, high-quality sound, and an intuitive interface. It allows easy navigation through playlists, and provides customizable settings.",
    live: "https://abhiproject.freewebhostmost.com/",
    video: spotifyvideo,
    tech: [
        "#html",
        "#css",
        "#javscript"
    ]
}, {
    id: 3,
    title: "AI ChatBot",
    img: Chat,
    desc: "A good AI chatbot which understands user inputs, provides relevant responses, and adapts to different contexts. ",
    live: "https://chat-bot-delta-six.vercel.app/",
    video: chatvideo,
    tech: [
        "#React",
        "#Vite",
        "#tailwind",
        "#motion"
    ]
}];

const Single = ({ item }) => {

    const ref = useRef();

    const [playback, setplayback] = useState(false)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-250, 250])

    return <motion.div ref={ref} className='w-[100vw] h-[calc(100vh-250px)] max-sm:h-auto max-sm:py-5 flex items-center justify-center gap-6 text-white max-sm:flex-col max-sm:mt-14'>
        <div className='relative'>
            <Image className='absolute -z-2 top-1.5 left-[12%] rounded-[10px] h-[88%] w-[76%] ' src={playback ? item.video : item.img} alt="" />
            <Image className='rounded-[10px]' src={Mac} alt="" width={540} />
        </div>
        <motion.div className='flex items-start justify-center flex-col gap-4 max-sm:w-[80vw] max-sm:items-center'>
            <div className='text-4xl font-bold text-pink-600'>{item.title}</div>
            <div className='max-w-[550px] text-xl max-sm:text-center'>{item.desc}</div>
            <div className='flex gap-4 '>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} ><a href={item.live} target='_blank'><button className=' bg-pink-600 text-white rounded-[4px] min-w-[100px] h-10 normal-case glow'>Live</button></a></motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><button className=' bg-pink-600 text-white rounded-full w-10 h-10 normal-case glow flex items-center justify-center' onClick={() => setplayback(!playback)}><Image src={playback ? pause : play} alt="" width={15} /></button></motion.div>
            </div>

            <div className='flex gap-4 max-sm:border max-sm:border-pink-600 rounded-full max-sm:px-4'>
                {(item.tech).map((item1, index1) => {
                    return <div key={index1} className='p-2 px-4 border border-pink-600 rounded-full max-sm:border-none max-sm:px-0'>{item1}</div>
                })}
            </div>
        </motion.div>
    </motion.div >
}


const projects1 = () => {

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
        <motion.div id="projectsmove" ref={ref}>
            <div className='sticky top-[50px] flex items-center justify-center flex-col gap-3 max-sm:relative'
                style={{ zIndex: 10 }}>
                <div className=' text-white text-center text-5xl flex gap-3'>
                    <div className='text-pink-600 font-bold '>Latest</div>
                    <div className='text-white font-semibold'>Works</div>
                </div>
                <motion.div className='bg-white h-2 w-[95vw] rounded-full' style={{ scaleX }} />
            </div >
            <motion.div className='flex items-center justify-center flex-col'>
                {Project.map((item) => {
                    return <Single item={item} key={item.id} />
                })}
            </motion.div>
        </motion.div >
    )
}

export default projects1
