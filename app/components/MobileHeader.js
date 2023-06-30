"use client"
import React from 'react'
import CustomLinkButton from './CustumLinkButton'


const MobileHeader = () => {
    return (
        <div className='fixed z-20 bottom-0 w-full lg:block hidden'>
            <div className='flex items-center text-center border'>
                <CustomLinkButton href="/" title="Home" className="w-full" />
                <CustomLinkButton href="/about" title="About" className="w-full" />
            </div>
        </div>
    )
}

export default MobileHeader