import React from 'react';

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

export const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  badges,
  description,
  integrations,
}) => {
  return (
    <article className="border border-[color:var(--base-border,#E4E4E7)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] min-w-60 grow shrink w-[330px] gap-4 bg-white px-[20px] py-[24px] rounded-lg border-solid hover:shadow-md transition-shadow">
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
      
      <div className="flex w-full gap-2 mt-4">
        {integrations.map((integration, index) => (
          <div key={index} className="w-8">
            {integration.type === 'placeholder' ? (
              <div 
                className="flex w-8 shrink-0 h-8 rounded-[5px]"
                style={{ backgroundColor: integration.backgroundColor }}
                title={integration.alt}
              />
            ) : (
              <img
                src={integration.src}
                alt={integration.alt}
                className="aspect-[1] object-contain w-8 shrink-0"
              />
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
