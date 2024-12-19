'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function MTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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

    const Move = (e) => {

        const yOffset = -50;
        const element = document.getElementById(e);
        console.log(element)
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });

    }

    function handleChange1(newValue) {
        setValue(newValue)
    }

     setInterval((e) => { elementInViewport("Divide1", 0) }, 1000);
     setInterval((e) => { elementInViewport("Divide2", 1) }, 1000);
     setInterval((e) => { elementInViewport("Divide3", 2) }, 1000);
     setInterval((e) => { elementInViewport("Divide4", 3) }, 1000);
     setInterval((e) => { elementInViewport("Divide5", 4) }, 1000);

    const elementInViewport = (gotit, place) => {
        var myElement = document.getElementById(gotit);
        const rect = myElement.getBoundingClientRect();

        const isInViewport = rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);

        { isInViewport && handleChange1(place) }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <ThemeProvider theme={theme}>
                    <Tabs className='max-sm:hidden' value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ color: "#FFFFFF" }} className='text-white normal-case' label="Home"
                            onClick={(e) => { Move("homemove") }} />
                        <Tab sx={{ color: "#FFFFFF" }} className='text-white normal-case' label="About me"
                            onClick={(e) => { Move("aboutmove") }} />
                        <Tab sx={{ color: "#FFFFFF" }} className='text-white normal-case' label="Skills"
                            onClick={(e) => { Move("skillsmove") }} />
                        <Tab sx={{ color: "#FFFFFF" }} className='text-white normal-case' label="Projects"
                            onClick={(e) => { Move("projectsmove") }} />
                        <Tab sx={{ color: "#FFFFFF" }} className='text-white normal-case' label="Contact"
                            onClick={(e) => { Move("contactmove") }} />
                    </Tabs>
                </ThemeProvider>

            </Box>
        </Box>
    );
}
