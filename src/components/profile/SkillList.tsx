import React from 'react';
import { Skill } from '@/types';

const SkillList: React.FC<{ skills: Skill[] }> = ({ skills }) => (
    <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {skills.map((skill, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                        <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                        <span className="text-sm text-gray-600">{skill.years}年</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default SkillList; 