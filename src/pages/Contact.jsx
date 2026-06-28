import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaMapMarkedAlt, FaPhone, FaTwitter } from 'react-icons/fa'


const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
      id='contact' className='py-20 bg-dark-200'
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or thinking about a collaboration? I’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/*Contact Form */}
          <div>
            <form action="" className="space-y-6">
              <div>
                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                <input type="text" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
              </div>

              <div>
                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                <input type="email" className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
              </div>

              <div>
                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                <textarea type="text" className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' />
              </div>

              <button type='submit' className='w-full px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send</button>
            </form>
          </div>

          {/*Contact Information */}
          <div className="space-y-8">

            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaMapMarkedAlt />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>Location</h3>
                <p className='text-gray-400'>Walton Road,Lahore</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>Email</h3>
                <p className='text-gray-400'>anooshsalman10@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple-500 text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>Contact no:</h3>
                <p className='text-gray-400'>0302 7777288</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">

                <a href="https://github.com/anooshsalman10" target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-700 hover:bg-purple-500 hover:text-white transition duration-300">
                    <FaGithub />
                  </button>
                </a>

                <a href="https://www.linkedin.com/in/anoosh-salman-2b098b201/" target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-700 hover:bg-purple-500 hover:text-white transition duration-300">
                    <FaLinkedin />
                  </button>
                </a>

                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-700 hover:bg-purple-500 hover:text-white transition duration-300">
                    <FaTwitter />
                  </button>
                </a>

                <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                  <button className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple-700 hover:bg-purple-500 hover:text-white transition duration-300">
                    <FaFacebook />
                  </button>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact