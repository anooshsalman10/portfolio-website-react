import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, Assets } from '../assets/Assets'
import { li } from 'framer-motion/client'

const About = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }} id='about' className='py-20 bg-dark-200'>

      <div className="container mx-auto px-6">

        {/*Heading */}
        <h2 className="text-3xl font-bold text-center mt-8 mb-4">
          About
          <span className='text-purple-500 mx-2'>Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion.</p>

        {/* image & my journey */}

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/*image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              src={Assets.Profile} alt='profileImg'
              className='w-full h-full object-cover' />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            className='md:w-1/2'>

          <div className="rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-gray-300 mb-6">I'm a passionate frontend developer with a strong interest in building modern, responsive, and user-friendly web applications. My journey began with HTML, CSS, and JavaScript, and has grown into creating dynamic interfaces using React and modern frontend technologies.</p>

              <p className="text-gray-300 mb-6">I enjoy turning ideas into interactive digital experiences while continuously expanding my skills in web development. Currently, I am focused on mastering the MERN stack and working toward becoming a full-stack developer capable of building complete web applications from concept to deployment.</p>

              <p className="text-gray-300 mb-6">Beyond coding, I enjoy exploring new technologies, improving my problem-solving skills, and staying up to date with industry trends. I believe in continuous learning, clean code, and creating solutions that deliver meaningful user experiences.</p>

              {/*Cards */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  aboutInfo.map((data,index)=>(
                     <div key={index} className=" bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
                      <div className="text-purple-500 text-4xl mb-4">
                        <data.icon />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{data.title}</h3>
                      <p className="text-gray-400">{data.description}</p>

                     </div>
                  ))
                }

              </div>
          </div>
        </motion.div>

      </div>

      </div>

    </motion.div >

  )
}

export default About
