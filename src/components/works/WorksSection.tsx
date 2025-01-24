import React from 'react';
import { projectsData } from '@/data/projects';
import ProjectCard from './ProjectCard';

const WorksSection: React.FC = () => (
    <section id="works" className="py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Works</h2>
        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto px-4">
            {projectsData.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
        </div>
    </section>
);

export default WorksSection;