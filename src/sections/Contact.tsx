import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const WHATSAPP_NUMBER = '2348136195529';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get in Touch"
          title="We're Always Available"
          subtitle="Choose the channel that works best for you. We typically respond within minutes."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {[
            {
              icon: <Mail size={22} />,
              label: 'Email Us',
              value: 'errandmanagementservices@gmail.com',
              href: 'mailto:errandmanagementservices@gmail.com',
              sub: 'Response in 2 hours',
            },
            {
              icon: <Phone size={22} />,
              label: 'Call Us',
              value: '+234 813 619 5529',
              href: 'tel:+2348136195529',
              sub: 'Mon–Sat, 7am–9pm',
            },
            {
              icon: <MessageCircle size={22} />,
              label: 'WhatsApp',
              value: 'Chat Now',
              href: `https://wa.me/${WHATSAPP_NUMBER}`,
              sub: 'Fastest response',
              isWhatsapp: true,
            },
            {
              icon: <MapPin size={22} />,
              label: 'We Serve',
              value: 'Port Harcourt, Lagos, Abuja',
              href: '#',
              sub: 'More cities soon',
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center block"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ${
                  item.isWhatsapp
                    ? 'bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white'
                    : 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
                }`}
              >
                {item.icon}
              </div>
              <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="font-bold text-primary text-sm mb-1">{item.value}</div>
              <div className="text-xs text-muted">{item.sub}</div>
            </motion.a>
          ))}
        </div>

        {/* WhatsApp CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 max-w-2xl mx-auto bg-[#25D366] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-white text-lg">Chat with us on WhatsApp</h3>
            <p className="text-white/80 text-sm">
              The fastest way to book and get answers
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to book an errand.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-[#25D366] font-bold px-6 py-3 rounded-full hover:bg-white/90 transition-colors flex items-center gap-2"
          >
            <MessageCircle size={16} />
            Open WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
