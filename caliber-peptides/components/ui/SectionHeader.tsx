interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={alignClass}>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-espresso mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-lg text-espresso/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
