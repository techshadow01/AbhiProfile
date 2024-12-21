'use client'

import * as React from 'react';

import Button from '@mui/material/Button';

import FileCopyIcon from '@mui/icons-material/FileCopy';
import HomeIcon from '@mui/icons-material/Home';
import InterestsIcon from '@mui/icons-material/Interests';
import CodeIcon from '@mui/icons-material/Code';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

const Move = (e) => {
    const yOffset = -50;
    const element = document.getElementById(e);
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

const mnavbar = () => {
   return (
        < div className={`w-[95%] flex items-center justify-center mx-auto cursor-pointer overflow-hidden `} >
            < div className='w-[20%] flex items-center justify-center' onClick={() => Move("homemove")} >
                <HomeIcon className='text-white hover:text-pink-600 size-8' />
            </div >
            <div className='w-[20%] flex items-center justify-center' onClick={() => Move("aboutmove")} >
                <FileCopyIcon className='text-white hover:text-pink-600 size-8' />
            </div>
            <div className='w-[20%] flex items-center justify-center' onClick={() => Move("skillsmove")} >
                <InterestsIcon className='text-white hover:text-pink-600 size-8' />
            </div>
            <div className='w-[20%] flex items-center justify-center' onClick={() => Move("projectsmove")} >
                <CodeIcon className='text-white hover:text-pink-600 size-8' />
            </div>
            <div className='w-[20%] flex items-center justify-center' onClick={() => Move("contactmove")} >
                <ConnectWithoutContactIcon className='text-white hover:text-pink-600 size-8' />
            </div>
        </div >
    );
}

export default mnavbar
