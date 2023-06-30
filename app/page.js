import Image from "next/image";
import Container from "./components/Container";
import firstpic from '../public/images/profile/developer.png'
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { DownloadLink } from "./components/Icon";
import HireMe from "./components/HireMe";
import Transition from "./components/Transition";
export default function Home() {
  return (
    <>
      <Transition />
      <main className="flex items-center text-dark w-full min-h-screen">

        <Container className="pt-0 my-20 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:w-full">
              <Image priority={true} src={firstpic} alt="Amit kumar yadav" className="w-full h-auto rounded-full" />
            </div>
            <div className="w-1/2 lg:w-full flex flex-col items-center self-center">

              <AnimatedText text="Turning Vision Into Reality With Code And Design." className="!text-6xl !text-left xl:!text-5xl lg:!text-3xl sm:!text-2xl xs:!text-2xl" />
              <p className="my-4 text-base font-medium md:text-sm">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>

              <div className="flex items-center self-start mt-2">
                <Link download={true} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark " href="/" target={"_blank"}>Resume</Link>
                <Link className="flex items-center text-dark p-2.5 px-4 rounded-lg text-lg font-semibold  underline    mx-2" href="amitky545@gmail.com" target={"_blank"}>Explore</Link>
              </div>
            </div>

          </div>
        </Container>
        <HireMe bodyclass="absolute  flex items-center text-dark h-16 w-16 xl:h-16 xl:w-16 justify-center hover:bg-transparent hover:text-dark  rounded-full bg-dark text-light   font-semibold   text-xs   " className="fixed right-3 bottom-1  flex items-center justify-center overflow-hidden lg:hidden" />
      </main>
    </>
  )
}
