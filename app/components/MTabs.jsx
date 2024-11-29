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

    function handleChange1(newValue) {
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

    useEffect(() => {
        // elementInViewport("Divide1", 0);
        // elementInViewport("Divide2", 1);
        //{ elementInViewport("Divide3", 2) }
        // elementInViewport("Divide4", 3);
        // elementInViewport("Divide5", 4);
        //alert("hello")
    }, [])

    function elementInViewport(gotit, place) {
        var myElement = document.getElementById(gotit);
        var bounding = myElement.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight))) { handleChange1(place) }
    }

    const Move = (e) => {
        const yOffset = -50;
        const element = document.getElementById(e);
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <ThemeProvider theme={theme}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab  sx={{ color: "#FFFFFF" }}  className='text-white normal-case' label="Home"
                            onClick={(e) => { Move("homemove") }} />
                        <Tab sx={{ color: "#FFFFFF" }}  className='text-white normal-case' label="About me"
                            onClick={(e) => { Move("aboutmove") }} />
                        <Tab  sx={{ color: "#FFFFFF" }} className='text-white normal-case' label="Skills"
                            onClick={(e) => { Move("skillsmove") }} />
                        <Tab  sx={{ color: "#FFFFFF" }} className='text-white normal-case' label="Projects"
                            onClick={(e) => { Move("projectsmove") }} />
                        <Tab sx={{ color: "#FFFFFF" }}  className='text-white normal-case' label="Contact"
                            onClick={(e) => { Move("contactmove") }} />
                    </Tabs>
                </ThemeProvider>

            </Box>
        </Box>
    );
}
