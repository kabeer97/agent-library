
import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const TicketEscalationClosure: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Ticket Escalation & Closure</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-red-100 to-red-200 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Ticket Escalation & Closure
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                Intelligent ticket escalation and closure management with automated workflows and resolution tracking.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-300 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">IT Service Management</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Connectors:</span>
                  <div className="flex gap-1">
                    <div className="w-5 h-5 bg-red-500 rounded"></div>
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
                  <span className="font-medium">8</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Faster Escalations</h4>
                  <p className="text-sm text-gray-600">AI identifies and routes critical issues quickly.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Automated Notifications</h4>
                  <p className="text-sm text-gray-600">Keeps stakeholders informed on ticket progress.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Improved Resolution Times</h4>
                  <p className="text-sm text-gray-600">AI-driven workflows speed up issue resolution.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Enhanced Reporting</h4>
                  <p className="text-sm text-gray-600">Provides insights into escalation patterns and resolution efficiency.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <div className="space-y-2">
                <a href="#" className="block text-red-600 hover:text-red-800 text-sm">Help Documentation</a>
                <a href="#" className="block text-red-600 hover:text-red-800 text-sm">Submit Feedback</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-700">
                Automates and streamlines the process of escalating and closing IT support tickets. The system intelligently identifies tickets requiring escalation based on urgency, impact, and resolution time, and then routes them to the appropriate support tiers. Upon resolution, the AI ensures proper closure procedures are followed, updating all relevant systems and notifying stakeholders.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-red-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Screenshot of the use case will go here</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Agents</h3>
              <p className="text-gray-700 mb-6">
                Browse agents related to Ticket Escalation & Closure, or{' '}
                <Link to="/" className="text-red-600 hover:text-red-800">
                  view all agents in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Ticket Viewing & Tracking</h4>
                  <p className="text-sm text-gray-600 mb-2">IT Service Management</p>
                  <p className="text-sm text-gray-700">
                    Real-time ticket status monitoring and progress tracking.
                  </p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Ticket Interaction Updates</h4>
                  <p className="text-sm text-gray-600 mb-2">IT Service Management</p>
                  <p className="text-sm text-gray-700">
                    Automated updates and summaries of ticket interactions.
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

export default TicketEscalationClosure;
