'use client'

import React from 'react'
import Cross from './assets/cross.svg'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Image from 'next/image'
import Chat from './assets/chatbot.png'
import Alice from './assets/Alice.png'
import Spotify from './assets/spotify.png'
import Github from './assets/github.svg'
import { motion } from "motion/react"

const Modal1 = (props) => {
   const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button className='absolute top-0 left-0 w-full h-full z-10' onClick={handleOpen}></button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box className='absolute z-20 w-[90%] top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl overflow-hidden'>
                    <button className='absolute text-2xl text-white
                     z-40 right-5 top-5 font-bold' onClick={handleClose}>
                        <Image src={Cross} alt="" width={10} />
                    </button>

                    <div className='w-screen '>
                        <Image className='w-[90%] h-[25%] object-contain' src={props.item.img} alt="" />
                    </div>

                    <motion.div
                        className='flex flex-col gap-4 p-2 '>
                        <div className='text-4xl font-bold text-pink-600'>{props.item.title}</div>
                        <div className=' text-black text-xl '>{props.item.desc}</div>
                        <div className='flex gap-4 '>
                            <motion.div >
                                <a href={props.item.live} target='_blank'>
                                    <button className=' border bg-slate-500  rounded-full min-w-[100px] h-10 normal-case text-white'>
                                        Live
                                    </button>
                                </a>
                            </motion.div>
                            <a href={props.item.code} target='_blank'><motion.div>
                                <button className=' bg-slate-500 text-white rounded-full w-10 h-10 normal-case flex items-center justify-center' >
                                    <Image src={Github} alt="" width={65} />
                                </button>
                            </motion.div></a>
                        </div>

                        <div className='text-2xl font-bold text-pink-600'>Tech Used :</div>

                        {<div className='flex gap-2 rounded-full '>
                            {(props.item.tech).map((item1, index1) => {
                                return <div key={index1} className='rounded-full text-xl'>{item1}</div>
                            })}
                        </div>}
                    </motion.div>
                </Box>
            </Modal>
        </div >
    );
}


export default Modal1
