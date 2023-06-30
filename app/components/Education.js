



"use client"

import { useScroll, motion } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";

const Details = ({ position, school, companyLink, time, address, work }) => {
    const liref = useRef(null)
    return (
        <li ref={liref} className="my-8 first:mt-0 last:mb-0 w-[85%] mx-auto flex flex-col ">
            <LiIcon liref={liref} />
            <div>
                <h3 className="capitalize font-bold text-2xl">

                    <a className="capitalize text-primary" href={companyLink} target="_blank">
                        {school}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark">
                    {time} | {address}
                </span>
                <p>{work}</p>
            </div>
        </li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]


    });

    return (
        <div className="mb-60" >

            <h2 className="font-bold text-8xl my-48 w-full text-center lg:!text-6xl md:!text-5xl sm:!text-2xl xs:!text-4xl">Education</h2>
            <div ref={ref} className="w-[75%] xl:w-full mx-auto h-full relative ">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 md:-left-2 top-3 w-[4px] h-full bg-dark origin-top"
                />

                <ul className="w-full flex flex-col items-start  ml-4 ">

                    <Details
                        time="2019-2022"
                        address="Mandhana,kothi,Kanpur,Uttar Pradesh 209217 India"

                        school="Maharana Pratap Engieering College"
                        companyLink="https://www.mpgi.edu.in/"
                        work="I am pleased to inform you that I have successfully completed my Bachelor of Technology (B. Tech) degree in Computer Science and Engineering."

                    />
                    <Details
                        time="2016-2019"
                        address="Kursi Rd, Lucknow, Uttar Pradesh 226026 India"

                        school="Integral University Lucknow"
                        companyLink="https://www.iul.ac.in/"
                        work="I am pleased to inform you that I have successfully completed my Diploma in Computer Science and Engineering."
                    />
                    <Details
                        time="2014-2016"
                        address="Kursi Rd, Lucknow, Uttar Pradesh 226026 India"

                        school="Vikas I C Khesraha,Siddharth nagar"
                        companyLink="/"
                        work="I am pleased to inform you that I have successfully completed my Intermediate."
                    />





                </ul>
            </div>
        </div>
    );
};

export default Education;
