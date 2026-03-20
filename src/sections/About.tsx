import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Heart } from 'lucide-react';

const values = [
  {
    icon: <ShieldCheck size={20} />,
    title: 'Reliability',
    desc: 'Every task is handled with the seriousness it deserves. We show up, on time, every time.',
  },
  {
    icon: <Clock size={20} />,
    title: 'Speed',
    desc: 'We understand urgency. Most requests are handled same-day, with real-time updates.',
  },
  {
    icon: <Heart size={20} />,
    title: 'Discretion',
    desc: 'Your tasks, your business. We maintain complete confidentiality on every engagement.',
  },
];

const whyItems = [
  'Thoroughly vetted and trained professionals',
  'Flexible requests — no task too small or complex',
  'Transparent and affordable pricing',
  'Real-time task updates and confirmations',
  'Serving Lagos & Abuja with growing coverage',
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
              Our Mission
            </span>
            <h2 className="text-4xl lg:text-5xl text-primary leading-tight mb-6">
              Helping You Reclaim
              <br />
              <span className="italic">Your Time</span>
            </h2>
            <p className="text-muted text-base leading-relaxed mb-6">
              Errand Management Services was founded on a simple belief: your time is your
              most precious resource. We built EMS to give it back to you.
            </p>
            <p className="text-muted text-base leading-relaxed mb-8">
              We serve busy professionals, growing families, elderly individuals, and forward-
              thinking businesses across Nigeria — handling the tasks that fill your day so you
              can focus on the things that truly matter.
            </p>

            {/* Why choose us */}
            <ul className="space-y-3">
              {whyItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                  className="flex items-center gap-3 text-sm text-text-main/80"
                >
                  <span className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="space-y-5"
          >
            {/* Mission statement card */}
            <div className="bg-primary rounded-2xl p-8 text-white grain-overlay relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/15 rounded-full" />
              <div className="relative z-10">
                <p className="text-xl lg:text-2xl font-serif leading-relaxed text-white/90">
                  "We don't just run errands — we give you back the hours that make life
                  worth living."
                </p>
                <div className="mt-6 pt-5 border-t border-white/15">
                  <div className="font-semibold text-white">The EMS Team</div>
                  <div className="text-white/50 text-sm">Lagos & Abuja, Nigeria</div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-surface rounded-xl p-4 border border-gray-100"
                >
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center text-accent mb-3">
                    {v.icon}
                  </div>
                  <h4 className="font-bold text-primary text-sm mb-1">{v.title}</h4>
                  <p className="text-muted text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
