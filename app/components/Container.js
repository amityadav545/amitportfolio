import React from 'react'

const Container = ({ children, className = "" }) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light  p-12 sm:p-8 ${className}`}>{children}</div>
    )
}

export default Container