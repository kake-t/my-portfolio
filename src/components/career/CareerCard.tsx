import React from 'react';
import { WorkExperience } from '@/types';

const CareerCard: React.FC<{ experience: WorkExperience }> = ({ experience }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-semibold text-gray-800">{experience.projectName}</h3>
            </div>
            <span className="text-gray-500">{experience.period}</span>
        </div>
        <p className="mt-4 text-gray-600">{experience.description}</p>

        <div className="mt-4">
            <h4 className="text-md font-semibold text-gray-700 mb-2">担当業務</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
                {experience.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
            {experience.technologies.map((tech, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                >
                    {tech}
                </span>
            ))}
        </div>
    </div>
);

export default CareerCard;