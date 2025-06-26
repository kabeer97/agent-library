import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const HardwareTroubleshooting: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Hardware Troubleshooting</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Hardware Troubleshooting
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Comprehensive hardware diagnostics and resolution across all device types with AI-powered guidance.
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
                  <span className="text-gray-600">Effectivity Score:</span>
                  <span className="font-medium">7/10</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Number of Interactions:</span>
                  <span className="font-medium">10</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Automated Diagnostics</h4>
                  <p className="text-sm text-gray-600">Quickly identifies and resolves common issues across various hardware devices.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Guided User Resolutions</h4>
                  <p className="text-sm text-gray-600">Delivers clear, step-by-step instructions to help users fix problems independently.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Comprehensive Hardware Support</h4>
                  <p className="text-sm text-gray-600">Covers desktops, laptops, printers, monitors, and other peripheral devices.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Reduces IT Overload</h4>
                  <p className="text-sm text-gray-600">Minimizes routine support requests, allowing IT teams to focus on complex tasks.</p>
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
                Assists users in diagnosing and resolving issues across all hardware devices—including desktops, laptops, monitors, printers, and peripherals. From slow performance and connectivity issues to system errors or device malfunctions, the AI provides step-by-step guidance or escalates with a detailed IT ticket when manual support is required, minimizing downtime and ensuring faster resolutions.
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
                Browse agents related to Hardware Troubleshooting, or{' '}
                <Link to="/" className="text-purple-600 hover:text-purple-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Device Replacement & Repair</h4>
                  <p className="text-sm text-gray-600 mb-2">IT</p>
                  <p className="text-sm text-gray-700">
                    Streamlined hardware issue reporting and repair workflows.
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

export default HardwareTroubleshooting;
