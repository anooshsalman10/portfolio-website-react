import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Assets } from "../assets/Assets.jsx"
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
        >

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-20">
                {/*Left side */}
                <div className="md:w-1/2 mb-10 md:mb-0 ">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Hi, I am <span className="text-purple-500">Anoosh Salman</span>
                    </h1>

                    <h2 className="text-2xl md:text-4xl font-semibold mb-6">
                        <span className="text-white">I am a </span>

                        {/*react typing effect npm package for that typing effect */}
                        <TypeAnimation
                            sequence={[
                                'Frontend React Developer',
                                2000,
                                'Web Developer',
                                2000,
                                'JavaScript Enthusiast',
                                2000,
                                'Future Fullstack Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-purple-500"
                        />
                    </h2>
                    <p className='text-lg text-gray-300 mb-8'>I create stunning web interfaces with modern technologies and modern design.</p>

                    <div className="flex gap-4 flex-wrap">
                        <Link to="/projects">
                            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded">
                                View Projects
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="border border-purple-500 text-purple-500 px-6 py-2 rounded hover:bg-purple-500 hover:text-white transition">
                                Contact Me
                            </button>
                        </Link>

                        {/*for using download button use anchor tag & directly write download cv no need to use nested button tag*/}
                        <a
                            href="/Anoosh_Salman_Resume.pdf"
                            download
                            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded inline-block"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/*Right Side */}

                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70">

                            {/*rounded profile image */}
                            <motion.img animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                                src={Assets.Profile} alt='ProfileImg' className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10' />

                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hero