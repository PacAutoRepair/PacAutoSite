import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-gold fill-gold' : 'text-sand'}
          fill={i < rating ? '#C8992E' : 'none'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-sand/40 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-hand text-red text-2xl">Real Reviews</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy mt-2 mb-4">
            What Our Neighbors Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5 border border-sand/40 hover:shadow-md transition-shadow"
            >
              <Quote size={28} className="text-sand" />
              <p className="text-slate italic leading-relaxed flex-1 text-lg">
                {testimonial.text}
              </p>
              <div className="border-t border-sand/40 pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-slate">{testimonial.source}</p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
