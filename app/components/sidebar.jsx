'use client'

import React from 'react'
import { motion, animate } from "motion/react"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const sidebar = () => {
    return (
        <div className='w-[100px] h-[full] flex flex-col items-start justify-center gap-6 text-xl'>
            <a href='https://github.com/techshadow01' target="_blank"> <motion.div whileHover={{ scale: 1.2 }}><GitHubIcon className='text-white size-10 cursor-pointer hover:text-pink-600' sx={{ fontSize: 40 }}/></motion.div></a>
            <a href='https://github.com/techshadow01' target="_blank"><motion.div whileHover={{ scale: 1.2 }}><LinkedInIcon className='text-white size-10 cursor-pointer hover:text-pink-600'sx={{ fontSize: 40 }} /></motion.div></a>
            <a href='https://github.com/techshadow01' target="_blank"><motion.div whileHover={{ scale: 1.2 }}><XIcon className='text-white size-10 cursor-pointer hover:text-pink-600'sx={{ fontSize: 40 }} /></motion.div></a>
            <a href='https://github.com/techshadow01' target="_blank"><motion.div whileHover={{ scale: 1.2 }}><MailOutlineIcon className='text-white size-10 cursor-pointer hover:text-pink-600'sx={{ fontSize: 40 }} /></motion.div></a>
        </div>
    )
}

export default sidebar
