
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, RefreshCw, Bell, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const EmployeeInformationChange = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Guided Update Process",
      description: "Walks users through information changes."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-green-600" />,
      title: "Auto-Sync to Payroll",
      description: "Ensures records align for tax/forms."
    },
    {
      icon: <Bell className="h-8 w-8 text-orange-600" />,
      title: "Confirmation Notifications",
      description: "Sends alerts once change is processed."
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Reduces Compliance Risk",
      description: "Keeps employee data up to date."
    }
  ];

  const integrations = [
    { name: 'Workday', logo: '/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png' },
    { name: 'SAP', logo: '/lovable-uploads/3c6b5624-f5a4-48c0-ace7-362516efbfda.png' },
    { name: 'BambooHR', logo: '/lovable-uploads/584c3f69-7e72-42be-9ae9-20ef2238179b.png' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Use Cases
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              HR
            </span>
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              Guide
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Employee Information Change
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Agentic AI enables employees to easily update their contact details, such as phone numbers or personal email addresses, through a guided, error-proof process. Changes are automatically synced across HR systems to maintain data accuracy, reduce administrative overhead, and ensure reliable communication channels.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {benefit.icon}
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Integrations</h2>
          <Card>
            <CardHeader>
              <CardTitle>Compatible Systems</CardTitle>
              <CardDescription>
                Seamlessly integrates with your existing HR platforms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-8">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img 
                      src={integration.logo} 
                      alt={integration.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {integration.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Ready to streamline employee information updates?
              </h3>
              <p className="text-gray-600 mb-4">
                Implement guided information change processes that keep your HR systems synchronized and compliant.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EmployeeInformationChange;
