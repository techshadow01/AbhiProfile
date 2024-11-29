'use client'

import React from 'react'
import Button from '@mui/material/Button';
import Tabs from './MTabs'
import './components.css'

const navbar = () => {
    return (
        <div className='fixed top-0 z-20 w-[100vw] h-[50px] trans flex items-center justify-center'>
            <div className='w-[90vw] text-white flex items-center justify-between'>
                <div className='flex items-center justify-center gap-2 text-2xl'>
                    <div className='text-pink-600 font-bold'>Abhishek</div>
                    <div>Jangid</div>
                </div>
                <div className='flex items-center justify-center'>
                    {/* <div className='border-b-4 border-pink-600'> <Button className='cursor-pointer text-white normal-case px-5 ' variant="text">Home</Button></div>
                    <div><Button className='cursor-pointer text-white normal-case px-5' variant="text">Education</Button></div>
                    <div> <Button className='cursor-pointer text-white normal-case px-5' variant="text">Skills</Button></div>
                    <div><Button className='cursor-pointer text-white normal-case px-5' variant="text">Projects</Button></div> */}
                    <Tabs />
                </div>
            </div>
        </div >

    )
}

export default navbar