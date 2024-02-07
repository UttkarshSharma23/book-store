import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <nav>
                Site logo
            </nav>
            <Outlet />
        </>
    )
}

export default Home