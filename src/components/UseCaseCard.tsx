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
