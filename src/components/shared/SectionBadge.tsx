interface SectionBadgeProps {
  text: string;
}

export default function SectionBadge({ text }: SectionBadgeProps) {
  return (
    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium inline-flex items-center gap-2">
      <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-dot" />
      {text}
    </span>
  );
}
