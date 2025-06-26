import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const EmployeeInformationChange = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Employee Information Change</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Employee Information Change
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Enabling users to update their contact details, such as phone numbers or personal email addresses, with proper validation for efficient processing.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-400 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">HR</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Connectors:</span>
                  <div className="flex gap-1">
                    <img 
                      src="/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png" 
                      alt="Workday"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/3c6b5624-f5a4-48c0-ace7-362516efbfda.png" 
                      alt="SAP"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/584c3f69-7e72-42be-9ae9-20ef2238179b.png" 
                      alt="BambooHR"
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Plugin</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Effectivity Score:</span>
                  <span className="font-medium">7/10</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of Interactions:</span>
                  <span className="font-medium">5</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Guided Update Process</h4>
                  <p className="text-sm text-gray-600">Walks users through information changes.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Auto-Sync to Payroll</h4>
                  <p className="text-sm text-gray-600">Ensures records align for tax/forms.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Confirmation Notifications</h4>
                  <p className="text-sm text-gray-600">Sends alerts once change is processed.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Reduces Compliance Risk</h4>
                  <p className="text-sm text-gray-600">Keeps employee data up to date.</p>
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
                Enabling users to update their contact details, such as phone numbers or personal email addresses, with proper validation for efficient processing.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-green-100 via-pink-50 to-orange-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Agents</h3>
              <p className="text-gray-700 mb-6">
                Browse agents related to Employee Information Change, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Leave Request Management</h4>
                  <p className="text-sm text-gray-600 mb-2">HR • HR Time and Attendance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    A flow that allows employees to request time off, with proper approval workflows.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png" alt="Workday" className="w-4 h-4" />
                    <img src="/lovable-uploads/3c6b5624-f5a4-48c0-ace7-362516efbfda.png" alt="SAP" className="w-4 h-4" />
                    <img src="/lovable-uploads/584c3f69-7e72-42be-9ae9-20ef2238179b.png" alt="BambooHR" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Employee Recognition</h4>
                  <p className="text-sm text-gray-600 mb-2">HR • Finance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    A flow that helps managers recognize employee achievements and contributions.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png" alt="Workday" className="w-4 h-4" />
                    <img src="/lovable-uploads/584c3f69-7e72-42be-9ae9-20ef2238179b.png" alt="BambooHR" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Training Management</h4>
                  <p className="text-sm text-gray-600 mb-2">HR • Finance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    A flow that helps hiring managers or HR create and submit job descriptions for new or replacement roles.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png" alt="Workday" className="w-4 h-4" />
                    <img src="/lovable-uploads/3c6b5624-f5a4-48c0-ace7-362516efbfda.png" alt="SAP" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Health Coverage Viewing</h4>
                  <p className="text-sm text-gray-600 mb-2">HR • Finance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    A flow that helps employees view and understand their health coverage options and benefits.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png" alt="Workday" className="w-4 h-4" />
                    <img src="/lovable-uploads/48e560b0-0e51-4cf3-b6ae-95f90492b0d2.png" alt="ADP" className="w-4 h-4" />
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

export default EmployeeInformationChange;
