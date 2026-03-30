'use client';

import { motion } from 'framer-motion';
import { Leaf, Sparkles, Wind, Check } from 'lucide-react';

const symptoms = [
  "Chronische Rückenschmerzen", "Gelenkschmerzen", "Migräne", "Schlafstörungen", 
  "Verdauungsprobleme", "Stress & Emotionale Belastung", "Menstruationsbeschwerden", 
  "Wechseljahrsbeschwerden", "Erschöpfung", "Allergien", "Hauterkrankungen", 
  "Immunschwäche", "Atemwegserkrankungen", "Angstzustände"
];

export default function Behandlungen() {
  return (
    <section id="treatments" className="section-padding py-32 bg-earth-glow overflow-hidden">
      <div className="section-container">
        <div className="max-w-3xl mb-20">
          <span className="text-sage-harmony font-cinzel tracking-widest text-sm uppercase">Leistungsspektrum</span>
          <h2 className="text-5xl md:text-7xl font-cinzel text-root-deep mt-4">Heilverfahren & <br />Anwendungsgebiete</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* TCM Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-light p-12 rounded-[3rem] space-y-8"
          >
            <div className="flex items-center gap-4 text-forest-whisper">
              <Leaf size={40} />
              <h3 className="text-4xl font-cinzel">Traditionelle Chinesische Medizin</h3>
            </div>
            <p className="font-spectral text-lg opacity-80 leading-relaxed">
              TCM ist ein seit über 2.000 Jahren bewährtes, ganzheitliches Heilsystem. Es fördert das Gleichgewicht, beugt Krankheiten vor und aktiviert die Selbstheilungskräfte durch die Harmonisierung des Qi-Flusses.
            </p>
            <div className="grid grid-cols-2 gap-4">
               {['Akupunktur', 'Kräuterheilkunde', 'Tuina-Massage', 'Ernährung', 'Qigong'].map(item => (
                 <div key={item} className="flex items-center gap-2 font-cinzel text-sm">
                   <Check className="text-sage-harmony" size={16} /> {item}
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Specialization Block */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-forest-whisper text-earth-glow p-12 rounded-[3rem] space-y-8"
          >
            <div className="flex items-center gap-4 text-sand-vitality">
              <Sparkles size={40} />
              <h3 className="text-4xl font-cinzel">Akupunktur & Dauernadeln</h3>
            </div>
            <p className="font-spectral text-lg opacity-80 leading-relaxed">
              Sanfte Impulse durch feine Nadeln. Unsere Spezialität: **Dauernadeln**. Diese bleiben 3–10 Tage im Ohr und sorgen für eine diskrete, wochenlange Stimulation ohne tägliche Praxisbesuche.
            </p>
            <a href="#contact" className="inline-block text-sand-vitality font-cinzel border-b border-sand-vitality pb-1 hover:opacity-70 transition-opacity">
              Termin anfragen
            </a>
          </motion.div>
        </div>

        {/* Symptoms Grid */}
        <div className="space-y-12">
          <h4 className="font-cinzel text-3xl text-center text-root-deep">Wobei wir Ihnen helfen können</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {symptoms.map((symptom, i) => (
              <motion.div 
                key={symptom}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/50 border border-root-deep/5 p-4 rounded-xl text-sm font-spectral text-center hover:bg-sage-harmony/10 transition-colors"
              >
                {symptom}
              </motion.div>
            ))}
          </div>
          <p className="text-center font-cinzel text-root-deep/40 text-sm">...und viele weitere Beschwerden.</p>
        </div>
      </div>
    </section>
  );
}
