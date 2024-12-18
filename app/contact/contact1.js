'use client'

import { React, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const contact1 = () => {

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

    const [form, setform] = useState({ name: "", mail: "", phone: "", sub: "", msg: "" })

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
        console.log(form)
    }

    return (
        <div id="contactmove" className=' w-[100vw] h-[100vh] flex items-center justify-center max-sm:h-auto'>
            <div className='flex w-[40%] h-[60%] max-sm:hidden'>
                <DotLottieReact
                    src="https://lottie.host/a900a14f-41fd-41ba-b86c-4eb8335ce58e/30rFYUV1wG.lottie"
                    loop
                    autoplay
                />
            </div>
            <ThemeProvider theme={theme}>
                <div className='w-[50vw] h-[100vh] flex items-center justify-center flex-col gap-4 '>
                    <div className='text-pink-600 text-5xl font-bold max-sm:font-bold max-sm:text-4xl'>Contact Me</div>

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
                        <div className='flex items-center justify-center gap-4 max-sm:flex-col'>
                            <div className=' flex flex-col items-center justify-center gap-4'>

                                <div><TextField sx={{
                                    "&:hover:not(.Mui-focused)": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#991B53",
                                        },
                                    },
                                }} className='border-white max-sm:w-[80vw]' id="outlined-basic" name="name" value={form.name} label="Name" variant="outlined" onChange={handleChange} /></div>

                                <div><TextField
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#991B53",
                                            },
                                        },
                                    }}
                                    className='max-sm:w-[80vw]'
                                    id="outlined-basic" name="mail" value={form.mail} label="E-mail" variant="outlined" onChange={handleChange} /></div>

                                <div><TextField
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#991B53",
                                            },
                                        },
                                    }}
                                    className='max-sm:w-[80vw]'
                                    id="outlined-basic" name="phone" value={form.phone} label="phone no." variant="outlined" onChange={handleChange} /></div>

                                <div><TextField
                                    sx={{
                                        "&:hover:not(.Mui-focused)": {
                                            "& .MuiOutlinedInput-notchedOutline": {
                                                borderColor: "#991B53",
                                            },
                                        },
                                    }}
                                    className='max-sm:w-[80vw]'
                                    id="outlined-basic" name="sub" value={form.sub} label="Subject" variant="outlined" onChange={handleChange} /></div>
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
                                    id="outlined-multiline-flexible" name="msg" value={form.msg} label="Your Message" rows={10.4} multiline className='w-[400px] max-sm:w-[80vw]' onChange={handleChange} />
                            </div>
                        </div>
                    </Box>
                    <div><Button className='rounded-full glow' variant="contained" >Send</Button></div>
                </div>
            </ThemeProvider>

        </div>
    )
}

export default contact1
