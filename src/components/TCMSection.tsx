'use client';

import { motion } from 'framer-motion';
import { Leaf, Check, Info } from 'lucide-react';

const pillars = [
  { name: 'Akupunktur', desc: 'Gezielte Nadelreize für den Energiefluss' },
  { name: 'Kräuterheilkunde', desc: 'Individuelle Rezepturen der Natur' },
  { name: 'Tuina-Massage', desc: 'Traditionelle manuelle Therapie' },
  { name: 'Ernährung', desc: 'Elemente-Lehre für Ihre Konstitution' },
  { name: 'Qigong', desc: 'Meditative Bewegungsübungen' },
];

const conditions = [
  "Rückenschmerzen & Ischias", "Gelenkbeschwerden & Arthrose", "Migräne & Kopfschmerz", 
  "Schlafstörungen", "Verdauungsprobleme", "Emotionale Belastung", "Hormonelle Dysbalance", 
  "Heuschnupfen & Allergien", "Hauterkrankungen", "Burnout-Prävention"
];

export default function TCMSection() {
  return (
    <section id="tcm" className="section-padding py-32 bg-forest-deep relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-sand-gold/5 blur-[100px] rounded-full"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-sand-gold font-playfair italic text-2xl">Tradition trifft Moderne</span>
              <h2 className="text-5xl md:text-7xl font-playfair text-white leading-tight">
                Die 5 Säulen <br />der <span className="text-sage-glow">TCM</span>
              </h2>
            </div>
            
            <p className="text-sand-sun/70 font-outfit text-xl leading-relaxed">
              Die Traditionelle Chinesische Medizin (TCM) ist ein seit über 2.000 Jahren bewährtes Heilsystem. Wir harmonisieren den Qi-Fluss, um Ihre Selbstheilungskräfte nachhaltig zu aktivieren.
            </p>

            <div className="space-y-6">
              {pillars.map((pillar, i) => (
                <motion.div 
                  key={pillar.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-px bg-sand-gold mt-4 group-hover:w-16 transition-all duration-500"></div>
                  <div>
                    <h4 className="font-playfair text-xl text-sand-sun">{pillar.name}</h4>
                    <p className="text-sand-sun/40 text-sm italic">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="glass-dark p-12 rounded-[4rem] border-white/5 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 text-sand-gold/20 group-hover:text-sand-gold/40 transition-colors">
              <Leaf size={120} strokeWidth={1} />
            </div>
            
            <h3 className="text-3xl font-playfair text-white mb-8">Anwendungsgebiete</h3>
            <p className="text-sand-sun/50 text-sm mb-10 font-outfit uppercase tracking-widest">Wobei wir Ihnen helfen können:</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {conditions.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sand-sun/80 font-outfit">
                  <div className="w-1.5 h-1.5 rounded-full bg-sand-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]"></div>
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-sand-gold/20 flex items-center justify-center text-sand-gold">
                <Info size={24} />
              </div>
              <p className="text-sand-sun/60 text-sm italic font-outfit">
                Individuelle Puls- und Zungendiagnose für Ihren persönlichen Therapieplan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
