import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { testimonials } from '../data/testimonials';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold fill-gold' : 'text-gray-200 fill-gray-200'}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="section-container">
        <SectionHeading
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="Real people, real time saved. Here's what they have to say."
        />

        {/* Desktop: grid */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote
                size={32}
                className="text-accent/15 absolute top-6 right-6"
                fill="currentColor"
              />
              <StarRating rating={t.rating} />
              <p className="text-text-main/80 text-sm leading-relaxed mt-4 mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm font-serif flex-shrink-0">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-text-main text-sm">{t.name}</div>
                  <div className="text-muted text-xs">
                    {t.role} · {t.city}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="lg:hidden">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-7 border border-gray-100 shadow-sm rounded-2xl"
              >
                <Quote size={32} className="text-accent/15" fill="currentColor" />
                <StarRating rating={testimonials[current].rating} />
                <p className="text-text-main/80 text-sm leading-relaxed mt-4 mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm font-serif">
                    {testimonials[current].initial}
                  </div>
                  <div>
                    <div className="font-semibold text-text-main text-sm">
                      {testimonials[current].name}
                    </div>
                    <div className="text-muted text-xs">
                      {testimonials[current].role} · {testimonials[current].city}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-accent w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
