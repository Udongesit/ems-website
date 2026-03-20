import { motion } from 'framer-motion';
import { ArrowDown, Clock, Star, Zap } from 'lucide-react';

const stats = [
  { icon: <Clock size={14} />, text: 'Same-Day Available' },
  { icon: <Star size={14} />, text: '98% Satisfaction' },
  { icon: <Zap size={14} />, text: '500+ Tasks Done' },
];

export default function Hero() {
  const scrollToBooking = () =>
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToServices = () =>
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center hero-bg grain-overlay overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

      <div className="section-container relative z-10 py-32 lg:py-40">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow" />
            Professional Errand & Assistant Services — Nigeria
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.08] mb-6"
          >
            Your Time Is{' '}
            <span className="italic text-gradient">Valuable.</span>
            <br />
            Let Us Handle
            <br />
            the Rest.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg lg:text-xl text-white/65 max-w-xl leading-relaxed mb-10"
          >
            Professional errand running and personal assistant services for
            individuals, families, and businesses across Nigeria.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <button onClick={scrollToBooking} className="btn-primary !px-8 !py-4 !text-base">
              Book an Errand
            </button>
            <button onClick={scrollToServices} className="btn-outline !px-8 !py-4 !text-base">
              Explore Services
            </button>
          </motion.div>

          {/* Floating stat badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 text-white/85 text-sm font-medium px-4 py-2 rounded-full"
              >
                <span className="text-accent">{stat.icon}</span>
                {stat.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() =>
          document.getElementById('trust')?.scrollIntoView({ behavior: 'smooth' })
        }
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
