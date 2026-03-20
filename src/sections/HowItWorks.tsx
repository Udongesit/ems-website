import { motion } from 'framer-motion';
import { ClipboardList, Users, CheckCircle } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const steps = [
  {
    number: '01',
    icon: <ClipboardList size={28} />,
    title: 'Tell Us What You Need',
    description:
      'Fill out our quick booking form or send us a message on WhatsApp. Describe your errand, your location, and when you need it done.',
  },
  {
    number: '02',
    icon: <Users size={28} />,
    title: 'We Assign an Expert',
    description:
      'We match your task to the right professional based on your location and the nature of the errand. No generalists — the right person, every time.',
  },
  {
    number: '03',
    icon: <CheckCircle size={28} />,
    title: 'Sit Back & Relax',
    description:
      'Your errand is handled with care and professionalism. We keep you updated throughout and confirm completion when done.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="section-container">
        <SectionHeading
          eyebrow="The Process"
          title="Getting Started Is Simple"
          subtitle="Three easy steps stand between you and a task-free afternoon."
        />

        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="text-center relative"
              >
                {/* Step circle */}
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent shadow-xl shadow-primary/20 mx-auto">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-primary mb-3">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <button
            onClick={() =>
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="btn-primary !px-10 !py-4 !text-base"
          >
            Book Your First Errand
          </button>
        </motion.div>
      </div>
    </section>
  );
}
