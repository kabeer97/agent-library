
import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const IdentifyHighChurnRiskCustomer = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Identify High Churn Risk Customer</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-green-200 via-green-100 to-green-50 rounded-[40px] px-12 py-16 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Identify High Churn Risk Customer
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl leading-relaxed">
                This Agent continuously monitors customer activity, sentiment from support interactions, usage metrics, and renewal signals to identify accounts with high churn risk. It alerts account managers proactively, recommending personalized outreach and retention strategies to address potential issues before they escalate.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-2/3 h-full opacity-20">
              <div className="absolute top-4 right-8 w-96 h-96 bg-green-300 rounded-full transform rotate-12"></div>
              <div className="absolute bottom-8 right-16 w-64 h-64 bg-green-400 rounded-full transform -rotate-12"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">Sales • Customer Success</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Connectors:</span>
                  <div className="flex gap-1">
                    <img 
                      src="/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png" 
                      alt="Salesforce"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/7ce6c2aa-6ed2-455e-889c-ec14fcc045f7.png" 
                      alt="Gainsight"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/b6b9bd37-6f08-4c56-bcd4-56205983012b.png" 
                      alt="Zendesk"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Built in</span>
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

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Proactive Retention</h4>
                  <p className="text-sm text-gray-600">Intervene before churn occurs.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Data-Driven Insights</h4>
                  <p className="text-sm text-gray-600">Flags based on real behavior.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Prioritized Attention</h4>
                  <p className="text-sm text-gray-600">Focuses reps on high-risk accounts.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Improved Forecasting</h4>
                  <p className="text-sm text-gray-600">Enhances renewal accuracy.</p>
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
                This Agent continuously monitors customer activity, sentiment from support interactions, usage metrics, and renewal signals to identify accounts with high churn risk. It alerts account managers proactively, recommending personalized outreach and retention strategies to address potential issues before they escalate.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-red-100 via-orange-50 to-pink-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Agents</h3>
              <p className="text-gray-700 mb-6">
                Browse agents related to Identify High Churn Risk Customer, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Summarize Customer Status</h4>
                  <p className="text-sm text-gray-600 mb-2">Sales</p>
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
                    Automates account research by gathering and synthesizing company insights.
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
                  <h4 className="font-medium text-gray-900 mb-2">Outline Workshop Agenda for Sales</h4>
                  <p className="text-sm text-gray-600 mb-2">Sales</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Creates customized workshop agendas based on prospect business needs.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/b66ee5ba-48ca-430d-b1ad-6d03c22683af.png" alt="Salesforce" className="w-4 h-4" />
                    <img src="/lovable-uploads/c607b7f1-852e-425f-9f99-3da617ea3825.png" alt="Notion" className="w-4 h-4" />
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

export default IdentifyHighChurnRiskCustomer;
