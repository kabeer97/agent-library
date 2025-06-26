
import React from 'react';

interface Benefit {
  title: string;
  description: string;
}

interface KeyBenefitsProps {
  benefits: Benefit[];
}

export const KeyBenefits: React.FC<KeyBenefitsProps> = ({ benefits }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
      
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
