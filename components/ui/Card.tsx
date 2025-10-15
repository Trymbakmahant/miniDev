import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${className}`}
    >
      {children}
    </div>
  );
};

interface AppListItemProps {
  rank: number;
  name: string;
  description: string;
  earnings: string;
  votes?: number;
  className?: string;
}

export const AppListItem: React.FC<AppListItemProps> = ({
  rank,
  name,
  description,
  earnings,
  votes,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors ${className}`}
    >
      <div className="flex-shrink-0 w-8 text-center font-bold text-gray-500">
        #{rank}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{description}</p>
      </div>
      <div className="flex-shrink-0 text-right">
        <div className="text-lg font-bold text-orange-500">{earnings}</div>
        {votes && <div className="text-sm text-gray-500">{votes} votes</div>}
      </div>
    </div>
  );
};
