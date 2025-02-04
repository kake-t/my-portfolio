import React from 'react';
import { profileData } from '@/data/profile';
import SocialLinks from './SocialLinks';
import CertificationList from './CertificationList';
import SkillList from './SkillList';

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
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">PR</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700 whitespace-pre-line">{profileData.bio}</p>
                </div>
            </div>
            <CertificationList certifications={profileData.certifications} />
            <SkillList skills={profileData.skills} />
        </div>
    </section>
);

export default ProfileSection;