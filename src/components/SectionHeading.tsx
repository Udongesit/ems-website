import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/70' : 'text-muted'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
