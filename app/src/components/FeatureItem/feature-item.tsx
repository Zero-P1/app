import { LucideIcon } from 'lucide-react';

interface FeatureItemProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureItem({ Icon, title, description }: FeatureItemProps) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-2 items-start">
      <Icon className="text-primary size-10" />
      <div className="flex flex-col gap-2 lg:gap-4">
        <p className="col-start-1 mt-2 md:col-start-auto md:row-1 text-primary-500 text-lg font-semibold">
          {title}
        </p>
        <p className="text-md md:text-lg text-neutral-500">
          {description}
        </p>
      </div>
    </div>
  );
};
