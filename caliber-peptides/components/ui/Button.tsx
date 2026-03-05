import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-body font-medium rounded-lg transition-all duration-200 active:scale-95';

  const variantStyles = {
    primary: 'bg-[#7d8f78] text-white hover:bg-[#7d8f78]/90 hover:shadow-lg',
    secondary: 'border-2 border-[#7d8f78] text-[#7d8f78] hover:bg-[#7d8f78]/10',
    ghost: 'text-espresso hover:bg-[#d1dbcb]/30',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
