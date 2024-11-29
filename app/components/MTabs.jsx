'use client'

import * as React from 'react';
import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// const home1 = document.getElementById("homemove");
// const about1 = document.getElementById("aboutmove");
// const skills1 = document.getElementById("skillsmove");
// const project1 = document.getElementById("projectsmove");
// const contact1 = document.getElementById("contactmove");

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
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
    }

    // const ElementVisibilityChecker = (elementRef, index) => {
    //     const [isVisible, setIsVisible] = useState(false);

    //     useEffect(() => {
    //         const handleScroll = () => {
    //             if (elementRef) {
    //                 const rect = elementRef.getBoundingClientRect();
    //                 const isVisible = (
    //                     rect.top >= 0 &&
    //                     rect.left >= 0 &&
    //                     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //                     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //                 );
    //                 setIsVisible(isVisible);
    //                 alert(`hello${index}`)
    //                 // { handleChange }
    //             }
    //         };

    //         window.addEventListener('scroll', handleScroll);
    //         // Initial check on component mount
    //         handleScroll();

    //         return () => {
    //             window.removeEventListener('scroll', handleScroll);
    //         };
    //     }, []);
    // };

    // ElementVisibilityChecker(home, "0");
    // ElementVisibilityChecker(about, "1");
    // ElementVisibilityChecker(skills, "2");
    // ElementVisibilityChecker(project, "3");
    // ElementVisibilityChecker(contact, "4");

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <ThemeProvider theme={theme}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab className='text-white normal-case' label="Home"
                            onClick={(e) => { Move("homemove") }} />
                        <Tab className='text-white normal-case' label="About me"
                            onClick={(e) => { Move("aboutmove") }} />
                        <Tab className='text-white normal-case' label="Skills"
                            onClick={(e) => { Move("skillsmove") }} />
                        <Tab className='text-white normal-case' label="Projects"
                            onClick={(e) => { Move("projectsmove") }} />
                        <Tab className='text-white normal-case' label="Contact"
                            onClick={(e) => { Move("contactmove") }} />
                    </Tabs>
                </ThemeProvider>

            </Box>
        </Box>
    );
}
