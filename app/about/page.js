import React from 'react'
import Container from '../components/Container'
import AnimatedText from '../components/AnimatedText';
import Image from 'next/image';
import aboutpic from '../../public/images/profile/second2.png'
import Skill from '../components/Skill';
import Experience from '../components/Experiance';
import Education from '../components/Education';
import Transition from '../components/Transition';

export const metadata = {
    title: 'About - Amit Kumar Yadav ',
    description: 'Welcome to the portfolio of Amit Kumar Yadav, showcasing my skills and expertise at Infranix Technology. Learn more about my work in software development, web development, and IT consulting.',
};
const About = () => {

    return (
        <>
            <Transition />
            <main className="flex flex-col items-center justify-center text-dark w-full ">
                <Container className="pt-32 pb-40 pl-32 pr-32  lg:pt-20 lg:pb-96 lg:pl-10 lg:pr-10 md:lg:pb-0 md:pt-0">
                    <AnimatedText text="Amit Kumar yadav" className=" mb-16 lg:!text-6xl md:!text-5xl sm:!text-2xl xs:!text-4xl sm:mb-8" />

                    <div className='grid grid-cols-8 w-full gap-16 sm:gap-0'>
                        <div className='col-span-5 xl:col-span-8 xl:!order-2 sm:mt-10 flex flex-col items-start justify-start'>
                            <h2 className='mb-3 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='py-1 font-medium'>Hello! I'm <strong>Amit Kumar Yadav</strong>, a dedicated Web Developer with a
                                strong passion for my work. With years of professional experience, I
                                possess the skills and knowledge to ensure the success of your project.
                                I thoroughly enjoy every step of the design process, from collaborating with clients to
                                implementing innovative solutions. I have worked as a<strong> MERN Stack Developer </strong> in startups, where
                                I made significant contributions to the development team. I'm always eager to learn and
                                explore new technologies and have actively participated in open-source projects. Let's work
                                together to create beautiful
                                and functional websites that exceed your expectations!</p>

                            <p className='py-1 font-medium'>During my career, I have gained extensive <strong> experience in web development</strong>
                                and have a deep understanding of the latest technologies and best practices.
                                I take pride in my attention to detail and my ability to create seamless and
                                robust web applications. I approach each
                                project with enthusiasm and a commitment to delivering exceptional results.</p>

                            <p className='py-1 font-medium'>I believe that effective communication and collaboration are key to the success of any project. I value your input and work closely with you to understand your goals and requirements. Together, we can create a website that not only meets your needs but also surpasses your expectations. Let's collaborate and bring your vision to life!</p>

                        </div>
                        <div className='col-span-3   xl:col-span-8 xl:!order-1 flex flex-col items-start xl:items-center xl:justify-center justify-start'>
                            <div className='rounded-2xl h-max relative border-2 border-solid border-dark bg-light p-8'>
                                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                                <Image priority={true} src={aboutpic} alt="profile Picture" className='w-full h-full rounded-2xl' />
                            </div>
                        </div>
                    </div>

                    <Skill />
                    < Experience />
                    <Education />
                </Container>
            </main>
        </>
    )
}

export default About