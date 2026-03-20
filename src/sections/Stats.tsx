import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';

const stats = [
  { value: 500, suffix: '+', label: 'Tasks Completed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Service Types' },
  { value: 24, suffix: 'hr', label: 'Avg. Turnaround' },
];

export default function Stats() {
  return (
    <section className="py-20 stats-bg relative overflow-hidden grain-overlay">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center py-4"
            >
              <div className="text-5xl lg:text-6xl font-serif text-white mb-2 leading-none">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/50 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
