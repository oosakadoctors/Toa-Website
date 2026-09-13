"use client";

import { useState, ReactNode } from "react";

interface ExpandableSectionProps {
  children: ReactNode;
}

export default function ExpandableSection({ children }: ExpandableSectionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          expanded ? "max-h-[2000px]" : "max-h-44"
        }`}
      >
        {children}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 text-sm font-medium text-blue-600 hover:underline"
      >
        {expanded ? "閉じる ▲" : "続きを読む ▼"}
      </button>
    </div>
  );
}