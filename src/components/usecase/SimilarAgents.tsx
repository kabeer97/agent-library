
import React from 'react';
import { Link } from 'react-router-dom';

interface SimilarAgent {
  title: string;
  solution: string;
  description: string;
  connectors: Array<{ src: string; alt: string }>;
}

interface SimilarAgentsProps {
  agents: SimilarAgent[];
  currentAgentName: string;
}

export const SimilarAgents: React.FC<SimilarAgentsProps> = ({ agents, currentAgentName }) => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4">Similar Agents</h3>
      <p className="text-gray-700 mb-6">
        Browse agents related to {currentAgentName}, or{' '}
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          view all agents in our library
        </Link>
        .
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agents.map((agent, index) => (
          <div key={index} className="border rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">{agent.title}</h4>
            <p className="text-sm text-gray-600 mb-2">{agent.solution}</p>
            <p className="text-sm text-gray-700 mb-3">
              {agent.description}
            </p>
            <div className="flex gap-2">
              {agent.connectors.map((connector, connectorIndex) => (
                <img 
                  key={connectorIndex}
                  src={connector.src} 
                  alt={connector.alt} 
                  className="w-4 h-4" 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
