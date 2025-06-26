
import React from 'react';

interface DetailedInformationSidebarProps {
  category: string[];
  integrations: Array<{ src: string; alt: string }>;
  type: string;
  effectivityScore?: string;
  getLogoForIntegration: (name: string) => string;
}

export const DetailedInformationSidebar: React.FC<DetailedInformationSidebarProps> = ({
  category,
  integrations,
  type,
  effectivityScore,
  getLogoForIntegration
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Information</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Solutions:</span>
          <span className="font-medium">{category.join(', ')}</span>
        </div>
        
        <div className="flex justify-between items-start">
          <span className="text-gray-600">Connectors:</span>
          <div className="flex gap-1 flex-wrap max-w-32">
            {integrations.slice(0, 3).map((integration, index) => (
              <div key={index} className="w-5 h-5">
                <img
                  src={getLogoForIntegration(integration.alt)}
                  alt={integration.alt}
                  className="w-5 h-5 object-contain"
                  title={integration.alt}
                />
              </div>
            ))}
            {integrations.length > 3 && (
              <span className="text-xs text-gray-500">+{integrations.length - 3}</span>
            )}
          </div>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Type:</span>
          <span className="font-medium">{type}</span>
        </div>
        
        {effectivityScore && (
          <div className="flex justify-between">
            <span className="text-gray-600">Effectivity Score:</span>
            <span className="font-medium">{effectivityScore}/10</span>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="text-gray-600">Availability:</span>
          <span className="font-medium">Template</span>
        </div>
      </div>
    </div>
  );
};
