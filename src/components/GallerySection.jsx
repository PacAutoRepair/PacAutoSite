import PhotoPlaceholder from './PhotoPlaceholder';

const galleryItems = [
  { label: 'Inside the shop', aspectRatio: 'aspect-[4/3]' },
  { label: 'Under the hood', aspectRatio: 'aspect-square' },
  { label: 'Happy customer pickup', aspectRatio: 'aspect-square' },
  { label: 'The team', aspectRatio: 'aspect-[4/3]' },
  { label: 'Fleet vehicles', aspectRatio: 'aspect-[4/3]' },
  { label: 'San Pedro neighborhood', aspectRatio: 'aspect-square' },
];

export default function GallerySection() {
  return (
    <section className="bg-warmgray py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="font-hand text-red text-2xl">Take a Look Around</span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-navy mt-2 mb-4">
            Our Shop
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <div
              key={i}
              className={`${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}
            >
              <PhotoPlaceholder
                label={item.label}
                className="shadow-md border-2 border-white hover:shadow-lg transition-shadow"
                aspectRatio={i === 0 || i === 3 ? 'aspect-[2/1]' : 'aspect-square'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
