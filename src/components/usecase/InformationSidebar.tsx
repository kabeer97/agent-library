
import React from 'react';

interface InformationSidebarProps {
  solutions: string;
  connectors: Array<{ src: string; alt: string }>;
  type: string;
  installTime?: string;
  availability: string;
}

export const InformationSidebar: React.FC<InformationSidebarProps> = ({
  solutions,
  connectors,
  type,
  installTime,
  availability
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Solutions:</span>
          <span className="font-medium">{solutions}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Connectors:</span>
          <div className="flex gap-1">
            {connectors.map((connector, index) => (
              <img 
                key={index}
                src={connector.src} 
                alt={connector.alt}
                className="w-5 h-5 object-contain"
              />
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Type:</span>
          <span className="font-medium">{type}</span>
        </div>
        
        {installTime && (
          <div className="flex justify-between">
            <span className="text-gray-600">Install Time:</span>
            <span className="font-medium">{installTime}</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-gray-600">Availability:</span>
          <span className="font-medium">{availability}</span>
        </div>
      </div>
    </div>
  );
};
