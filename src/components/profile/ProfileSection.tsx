import React from 'react';
import { profileData } from '@/data/profile';
import SocialLinks from './SocialLinks';

const ProfileSection: React.FC = () => (
    <section id="profile" className="py-20">
        <div>
            <div className="text-center">
                <img
                    src={profileData.profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">{profileData.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{profileData.title}</p>
                <SocialLinks links={profileData.socialLinks} />
            </div>
            <div className="max-w-2xl mx-auto mt-8">
                <p className="text-gray-700 whitespace-pre-line">{profileData.bio}</p>
            </div>
        </div>
    </section>
);

export default ProfileSection;