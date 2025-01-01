'use client'

import { React } from 'react'
import './neon.css'
import Image from 'next/image'
import { motion, useSpring } from "motion/react"

const tools = [
    {
        name: "Framework"
    },
    {
        name: "Languages"
    },
    {
        name: "Library"
    },
    {
        name: "Database"
    },
    {
        name: "Tools"
    }
]

// framework
import next from './assets/framework/next.svg'
import react from './assets/framework/react.svg'
import node from './assets/framework/node.svg'
import express from './assets/framework/express.svg'
import vite from './assets/framework/vite.svg'

const Frame = [
    {
        name: "ReactJS",
        color: "hover:shadow-[0_0_30px_10px_rgba(97,218,251,0.4)]",
        img: react,
    },
    {
        name: "NextJS",
        color: "hover:shadow-[0_0_30px_10px_rgba(225,225,225,0.4)]",
        img: next
    },
    {
        name: "nodeJS",
        color: "hover:shadow-[0_0_30px_10px_rgba(140,200,75,0.4)]",
        img: node
    },
    {
        name: "expressJS",
        color: "hover:shadow-[0_0_30px_10px_rgba(225,225,225,0.4)]",
        img: express
    },
    {
        name: "viteJS",
        color: "hover:shadow-[0_0_30px_10px_rgba(180,63,254,0.4)]",
        img: vite
    },
];


//library
import tailwind from './assets/library/tailwind.svg'
import mui from './assets/library/mui.svg'
import bootstrap from './assets/library/bootstrap.svg'
import motion1 from './assets/library/motion.svg'
import redux from './assets/library/redux.svg'

const Library = [
    {
        name: "tailwind",
        color: "hover:shadow-[0_0_30px_10px_rgba(36,232,232,0.4)]",
        img: tailwind
    },
    {
        name: "mui",
        color: "hover:shadow-[0_0_30px_10px_rgba(0,176,255,0.4)]",
        img: mui
    },
    {
        name: "bootstrap",
        color: "hover:shadow-[0_0_30px_10px_rgba(121,82,179,0.4)]",
        img: bootstrap
    },
    {
        name: "motion",
        color: "hover:shadow-[0_0_30px_10px_rgba(187,75,150,0.4)]",
        img: motion1
    },
    {
        name: "redux",
        color: "hover:shadow-[0_0_30px_10px_rgba(121,82,179,0.4)]",
        img: redux
    },
];

//languages
import C from './assets/language/C.svg'
import cplus from './assets/language/c++.svg'
import java from './assets/language/java.svg'
import python from './assets/language/python.svg'
import html from './assets/language/html.svg'
import css from './assets/language/css.svg'
import javascript from './assets/language/javascript.svg'
import typescript from './assets/language/typescript.svg'

const Languages = [
    {
        name: "c",
        color: "hover:shadow-[0_0_30px_10px_rgba(101,154,210,0.4)]",
        img: C
    },
    {
        name: "c++",
        color: "hover:shadow-[0_0_30px_10px_rgba(101,154,210,0.4)]",
        img: cplus
    },
    {
        name: "java",
        color: "hover:shadow-[0_0_30px_10px_rgba(205,100,3,0.4)]",
        img: java
    },
    {
        name: "python",
        color: "hover:shadow-[0_0_30px_10px_rgba(255,208,64,0.4)]",
        img: python
    },
    {
        name: "html",
        color: "hover:shadow-[0_0_30px_10px_rgba(205,100,3,0.4)]",
        img: html
    },
    {
        name: "css",
        color: "hover:shadow-[0_0_30px_10px_rgba(101,154,210,0.4)]",
        img: css
    },
    {
        name: "javascript",
        color: "hover:shadow-[0_0_30px_10px_rgba(255,208,64,0.4)]",
        img: javascript
    },
    {
        name: "typescript",
        color: "hover:shadow-[0_0_30px_10px_rgba(101,154,210,0.4)]",
        img: typescript
    },
];

//database
import sql from './assets/database/sql.svg'
import mysql from './assets/database/mysql.svg'
import mongodb from './assets/database/mongodb.svg'

const Database = [
    {
        name: "sql",
        color: "hover:shadow-[0_0_30px_10px_rgba(0,188,242,0.4)]",
        img: sql
    },
    {
        name: "mysql",
        color: "hover:shadow-[0_0_30px_10px_rgba(0,188,242,0.4)]",
        img: mysql
    },
    {
        name: "mongodb",
        color: "hover:shadow-[0_0_30px_10px_rgba(71,162,72,0.4)]",
        img: mongodb
    },
]

//other
import dsa from './assets/other/dsa.svg'
import git from './assets/other/git.svg'
import github from './assets/other/github.svg'
import postman from './assets/other/postman.svg'
import prompt from './assets/other/prompt.svg'
import vscode from './assets/other/vscode.svg'
import figma from './assets/other/figma.svg'
import { Opacity, Scale } from '@mui/icons-material'
import { easeIn, easeInOut } from 'motion'

const Other = [
    {
        name: "figma",
        color: "hover:shadow-[0_0_30px_10px_rgba(187,75,150,0.4)]",
        img: figma
    },
    {
        name: "dsa",
        color: "hover:shadow-[0_0_30px_10px_rgba(101,154,210,0.4)]",
        img: dsa
    },
    {
        name: "git",
        color: "hover:shadow-[0_0_30px_10px_rgba(205,100,3,0.4)]",
        img: git
    },
    {
        name: "github",
        color: "hover:shadow-[0_0_30px_10px_rgba(225,225,225,0.4)]",
        img: github
    },
    {
        name: "postman",
        color: "hover:shadow-[0_0_30px_10px_rgba(205,100,3,0.4)]",
        img: postman
    },
    {
        name: "prompt",
        color: "hover:shadow-[0_0_30px_10px_rgba(225,225,225,0.4)]",
        img: prompt
    },
    {
        name: "vscode",
        color: "hover:shadow-[0_0_30px_10px_rgba(101,154,210,0.4)]",
        img: vscode
    },
]


const variants1 = {
    hide: {
        y: 50,
        opacity: 0
    },
    show: (index) => (
        {
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.1 * index,
            },
            type: useSpring,
            opacity: 1
        }
    ),
}

const renderToolCategory = (categoryData) => {
    return categoryData.map((item1, index1) => (
        <motion.div
            key={index1}
            className={`size-[100px] max-sm:size-[80px] wtrans sm:bg-white sm:bg-opacity-10 text-white rounded-2xl duration-200 flex flex-col text-xl items-center justify-center sm-border border-zinc-800 ${item1.color}`}>
            <motion.div>
                <Image className='size-16 max-sm:size-14' src={item1.img} alt="" />
            </motion.div>
            <div className='sm:hidden max-sm:text-sm'>{item1.name}</div>
        </motion.div>
    ));
};

const skills = () => {

    return (
        <motion.div id="skillsmove" className='flex max-sm:flex-col my-36 max-sm:my-0 max-sm:mb-20'>
            <div className='w-[30vw] max-sm:w-auto'>
                <motion.div
                    className='sticky max-sm:static top-[40vh] flex items-center justify-center uppercase font-bold text-white p-3 m-auto text'>
                    <span class="letter letter-1 max-sm:text-8xl" >S</span>
                    <span class="letter letter-2 max-sm:text-8xl">K</span>
                    <span class="letter letter-3 max-sm:text-8xl">I</span>
                    <span class="letter letter-4 max-sm:text-8xl">L</span>
                    <span class="letter letter-4 max-sm:text-8xl">L</span>
                    {/* skill */}
                </motion.div>
            </div>
            <div className=' m-4 '>
                {tools.map((item, index) => {
                    return <motion.div key={index}
                        variants={variants1}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true }}
                        custom={index}
                        className=' text-3xl  text-white flex flex-col gap-3 m-3  max-sm:mt-10 max-sm:text-center'>
                        <div className='w-[200px]  uppercase font-semibold flex items-center max-sm:mx-auto max-sm:justify-center  max-sm:text-4xl'>{item.name}</div>
                        <div className={` flex gap-3 max-sm:gap-0 flex-wrap max-sm:justify-center `}>
                            {index == 0 && renderToolCategory(Frame)}
                            {index == 1 && renderToolCategory(Languages)}
                            {index == 2 && renderToolCategory(Library)}
                            {index == 3 && renderToolCategory(Database)}
                            {index == 4 && renderToolCategory(Other)}
                        </div>
                    </motion.div>
                })}
            </div >
        </motion.div >
    )
}

export default skills
