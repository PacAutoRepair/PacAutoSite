import { shopInfo } from '../data/shopInfo';
import PhotoPlaceholder from './PhotoPlaceholder';

export default function AboutSection() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-6">
          <span className="font-hand text-red text-2xl">Our Story</span>
        </div>
        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy text-center mb-16">
          More Than a Shop —<br className="hidden sm:block" /> We're Your Neighbors
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-14">
          {/* Left: Photos */}
          <div className="w-full md:w-1/2 space-y-4">
            <PhotoPlaceholder
              label="Shawn & Luis — the owners"
              className="shadow-lg border-4 border-white"
              aspectRatio="aspect-[4/3]"
            />
            <div className="grid grid-cols-2 gap-4">
              <PhotoPlaceholder
                label="Shop exterior"
                className="shadow-md border-2 border-white"
                aspectRatio="aspect-square"
              />
              <PhotoPlaceholder
                label="Team at work"
                className="shadow-md border-2 border-white"
                aspectRatio="aspect-square"
              />
            </div>
          </div>

          {/* Right: About copy */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <p className="text-slate text-lg leading-relaxed">
              When {shopInfo.owners.join(' and ')} opened the doors to Pacific Auto
              Repair back in {shopInfo.established}, the goal was simple: fix cars the
              right way, charge a fair price, and treat everyone who walks in like a
              friend — not a ticket number.
            </p>
            <p className="text-slate text-lg leading-relaxed">
              Twenty years later, that hasn't changed. We've watched kids who rode in
              the backseat grow up and bring their own cars in. That's what being a
              neighborhood shop is about.
            </p>
            <p className="text-slate text-lg leading-relaxed">
              We service <strong className="text-navy">all foreign and domestic vehicles</strong>,
              with specialized expertise in General Motors trucks and fleet vehicles.
              Whether it's a quick oil change or a complete engine overhaul — we'll
              always explain what your vehicle needs and why.
            </p>

            {/* Warranty callout */}
            <div className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 shadow-md border border-sand/50 mt-2">
              <span className="text-3xl">🛡️</span>
              <div>
                <p className="text-navy font-bold text-lg">We Stand Behind Our Work</p>
                <p className="text-slate text-sm">2-Year / 24,000-Mile Warranty on Most Repairs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
