
"use client"

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const liref = useRef(null)
    return (
        <li ref={liref} className="my-8 first:mt-0 last:mb-0 w-[85%] md:w-[100%] mx-auto flex flex-col items-center justify-between">
            <LiIcon liref={liref} />
            <div>
                <h3 className="capitalize font-bold text-2xl">
                    {position}&nbsp;
                    <a className="capitalize text-primary" href={companyLink} target="_blank">
                        @{company}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                </span>
                {work.map((para, index) => {
                    return <p className="font-medium w-full my-5" key={index}>{para}</p>;
                })}
            </div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,


    });

    return (
        <div ref={ref}>

            <h2 className="font-bold text-8xl my-48 lg:my-32 md:my-20 w-full text-center lg:!text-6xl md:!text-5xl sm:!text-2xl xs:!text-4xl">Experience</h2>
            <div className="w-[75%] xl:w-full mx-auto h-full relative md:w-[100%]">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 md:-left-2 top-3 w-[4px] h-full bg-dark origin-top"
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4">

                    <Details
                        time="2022-present"
                        address="Khurram Nagar, Lucknow - 226022, Uttar Pradesh, INDIA"
                        position="Trainee Software Developer"
                        company="Infranix technology private ltd."
                        companyLink="https://infranix.com/"
                        work={[
                            "During my time as a Software Engineer Trainee at Infranix Technology, a leading software development company based in Lucknow, I had the opportunity to work on various projects and gain valuable experience. I primarily focused on developing web applications using ReactJS and NextJS, effectively utilizing modern frontend frameworks and technologies.",
                            "In these projects, I worked extensively with MySQL for efficient data storage, retrieval, and management. This allowed me to effectively handle large datasets and ensure smooth functionality of the applications.",
                            "Proficient in CSS, SCSS, Bootstrap, and Tailwind CSS, I have a strong grasp of creating responsive user interfaces. I pay close attention to detail and apply my strong problem-solving skills to deliver high-quality results in each project.",
                            "Collaboration is key in the software development process, and I have successfully worked with cross-functional teams to meet project requirements and deadlines. I have also conducted code reviews, ensuring adherence to best practices and maintaining high code quality standards.",
                            "To stay current with industry trends and advancements, I proactively update my skills and knowledge in web development. I believe in continuous learning and strive to incorporate the latest technologies into my work.",
                            "Contributing to a positive and collaborative team environment is important to me. I enjoy sharing ideas, supporting team members, and fostering a productive atmosphere that encourages growth and innovation.",
                            "Overall, my experience as a Software Engineer Trainee at Infranix Technology has equipped me with a strong foundation in web development, problem-solving, and collaboration. I am excited to bring my skills and dedication to future projects and make a meaningful impact."
                        ]}
                    />





                </ul>
            </div>
        </div>
    );
};

export default Experience;
