// src/components/layout/Footer.tsx
import React from 'react';
import { profileData } from '@/data/profile';

const Footer: React.FC = () => (
    <footer className="bg-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
            <p>© {new Date().getFullYear()} {profileData.name}. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;