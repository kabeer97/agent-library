
import React from 'react';

export const SupportLinks: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
      <div className="space-y-2">
        <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">Help Documentation</a>
        <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">Submit Feedback</a>
      </div>
    </div>
  );
};
