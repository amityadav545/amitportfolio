"use client"
import { motion } from 'framer-motion'

const Skills = ({ name, x, y }) => {

    return (<motion.div whileHover={{ scale: 1.05 }} viewport={{ once: true }} initial={{ x: 0, y: 0 }} whileInView={{ x: x, y: y }} transition={{ duration: 1.5 }} className='flex absolute items-center justify-center rounded-full bg-dark font-semibold text-light py-3 px-6 shadow-dark cursor-pointer lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
     xs:bg-transparent xs:text-black'>{name}</motion.div>)
}

const Skill = () => {
    return (
        <div>

            <h2 className='font-bold text-8xl  mt-48 w-full text-center lg:!text-6xl md:!text-5xl sm:!text-2xl xs:!text-4xl md:mt-32 '>Skill</h2>

            <div className='w-full h-screen relative md:mt-20 sm:mt-5 xs:mt-3 flex items-center justify-center rounded-full bg-circularLight  lg:bg-circularLightlg md:bg-circularLightMd sm:bg-circularLightSm
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'>


                <motion.div whileHover={{ scale: 1.05 }} className='flex items-center justify-center rounded-full bg-dark font-semibold text-light p-8 shadow-dark cursor-pointer
                xs:text-sm xs:p-2 md:p-3
                '>Web</motion.div>
                <Skills name="HTML" x="-20vw" y="2vw" />
                <Skills name="CSS" x="-5vw" y="-10vw" />
                <Skills name="JavaScript" x="22vw" y="6vw" />
                <Skills name="ReactJs" x="0vw" y="11vw" />
                <Skills name="NextJs" x="-20vw" y="-15vw" />
                <Skills name="Mysql" x="15vw" y="-12vw" />
                <Skills name="NodeJs" x="32vw" y="-5vw" />
                <Skills name="Jasper Report" x="0vw" y="-20vw" />
                <Skills name="Tailwind CSS" x="23vw" y="18vw" />
                <Skills name="Bootstrap" x="-24vw" y="18vw" />
                <Skills name="Redux" x="-37vw" y="-3vw" />

            </div>
        </div>
    )
}

export default Skill