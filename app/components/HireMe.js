"use client"

import Image from "next/image"
import hireme from '../../public/images/profile/hireme_2.png'
import Link from "next/link"

const HireMe = ({ className = "", bodyclass = "" }) => {


    return (
        <div className={`${className}`}>
            <div className="lg:w-20 w-40  h-auto flex items-center justify-center relative">
                <Image src={hireme} alt="Hireme" className="w-full  h-auto animate-spin-slow" />
                <Link className={`${bodyclass}`} href="amitky545@gmail.com" target={"_blank"}>Hire Me</Link>
            </div>
        </div >
    )
}

export default HireMe