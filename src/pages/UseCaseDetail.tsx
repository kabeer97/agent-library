
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { useCases } from '@/data/useCases';

const UseCaseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const useCase = useCases.find(uc => uc.id === id);

  if (!useCase) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <main className="px-[150px] py-12 max-md:px-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Use Case Not Found</h1>
            <Link to="/" className="text-purple-600 hover:text-purple-800">
              Return to AI Agent Library
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">{useCase.title}</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {useCase.title}
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                {useCase.description}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-300 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">{useCase.category.join(', ')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Badges:</span>
                  <div className="flex gap-1 flex-wrap">
                    {useCase.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="text-xs font-semibold px-2 py-1 rounded bg-blue-100 text-blue-800"
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">{useCase.type}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-medium">Template</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Integrations</h3>
              
              <div className="grid grid-cols-4 gap-3">
                {useCase.integrations.map((integration, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8">
                      <img
                        src={integration.src}
                        alt={integration.alt}
                        className="aspect-[1] object-contain w-8 h-8 shrink-0"
                        title={integration.alt}
                      />
                    </div>
                    <span className="text-xs text-gray-600 text-center">{integration.alt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-purple-600 hover:text-purple-800 text-sm">Help Documentation</a>
                <a href="#" className="block text-purple-600 hover:text-purple-800 text-sm">Submit Feedback</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-700">
                {useCase.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-purple-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Screenshot of the use case will go here</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Use Cases</h3>
              <p className="text-gray-700 mb-6">
                Browse use cases related to {useCase.title}, or{' '}
                <Link to="/" className="text-purple-600 hover:text-purple-800">
                  view all use cases in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases
                  .filter(uc => uc.id !== useCase.id && uc.category.some(cat => useCase.category.includes(cat)))
                  .slice(0, 4)
                  .map((similarUseCase) => (
                    <Link
                      key={similarUseCase.id}
                      to={`/use-case/${similarUseCase.id}`}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">{similarUseCase.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{similarUseCase.category.join(', ')}</p>
                      <p className="text-sm text-gray-700">
                        {similarUseCase.description}
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UseCaseDetail;
