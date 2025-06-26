
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const EmployeeInformationChange = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with green banner */}
      <div className="bg-green-400 text-white text-center py-2 text-sm">
        Aisera Named Gartner Magic Quadrant Leader in AI Apps for ITSM
      </div>
      
      {/* Navigation Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">🔧 Aisera</span>
              <nav className="ml-8 flex space-x-8">
                <button className="text-gray-700 hover:text-gray-900">Platform ▼</button>
                <button className="text-gray-700 hover:text-gray-900">Solutions ▼</button>
                <button className="text-gray-700 hover:text-gray-900">Customers ▼</button>
                <button className="text-gray-700 hover:text-gray-900">Resources ▼</button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900">AiseraPlay</button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Get a Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span>›</span>
          <Link to="/" className="hover:text-gray-900">Browse</Link>
          <span>›</span>
          <span className="text-gray-900">Employee Information Change</span>
        </nav>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-3xl p-8 relative overflow-hidden">
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Employee Information Change
            </h1>
            <p className="text-lg text-gray-800 max-w-2xl">
              Enabling users to update their contact details, such as phone numbers or personal email addresses, with proper validation for efficient processing.
            </p>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
            <div className="w-full h-full bg-gradient-to-l from-green-400 to-transparent rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Information Section */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Information</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600">Solutions:</span>
                  <div className="mt-1">
                    <span className="font-medium">HR</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-gray-600">Connectors:</span>
                  <div className="mt-1 flex gap-2">
                    <div className="flex items-center gap-1">
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
                </div>
                
                <div>
                  <span className="text-gray-600">Type:</span>
                  <div className="mt-1">
                    <span className="font-medium">Plugin</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-gray-600">Install Time:</span>
                  <div className="mt-1">
                    <span className="font-medium">20 minutes</span>
                  </div>
                </div>
                
                <div>
                  <span className="text-gray-600">Availability:</span>
                  <div className="mt-1">
                    <span className="font-medium">Template</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Guided Update Process</h4>
                  <p className="text-gray-600">Walks users through information changes.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Auto-Sync to Payroll</h4>
                  <p className="text-gray-600">Ensures records align for tax/forms.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Confirmation Notifications</h4>
                  <p className="text-gray-600">Sends alerts once change is processed.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Reduces Compliance Risk</h4>
                  <p className="text-gray-600">Keeps employee data up to date.</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="block text-blue-600 hover:text-blue-800">Help Documentation</a>
                <a href="#" className="block text-blue-600 hover:text-blue-800">Submit Feedback</a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-700 leading-relaxed">
                Enabling users to update their contact details, such as phone numbers or personal email addresses, with proper validation for efficient processing.
              </p>
            </div>

            {/* Experience Preview */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-lg aspect-video flex items-center justify-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            {/* Similar Plugins */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Similar Plugins</h3>
              <p className="text-gray-700 mb-6">
                Browse plugins related to Employee Information Change, or{' '}
                <Link to="/" className="text-blue-600 hover:text-blue-800">
                  view all plugins in our library
                </Link>
                .
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Similar Plugin Cards */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Leave Request Management</h4>
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

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Employee Recognition</h4>
                  <p className="text-sm text-gray-600 mb-2">HR • Finance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    A flow that helps managers recognize employee achievements and contributions.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png" alt="Workday" className="w-4 h-4" />
                    <img src="/lovable-uploads/584c3f69-7e72-42be-9ae9-20ef2238179b.png" alt="BambooHR" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Training Management</h4>
                  <p className="text-sm text-gray-600 mb-2">HR • Finance</p>
                  <p className="text-sm text-gray-700 mb-3">
                    A flow that helps hiring managers or HR create and submit job descriptions for new or replacement roles.
                  </p>
                  <div className="flex gap-2">
                    <img src="/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png" alt="Workday" className="w-4 h-4" />
                    <img src="/lovable-uploads/3c6b5624-f5a4-48c0-ace7-362516efbfda.png" alt="SAP" className="w-4 h-4" />
                  </div>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Health Coverage Viewing</h4>
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
      </div>
    </div>
  );
};

export default EmployeeInformationChange;
