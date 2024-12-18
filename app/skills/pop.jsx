'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Image from 'next/image';
import { motion, spring } from "motion/react"
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import Grow from '@mui/material/Grow';

import X from './assets/x.svg'

// framework
import next from './assets/framework/next.svg'
import react from './assets/framework/react.svg'
import node from './assets/framework/node.svg'
import express from './assets/framework/express.svg'
import vite from './assets/framework/vite.svg'

const Frame = [
    {
        name: "ReactJS",
        img: react
    },
    {
        name: "NextJS",
        img: next
    },
    {
        name: "nodeJS",
        img: node
    },
    {
        name: "expressJS",
        img: express
    },
    {
        name: "viteJS",
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
        img: tailwind
    },
    {
        name: "mui",
        img: mui
    },
    {
        name: "bootstrap",
        img: bootstrap
    },
    {
        name: "motion",
        img: motion1
    },
    {
        name: "redux",
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
        img: C
    },
    {
        name: "c++",
        img: cplus
    },
    {
        name: "java",
        img: java
    },
    {
        name: "python",
        img: python
    },
    {
        name: "html",
        img: html
    },
    {
        name: "css",
        img: css
    },
    {
        name: "javascript",
        img: javascript
    },
    {
        name: "typescript",
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
        img: sql
    },
    {
        name: "mysql",
        img: mysql
    },
    {
        name: "mongodb",
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

const Other = [
    {
        name: "figma",
        img: figma
    },
    {
        name: "dsa",
        img: dsa
    },
    {
        name: "git",
        img: git
    },
    {
        name: "github",
        img: github
    },
    {
        name: "postman",
        img: postman
    },
    {
        name: "prompt",
        img: prompt
    },
    {
        name: "vscode",
        img: vscode
    },
]

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#121212',
    border: '2px solid #222222',
    borderRadius: '10px',
    boxShadow: 24,
};

const style1 = {
    width: '100%',
    height: '100%',
    color: "#FFFFFF",
    backgroundColor: 'transparent',
    fontSize: "40px"
}

const Varient = {
    hide: {
        y: -20,
        opacity: 0,
    },
    show: (index) => (
        {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.2,
                delay: 0.05 * index
            }
        }
    )
}

const pop = (prop) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='h-[100%] w-[100%]'>
            <Button className='text-4xl normal-case' sx={style1} onClick={handleOpen}>{prop.skill}</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition
            >
                {/* <Slide direction="up" in={open} mountOnEnter unmountOnExit> */}
                <Box sx={style} className=" flex flex-col items-center justify-start w-[70%] h-[70%] max-sm:w-full max-sm:h-full ">
                    <motion.div className=' absolute right-4 top-2 cursor-pointer'
                        whileHover={{ rotate: 90, scale: 1.5 }}
                        onClick={handleClose}
                    >
                        <Image src={X} alt="" width={20} />
                    </motion.div>
                    <div className='h-[15%] flex items-center justify-center text-4xl font-bold text-pink-600 w-full uppercase '><div className='border-b-2 border-white'>{prop.skill}</div></div>

                    <div className='flex flex-wrap gap-6 m-6 overflow-x-hidden justify-center'>
                        {
                            prop.curid == 0 && Languages.map((item, index) => {
                                return <motion.div
                                    key={index}
                                    variants={Varient}
                                    initial="hide"
                                    animate="show"
                                    custom={index}
                                    className='w-[200px] aspect-square  flex flex-col items-center justify-center gap-3'>
                                    <motion.div
                                        whileHover={{ scale: 1.5, y: -5, transition: { type: "spring", stiffness: 1000 } }}
                                    ><Image src={item.img} alt="" width={60} /></motion.div>
                                    <div className='text-xl text-white capitalize '>{item.name}</div>
                                </motion.div>
                            })
                        }

                        {
                            prop.curid == 1 && Frame.map((item, index) => {
                                return <motion.div key={index}
                                    variants={Varient}
                                    initial="hide"
                                    animate="show"
                                    custom={index}
                                    className='w-[200px] aspect-square  flex flex-col items-center justify-center gap-3'>
                                    <motion.div
                                        whileHover={{ scale: 1.5, y: -5, transition: { type: "spring", stiffness: 1000 } }}
                                    ><Image src={item.img} alt="" width={60} /></motion.div>
                                    <div className='text-xl text-white capitalize '>{item.name}</div>
                                </motion.div>
                            })
                        }

                        {
                            prop.curid == 2 && Database.map((item, index) => {
                                return <motion.div
                                    variants={Varient}
                                    initial="hide"
                                    animate="show"
                                    custom={index}
                                    key={index} className='w-[200px] aspect-square  flex flex-col items-center justify-center gap-3'>
                                    <motion.div
                                        whileHover={{ scale: 1.5, y: -5, transition: { type: "spring", stiffness: 1000 } }}
                                    ><Image src={item.img} alt="" width={60} /></motion.div>
                                    <div className='text-xl text-white capitalize '>{item.name}</div>
                                </motion.div>
                            })
                        }

                        {
                            prop.curid == 3 && Library.map((item, index) => {
                                return <motion.div
                                    variants={Varient}
                                    initial="hide"
                                    animate="show"
                                    custom={index}
                                    key={index} className='w-[200px] aspect-square flex flex-col items-center justify-center gap-3'>
                                    <motion.div
                                        whileHover={{ scale: 1.5, y: -5, transition: { type: "spring", stiffness: 1000 } }}
                                    ><Image src={item.img} alt="" width={60} /></motion.div>
                                    <div className='text-xl text-white capitalize '>{item.name}</div>
                                </motion.div>
                            })
                        }

                        {
                            prop.curid == 4 && Other.map((item, index) => {
                                return <motion.div
                                    variants={Varient}
                                    initial="hide"
                                    animate="show"
                                    custom={index}
                                    key={index} className='w-[200px] aspect-square  flex flex-col items-center justify-center gap-3'>
                                    <motion.div
                                        whileHover={{ scale: 1.5, y: -5, transition: { type: "spring", stiffness: 1000 } }}
                                    ><Image src={item.img} alt="" width={60} /></motion.div>
                                    <div className='text-xl text-white capitalize '>{item.name}</div>
                                </motion.div>
                            })
                        }
                    </div>
                </Box>
                {/* </Slide > */}
            </Modal>

        </div >
    );
}

export default pop