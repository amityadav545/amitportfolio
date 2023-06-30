import Link from "next/link"
import Logo from "./Logo"
import CustomLink from "./CustomLink"
import SocialMedia from "./SocialMedia"
import HireMe from "./HireMe"






const NavBar = () => {
    return (
        <header className="w-full p-32 lg:p-0 py-8 font-medium flex items-center justify-between">

            <nav className="lg:hidden block">
                <CustomLink href="/" title="Home" className="mr-4" />
                <CustomLink href="/about" title="About" className="mx-4" />
                {/* <CustomLink href="/contact" title="Contact" className="ml-4" /> */}
            </nav>

            <SocialMedia />

            <div className="absolute  left-[50%] top-2 translate-x-[-50%]"> <Logo /></div>
        </header>
    )
}

export default NavBar