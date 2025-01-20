import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import { SocialLink } from '@/types';

interface SocialIconProps {
    platform: SocialLink['platform'];
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform }) => {
    switch (platform) {
        case 'github':
            return <Github className="w-6 h-6" />;
        case 'email':
            return <Mail className="w-6 h-6" />;
        case 'linkedin':
            return <Linkedin className="w-6 h-6" />;
    }
};

const SocialLinks: React.FC<{ links: SocialLink[] }> = ({ links }) => (
    <div className="flex justify-center space-x-4">
        {links.map((link, index) => (
            <a
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-blue-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
            >
                <SocialIcon platform={link.platform} />
            </a>
        ))}
    </div>
);

export default SocialLinks;