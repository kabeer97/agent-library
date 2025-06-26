
import React from 'react';
import { Header } from '@/components/Header';
import { Link } from 'react-router-dom';
import { HeroBanner } from '@/components/usecase/HeroBanner';
import { InformationSidebar } from '@/components/usecase/InformationSidebar';
import { KeyBenefits } from '@/components/usecase/KeyBenefits';
import { SupportLinks } from '@/components/usecase/SupportLinks';
import { SimilarAgents } from '@/components/usecase/SimilarAgents';

const IdentifyHighChurnRiskCustomer = () => {
  const connectors = [
    {
      src: "/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png",
      alt: "Salesforce"
    },
    {
      src: "/lovable-uploads/7ce6c2aa-6ed2-455e-889c-ec14fcc045f7.png",
      alt: "Gainsight"
    },
    {
      src: "/lovable-uploads/b6b9bd37-6f08-4c56-bcd4-56205983012b.png",
      alt: "Zendesk"
    }
  ];

  const benefits = [
    {
      title: "Proactive Retention",
      description: "Intervene before churn occurs."
    },
    {
      title: "Data-Driven Insights",
      description: "Flags based on real behavior."
    },
    {
      title: "Prioritized Attention",
      description: "Focuses reps on high-risk accounts."
    },
    {
      title: "Improved Forecasting",
      description: "Enhances renewal accuracy."
    }
  ];

  const similarAgents = [
    {
      title: "Summarize Customer Status",
      solution: "Sales",
      description: "Compiles a holistic view of each customer by aggregating deal stages and interactions.",
      connectors: [
        { src: "/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png", alt: "Salesforce" },
        { src: "/lovable-uploads/5d26d8a8-f667-44b9-a383-5f06e995db8b.png", alt: "Hubspot" }
      ]
    },
    {
      title: "Target Account Research",
      solution: "Sales • Marketing",
      description: "Automates account research by gathering and synthesizing company insights.",
      connectors: [
        { src: "/lovable-uploads/420f4eb2-22bd-4036-973b-69427cd80338.png", alt: "LinkedIn Sales Navigator" },
        { src: "/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png", alt: "Clearbit" }
      ]
    },
    {
      title: "Recap Customer Meetings",
      solution: "Sales",
      description: "Automatically captures and summarizes customer meeting discussions.",
      connectors: [
        { src: "/lovable-uploads/e6ea1b2f-98b7-47c6-91e4-2bfb18f4a2fc.png", alt: "Zoom" },
        { src: "/lovable-uploads/6b8589bb-d8c9-41bd-b025-511c87936068.png", alt: "Microsoft Teams" }
      ]
    },
    {
      title: "Outline Workshop Agenda for Sales",
      solution: "Sales",
      description: "Creates customized workshop agendas based on prospect business needs.",
      connectors: [
        { src: "/lovable-uploads/b66ee5ba-48ca-430d-b1ad-6d03c22683af.png", alt: "Salesforce" },
        { src: "/lovable-uploads/c607b7f1-852e-425f-9f99-3da617ea3825.png", alt: "Notion" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />
      
      <main className="px-[150px] py-12 max-md:px-5">
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">AI Agent Library</Link>
          <span>›</span>
          <span className="text-gray-900">Identify High Churn Risk Customer</span>
        </nav>

        <HeroBanner 
          title="Identify High Churn Risk Customer"
          description="This Agent continuously monitors customer activity, sentiment from support interactions, usage metrics, and renewal signals to identify accounts with high churn risk. It alerts account managers proactively, recommending personalized outreach and retention strategies to address potential issues before they escalate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <InformationSidebar 
              solutions="Sales • Customer Success"
              connectors={connectors}
              type="Built in"
              effectivityScore="8"
              availability="Template"
            />

            <KeyBenefits benefits={benefits} />

            <SupportLinks />
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Introduction</h3>
              <p className="text-gray-700">
                This Agent continuously monitors customer activity, sentiment from support interactions, usage metrics, and renewal signals to identify accounts with high churn risk. It alerts account managers proactively, recommending personalized outreach and retention strategies to address potential issues before they escalate.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Experience Preview</h3>
              <div className="bg-gradient-to-br from-red-100 via-orange-50 to-pink-100 rounded-lg p-12 text-center">
                <p className="text-gray-600">Experience preview will be available soon</p>
              </div>
            </div>

            <SimilarAgents 
              agents={similarAgents}
              currentAgentName="Identify High Churn Risk Customer"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default IdentifyHighChurnRiskCustomer;
