import { Box } from '@mui/material'
import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar'

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
