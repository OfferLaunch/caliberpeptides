'use client';

import { FlaskConical, Shield, FileCheck, Check } from 'lucide-react';

export default function ProductTrustBadges() {
  const badges = [
    { icon: FlaskConical, label: '≥99% Purity' },
    { icon: Shield, label: 'Third-Party Tested' },
    { icon: FileCheck, label: 'COA Included' },
    { icon: Check, label: 'Research Grade' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
      {badges.map((badge, idx) => {
        const Icon = badge.icon;
        return (
          <div
            key={idx}
            className="flex items-center gap-2 py-3 px-3 bg-parchment/80 rounded-xl border border-glass/50 hover:border-glass/80 transition-colors"
          >
            <Icon size={20} className="text-sage flex-shrink-0" />
            <span className="font-body text-sm font-medium text-espresso">
              {badge.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
