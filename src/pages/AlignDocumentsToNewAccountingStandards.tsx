import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const AlignDocumentsToNewAccountingStandards = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Align Documents to New Accounting Standards</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-blue-200 to-indigo-300 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Align Documents to New Accounting Standards
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                This Agent automatically reviews and updates financial documents to comply with new accounting standards. It identifies outdated language, applies bulk changes, and ensures all documentation meets current regulatory requirements while maintaining audit trails.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-400 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">Finance • Compliance</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Connectors:</span>
                  <div className="flex gap-1">
                    <img 
                      src="/lovable-uploads/9ed3acf3-aa1d-4bb4-b53d-b67744699ee5.png" 
                      alt="Microsoft Word"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/490db752-4fa4-4593-9bbf-5ac001c5550d.png" 
                      alt="Google Docs"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/876922f4-97c4-40c8-bdbc-3433b73f7c6f.png" 
                      alt="NetSuite"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Built in</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Effectivity Score:</span>
                  <span className="font-medium">8/10</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Standard Compliance Checks</h4>
                  <p className="text-sm text-gray-600">Ensures all documents reflect updated rules.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Bulk Document Updates</h4>
                  <p className="text-sm text-gray-600">Applies changes across multiple files quickly.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Highlight Key Differences</h4>
                  <p className="text-sm text-gray-600">Flags outdated or non-compliant phrasing.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Audit-Ready Formatting</h4>
                  <p className="text-sm text-gray-600">Maintains traceability for all revisions.</p>
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
                This Agent automatically reviews and updates financial documents to comply with new accounting standards. It identifies outdated language, applies bulk changes, and ensures all documentation meets current regulatory requirements while maintaining comprehensive audit trails for compliance purposes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Agents</h3>
              <p className="text-gray-700 mb-6">
                Browse agents related to Align Documents to New Accounting Standards, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Employee Information Change</h4>
                  <p className="text-sm text-gray-600 mb-2">HR</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Automates employee data updates across multiple HR systems and documents.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png" alt="Workday" className="w-4 h-4" />
                    <img src="/lovable-uploads/584c3f69-7e72-42be-9ae9-20ef2238179b.png" alt="BambooHR" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Approval Management</h4>
                  <p className="text-sm text-gray-600 mb-2">IT Service Management</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Streamlines approval workflows and automates decision routing processes.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/f2625fbc-396c-4794-8436-9376a81bd964.png" alt="ServiceNow" className="w-4 h-4" />
                    <img src="/lovable-uploads/6cfd2435-d537-487a-adc2-e79e99f4c721.png" alt="Microsoft Power Automate" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Training Management</h4>
                  <p className="text-sm text-gray-600 mb-2">HR</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Coordinates training programs and tracks compliance requirements automatically.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/f566b1fa-5077-4a28-96be-f9cc8dc68407.png" alt="Workday Learning" className="w-4 h-4" />
                    <img src="/lovable-uploads/d7768d99-ecb8-4a52-8fde-8b119a315d6a.png" alt="SAP Litmos" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Outline Workshop Agenda for Sales</h4>
                  <p className="text-sm text-gray-600 mb-2">Sales</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Creates customized workshop agendas based on prospect business needs.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png" alt="Salesforce" className="w-4 h-4" />
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

export default AlignDocumentsToNewAccountingStandards;
