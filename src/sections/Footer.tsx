import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Book an Errand', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Personal Assistant',
  'Everyday Errands',
  'Senior Support',
  'Business Support',
  'Event Assistance',
  'Concierge Services',
];

const socials = [
  { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
  { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
  { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  { icon: <MessageCircle size={18} />, href: 'https://wa.me/2348000000000', label: 'WhatsApp' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary border-t-2 border-accent/30">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center font-serif font-bold text-white text-sm">
                  EMS
                </div>
                <span className="text-white font-bold">Errand Management Services</span>
              </div>
              <p className="text-white/45 text-sm leading-relaxed max-w-xs">
                Professional errand and personal assistant services for individuals,
                families, and businesses across Nigeria.
              </p>
            </motion.div>
            <div className="flex gap-2 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-accent text-white/60 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-white/50 hover:text-white text-sm transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-white/50 hover:text-white text-sm transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5 text-white/50 text-sm">
              <li>hello@errandmgt.ng</li>
              <li>+234 800 000 0000</li>
              <li>Lagos & Abuja, Nigeria</li>
            </ul>
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200"
            >
              <MessageCircle size={14} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Errand Management Services. All rights reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service'].map((t) => (
              <a key={t} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
