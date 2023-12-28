import { Box } from '@mui/material'
import React from 'react'
import SideBar from '../scenes/global/SideBar'
import TopBar from '../scenes/global/TopBar'

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {

    return (
        <Box
            sx={{
                display: "flex",
                position: "relative",
            }}
        >
            <SideBar />
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    fontFamily: '"Source Sans 3" sans-serif',
                }}
            >
                <TopBar />
                {children}

            </Box>
        </Box>
    )
}
