import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'sage' | 'espresso';
  className?: string;
}

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-[#d1dbcb] text-espresso',
    sage: 'bg-[#7d8f78] text-white',
    espresso: 'bg-espresso text-parchment',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-medium ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
