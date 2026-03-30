'use client';

import { useParams } from 'next/navigation';
import { treatments } from '@/data/treatments';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Thermometer, Activity, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function TreatmentPage() {
  const { slug } = useParams();
  const treatment = treatments.find(t => t.slug === slug);

  if (!treatment) return <div>Behandlung nicht gefunden.</div>;

  return (
    <main className="bg-sand-sun min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={treatment.image} 
            alt={treatment.title} 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/40 to-sand-sun"></div>
        </div>
        
        <div className="section-container relative z-10 text-center space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 font-playfair italic text-2xl"
          >
            {treatment.category}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-playfair text-white text-glow"
          >
            {treatment.title}
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="text-xl text-white/90 font-outfit max-w-2xl mx-auto"
          >
            {treatment.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="section-padding py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Description */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-playfair text-forest-deep">Über die Behandlung</h2>
                <p className="text-xl text-forest-deep/70 font-outfit leading-relaxed">
                  {treatment.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                   <h3 className="flex items-center gap-3 text-2xl font-playfair text-sand-gold">
                     <Activity size={24} />
                     Der Ablauf
                   </h3>
                   <ul className="space-y-4">
                     {treatment.process.map((step, i) => (
                       <li key={i} className="flex items-start gap-3 text-forest-deep/60 font-outfit">
                         <span className="w-6 h-6 rounded-full bg-forest-deep/5 flex items-center justify-center text-xs text-forest-deep font-bold mt-1">
                           {i + 1}
                         </span>
                         {step}
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="space-y-6">
                   <h3 className="flex items-center gap-3 text-2xl font-playfair text-sand-gold">
                     <Sparkles size={24} />
                     Ihre Vorteile
                   </h3>
                   <ul className="space-y-4">
                     {treatment.benefits.map((benefit, i) => (
                       <li key={i} className="flex items-start gap-3 text-forest-deep/60 font-outfit">
                         <Check size={18} className="text-sand-gold mt-1 flex-shrink-0" />
                         {benefit}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </div>

            {/* Sidebar / Symptoms */}
            <div className="space-y-8">
               <div className="glass-premium p-10 rounded-[3rem] border-forest-deep/5 shadow-xl bg-white/40">
                  <h3 className="text-2xl font-playfair text-forest-deep mb-6 flex items-center gap-3">
                    <Thermometer size={24} className="text-sand-gold" />
                    Wann hilft es?
                  </h3>
                  <div className="space-y-3">
                     {treatment.symptoms.map((symptom) => (
                       <div key={symptom} className="px-4 py-3 rounded-2xl bg-white/50 border border-forest-deep/5 text-forest-deep/70 font-outfit">
                         {symptom}
                       </div>
                     ))}
                  </div>
               </div>

               <div className="p-10 rounded-[3rem] bg-forest-deep text-sand-sun space-y-6">
                  <h4 className="text-2xl font-playfair">Fragen oder Terminwunsch?</h4>
                  <p className="text-sm opacity-60 font-outfit">Gerne beraten wir Sie persönlich zu dieser Behandlung.</p>
                  <Link href="#contact" className="btn-premium block text-center bg-sand-gold text-forest-deep border-none">
                    Jetzt Anfragen
                  </Link>
               </div>
            </div>

          </div>

          <div className="mt-24 pt-12 border-t border-forest-deep/5">
            <Link href="/" className="flex items-center gap-2 text-sand-gold font-playfair italic text-xl hover:gap-4 transition-all">
              <ArrowLeft size={20} /> Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-forest-deep text-sand-sun/30 text-center font-outfit text-xs tracking-[0.4em] uppercase">
        © 2026 Naturheilzentrum Sandmann • Impressum • Datenschutz
      </footer>
    </main>
  );
}
