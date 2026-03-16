'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
  /** 'row' = single row (scroll on mobile), 'grid' = 3 columns (2 rows for 6 tabs), centered */
  tabStripLayout?: 'row' | 'grid';
}

const AnimatedTabs = ({
  tabs = [],
  defaultTab,
  className,
  tabStripLayout = 'row',
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultTab ?? tabs[0]?.id ?? ''
  );

  if (!tabs?.length) return null;

  const tabStripClass =
    tabStripLayout === 'grid'
      ? 'grid grid-cols-2 sm:grid-cols-3 gap-2 bg-glass/50 backdrop-blur-sm p-1.5 rounded-xl border border-glass min-w-0'
      : 'flex gap-2 flex-nowrap overflow-x-auto overflow-y-hidden py-1 -mx-1 px-1 bg-glass/50 backdrop-blur-sm p-1.5 rounded-xl border border-glass min-w-0';

  return (
    <div
      className={cn(
        'w-full max-w-full min-w-0 flex flex-col gap-y-3',
        className
      )}
    >
      <div className={tabStripClass}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'relative px-4 py-2 text-sm font-medium rounded-lg text-espresso outline-none transition-colors font-body',
              tabStripLayout === 'grid' ? 'w-full' : 'shrink-0'
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 bg-white shadow-sm rounded-lg border border-glass"
                transition={{ type: 'spring', duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="w-full min-w-0 p-4 md:p-6 bg-white/80 border border-glass shadow-sm rounded-xl min-h-[280px] overflow-hidden overflow-x-hidden">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  x: -10,
                  filter: 'blur(8px)',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  opacity: 0,
                  scale: 0.98,
                  x: -10,
                  filter: 'blur(8px)',
                }}
                transition={{
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
                className="w-full h-full"
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
