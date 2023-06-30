
"use client"
import { Facebook, GitHub, Instagram, Linkedin } from './Icon';
import { motion } from 'framer-motion';

const SocialMedia = () => {
    return (
        <>
            <nav className="flex items-center justify-center flex-wrap lg:hidden">
                <motion.a className="w-5 mr-3" whileTab={{ scale: 0.9 }} whileHover={{ y: -3 }} href="https://www.linkedin.com/in/amit-kumar-yadav-81a682224/" target="_blank">
                    <Linkedin />
                </motion.a>
                <motion.a className="w-5 mx-3" whileTab={{ scale: 0.9 }} whileHover={{ y: -3 }} href="https://github.com/amityadav545" target="_blank">
                    <GitHub />
                </motion.a>
                <motion.a className="w-5 mx-3" whileTab={{ scale: 0.9 }} whileHover={{ y: -3 }} href="https://www.instagram.com/amit___545" target="_blank">
                    <Instagram />
                </motion.a>
                <motion.a className="w-5 ml-3 " whileTab={{ scale: 0.9 }} whileHover={{ y: -3 }} href="https://www.facebook.com/545amit" target="_blank">
                    <Facebook />
                </motion.a>
            </nav>
        </>
    );
};

export default SocialMedia;
