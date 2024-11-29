'use client'

import { React, useRef } from 'react'
import Image from 'next/image'
import Mac from './assets/macbook.png'
import Chat from './assets/chatbot.png'
import Alice from './assets/Alice.png'
import Spotify from './assets/spotify.png'
import { motion, useScroll, useSpring, useTransform } from "motion/react"

const Project = [{
    id: 1,
    title: "Alice AI",
    img: Alice,
    desc: "Transform your projects with our AI image generator. Generate high-quality, AI generated images with unparalleled speed and style ",
    live: "https://alice-ai-ten.vercel.app/",
},
{
    id: 2,
    title: "Spotify Clone",
    img: Spotify,
    desc: "a Music player that offers seamless playback, high-quality sound, and an intuitive interface. It allows easy navigation through playlists, and provides customizable settings.",
    live: "https://abhiproject.freewebhostmost.com/"
}, {
    id: 3,
    title: "AI ChatBot",
    img: Chat,
    desc: "A good AI chatbot which understands user inputs, provides relevant responses, and adapts to different contexts. ",
    live: "https://chat-bot-delta-six.vercel.app/"
}];

// import Probox from './probox.jsx'

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-250, 250])

    return <motion.div ref={ref} className='w-[100vw] h-[calc(100vh-250px)] flex items-center justify-center gap-6 text-white'>
        <motion.div >
            <div className='relative'>
                <Image className='absolute -z-2 top-2 left-[65px] rounded-[10px] h-[88%]' src={item.img} alt="" width={410} />
                <Image className='rounded-[10px]' src={Mac} alt="" width={540} height={400} />
            </div>
        </motion.div>
        <motion.div className='flex items-start justify-center flex-col gap-4 ' style={{ y }}>
            <div className='text-4xl font-bold text-pink-600'>{item.title}</div>
            <div className='max-w-[550px] text-xl'>{item.desc}</div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} ><a href={item.live} target='_blank'><button className=' bg-pink-600 text-white rounded-[4px] min-w-[100px] h-10 normal-case glow'>Live</button></a></motion.div>
        </motion.div>
    </motion.div>
}


const page = () => {

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
            <div className='sticky top-[50px] flex items-center justify-center flex-col gap-3 '
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

export default page