"use client"
import React from 'react'
import { motion } from "framer-motion"
const Transition = () => {
    return (
        <>
            <motion.div className='fixed top-0 bottom-0 z-50 right-full w-screen h-screen bg-primary'
                initial={
                    {
                        x: "100%",
                        width: '100%'
                    }
                }
                animate={{
                    x: '0%',
                    width: '0%'
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            ></motion.div>
            <motion.div className='fixed top-0 bottom-0  z-40 right-full w-screen h-screen bg-light'
                initial={
                    {
                        x: "100%",
                        width: '100%'
                    }
                }
                animate={{
                    x: '0%',
                    width: '0%'
                }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
            ></motion.div>
            <motion.div className='fixed top-0 bottom-0  z-30 right-full w-screen h-screen bg-dark'
                initial={
                    {
                        x: "100%",
                        width: '100%'
                    }
                }
                animate={{
                    x: '0%',
                    width: '0%'
                }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
            ></motion.div>
        </>
    )
}

export default Transition