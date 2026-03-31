import { Shield, Users, Star, Truck } from 'lucide-react';

const trustPoints = [
  {
    icon: <Shield size={36} className="text-gold" />,
    title: '2-Year Warranty',
    description: '24,000-mile warranty on most repairs. We stand behind our work.',
  },
  {
    icon: <Users size={36} className="text-gold" />,
    title: 'Family Owned Since 2004',
    description: 'Shawn and Luis have been serving the San Pedro community for 20+ years.',
  },
  {
    icon: <Star size={36} className="text-gold" />,
    title: 'GM Specialists',
    description: 'Factory-trained expertise in General Motors vehicles, plus all foreign and domestic makes.',
  },
  {
    icon: <Truck size={36} className="text-gold" />,
    title: 'Fleet Accounts Welcome',
    description: 'Scheduled maintenance programs for businesses with multiple vehicles.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-white mb-3">
            Why Pacific Auto?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex flex-col items-center text-center gap-4">
              {point.icon}
              <h3 className="font-playfair font-bold text-white text-xl">{point.title}</h3>
              <p className="text-cream text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
