'use client'

import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const page = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#DB2777",
            },
            secondary: {
                main: "#FFFFFF",
            },
        },
    });

    return (
        <div id="contactmove" className=' relative w-[100vw] h-[100vh] flex items-center justify-center'>
            <div className='flex w-[40%] h-[60%]'>
                <DotLottieReact
                    src="https://lottie.host/a900a14f-41fd-41ba-b86c-4eb8335ce58e/30rFYUV1wG.lottie"
                    loop
                    autoplay
                />
            </div>
            <ThemeProvider theme={theme}>
                <div className='w-[50vw] h-[100vh] flex items-center justify-center flex-col gap-4'>
                    <div className='text-pink-600 text-5xl font-bold'>Contact Me</div>

                    <Box sx={{
                        "& .MuiOutlinedInput-root": {
                            color: "#FFFFFF",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#FFFFFF",
                        },
                        "& .MuiInputLabel-outlined": {
                            color: "#FFFFFF",
                        },
                    }}>
                        <div className='flex items-center justify-center gap-4'>
                            <div className=' flex flex-col items-center justify-center gap-4'>

                                <div><TextField sx={{
                                    "&:hover:not(.Mui-focused)": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#991B53",
                                        },
                                    },
                                }} className='border-white' id="outlined-basic" label="Name" variant="outlined" /></div>

                                <div><TextField
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#991B53",
                                            },
                                        },
                                    }}
                                    id="outlined-basic" label="E-mail" variant="outlined" /></div>

                                <div><TextField
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#991B53",
                                            },
                                        },
                                    }}
                                    id="outlined-basic" label="phone no." variant="outlined" /></div>

                                <div><TextField
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#991B53",
                                            },
                                        },
                                    }}
                                    id="outlined-basic" label="Subject" variant="outlined" /></div>
                            </div>

                            <div className='flex items-center justify-center'>
                                <TextField
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#991B53",
                                            },
                                        },
                                    }}
                                    id="outlined-multiline-flexible" label="Your Message" rows={10.4} multiline className='w-[400px]' />
                            </div>
                        </div>
                    </Box>
                    <div><Button className='rounded-full glow' variant="contained">Send</Button></div>
                </div>
            </ThemeProvider>

        </div>
    )
}

export default page