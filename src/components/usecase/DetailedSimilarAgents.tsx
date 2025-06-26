
import React from 'react';
import { Link } from 'react-router-dom';
import { useCases } from '@/data/useCases';

interface DetailedSimilarAgentsProps {
  currentUseCase: {
    id: string;
    title: string;
    category: string[];
  };
  getLogoForIntegration: (name: string) => string;
}

export const DetailedSimilarAgents: React.FC<DetailedSimilarAgentsProps> = ({
  currentUseCase,
  getLogoForIntegration
}) => {
  const similarUseCases = useCases
    .filter(uc => uc.id !== currentUseCase.id && uc.category.some(cat => currentUseCase.category.includes(cat)))
    .slice(0, 6);

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Agents</h3>
      <p className="text-gray-700 mb-6">
        Browse agents related to {currentUseCase.title}, or{' '}
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          view all agents in our library
        </Link>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {similarUseCases.map((similarUseCase) => (
          <Link
            key={similarUseCase.id}
            to={`/use-case/${similarUseCase.id}`}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
          >
            <h4 className="font-semibold text-gray-900 mb-2">{similarUseCase.title}</h4>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">{similarUseCase.category.join(', ')}</span>
              <div className="flex gap-1">
                {similarUseCase.integrations.slice(0, 3).map((integration, index) => (
                  <div key={index} className="w-4 h-4">
                    <img
                      src={getLogoForIntegration(integration.alt)}
                      alt={integration.alt}
                      className="w-4 h-4 object-contain"
                      title={integration.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 line-clamp-2">
              {similarUseCase.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
