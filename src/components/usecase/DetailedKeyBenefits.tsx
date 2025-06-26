
import React from 'react';

export const DetailedKeyBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Real-Time Status Visibility",
      description: "Users get instant access to progress without needing to contact support."
    },
    {
      title: "Unified History",
      description: "All past and active items are accessible in one place across channels."
    },
    {
      title: "Proactive Updates & Alerts",
      description: "Agentic AI can notify users of changes or request actions when needed."
    },
    {
      title: "Reduced Support Workload",
      description: "Fewer status-related inquiries free up agents for higher-value tasks."
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Key Benefits</h3>
      
      <div className="space-y-4 text-sm">
        {benefits.map((benefit, index) => (
          <div key={index}>
            <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
