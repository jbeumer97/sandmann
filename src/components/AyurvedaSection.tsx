'use client';

import { motion } from 'framer-motion';
import { Wind, Sun, Droplets } from 'lucide-react';

const doshas = [
  { 
    name: 'Vata', 
    icon: Wind, 
    color: 'text-blue-200', 
    desc: 'Bewegung & Kreativität',
    details: 'Beruhigung des Nervensystems durch nährende Ölbehandlungen (Abhyanga) und erdende Rhythmen für mehr Fokus und Gelassenheit.'
  },
  { 
    name: 'Pitta', 
    icon: Sun, 
    color: 'text-orange-200', 
    desc: 'Transformation & Energie',
    details: 'Kühlung und Entlastung bei Entzündungen oder Stress durch sanfte Ausleitung und harmonisierende Kräutertherapien.'
  },
  { 
    name: 'Kapha', 
    icon: Droplets, 
    color: 'text-emerald-200', 
    desc: 'Stabilität & Struktur',
    details: 'Aktivierung des Stoffwechsels durch belebende Pulvermassagen (Udvartana) und befreiendes Detox für neue Vitalität.'
  },
];

export default function AyurvedaSection() {
  return (
    <section id="ayurveda" className="section-padding py-32 bg-sand-sun relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-8 mb-24">
          <span className="text-forest-deep/40 font-playfair italic text-2xl">Wissen des Lebens</span>
          <h2 className="text-5xl md:text-7xl font-playfair text-forest-deep leading-tight">
            Individuelle <br /><span className="text-sand-gold italic font-medium underline decoration-sand-gold/30 underline-offset-8">Ayurveda</span> Therapien
          </h2>
          <p className="text-forest-deep/60 font-outfit text-xl leading-relaxed">
            Ayurveda betrachtet den Menschen als einzigartige Kombination der drei Doshas. Wir unterstützen Sie dabei, Ihre innere Natur wiederzufinden und nachhaltige Gesundheit zu etablieren.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doshas.map((dosha, i) => (
            <motion.div
              key={dosha.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: i * 0.2 }}
              className="glass-premium p-12 rounded-[3rem] text-center space-y-6 hover:-translate-y-2 transition-all duration-700 hover:shadow-2xl group"
            >
              <div className={`w-20 h-20 mx-auto rounded-full bg-forest-deep flex items-center justify-center ${dosha.color} shadow-xl group-hover:scale-110 transition-transform duration-700`}>
                <dosha.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-playfair text-forest-deep">{dosha.name}</h3>
              <p className="text-sand-gold font-outfit text-sm uppercase tracking-widest">{dosha.desc}</p>
              <div className="w-10 h-0.5 bg-forest-deep/10 mx-auto"></div>
              <p className="text-forest-deep/60 font-outfit text-sm leading-relaxed min-h-[80px]">
                {dosha.details}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 p-16 rounded-[4rem] bg-forest-deep text-sand-sun relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,100 C30,80 70,80 100,100" fill="none" stroke="currentColor" strokeWidth="0.1" />
              <path d="M0,90 C30,70 70,70 100,90" fill="none" stroke="currentColor" strokeWidth="0.1" />
            </svg>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
               <h4 className="text-4xl font-playfair text-sand-gold italic">Dauernadeln & Impulse</h4>
               <p className="text-xl font-outfit font-light opacity-80 leading-relaxed">
                 Unsere Spezialität: **Dauernadeln**. Diskret, hocheffektiv und wochenlange Stimulation bei chronischen Schmerzen, Stress oder Suchttherapie.
               </p>
               <button className="btn-premium border border-sand-gold/20">Mehr erfahren</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {['Stressabbau', 'Detox', 'Gelenkhilfe', 'Vitalität'].map(tag => (
                 <div key={tag} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-center font-playfair text-lg text-sand-gold/80 italic">
                   {tag}
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
