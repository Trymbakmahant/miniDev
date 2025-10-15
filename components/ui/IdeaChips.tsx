import React from "react";
import { Badge } from "./Badge";

interface IdeaChipsProps {
  ideas: string[];
  onIdeaClick?: (idea: string) => void;
  className?: string;
}

export const IdeaChips: React.FC<IdeaChipsProps> = ({
  ideas,
  onIdeaClick,
  className = "",
}) => {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {ideas.map((idea, index) => (
        <button
          key={index}
          onClick={() => onIdeaClick?.(idea)}
          className="transition-transform hover:scale-105"
        >
          <Badge
            variant="info"
            className="cursor-pointer bg-[#C850F2]/20 text-[#C850F2] border border-[#C850F2]/30 hover:bg-[#C850F2]/30 transition-colors rounded-xl px-4 py-2"
          >
            {idea}
          </Badge>
        </button>
      ))}
    </div>
  );
};
