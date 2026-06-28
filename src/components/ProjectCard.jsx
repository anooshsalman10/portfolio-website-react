import React from 'react'
import { projects } from '../assets/Assets.jsx'




const ProjectCard = ({ title, description, image, tech, github, webapp }) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {
            tech.map((item, index) => (
              <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>
                {item}
              </span>
            ))
          }
        </div>

        <div className="flex gap-2">
          <a
            href={webapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex-1 bg-purple-600 hover:bg-purple-700 duration-300 text-white px-4 py-2 rounded-lg font-medium">
              View Demo
            </button>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex-1 border border-purple-500 text-purple-500 px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white transition mx-7 font-medium">
              Code
            </button>
          </a>
        </div>
      </div>


    </div>
  )
}

export default ProjectCard