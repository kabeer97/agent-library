import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const DeviceReplacementRepair: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Device Replacement & Repair</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Device Replacement & Repair
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Streamlined hardware issue reporting and resolution with integrated repair workflows and vendor coordination.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-300 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">IT</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Connectors:</span>
                  <div className="flex gap-1">
                    <div className="w-5 h-5 bg-blue-500 rounded"></div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Agent</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of Interactions:</span>
                  <span className="font-medium">7</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Fast Issue Triage</h4>
                  <p className="text-sm text-gray-600">AI gathers details to assess repair needs upfront.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Streamlined Replacement Flows</h4>
                  <p className="text-sm text-gray-600">Guides users through device exchange steps.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Vendor & Ticket Integration</h4>
                  <p className="text-sm text-gray-600">Connects with repair teams and logistics.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Minimizes User Downtime</h4>
                  <p className="text-sm text-gray-600">Speeds up resolution to keep users productive.</p>
                </div>
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
                Enables users to report and resolve issues with hardware, such as broken devices or malfunctioning equipment. The system guides users through troubleshooting steps, facilitates repair requests, and provides updates on the repair process.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-purple-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Screenshot of the use case will go here</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Agents</h3>
              <p className="text-gray-700 mb-6">
                Browse agents related to Device Replacement & Repair, or{' '}
                <Link to="/" className="text-purple-600 hover:text-purple-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Hardware Troubleshooting</h4>
                  <p className="text-sm text-gray-600 mb-2">IT</p>
                  <p className="text-sm text-gray-700">
                    Comprehensive hardware diagnostics and resolution across all device types.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Printer & Scanner Support</h4>
                  <p className="text-sm text-gray-600 mb-2">IT</p>
                  <p className="text-sm text-gray-700">
                    Specialized support for printing and scanning device issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeviceReplacementRepair;
