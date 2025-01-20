import React from 'react';
import ProfileSection from '@/components/profile/ProfileSection';
import CareerSection from '@/components/career/CareerSection';
import WorksSection from '@/components/works/WorksSection';

export default function Home() {
  return (
    <main className="pt-20 max-w-6xl mx-auto px-4">
      <ProfileSection />
      <CareerSection />
      <WorksSection />
    </main>
  );
}
