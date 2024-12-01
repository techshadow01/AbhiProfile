'use client'

import React from 'react'
import Tabs from './MTabs'
import './components.css'
import Mnavbar from './mnavbar'

const navbar = () => {
    return (
        <div className='fixed top-0 z-20 w-[100vw] h-[50px] trans flex items-center justify-center'>
            <div className='w-[90vw] text-white flex items-center justify-between'>
                <a href="./"><div className='flex items-center justify-center gap-2 text-2xl'>
                    <div className='text-pink-600 font-bold'>Abhishek</div>
                    <div>Jangid</div>
                </div></a>
                <div className='flex items-center justify-center max-sm:hidden'>

                    <Tabs className="max-sm:hidden" />
                </div>
                <div className='sm:hidden'>
                    <Mnavbar />
                </div>
            </div>
        </div >
    )
}

export default navbar