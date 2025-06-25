
import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const VpnSupport: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">VPN Support</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                VPN Support
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Assists users with setting up, troubleshooting, and securing access to internal resources from anywhere through VPN connections.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-300 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
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
                  <span className="text-gray-600">Availability:</span>
                  <span className="font-medium">Built in</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Guided VPN Setup</h4>
                  <p className="text-sm text-gray-600">Users get step-by-step install instructions.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Secure Access Validation</h4>
                  <p className="text-sm text-gray-600">Confirms credentials and access permissions.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Instant Connectivity Checks</h4>
                  <p className="text-sm text-gray-600">Detects and resolves VPN errors quickly.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Reduces Remote Downtime</h4>
                  <p className="text-sm text-gray-600">Ensures users stay connected from anywhere.</p>
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
                Assists users with setting up, troubleshooting, and securing access to internal resources from anywhere through VPN connections. This comprehensive solution provides step-by-step guidance for VPN configuration, validates security credentials, and ensures reliable remote connectivity across all platforms and devices.
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
                Browse agents related to VPN Support, or{' '}
                <Link to="/" className="text-purple-600 hover:text-purple-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Login Troubleshooting</h4>
                  <p className="text-sm text-gray-600 mb-2">IT</p>
                  <p className="text-sm text-gray-700">
                    Assists with login issues and account access problems.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Multi-Factor Authentication</h4>
                  <p className="text-sm text-gray-600 mb-2">IT</p>
                  <p className="text-sm text-gray-700">
                    Setup and troubleshooting for secure multi-factor authentication.
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

export default VpnSupport;
