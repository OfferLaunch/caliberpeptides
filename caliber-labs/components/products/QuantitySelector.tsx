'use client';

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  size?: 'sm' | 'default';
}

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  size = 'default',
}: QuantitySelectorProps) {
  const isSm = size === 'sm';
  const iconSize = isSm ? 16 : 20;
  const buttonSize = isSm ? 'w-8 h-8' : 'w-10 h-10';
  const textSize = isSm ? 'text-sm' : 'text-base';

  return (
    <div
      className={`inline-flex items-center border border-glass rounded-full bg-white gap-0 ${
        isSm ? 'px-2 py-1.5' : 'px-3 py-2'
      }`}
    >
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className={`${buttonSize} flex items-center justify-center rounded-full hover:bg-parchment/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-espresso`}
      >
        <Minus size={iconSize} />
      </button>

      <span
        className={`font-mono font-semibold text-espresso ${textSize} ${
          isSm ? 'px-2 min-w-7' : 'px-3 min-w-10'
        } text-center`}
      >
        {value}
      </span>

      <button
        onClick={() => onChange(value + 1)}
        className={`${buttonSize} flex items-center justify-center rounded-full hover:bg-parchment/50 transition-colors text-espresso`}
      >
        <Plus size={iconSize} />
      </button>
    </div>
  );
}
