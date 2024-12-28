'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4F5E6D',
        },
        secondary: {
            main: '#DB2777',
        },
    },
});

const actions = [
    { icon: <a href='https://github.com/techshadow01' target="_blank"> <GitHubIcon className='text-black' /></a>, name: 'Github' },
    { icon: <a href='https://www.linkedin.com/in/abhishek-jangid-079b9726a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank"><LinkedInIcon className='text-black' /></a>, name: 'Linkedin' },
    { icon: <a href='https://x.com/AbhishekJa94069?t=T_vVqs7Bbcj1GjLx0tei4g&s=08' target="_blank"><XIcon className='text-black' /></a>, name: 'Twitter' },
    { icon: <a href="mailto:shadow459434@gmail.com"> <MailOutlineIcon className='text-black' /></a>, name: 'Mail' },
];

function BasicSpeedDial() {
    return (
        <Box className="h-[320px] flex-grow fixed z-20 bottom-2 right-8 sm:hidden">
            <ThemeProvider theme={theme}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"

                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction

                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </ThemeProvider>
        </Box>
    );
}

const speeddial = () => {
    return (
        <div><BasicSpeedDial /></div>
    )
}

export default speeddial;
