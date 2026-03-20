import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Lock, MapPin, MessageCircle } from 'lucide-react';

const trustItems = [
  { icon: <ShieldCheck size={18} />, label: 'Vetted Professionals' },
  { icon: <Zap size={18} />, label: 'Same-Day Service' },
  { icon: <Lock size={18} />, label: 'Insured & Confidential' },
  { icon: <MapPin size={18} />, label: 'Lagos & Abuja' },
  { icon: <MessageCircle size={18} />, label: 'WhatsApp Booking' },
];

export default function TrustBar() {
  return (
    <section id="trust" className="bg-surface border-y border-gray-100 py-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="flex items-center gap-2.5 text-text-main/80 font-medium text-sm"
            >
              <span className="text-accent">{item.icon}</span>
              {item.label}
              {i < trustItems.length - 1 && (
                <span className="hidden lg:block w-1 h-1 bg-muted/40 rounded-full ml-10" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
