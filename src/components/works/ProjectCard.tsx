import React from 'react';
import { Project } from '@/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default ProjectCard;