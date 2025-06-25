
import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const EmployeeRecognition: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Employee Recognition</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Employee Recognition
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Agentic AI makes it easy for employees and managers to recognize peers through guided workflows, nomination prompts, and integrated submission to recognition programs or portals.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-300 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
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
                    <div className="w-5 h-5 bg-orange-500 rounded"></div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">Agent</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-medium">Installable</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Encourages Positive Culture</h4>
                  <p className="text-sm text-gray-600">Promotes peer appreciation.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Simplifies Recognition Submissions</h4>
                  <p className="text-sm text-gray-600">Streamlines nomination processes.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Boosts Engagement</h4>
                  <p className="text-sm text-gray-600">Reinforces value-driven behavior.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Integrated With HR Systems</h4>
                  <p className="text-sm text-gray-600">Automatically records recognitions.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-orange-600 hover:text-orange-800 text-sm">Help Documentation</a>
                <a href="#" className="block text-orange-600 hover:text-orange-800 text-sm">Submit Feedback</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-700">
                Agentic AI makes it easy for employees and managers to recognize peers through guided workflows, nomination prompts, and integrated submission to recognition programs or portals. This comprehensive solution promotes a positive workplace culture and boosts employee engagement through seamless recognition processes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-orange-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Screenshot of the use case will go here</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Agents</h3>
              <p className="text-gray-700 mb-6">
                Browse agents related to Employee Recognition, or{' '}
                <Link to="/" className="text-orange-600 hover:text-orange-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Leave Request Management</h4>
                  <p className="text-sm text-gray-600 mb-2">HR</p>
                  <p className="text-sm text-gray-700">
                    Streamlines employee leave requests with automated workflows.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Training Management</h4>
                  <p className="text-sm text-gray-600 mb-2">HR</p>
                  <p className="text-sm text-gray-700">
                    Helps monitor and guide employees on training modules.
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

export default EmployeeRecognition;
