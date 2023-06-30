"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
const CustomLinkButton = ({ href, title, className = "" }) => {
    const router = usePathname();

    return (
        <Link href={href} className={` py-2  ${router == href ? 'bg-dark text-light border border-white  w-full' : 'bg-light text-dark border border-dark  w-full'}`}> {title}

        </Link >
    )
}

export default CustomLinkButton