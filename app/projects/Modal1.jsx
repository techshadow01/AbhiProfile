'use client'

import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Image from 'next/image'
import Chat from './assets/chatbot.png'
import Alice from './assets/Alice.png'
import Spotify from './assets/spotify.png'
import Github from './assets/github.svg'
import { motion } from "motion/react"

const modal = (props) => {
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
                <Box className='absolute z-20 bg-white w-screen h-screen'>
                    <button className='absolute text-2xl text-white
                     z-40 right-5 top-5 font-bold' onClick={handleClose}>x</button>

                    <div className='w-screen '>
                        <Image src={props.item.img} alt="" />
                    </div>

                    <motion.div
                        className='flex flex-col gap-4 p-2 '>
                        <div className='text-4xl font-bold text-pink-600'>{props.item.title}</div>
                        <div className=' text-black text-xl '>{props.item.desc}</div>
                        <div className='flex gap-4 '>
                            <motion.div >
                                <a href="" target='_blank'>
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
                                return <div key={index1} className='rounded-full text-xl border border-slate-600 px-2'>{item1}</div>
                            })}
                        </div>}
                    </motion.div>
                </Box>
            </Modal>
        </div >
    );
}

export default modal
