import { Camera } from 'lucide-react';

export default function PhotoPlaceholder({ label, className = '', aspectRatio = 'aspect-[4/3]' }) {
  return (
    <div
      className={`photo-placeholder rounded-2xl ${aspectRatio} ${className}`}
      role="img"
      aria-label={`Placeholder for: ${label}`}
    >
      <div className="relative z-10 flex flex-col items-center gap-3 text-brown/50">
        <Camera size={36} strokeWidth={1.5} />
        <span className="font-hand text-lg">{label}</span>
      </div>
    </div>
  );
}
