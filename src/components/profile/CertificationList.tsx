import React from 'react';
import { Certification } from '@/types';

const CertificationList: React.FC<{ certifications: Certification[] }> = ({ certifications }) => (
    <div className="mt-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">保有資格</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800">{cert.name}</h4>
                    <p className="text-sm text-gray-600">{cert.organization}</p>
                    <p className="text-sm text-gray-500">取得時期: {cert.acquiredDate}</p>
                </div>
            ))}
        </div>
    </div>
);

export default CertificationList; 