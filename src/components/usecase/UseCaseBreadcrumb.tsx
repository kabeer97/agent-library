
import React from 'react';
import { Link } from 'react-router-dom';

interface UseCaseBreadcrumbProps {
  title: string;
}

export const UseCaseBreadcrumb: React.FC<UseCaseBreadcrumbProps> = ({ title }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
      <Link to="/" className="hover:text-gray-900">Home</Link>
      <span>›</span>
      <Link to="/" className="hover:text-gray-900">Browse</Link>
      <span>›</span>
      <span className="text-gray-900">{title}</span>
    </nav>
  );
};
