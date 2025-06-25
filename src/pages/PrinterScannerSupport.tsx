
import React from 'react';
import { ArrowLeft, CheckCircle, Users, Wrench, Settings, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrinterScannerSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Use Cases
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Settings className="w-8 h-8 text-blue-600" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Printer & Scanner Support
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Guides users through common printer/scanner issues, such as connection problems, paper jams, or low ink. AI provides troubleshooting steps, driver updates, and paper jam steps. If unresolved, it facilitates ticket creation.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  IT
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  Type: Installable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">1. Instant Device Discovery</h3>
              <p className="text-gray-600">AI locates and configures nearby devices.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">2. Connectivity Issue Detection</h3>
              <p className="text-gray-600">Quickly troubleshoots network and driver issues.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">3. Usage Instructions Included</h3>
              <p className="text-gray-600">Helps users with common printer tasks.</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">4. Reduced Manual IT Help</h3>
              <p className="text-gray-600">Fewer tickets for routine printing issues.</p>
            </div>
          </div>
        </div>

        {/* Integrations */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Wrench className="w-6 h-6 text-blue-600" />
            Supported Integrations
          </h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img 
                src="/lovable-uploads/11b21718-07cd-4b7f-b466-fbffaedd307f.png" 
                alt="HP Web Jetadmin" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-medium text-gray-900">HP Web Jetadmin</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img 
                src="/lovable-uploads/eaa34795-b4c8-4dbd-bc09-e5ba0641128e.png" 
                alt="Xerox FreeFlow" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-medium text-gray-900">Xerox FreeFlow</span>
            </div>
            <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg">
              <img 
                src="/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png" 
                alt="Konica Minolta" 
                className="w-8 h-8 object-contain"
              />
              <span className="font-medium text-gray-900">Konica Minolta</span>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-purple-600" />
            How It Works
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Issue Detection</h3>
                <p className="text-gray-600">AI automatically detects printer/scanner connectivity and performance issues.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Guided Troubleshooting</h3>
                <p className="text-gray-600">Provides step-by-step instructions for common issues like paper jams, low ink, and driver problems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Automatic Resolution</h3>
                <p className="text-gray-600">Attempts to resolve issues automatically when possible, including driver updates and configuration fixes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Escalation Support</h3>
                <p className="text-gray-600">Creates detailed support tickets when issues require IT intervention.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Agents */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-orange-600" />
            Similar Agents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              to="/hardware-troubleshooting"
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Hardware Troubleshooting</h3>
              <p className="text-gray-600 text-sm">Comprehensive hardware diagnostics and repair guidance</p>
            </Link>
            <Link 
              to="/device-replacement-repair"
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Device Replacement & Repair</h3>
              <p className="text-gray-600 text-sm">Streamlined device replacement and repair workflows</p>
            </Link>
            <Link 
              to="/software-access-availability"
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Software Access & Availability</h3>
              <p className="text-gray-600 text-sm">Software licensing and access management</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterScannerSupport;
