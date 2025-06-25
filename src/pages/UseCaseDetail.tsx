import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
    'Greenhouse': '/lovable-uploads/420b9ed8-5284-4882-a60b-de970dcbccdb.png',
    'SmartRecruiters': '/lovable-uploads/ee3e6561-600b-476e-8b74-69c70a271f62.png',
    'Nectar': '/lovable-uploads/bef26787-8110-41e7-91c1-54be0753ae79.png',
    'ADP': '/lovable-uploads/48e560b0-0e51-4cf3-b6ae-95f90492b0d2.png',
    'Salesforce': '/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png',
    'Hubspot': '/lovable-uploads/5d26d8a8-f667-44b9-a383-5f06e995db8b.png',
    'Gainsight': '/lovable-uploads/7ce6c2aa-6ed2-455e-889c-ec14fcc045f7.png',
    'Zoom': '/lovable-uploads/e6ea1b2f-98b7-47c6-91e4-2bfb18f4a2fc.png',
    'Notion': '/lovable-uploads/c607b7f1-852e-425f-9f99-3da617ea3825.png',
    'Confluence': '/lovable-uploads/4fa7b4e9-ad5a-495e-b43a-629940048187.png',
    'LinkedIn Sales': '/lovable-uploads/420f4eb2-22bd-4036-973b-69427cd80338.png',
    'Navigator': '/lovable-uploads/992b38b4-1de0-4e5a-9c8f-02fc6eded02e.png',
    'Clearbit': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'Zendesk': '/lovable-uploads/b6b9bd37-6f08-4c56-bcd4-56205983012b.png',
    'Oracle': '/lovable-uploads/4b9db095-9373-4d35-888b-50dbea7b36f4.png',
    'Netsuite': '/lovable-uploads/876922f4-97c4-40c8-bdbc-3433b73f7c6f.png',
    'Workday Learning': '/lovable-uploads/f566b1fa-5077-4a28-96be-f9cc8dc68407.png',
    'SAP Litmos': '/lovable-uploads/d7768d99-ecb8-4a52-8fde-8b119a315d6a.png',
    'Google Docs': '/lovable-uploads/490db752-4fa4-4593-9bbf-5ac001c5550d.png',
    'Microsoft Word': '/lovable-uploads/9ed3acf3-aa1d-4bb4-b53d-b67744699ee5.png',
    'Swift': '/lovable-uploads/f01557f7-d315-4a75-9046-c9bbf395c5bc.png',
  };
  
  return logoMap[name] || '/placeholder.svg';
};

const UseCaseDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const useCase = useCases.find(uc => uc.id === slug);

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
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {useCase.title}
              </h1>
              <p className="text-gray-700 max-w-3xl">
                {useCase.description}
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-300 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
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
                  <span className="text-gray-600">Install Time:</span>
                  <span className="font-medium">20 minutes</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-medium">Template</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Key Benefits</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Real-Time Status Visibility</h4>
                  <p className="text-gray-600">Users get instant access to progress without needing to contact support.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Unified History</h4>
                  <p className="text-gray-600">All past and active items are accessible in one place across channels.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proactive Updates & Alerts</h4>
                  <p className="text-gray-600">Agentic AI can notify users of changes or request actions when needed.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Reduced Support Workload</h4>
                  <p className="text-gray-600">Fewer status-related inquiries free up agents for higher-value tasks.</p>
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

export default UseCaseDetail;
