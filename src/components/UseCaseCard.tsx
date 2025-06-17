
import React from 'react';
import { Link } from 'react-router-dom';

interface UseCaseCardProps {
  title: string;
  description: string;
  domain: string;
  integrations: string;
}

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  domain,
  integrations,
}) => {
  const isTicketViewingTracking = title === "Ticket Viewing & Tracking";
  
  // Parse integrations into array and take first 3 for display
  const integrationList = integrations.split(',').map(i => i.trim()).slice(0, 3);
  
  const cardContent = (
    <article className="w-full rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <header className="items-stretch flex w-full gap-3 font-semibold">
        <div className="items-stretch flex min-w-60 w-full flex-col flex-1 shrink basis-[0%] gap-1">
          <h3 className="text-zinc-950 text-ellipsis text-base">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-xs text-black whitespace-nowrap leading-none mt-1">
            <div className="self-stretch flex items-center gap-1 my-auto">
              <span className="text-xs font-semibold leading-[16px] text-blue-600">
                {domain}
              </span>
            </div>
          </div>
        </div>
      </header>
      
      <p className="text-zinc-500 text-ellipsis text-sm font-normal leading-[20px] mt-4">
        {description}
      </p>
      
      <div className="flex w-full gap-2 mt-4">
        {integrationList.map((integration, index) => (
          <div key={index} className="w-8">
            <div 
              className="flex w-8 shrink-0 h-8 rounded-[5px] bg-gray-100 items-center justify-center text-xs font-medium text-gray-600"
              title={integration}
            >
              {integration.charAt(0).toUpperCase()}
            </div>
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
