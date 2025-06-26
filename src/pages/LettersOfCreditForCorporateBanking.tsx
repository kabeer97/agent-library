import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const LettersOfCreditForCorporateBanking = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Letters of Credit for Corporate Banking</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-blue-200 to-cyan-300 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Letters of Credit for Corporate Banking
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Agentic AI helps finance teams initiate, manage, and monitor letters of credit by automating document generation, compliance checks, and stakeholder communications, ensuring smooth international trade operations.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-400 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">Finance</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Connectors:</span>
                  <div className="flex gap-1">
                    <img 
                      src="/lovable-uploads/3c6b5624-f5a4-48c0-ace7-362516efbfda.png" 
                      alt="SAP"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/f01557f7-d315-4a75-9046-c9bbf395c5bc.png" 
                      alt="Swift"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Installable</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Install Time:</span>
                  <span className="font-medium">25 minutes</span>
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
                  <h4 className="font-medium text-gray-900 mb-1">Streamlined LC Creation</h4>
                  <p className="text-sm text-gray-600">Generates accurate letters with minimal input.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Regulatory Risk Mitigation</h4>
                  <p className="text-sm text-gray-600">Highlights and fixes potential compliance risks.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Centralized Communication</h4>
                  <p className="text-sm text-gray-600">Unifies all LC interactions in one view.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Status Tracking Enabled</h4>
                  <p className="text-sm text-gray-600">Tracks LC lifecycle with real-time visibility.</p>
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
                Agentic AI helps finance teams initiate, manage, and monitor letters of credit by automating document generation, compliance checks, and stakeholder communications, ensuring smooth international trade operations.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Agents</h3>
              <p className="text-gray-700 mb-6">
                Browse agents related to Letters of Credit for Corporate Banking, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Create a Meeting Agenda for Contract Review</h4>
                  <p className="text-sm text-gray-600 mb-2">Finance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Generate tailored agendas for financial contract review meetings.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/490db752-4fa4-4593-9bbf-5ac001c5550d.png" alt="Google Docs" className="w-4 h-4" />
                    <img src="/lovable-uploads/9ed3acf3-aa1d-4bb4-b53d-b67744699ee5.png" alt="Microsoft Word" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Align Documents to New Accounting Standards</h4>
                  <p className="text-sm text-gray-600 mb-2">Finance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Automatically reviews and updates financial documents to comply with new standards.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/9ed3acf3-aa1d-4bb4-b53d-b67744699ee5.png" alt="Microsoft Word" className="w-4 h-4" />
                    <img src="/lovable-uploads/876922f4-97c4-40c8-bdbc-3433b73f7c6f.png" alt="NetSuite" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Train New Employees on Finance Processes</h4>
                  <p className="text-sm text-gray-600 mb-2">Finance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Streamlines new hire training by creating role-specific finance content.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/f566b1fa-5077-4a28-96be-f9cc8dc68407.png" alt="Workday Learning" className="w-4 h-4" />
                    <img src="/lovable-uploads/c607b7f1-852e-425f-9f99-3da617ea3825.png" alt="Notion" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Identify High Churn Risk Customer</h4>
                  <p className="text-sm text-gray-600 mb-2">Sales</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Analyzes customer data to identify potential churn risks.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png" alt="Salesforce" className="w-4 h-4" />
                    <img src="/lovable-uploads/5d26d8a8-f667-44b9-a383-5f06e995db8b.png" alt="Hubspot" className="w-4 h-4" />
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

export default LettersOfCreditForCorporateBanking;
