import React from 'react';
import PricingPlans from '../sections/pricing-plans';

const Pricing = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose the perfect plan for your business and start generating high-converting ads today.
        </p>
      </div>
      <PricingPlans />
    </div>
  );
};

export default Pricing;
