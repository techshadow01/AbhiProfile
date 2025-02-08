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
import Grow from '@mui/material/Grow';
import Share from './assets/share.svg'

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
                <Grow in={open} className='top-[calc(50%-250px)] left-[5%] absolute z-20 w-[90%]  transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl overflow-hidden'>
                    <Box className='transform -translate-x-1/2 -translate-y-1/2 '>
                        <button className='absolute text-2xl text-white
                     z-40 right-5 top-5 font-bold' onClick={handleClose}>
                            <Image src={Cross} alt="" width={10} />
                        </button>

                        <div className='w-screen '>
                            <Image className='w-[90%] h-[25%] object-contain' src={props.item.img} alt="" width={300} />
                        </div>

                        <motion.div
                            className='flex flex-col gap-4 p-2 '>
                            <div className={`text-4xl font-bold ${props.item.text}`}>{props.item.title}</div>
                            <div className=' text-black text-xl '>{props.item.desc}</div>
                            <div className='flex gap-4 '>
                                <motion.div >
                                    <a href={props.item.live} target='_blank'>
                                        <button className=''>
                                            <Image src={Share} alt="" width={35} />
                                        </button>
                                    </a>
                                </motion.div>
                                <a href={props.item.code} target='_blank'><motion.div>
                                    <button className=' bg-slate-600 rounded-full' >
                                        <Image src={Github} alt="" width={35} />
                                    </button>
                                </motion.div></a>
                            </div>

                            <div className={`text-2xl font-bold ${props.item.text}`}>Tech Used :</div>

                            {<div className='flex gap-2 rounded-full '>
                                {(props.item.tech).map((item1, index1) => {
                                    return <div key={index1} className='rounded-full text-xl px-2'>
                                        <Image src={item1} alt="" width={30} />
                                    </div>
                                })}
                            </div>}
                        </motion.div>
                    </Box>
            </Grow >
            </Modal >
        </div >
    );
}


export default Modal1
