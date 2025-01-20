import React from 'react';
import { SocialLink } from '@/types';

interface SocialIconProps {
    platform: SocialLink['platform'];
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform }) => {
    switch (platform) {
        case 'github':
            return <img src="/icons/github-mark.svg" className="w-6 h-6" alt="GitHub" />;
        case "zenn":
            return <img src="/icons/zenn-logo-only.svg" className="w-6 h-6" alt="Zenn" />;
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