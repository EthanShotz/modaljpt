interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

export default function ContactInfoCard({
  icon,
  title,
  children,
}: ContactInfoCardProps) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-heading font-bold text-lg">{title}</h3>
        <div className="mt-1 text-gray">{children}</div>
      </div>
    </div>
  );
}
