'use client';

import { MiracleCategory } from '@/types';
import { getCategoryLabel, getVisualizationColor } from '@/lib/utils';

interface CategoryBadgeProps {
  category: MiracleCategory;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  selected?: boolean;
  onClick?: () => void;
}

const categoryIcons: Record<MiracleCategory, string> = {
  cosmological: '🌌',
  biological: '🧬',
  'earth-sciences': '🌍',
  prophecies: '📜',
  'logical-philosophical': '🧠',
};

export default function CategoryBadge({
  category,
  size = 'md',
  interactive = false,
  selected = false,
  onClick,
}: CategoryBadgeProps) {
  const color = getVisualizationColor(
    category === 'cosmological'
      ? 'cosmos'
      : category === 'biological'
        ? 'microscopic'
        : category === 'earth-sciences'
          ? 'earth'
          : category === 'prophecies'
            ? 'timeline'
            : 'logic'
  );

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs gap-1',
    md: 'px-3.5 py-1.5 text-sm gap-1.5',
    lg: 'px-5 py-2.5 text-base gap-2',
  };

  const Component = interactive ? 'button' : 'span';

  return (
    <Component
      onClick={onClick}
      className={`inline-flex items-center rounded-full font-tajawal font-medium transition-all duration-300 ${sizeClasses[size]} ${
        interactive ? 'cursor-pointer hover:scale-105' : ''
      } ${selected ? 'ring-2 ring-offset-2 ring-offset-vanta' : ''}`}
      style={{
        background: selected ? `${color}25` : `${color}10`,
        borderColor: selected ? color : `${color}30`,
        border: `1px solid ${selected ? color : `${color}30`}`,
        color: color,
        boxShadow: selected ? `0 0 20px ${color}30` : 'none',
      }}
    >
      <span className={size === 'lg' ? 'text-lg' : 'text-base'}>{categoryIcons[category]}</span>
      <span>{getCategoryLabel(category)}</span>
    </Component>
  );
}
