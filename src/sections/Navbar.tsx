import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Book', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-xl shadow-primary/20'
            : 'bg-transparent'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('#home')}
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center font-serif font-bold text-white text-sm shadow-lg group-hover:bg-accent-dark transition-colors">
                EMS
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-white font-bold text-sm leading-tight">
                  Errand Management
                </div>
                <div className="text-white/50 text-xs">Services</div>
              </div>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active === link.href.replace('#', '')
                      ? 'text-accent'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="navIndicator"
                      className="h-0.5 bg-accent mt-0.5 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick('#booking')}
                className="hidden lg:flex btn-primary !py-2.5 !text-sm"
              >
                Book Now
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-white hover:text-accent transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-primary shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/10">
                <span className="text-white font-bold font-serif">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex-1 p-5 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                      active === link.href.replace('#', '')
                        ? 'bg-accent/20 text-accent'
                        : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-5 border-t border-white/10">
                <button
                  onClick={() => handleNavClick('#booking')}
                  className="btn-primary w-full justify-center"
                >
                  Book an Errand
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
