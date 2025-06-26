import React from 'react';
import { Link } from 'react-router-dom';

interface Badge {
  text: string;
  color?: string;
}

interface Integration {
  src: string;
  alt: string;
  type?: 'image' | 'placeholder';
  backgroundColor?: string;
}

interface UseCaseCardProps {
  title: string;
  badges: Badge[];
  description: string;
  integrations: Integration[];
}

// Logo mapping based on integration names
const getLogoForIntegration = (name: string): string => {
  const logoMap: { [key: string]: string } = {
    'ServiceNow': '/lovable-uploads/f2625fbc-396c-4794-8436-9376a81bd964.png',
    'BMC Remedy': '/lovable-uploads/590f0671-6bcb-48a7-9794-d05d02ee566c.png',
    'Microsoft Teams': '/lovable-uploads/6b8589bb-d8c9-41bd-b025-511c87936068.png',
    'ServiceNow Flow Designer': '/lovable-uploads/f2625fbc-396c-4794-8436-9376a81bd964.png',
    'Jira': '/lovable-uploads/7ce6c2aa-6ed2-455e-889c-ec14fcc045f7.png',
    'Microsoft Power Automate': '/lovable-uploads/6cfd2435-d537-487a-adc2-e79e99f4c721.png',
    'Okta': '/lovable-uploads/ddba73c4-73cf-4482-8fd8-7c9f156958d9.png',
    'Azure AD': '/lovable-uploads/086560d8-4621-4c4f-8209-6b317aec69d3.png',
    'Ping Identity': '/lovable-uploads/98eaf598-5126-400c-a2eb-75a2566595c2.png',
    'Duo Security': '/lovable-uploads/f7e740be-28ce-4bb8-9f9e-6393d0f2f110.png',
    'Freshservice': '/lovable-uploads/b90419d5-3a78-4d6d-8ee8-2a8ff40134bd.png',
    'TeamViewer': '/lovable-uploads/ad3a520a-652b-4599-9413-6e0c80b13571.png',
    'AnyDesk': '/lovable-uploads/86980762-d3b6-4389-b225-4bf861674321.png',
    'Slack': '/lovable-uploads/656ff27c-1b17-4471-9f95-5645ce501942.png',
    'HP Web Jetadmin': '/lovable-uploads/11b21718-07cd-4b7f-b466-fbffaedd307f.png',
    'Xerox FreeFlow': '/lovable-uploads/eaa34795-b4c8-4dbd-bc09-e5ba0641128e.png',
    'Konica Minolta': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'VMware Workspace ONE': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'Microsoft Intune': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'MobileIron': '/lovable-uploads/8520945c-2777-4a26-b0e2-ee7f61883b62.png',
    'Cisco AnyConnect': '/lovable-uploads/f6aa47cc-9318-4185-99d4-763cf2e7f042.png',
    'Palo Alto GlobalProtect': '/lovable-uploads/6b8add9b-da1b-4258-a3f8-7c8adda52ba4.png',
    'OpenVPN': '/lovable-uploads/dacad972-5982-4026-88a6-7880d6fdabb4.png',
    'Workday': '/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png',
    'SAP': '/lovable-uploads/3c6b5624-f5a4-48c0-ace7-362516efbfda.png',
    'BambooHR': '/lovable-uploads/584c3f69-7e72-42be-9ae9-20ef2238179b.png',
    'Micrsosoft Teams': '/lovable-uploads/6b8589bb-d8c9-41bd-b025-511c87936068.png',
    'Greenhouse': '/lovable-uploads/420b9ed8-5284-4882-a60b-de970dcbccdb.png',
    'SmartRecruiters': '/lovable-uploads/ee3e6561-600b-476e-8b74-69c70a271f62.png',
    'Nectar': '/lovable-uploads/bef26787-8110-41e7-91c1-54be0753ae79.png',
    'ADP': '/lovable-uploads/48e560b0-0e51-4cf3-b6ae-95f90492b0d2.png',
    'Salesforce': '/lovable-uploads/054322dc-54d2-47d6-965e-3af012536ee8.png',
    'Hubspot': '/lovable-uploads/5d26d8a8-f667-44b9-a383-5f06e995db8b.png',
    'Gainsight': '/lovable-uploads/7ce6c2aa-6ed2-455e-889c-ec14fcc045f7.png',
    'Zoom': '/lovable-uploads/e6ea1b2f-98b7-47c6-91e4-2bfb18f4a2fc.png',
    'Notion': '/lovable-uploads/c607b7f1-852e-425f-9f99-3da617ea3825.png',
    'Confluence': '/lovable-uploads/4fa7b4e9-ad5a-495e-b43a-629940048187.png',
    'LinkedIn Sales': '/lovable-uploads/420f4eb2-22bd-4036-973b-69427cd80338.png',
    'Navigator': '/lovable-uploads/992b38b4-1de0-4e5a-9c8f-02fc6eded02e.png',
    'Clearbit': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'Zendesk': '/lovable-uploads/b6b9bd37-6f08-4c56-bcd4-56205983012b.png',
    'Oracle': '/lovable-uploads/4b9db095-9373-4d35-888b-50dbea7b36f4.png',
    'Netsuite': '/lovable-uploads/876922f4-97c4-40c8-bdbc-3433b73f7c6f.png',
    'Workday Learning': '/lovable-uploads/f566b1fa-5077-4a28-96be-f9cc8dc68407.png',
    'SAP Litmos': '/lovable-uploads/d7768d99-ecb8-4a52-8fde-8b119a315d6a.png',
    'Google Docs': '/lovable-uploads/490db752-4fa4-4593-9bbf-5ac001c5550d.png',
    'Microsoft Word': '/lovable-uploads/9ed3acf3-aa1d-4bb4-b53d-b67744699ee5.png',
    'Swift': '/lovable-uploads/f01557f7-d315-4a75-9046-c9bbf395c5bc.png',
  };
  
  return logoMap[name] || '/placeholder.svg';
};

export const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, badges, description, integrations }) => {
  const cardContent = (
    <article className="w-full rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <header className="items-stretch flex w-full gap-3 font-semibold">
        <div className="items-stretch flex min-w-60 w-full flex-col flex-1 shrink basis-[0%] gap-1">
          <h3 className="text-zinc-950 text-ellipsis text-base">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-xs text-black whitespace-nowrap leading-none mt-1">
            <div className="self-stretch flex items-center gap-1 my-auto">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold leading-[16px]"
                  style={{ color: badge.color }}
                >
                  {badge.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>
      
      <p className="text-zinc-500 text-ellipsis text-sm font-normal leading-[20px] mt-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {integrations.map((integration, index) => (
          <div key={index} className="w-8 h-8">
            <img
              src={getLogoForIntegration(integration.alt)}
              alt={integration.alt}
              className="aspect-[1] object-contain w-8 h-8 shrink-0"
              title={integration.alt}
            />
          </div>
        ))}
      </div>
    </article>
  );

  // Check for specific use case titles and route accordingly
  if (title === "Ticket Viewing & Tracking") {
    return (
      <Link to="/ticket-viewing-tracking" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Ticket Interaction & Updates") {
    return (
      <Link to="/ticket-interaction-updates" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Ticket Escalation & Closure") {
    return (
      <Link to="/ticket-escalation-closure" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Approval Management") {
    return (
      <Link to="/approval-management" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Login Troubleshooting") {
    return (
      <Link to="/login-troubleshooting" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Password Reset") {
    return (
      <Link to="/password-reset" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Multi-Factor Authentication") {
    return (
      <Link to="/multi-factor-authentication" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Software Access & Availability") {
    return (
      <Link to="/software-access-availability" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Device Replacement & Repair") {
    return (
      <Link to="/device-replacement-repair" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Hardware Troubleshooting") {
    return (
      <Link to="/hardware-troubleshooting" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Printer & Scanner Support") {
    return (
      <Link to="/printer-scanner-support" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Mobile Device Management") {
    return (
      <Link to="/mobile-device-management" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "VPN Support") {
    return (
      <Link to="/vpn-support" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Leave Request Management") {
    return (
      <Link to="/leave-request-management" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Training Management") {
    return (
      <Link to="/training-management" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Job Referral") {
    return (
      <Link to="/job-referral" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Employee Recognition") {
    return (
      <Link to="/employee-recognition" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Health Coverage Viewing") {
    return (
      <Link to="/health-coverage-viewing" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Summarize Customer Status") {
    return (
      <Link to="/summarize-customer-status" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Employee Information Change") {
    return (
      <Link to="/employee-information-change" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Recap Customer Meetings") {
    return (
      <Link to="/recap-customer-meetings" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Outline Workshop Agenda for Sales") {
    return (
      <Link to="/outline-workshop-agenda" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Target Account Research") {
    return (
      <Link to="/target-account-research" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Password Management") {
    return (
      <Link to="/password-reset" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Software Access & Licensing") {
    return (
      <Link to="/software-access-availability" className="block">
        {cardContent}
      </Link>
    );
  }

  if (title === "Identify High Churn Risk Customer") {
    return (
      <Link to="/identify-high-churn-risk-customer" className="block">
        {cardContent}
      </Link>
    );
  }

  // For all other use cases, create a slug from the title and link to the dynamic route
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  return (
    <Link to={`/use-case/${slug}`} className="block">
      {cardContent}
    </Link>
  );
};
