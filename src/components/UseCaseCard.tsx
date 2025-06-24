
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
    'Jira': '/lovable-uploads/b41cfdb7-c30a-4a1f-bf7b-1d57a70c2657.png',
    'Microsoft Power Automate': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'Okta': '/lovable-uploads/ddba73c4-73cf-4482-8fd8-7c9f156958d9.png',
    'Azure AD': '/lovable-uploads/086560d8-4621-4c4f-8209-6b317aec69d3.png',
    'Ping Identity': '/lovable-uploads/98eaf598-5126-400c-a2eb-75a2566595c2.png',
    'Duo Security': '/lovable-uploads/f7e740be-28ce-4bb8-9f9e-6393d0f2f110.png',
    'Freshservice': '/lovable-uploads/b90419d5-3a78-4d6d-8ee8-2a8ff40134bd.png',
    'TeamViewer': '/lovable-uploads/21966555-59e5-4639-bed4-e4f5fe616f98.png',
    'AnyDesk': '/lovable-uploads/c13e60b6-c935-46de-8e3c-3534e5c4e7fb.png',
    'Slack': '/lovable-uploads/656ff27c-1b17-4471-9f95-5645ce501942.png',
    'HP Web Jetadmin': '/lovable-uploads/992b38b4-1de0-4e5a-9c8f-02fc6eded02e.png',
    'Xerox FreeFlow': '/lovable-uploads/eaa34795-b4c8-4dbd-bc09-e5ba0641128e.png',
    'Konica Minolta': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'VMware Workspace ONE': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'Microsoft Intune': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'MobileIron': '/lovable-uploads/8520945c-2777-4a26-b0e2-ee7f61883b62.png',
    'Cisco AnyConnect': '/lovable-uploads/eaa34795-b4c8-4dbd-bc09-e5ba0641128e.png',
    'Palo Alto GlobalProtect': '/lovable-uploads/8520945c-2777-4a26-b0e2-ee7f61883b62.png',
    'OpenVPN': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'Workday': '/lovable-uploads/13cc5a7e-6590-4bc7-8ee5-207edce80763.png',
    'SAP': '/lovable-uploads/8520945c-2777-4a26-b0e2-ee7f61883b62.png',
    'BambooHR': '/lovable-uploads/67867f6a-ae90-439e-9fb1-15d7d04ac983.png',
    'Micrsosoft Teams': '/lovable-uploads/6b8589bb-d8c9-41bd-b025-511c87936068.png',
    'Greenhouse': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'SmartRecruiters': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'Nectar': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'ADP': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'Salesforce': '/lovable-uploads/eaa34795-b4c8-4dbd-bc09-e5ba0641128e.png',
    'Hubspot': '/lovable-uploads/8520945c-2777-4a26-b0e2-ee7f61883b62.png',
    'Gainsight': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'Zoom': '/lovable-uploads/a8235edc-e67f-4f5c-9e1e-f5d3f19da6cd.png',
    'Notion': '/lovable-uploads/8520945c-2777-4a26-b0e2-ee7f61883b62.png',
    'Confluence': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'LinkedIn Sales': '/lovable-uploads/f1ab4f02-4399-4f6e-87d7-ecfdf8953ec3.png',
    'Navigator': '/lovable-uploads/992b38b4-1de0-4e5a-9c8f-02fc6eded02e.png',
    'Clearbit': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'Zendesk': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'Oracle': '/lovable-uploads/0b06bfa6-b71b-4538-8dbc-3b4599c0c5d5.png',
    'Netsuite': '/lovable-uploads/69f30c0b-2025-425a-b59d-8af826fda9f9.png',
    'Workday Learning': '/lovable-uploads/d71b2187-e3ea-4e61-8a14-566940d81c40.png',
    'SAP Litmos': '/lovable-uploads/82ff5ef2-e153-4ae7-94d9-7e648d3567f9.png',
    'Google Docs': '/lovable-uploads/1e908db4-74f8-4cec-a355-930eed739339.png',
    'Microsoft Word': '/lovable-uploads/992b38b4-1de0-4e5a-9c8f-02fc6eded02e.png',
    'Swift': '/lovable-uploads/992b38b4-1de0-4e5a-9c8f-02fc6eded02e.png',
  };
  
  return logoMap[name] || '/placeholder.svg';
};

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  badges,
  description,
  integrations,
}) => {
  const isTicketViewingTracking = title === "Ticket Viewing & Tracking";
  
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

  if (isTicketViewingTracking) {
    return (
      <Link to="/ticket-viewing-tracking" className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
