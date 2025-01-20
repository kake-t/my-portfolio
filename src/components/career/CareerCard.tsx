import React from 'react';
import { WorkExperience } from '@/types';

const CareerCard: React.FC<{ experience: WorkExperience }> = ({ experience }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-semibold text-gray-800">{experience.companyName}</h3>
                <p className="text-gray-600">{experience.position}</p>
            </div>
            <span className="text-gray-500">{experience.period}</span>
        </div>
        <p className="mt-4 text-gray-600">{experience.description}</p>
    </div>
);

export default CareerCard;