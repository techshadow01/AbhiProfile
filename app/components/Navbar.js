'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import Tabs from './MTabs'
import './components.css'
import Mnavbar from './mnavbar'


const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })


    return (
        <div className={`fixed  z-20 w-[100vw] h-[50px] trans flex items-center justify-center border-pink-600 max-sm:border max-sm:rounded-full max-sm:w-[50vw] max-sm:ml-[25vw]  max-sm:bg-black duration-700 ${visible ? 'max-sm:top-5' : 'max-sm:-top-14'} `}>
            <div className={`w-[90vw] text-white flex items-center justify-between max-sm:hidden  `}>
                <a href="./"><div className='flex items-center justify-center gap-2 text-2xl max-sm:hidden'>
                    <div className='text-pink-600 font-bold '>Abhishek</div>
                    <div>Jangid</div>
                </div></a>
                <div className='flex items-center justify-center max-sm:hidden'>
                    <Tabs className="max-sm:hidden" />
                </div>
            </div>

            <div className={`w-full  sm:hidden `}>
                <Mnavbar />
            </div>
        </div >
    )
}

export default Navbar