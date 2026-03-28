import React from 'react';
import Hero from '../components/landing/Hero';
import StatsBar from '../components/landing/StatsBar';
import WhySection from '../components/landing/WhySection';
import PartsGrid from '../components/landing/PartsGrid';
import ProgressTracker from '../components/landing/ProgressTracker';
import HowItWorks from '../components/landing/HowItWorks';
import ApiPreview from '../components/landing/ApiPreview';
import BaselineResults from '../components/landing/BaselineResults';
import CtaBanner from '../components/landing/CtaBanner';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsBar />
      <WhySection />
      <PartsGrid />
      <ProgressTracker />
      <HowItWorks />
      <ApiPreview />
      <BaselineResults />
      <CtaBanner />
    </div>
  );
};

export default Dashboard;
