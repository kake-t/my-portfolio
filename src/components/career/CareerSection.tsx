import React from 'react';
import { careerData } from '@/data/career';
import CareerCard from './CareerCard';

const CareerSection: React.FC = () => (
    <section id="career" className="py-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Career</h2>
        <div className="space-y-8">
            {careerData.map((experience, index) => (
                <CareerCard key={index} experience={experience} />
            ))}
        </div>
    </section>
);

export default CareerSection;