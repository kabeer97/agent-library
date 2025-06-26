
import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const MobileDeviceManagement: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Mobile Device Management</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Mobile Device Management
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Provides remote device setup, troubleshooting, app management, and security for mobile devices. AI ensures devices are configured correctly, secure, and compliant, such as connectivity, sync problems, or lost devices.
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
                  <span className="font-medium">Guide</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Effectivity Score:</span>
                  <span className="font-medium">8/10</span>
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
                  <h4 className="font-medium text-gray-900 mb-1">Streamlined Device Enrollment</h4>
                  <p className="text-sm text-gray-600">Eases onboarding of personal and corporate devices.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Platform-Agnostic Support</h4>
                  <p className="text-sm text-gray-600">Works across iOS, Android, and others.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Security Compliance Prompts</h4>
                  <p className="text-sm text-gray-600">Guides users to meet device security standards.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Reduces Device Setup Time</h4>
                  <p className="text-sm text-gray-600">Faster configuration, less back-and-forth with IT.</p>
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
                Provides remote device setup, troubleshooting, app management, and security for mobile devices. AI ensures devices are configured correctly, secure, and compliant, such as connectivity, sync problems, or lost devices. This comprehensive solution streamlines mobile device management across your organization.
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
                Browse agents related to Mobile Device Management, or{' '}
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
                  <h4 className="font-medium text-gray-900 mb-2">VPN Support</h4>
                  <p className="text-sm text-gray-600 mb-2">IT</p>
                  <p className="text-sm text-gray-700">
                    Assists users with VPN setup and secure remote access configuration.
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

export default MobileDeviceManagement;
