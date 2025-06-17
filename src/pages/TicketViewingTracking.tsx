
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Header } from '@/components/Header';
import { useCases } from '@/data/useCases';

const TicketViewingTracking: React.FC = () => {
  const useCase = useCases.find(uc => uc.title === "Ticket Viewing & Tracking");
  
  if (!useCase) {
    return <div>Use case not found</div>;
  }

  // Parse key benefits into array
  const benefits = useCase.keyBenefits.split('\n').filter(benefit => benefit.trim());
  
  // Parse integrations for display
  const integrationList = useCase.integrations.split(',').map(i => i.trim());

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="max-w-[1440px] mx-auto px-5 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft size={20} />
          Back to Use Cases
        </Link>
        
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-semibold rounded-full mb-3">
              {useCase.domain}
            </span>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {useCase.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {useCase.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Integrations</h2>
              <div className="grid grid-cols-2 gap-3">
                {integrationList.map((integration, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-medium text-gray-600">
                      {integration.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-700">{integration}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TicketViewingTracking;
