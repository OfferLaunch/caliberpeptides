interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({
  title,
  subtitle,
  eyebrow,
  align = 'center',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={alignClass}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-widest text-sage mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-normal text-espresso mb-2">
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
