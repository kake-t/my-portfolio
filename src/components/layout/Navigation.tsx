import React from 'react';

const Navigation: React.FC = () => (
    <nav className="max-w-6xl mx-auto px-4 py-4">
        <ul className="flex space-x-8 justify-end">
            <li><a href="#profile" className="text-gray-600 hover:text-blue-500 transition-colors">Profile</a></li>
            <li><a href="#career" className="text-gray-600 hover:text-blue-500 transition-colors">Career</a></li>
            <li><a href="#works" className="text-gray-600 hover:text-blue-500 transition-colors">Works</a></li>
        </ul>
    </nav>
);

export default Navigation;
