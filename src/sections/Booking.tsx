import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { CheckCircle, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import type { BookingFormData } from '../types';

const errandTypes = [
  'Personal Assistant',
  'Everyday Errands',
  'Special Request',
  'Senior Citizen Support',
  'Business Support',
  'Event Assistance',
  'Concierge Services',
];

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '2348136195529';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormData>();

  const onSubmit = async (data: BookingFormData) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    console.log('Booking data:', data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        "Hi! I'd like to book an errand with EMS."
      )}`,
      '_blank'
    );
  };

  const inputClass = (hasError: boolean) =>
    `w-full bg-white border ${
      hasError ? 'border-red-400 focus:ring-red-300' : 'border-gray-200 focus:ring-accent/30'
    } rounded-xl px-4 py-3 text-text-main placeholder-muted text-sm focus:outline-none focus:ring-2 focus:border-accent transition-all`;

  return (
    <section id="booking" className="py-24 lg:py-32 bg-white">
      <div className="section-container">
        <SectionHeading
          eyebrow="Book a Service"
          title="Book an Errand in Minutes"
          subtitle="Tell us what you need and we'll take it from there."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-16 bg-surface rounded-2xl border border-accent/20"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-2">Request Received!</h3>
                <p className="text-muted text-sm max-w-sm">
                  Thank you! We'll review your request and get back to you within 2 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('fullName', { required: 'Name is required' })}
                      placeholder="Adaeze Okonkwo"
                      className={inputClass(!!errors.fullName)}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1.5">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email' },
                      })}
                      type="email"
                      placeholder="you@example.com"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-sm font-medium">
                        +234
                      </span>
                      <input
                        {...register('phone', {
                          required: 'Phone is required',
                          minLength: { value: 10, message: 'Enter a valid number' },
                        })}
                        placeholder="800 000 0000"
                        className={`${inputClass(!!errors.phone)} !pl-14`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1.5">
                      Type of Errand <span className="text-red-400">*</span>
                    </label>
                    <select
                      {...register('errandType', { required: 'Please select a type' })}
                      className={inputClass(!!errors.errandType)}
                    >
                      <option value="">Select service type…</option>
                      {errandTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.errandType && (
                      <p className="text-red-500 text-xs mt-1">{errors.errandType.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1.5">
                      Your Location <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('location', { required: 'Location is required' })}
                      placeholder="e.g. Victoria Island, Lagos"
                      className={inputClass(!!errors.location)}
                    />
                    {errors.location && (
                      <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text-main mb-1.5">
                      Date Needed
                    </label>
                    <input
                      {...register('date')}
                      type="date"
                      className={inputClass(false)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-text-main mb-1.5">
                    Describe Your Request <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    {...register('description', {
                      required: 'Please describe your errand',
                      minLength: { value: 20, message: 'Please provide more detail (min 20 characters)' },
                    })}
                    rows={4}
                    placeholder="Tell us exactly what you need…"
                    className={`${inputClass(!!errors.description)} resize-none`}
                  />
                  {errors.description && (
                    <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center !py-4 !text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting…
                    </span>
                  ) : (
                    'Submit Request'
                  )}
                </button>

                <div className="text-center">
                  <span className="text-muted text-sm">Prefer WhatsApp?</span>
                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="ml-2 inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20b859] text-white font-semibold text-sm px-4 py-2 rounded-full transition-colors"
                  >
                    <MessageCircle size={14} />
                    Chat on WhatsApp
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Contact sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-primary rounded-2xl p-7 text-white grain-overlay relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-8 translate-x-8" />
              <h3 className="font-serif text-2xl mb-2 relative z-10">
                Reach Us Directly
              </h3>
              <p className="text-white/60 text-sm mb-7 relative z-10">
                Prefer a more personal touch? We're available via all channels.
              </p>
              <div className="space-y-4 relative z-10">
                {[
                  { icon: <Mail size={16} />, label: 'errandmanagementservices@gmail.com', href: 'mailto:errandmanagementservices@gmail.com' },
                  { icon: <Phone size={16} />, label: '+234 813 619 5529', href: 'tel:+2348136195529' },
                  { icon: <MapPin size={16} />, label: 'Port Harcourt, Lagos, Abuja, Nigeria', href: '#' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm"
                  >
                    <span className="text-accent">{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-gray-100">
              <h4 className="font-serif text-lg text-primary mb-3">Response Times</h4>
              {[
                ['WhatsApp', 'Under 30 minutes'],
                ['Email', 'Within 2 hours'],
                ['Phone', 'Immediate'],
              ].map(([ch, time]) => (
                <div key={ch} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-text-main/70">{ch}</span>
                  <span className="text-sm font-semibold text-accent">{time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
