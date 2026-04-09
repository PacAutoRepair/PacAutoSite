import { Shield, Users, Star, Truck } from 'lucide-react';

const trustPoints = [
  {
    icon: <Shield size={32} className="text-gold" />,
    title: '2-Year Warranty',
    description: '24,000-mile warranty on most repairs. We stand behind every job.',
  },
  {
    icon: <Users size={32} className="text-gold" />,
    title: 'Family Owned',
    description: 'Shawn & Luis have been part of the San Pedro community for over 20 years.',
  },
  {
    icon: <Star size={32} className="text-gold" />,
    title: 'GM Specialists',
    description: 'Factory-trained expertise plus all foreign and domestic makes and models.',
  },
  {
    icon: <Truck size={32} className="text-gold" />,
    title: 'Fleet Welcome',
    description: 'Scheduled maintenance programs for businesses with multiple vehicles.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-navy py-24 overflow-hidden">
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-hand text-gold text-2xl">Why Pacific Auto?</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mt-2 mb-4">
            Folks Trust Us for a Reason
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="font-playfair font-bold text-white text-xl">{point.title}</h3>
              <p className="text-cream/80 text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
