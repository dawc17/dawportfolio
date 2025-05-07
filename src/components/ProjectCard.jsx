import React from 'react'

function ProjectCard({ image, title, description, projectUrl, sourceUrl, technologies, target = [] }) {
  return (
    <a 
      href={projectUrl} 
      target={target}
      rel="noopener noreferrer"
      className="block relative group overflow-hidden rounded-lg h-[280px] bg-base-200 transition-all duration-300 hover:shadow-xl"
    >
      {/* Background Image */}
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-base-300/95 via-base-300/60 to-transparent"></div>
      
      {/* Content positioned at the bottom with less space below */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-4 flex flex-col">
        {/* Project title */}
        <h3 className="text-xl font-bold mb-2 text-base-content">{title}</h3>
        
        {/* Tech tags */}
        {technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-2">
            {technologies.map((tech, index) => (
              <span key={index} className="badge badge-sm badge-primary">
                {tech}
              </span>
            ))}
          </div>
        )}
        
        {/* Description */}
        <p className="text-sm text-base-content/80 line-clamp-2">{description}</p>
        
        {/* Hidden source link (revealed on hover) */}
        <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={sourceUrl} 
            target={target}
            rel="noopener noreferrer" 
            className="btn btn-xs btn-ghost"
            onClick={(e) => e.stopPropagation()}
          >
            view source
          </a>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard 