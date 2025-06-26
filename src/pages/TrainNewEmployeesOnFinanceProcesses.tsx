
import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';

const TrainNewEmployeesOnFinanceProcesses = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Train New Employees on Finance Processes</span>
        </nav>

        <div className="relative mb-12">
          <div className="bg-gradient-to-r from-purple-200 to-pink-300 rounded-3xl p-12 relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Train New Employees on Finance Processes
              </h1>
              <p className="text-lg text-gray-700 max-w-2xl">
                This Agent streamlines new hire training by creating role-specific finance content, providing interactive process walkthroughs, and offering on-demand Q&A support to accelerate learning and reduce onboarding time.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pink-400 to-transparent opacity-30 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Solutions:</span>
                  <span className="font-medium">Finance • HR</span>
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
                      src="/lovable-uploads/f566b1fa-5077-4a28-96be-f9cc8dc68407.png" 
                      alt="Workday Learning"
                      className="w-5 h-5 object-contain"
                    />
                    <img 
                      src="/lovable-uploads/c607b7f1-852e-425f-9f99-3da617ea3825.png" 
                      alt="Notion"
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
                  <h4 className="font-medium text-gray-900 mb-1">Onboarding Content Generation</h4>
                  <p className="text-sm text-gray-600">Creates role-specific training resources instantly.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Process Simulations</h4>
                  <p className="text-sm text-gray-600">Guides users through task-based walkthroughs.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Interactive Q&A Support</h4>
                  <p className="text-sm text-gray-600">Answers finance queries on demand.</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Faster Ramp-Up Time</h4>
                  <p className="text-sm text-gray-600">Shortens training cycles significantly.</p>
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
                This Agent streamlines new hire training by creating role-specific finance content, providing interactive process walkthroughs, and offering on-demand Q&A support to accelerate learning and reduce onboarding time for finance team members.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Similar Plugins</h3>
              <p className="text-gray-700 mb-6">
                Browse plugins related to Train New Employees on Finance Processes, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all plugins in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <h4 className="font-medium text-gray-900 mb-2">Job Referral</h4>
                  <p className="text-sm text-gray-600 mb-2">HR</p>
                  <p className="text-sm text-gray-700 mb-3">
                    Streamlines employee referral programs and tracks candidate progress.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/420b9ed8-5284-4882-a60b-de970dcbccdb.png" alt="Greenhouse" className="w-4 h-4" />
                    <img src="/lovable-uploads/ee3e6561-600b-476e-8b74-69c70a271f62.png" alt="SmartRecruiters" className="w-4 h-4" />
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

export default TrainNewEmployeesOnFinanceProcesses;
