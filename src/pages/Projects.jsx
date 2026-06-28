import React from 'react'
import { motion } from 'framer-motion'
import { Assets } from '../assets/Assets'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../assets/Assets.jsx';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.05 }}
      id='projects' className='py-20 bg-dark-100'
    >
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">A display of my recent projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/*project card */}

          {
            projects.map((project, index) => (
              <ProjectCard key={index} {...project} />

            ))
          }
        </div>
        <div className="text-center mt-12">
          <Link to="/projects">
            <button className=" inline-flex items-center border border-purple-500 text-purple-500 px-6 py-3 rounded-lg hover:bg-purple-700 hover:text-white mx-7 font-medium transition duration-300 ">
              View More Projects
              <FaArrowRight className='ml-2 ' />
            </button>
          </Link>
        </div>

      </div>

    </motion.div>
  )
}

export default Projects