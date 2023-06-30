"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
const CustomLink = ({ href, title, className = "" }) => {
    const router = usePathname();

    return (
        <Link href={href} className={`${className} relative group`}>{title}
            <sapn className={`h-[2px] inline-block  bg-black absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router == href ? 'w-full' : 'w-0'}`}>&nbsp;</sapn>
        </Link>
    )
}

export default CustomLink