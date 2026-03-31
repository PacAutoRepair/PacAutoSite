import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? 'text-gold fill-gold' : 'text-sand'}
          fill={i < rating ? '#D4A017' : 'none'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-cream py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-3">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4"
            >
              <StarRating rating={testimonial.rating} />
              <p className="text-slate italic leading-relaxed flex-1">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-navy">{testimonial.name}</p>
                <p className="text-sm text-slate">{testimonial.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
