import { motion } from 'framer-motion';
import {
  UserCheck,
  ShoppingBag,
  Sparkles,
  Heart,
  Briefcase,
  CalendarCheck,
  Crown,
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck size={24} />,
  ShoppingBag: <ShoppingBag size={24} />,
  Sparkles: <Sparkles size={24} />,
  Heart: <Heart size={24} />,
  Briefcase: <Briefcase size={24} />,
  CalendarCheck: <CalendarCheck size={24} />,
  Crown: <Crown size={24} />,
};

export default function Services() {
  const handleRequest = (title: string) => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    // Pre-fill type via URL hash
    window.history.pushState({}, '', `#booking?type=${encodeURIComponent(title)}`);
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="What We Do"
          title="Everything You Need, Handled with Care"
          subtitle="From everyday errands to premium concierge — we've got every task covered so you don't have to."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="service-card group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {iconMap[service.icon]}
              </div>

              <h3 className="text-xl font-serif text-primary mb-2">{service.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Feature list */}
              <ul className="space-y-1.5 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-text-main/60">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleRequest(service.title)}
                className="btn-ghost !text-sm !px-5 !py-2"
              >
                Request Service
              </button>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: services.length * 0.08 }}
            className="bg-primary rounded-2xl p-6 flex flex-col justify-between grain-overlay relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-serif text-white mb-3">
                Don't see what you need?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                We handle custom and unusual requests too. Tell us what you need and
                we'll figure it out together.
              </p>
            </div>
            <button
              onClick={() =>
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="relative z-10 btn-primary self-start"
            >
              Chat With Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
