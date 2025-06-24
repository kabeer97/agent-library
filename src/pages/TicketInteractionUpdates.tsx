
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';

// Logo mapping function (same as in UseCaseCard)
const getLogoForIntegration = (name: string): string => {
  const logoMap: { [key: string]: string } = {
    'ServiceNow': '/lovable-uploads/f2625fbc-396c-4794-8436-9376a81bd964.png',
    'BMC Remedy': '/lovable-uploads/590f0671-6bcb-48a7-9794-d05d02ee566c.png',
    'Microsoft Teams': '/lovable-uploads/6b8589bb-d8c9-41bd-b025-511c87936068.png',
  };
  
  return logoMap[name] || '/placeholder.svg';
};

const TicketInteractionUpdates: React.FC = () => {
  const useCase = {
    title: "Ticket Interaction & Updates",
    description: "Enables users to engage with ongoing support tickets by providing additional context, responding to technician queries, or uploading relevant files. AI ensures smooth back-and-forth communication and automatically updates ticket logs.",
    category: ["IT"],
    type: "Installable",
    integrations: [
      { alt: 'ServiceNow' },
      { alt: 'BMC Remedy' },
      { alt: 'Microsoft Teams' },
    ]
  };

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
                  <h4 className="font-semibold text-gray-900 mb-1">Easy Ticket Updates</h4>
                  <p className="text-gray-600">Users can modify tickets or add info without restarting the process.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Instant Comment Syncing</h4>
                  <p className="text-gray-600">Updates are reflected in real time across channels.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Attachment & Detail Handling</h4>
                  <p className="text-gray-600">AI prompts for necessary files or data to aid resolution.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Lower Agent Interruption</h4>
                  <p className="text-gray-600">Fewer manual updates needed from support staff.</p>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Plugins</h3>
              <p className="text-gray-700 mb-6">
                Browse plugins related to {useCase.title}, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all plugins in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/ticket-viewing-tracking"
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Ticket Viewing & Tracking</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">IT</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4">
                        <img
                          src={getLogoForIntegration('ServiceNow')}
                          alt="ServiceNow"
                          className="w-4 h-4 object-contain"
                          title="ServiceNow"
                        />
                      </div>
                      <div className="w-4 h-4">
                        <img
                          src={getLogoForIntegration('BMC Remedy')}
                          alt="BMC Remedy"
                          className="w-4 h-4 object-contain"
                          title="BMC Remedy"
                        />
                      </div>
                      <div className="w-4 h-4">
                        <img
                          src={getLogoForIntegration('Microsoft Teams')}
                          alt="Microsoft Teams"
                          className="w-4 h-4 object-contain"
                          title="Microsoft Teams"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    Allows users to view the status of their submitted tickets and track progress in real-time across channels.
                  </p>
                </Link>

                <Link
                  to="/use-case/ticket-escalation-closure"
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">Ticket Escalation & Closure</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">IT</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4">
                        <img
                          src={getLogoForIntegration('ServiceNow')}
                          alt="ServiceNow"
                          className="w-4 h-4 object-contain"
                          title="ServiceNow"
                        />
                      </div>
                      <div className="w-4 h-4">
                        <img
                          src={getLogoForIntegration('BMC Remedy')}
                          alt="BMC Remedy"
                          className="w-4 h-4 object-contain"
                          title="BMC Remedy"
                        />
                      </div>
                      <div className="w-4 h-4">
                        <img
                          src={getLogoForIntegration('Microsoft Teams')}
                          alt="Microsoft Teams"
                          className="w-4 h-4 object-contain"
                          title="Microsoft Teams"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 line-clamp-2">
                    Automates the escalation of unresolved tickets based on pre-set rules or user requests.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TicketInteractionUpdates;
