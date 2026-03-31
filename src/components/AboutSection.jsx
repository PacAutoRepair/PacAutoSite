import { shopInfo } from '../data/shopInfo';

export default function AboutSection() {
  return (
    <section id="about" className="bg-sand py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Exterior photo */}
          <div className="w-full md:w-1/2">
            <img
              src="exterior.svg"
              alt="Pacific Auto Repair shop exterior"
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* Right: About copy */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="font-playfair text-4xl font-bold text-navy">
              About Pacific Auto Repair
            </h2>
            <p className="text-slate leading-relaxed">
              Pacific Auto Repair has been a fixture in the San Pedro community since{' '}
              {shopInfo.established}. Founded by {shopInfo.owners.join(' and ')}, we've built our
              reputation one honest repair at a time. We service all foreign and domestic vehicles,
              with specialized expertise in General Motors trucks and fleet vehicles.
            </p>
            <p className="text-slate leading-relaxed">
              When you bring your car to us, you're not a ticket number — you're a neighbor. We'll
              always explain what your vehicle needs and why, and we'll never recommend a repair you
              don't need.
            </p>

            {/* Warranty callout */}
            <div className="bg-cream border border-sand rounded-2xl px-6 py-4 flex items-center gap-3">
              <span className="text-3xl">🛡️</span>
              <p className="text-navy font-semibold">
                2-Year / 24,000-Mile Warranty on Most Repairs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
