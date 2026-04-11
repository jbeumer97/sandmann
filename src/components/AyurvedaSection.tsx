'use client';

import { motion } from 'framer-motion';

const doshas = [
  { 
    name: 'Vata', 
    desc: 'Bewegung & Kreativität',
    details: 'Beruhigung des Nervensystems durch nährende Ölbehandlungen (Abhyanga) und erdende Rhythmen für mehr Fokus und Gelassenheit.'
  },
  { 
    name: 'Pitta', 
    desc: 'Transformation & Energie',
    details: 'Kühlung und Entlastung bei Entzündungen oder Stress durch sanfte Ausleitung und harmonisierende Kräutertherapien.'
  },
  { 
    name: 'Kapha', 
    desc: 'Stabilität & Struktur',
    details: 'Aktivierung des Stoffwechsels durch belebende Pulvermassagen (Udvartana) und befreiendes Detox für neue Vitalität.'
  },
];

export default function AyurvedaSection() {
  return (
    <section id="ayurveda" className="py-32 lg:py-56 bg-warm-ivory relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.02]"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Editorial Summary */}
          <div className="lg:col-span-6 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-8"
            >
              <span className="text-editorial-caption">
                WISSEN DES LEBENS
              </span>
              <h2 className="text-5xl md:text-8xl leading-[0.9] text-deep-charcoal">
                Ayurveda & Konstitution.<br />
                <span className="italic">Ganzheitliches Sein.</span>
              </h2>
              <p className="max-w-xl text-lg text-stone-taupe leading-relaxed font-sans font-light">
                Ayurveda betrachtet den Menschen als einzigartige Komposition der drei Bio-Energien. In unserer Praxis unterstützen wir Sie dabei, Ihre individuelle Natur zu verstehen und durch Ernährung, Rituale und Manualtherapie ein tiefes Gleichgewicht zu etablieren.
              </p>
            </motion.div>

            {/* Dosha Grid */}
            <div className="grid sm:grid-cols-3 gap-8 pt-8">
              {doshas.map((dosha, i) => (
                <motion.div
                  key={dosha.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 1 }}
                  className="space-y-4 group"
                >
                  <div className="h-px w-full bg-stone-taupe/20 group-hover:bg-tea-green transition-colors duration-700"></div>
                  <h3 className="text-3xl font-serif text-deep-charcoal">{dosha.name}</h3>
                  <p className="text-[10px] tracking-widest uppercase text-stone-taupe">{dosha.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Architectural Imagery */}
          <div className="lg:col-span-6 relative">
             <motion.div
              initial={{ opacity: 0, scale: 1.05, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-sm shadow-2xl"
            >
              <img 
                src="/images/ayurveda-ritual.png" 
                alt="Ayurveda Ritual Ritual" 
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-amber-glow/5 mix-blend-multiply"></div>
            </motion.div>
            
            {/* Illuminated Signature Motif */}
            <div className="vertical-light-strip -left-4 top-1/4 h-1/2"></div>
            
            <div className="absolute -bottom-10 left-10 md:-left-20 p-8 md:p-12 surface-frosted max-w-sm hidden md:block">
               <h4 className="text-2xl font-serif text-deep-charcoal italic mb-4">Analyse & Ritual</h4>
               <p className="text-xs text-stone-taupe font-sans leading-relaxed">
                  "Jede Ayurveda-Sitzung beginnt mit einer tiefgehenden Konstitutionsbestimmung. Wir finden den Rhythmus, der zu Ihrem Leben passt."
               </p>
            </div>
          </div>

        </div>

        {/* Specialized Treatment Teaser */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-32 lg:mt-56 grid lg:grid-cols-12 items-end gap-12"
        >
          <div className="lg:col-span-5 space-y-6">
             <span className="text-[10px] tracking-[0.3em] uppercase text-tea-green font-medium">FOKUS-THERAPIE</span>
             <h4 className="text-4xl lg:text-5xl font-serif text-deep-charcoal leading-tight">
                Impulse für die Tiefe.<br />
                <span className="italic text-stone-taupe">Dauernadel-Akupunktur.</span>
             </h4>
          </div>
          <div className="lg:col-span-7">
             <p className="text-lg text-stone-taupe font-sans font-light leading-relaxed mb-8">
                Eine Besonderheit unserer Praxis: Diskret angebrachte Dauernadeln ermöglichen eine kontinuierliche Stimulation über Tage oder Wochen. Hocheffektiv bei chronischen Schmerzen, Stressreaktionen oder zur Unterstützung in der Suchttherapie.
             </p>
             <div className="flex flex-wrap gap-4">
               {['STRESSABBAU', 'REGENERATION', 'DETOX', 'VITALITÄT'].map(tag => (
                 <span key={tag} className="px-6 py-2 border border-stone-taupe/10 text-[9px] tracking-widest text-deep-charcoal/60 uppercase rounded-full">
                    {tag}
                 </span>
               ))}
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
