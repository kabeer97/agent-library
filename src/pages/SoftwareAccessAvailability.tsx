import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { useCases } from '@/data/useCases';

// Logo mapping function (same as in UseCaseCard)
const getLogoForIntegration = (name: string): string => {
  const logoMap: { [key: string]: string } = {
    'ServiceNow': '/lovable-uploads/f2625fbc-396c-4794-8436-9376a81bd964.png',
    'BMC Remedy': '/lovable-uploads/590f0671-6bcb-48a7-9794-d05d02ee566c.png',
    'Microsoft Teams': '/lovable-uploads/6b8589bb-d8c9-41bd-b025-511c87936068.png',
    'ServiceNow Flow Designer': '/lovable-uploads/f2625fbc-396c-4794-8436-9376a81bd964.png',
    'Jira': '/lovable-uploads/7ce6c2aa-6ed2-455e-889c-ec14fcc045f7.png',
    'Microsoft Power Automate': '/lovable-uploads/6cfd2435-d537-487a-adc2-e79e99f4c721.png',
    'Okta': '/lovable-uploads/ddba73c4-73cf-4482-8fd8-7c9f156958d9.png',
    'Azure AD': '/lovable-uploads/086560d8-4621-4c4f-8209-6b317aec69d3.png',
    'Ping Identity': '/lovable-uploads/98eaf598-5126-400c-a2eb-75a2566595c2.png',
    'Duo Security': '/lovable-uploads/f7e740be-28ce-4bb8-9f9e-6393d0f2f110.png',
    'Freshservice': '/lovable-uploads/b90419d5-3a78-4d6d-8ee8-2a8ff40134bd.png',
    'TeamViewer': '/lovable-uploads/ad3a520a-652b-4599-9413-6e0c80b13571.png',
    'AnyDesk': '/lovable-uploads/86980762-d3b6-4389-b225-4bf861674321.png',
    'Slack': '/lovable-uploads/656ff27c-1b17-4471-9f95-5645ce501942.png',
    'HP Web Jetadmin': '/lovable-uploads/11b21718-07cd-4b7f-b466-fbffaedd307f.png',
    'Xerox FreeFlow': '/lovable-uploads/eaa34795-b4c8-4dbd-bc09-e5ba0641128e.png',
    'Konica Minolta': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'VMware Workspace ONE': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'Microsoft Intune': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'MobileIron': '/lovable-uploads/8520945c-2777-4a26-b0e2-ee7f61883b62.png',
    'Cisco AnyConnect': '/lovable-uploads/f6aa47cc-9318-4185-99d4-763cf2e7f042.png',
    'Palo Alto GlobalProtect': '/lovable-uploads/6b8add9b-da1b-4258-a3f8-7c8adda52ba4.png',
    'OpenVPN': '/lovable-uploads/dacad972-5982-4026-88a6-7880d6fdabb4.png',
    'Workday': '/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png',
    'SAP': '/lovable-uploads/3c6b5624-f5a4-48c0-ace7-362516efbfda.png',
    'BambooHR': '/lovable-uploads/584c3f69-7e72-42be-9ae9-20ef2238179b.png',
    'Micrsosoft Teams': '/lovable-uploads/6b8589bb-d8c9-41bd-b025-511c87936068.png',
  };
  
  return logoMap[name] || '/placeholder.svg';
};

const SoftwareAccessAvailability: React.FC = () => {
  // Try to find the use case with either title variant
  const useCase = useCases.find(uc => 
    uc.title === "Software Access & Availability" || 
    uc.title === "Software Access & Licensing"
  );

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
      
      <main className="px-[150px] py-8 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-gray-900">Browse</Link>
          <span>›</span>
          <span className="text-gray-900">{useCase.title}</span>
        </nav>

        <div className="relative mb-8">
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h1>
              <p className="text-gray-700 max-w-3xl">
                {useCase.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-8 max-lg:flex-col">
          <div className="w-80 max-lg:w-full space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Information</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">{useCase.category.join(', ')}</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="text-gray-600">Connectors:</span>
                  <div className="flex gap-1 flex-wrap max-w-32">
                    {useCase.integrations.slice(0, 3).map((integration, index) => (
                      <div key={index} className="w-5 h-5">
                        <img
                          src={getLogoForIntegration(integration.alt)}
                          alt={integration.alt}
                          className="w-5 h-5 object-contain"
                          title={integration.alt}
                        />
                      </div>
                    ))}
                    {useCase.integrations.length > 3 && (
                      <span className="text-xs text-gray-500">+{useCase.integrations.length - 3}</span>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">{useCase.type}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Effectivity Score:</span>
                  <span className="font-medium">7/10</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of Interactions:</span>
                  <span className="font-medium">8</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Benefits</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">On-Demand Access Requests</h4>
                  <p className="text-gray-600">Users can request software instantly via AI.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">License Availability Checks</h4>
                  <p className="text-gray-600">AI verifies license pool before routing.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Automated Approval Handling</h4>
                  <p className="text-gray-600">Sends requests through correct workflows.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Audit-Ready Tracking</h4>
                  <p className="text-gray-600">Maintains logs of all access activity.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Support</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-blue-600 hover:text-blue-800">Help Documentation</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">Submit Feedback</a>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-700 leading-relaxed">
                {useCase.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-lg aspect-video flex items-center justify-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Agents</h3>
              <p className="text-gray-700 mb-6">
                Browse agents related to {useCase.title}, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases
                  .filter(uc => uc.id !== useCase.id && uc.category.some(cat => useCase.category.includes(cat)))
                  .slice(0, 6)
                  .map((similarUseCase) => (
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default SoftwareAccessAvailability;
