import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const OutlineWorkshopAgenda = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Outline Workshop Agenda for Sales</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-blue-200 to-blue-300 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Outline Workshop Agenda for Sales
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Agentic AI can help you create customized workshop agendas based on the prospect's business needs, stakeholder profiles, prior engagements, and strategic objectives. It ensures that sessions are productive, aligned with sales goals, and demonstrate value to all attendees; all while reducing planning overhead.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">Sales</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Connectors:</span>
                  <div className="flex gap-1">
                    <img 
                      src="/lovable-uploads/b66ee5ba-48ca-430d-b1ad-6d03c22683af.png" 
                      alt="Salesforce"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/c607b7f1-852e-425f-9f99-3da617ea3825.png" 
                      alt="Notion"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/4fa7b4e9-ad5a-495e-b43a-629940048187.png" 
                      alt="Confluence"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Agent</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Effectivity Score:</span>
                  <span className="font-medium">7/10</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of Actions:</span>
                  <span className="font-medium">5</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Professional Format</h4>
                  <p className="text-sm text-gray-600">Clean, ready-to-send agenda.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Tailored Content</h4>
                  <p className="text-sm text-gray-600">Reflects customer goals.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Facilitates Buy-In</h4>
                  <p className="text-sm text-gray-600">Sets clear expectations.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Streamlines Planning</h4>
                  <p className="text-sm text-gray-600">Reduces prep time.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">Help Documentation</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800 text-sm">Submit Feedback</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-700">
                Agentic AI can help you create customized workshop agendas based on the prospect's business needs, stakeholder profiles, prior engagements, and strategic objectives. It ensures that sessions are productive, aligned with sales goals, and demonstrate value to all attendees; all while reducing planning overhead.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Plugins</h3>
              <p className="text-gray-700 mb-6">
                Browse plugins related to Outline Workshop Agenda for Sales, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all plugins in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Summarize Customer Status</h4>
                  <p className="text-sm text-gray-600 mb-2">Sales • Customer Success</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Compiles a holistic view of each customer by aggregating deal stages and interactions.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png" alt="Salesforce" className="w-4 h-4" />
                    <img src="/lovable-uploads/5d26d8a8-f667-44b9-a383-5f06e995db8b.png" alt="Hubspot" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Target Account Research</h4>
                  <p className="text-sm text-gray-600 mb-2">Sales • Marketing</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Automates account research by gathering company insights and contact information.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/420f4eb2-22bd-4036-973b-69427cd80338.png" alt="LinkedIn Sales Navigator" className="w-4 h-4" />
                    <img src="/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png" alt="Clearbit" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Recap Customer Meetings</h4>
                  <p className="text-sm text-gray-600 mb-2">Sales</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Automatically captures and summarizes customer meeting discussions.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/e6ea1b2f-98b7-47c6-91e4-2bfb18f4a2fc.png" alt="Zoom" className="w-4 h-4" />
                    <img src="/lovable-uploads/6b8589bb-d8c9-41bd-b025-511c87936068.png" alt="Microsoft Teams" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Identify High Churn Risk Customer</h4>
                  <p className="text-sm text-gray-600 mb-2">Sales • Customer Success</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Monitors customer activity to identify accounts with high churn risk.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png" alt="Salesforce" className="w-4 h-4" />
                    <img src="/lovable-uploads/7ce6c2aa-6ed2-455e-889c-ec14fcc045f7.png" alt="Gainsight" className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OutlineWorkshopAgenda;
