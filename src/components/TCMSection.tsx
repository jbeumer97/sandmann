'use client';

import { motion } from 'framer-motion';

const pillars = [
  { name: 'Akupunktur', desc: 'Präzise Nadelreize für den freien Qi-Fluss.' },
  { name: 'Phytotherapie', desc: 'Individuelle Kräuterrezepturen der Natur.' },
  { name: 'Tuina-Massage', desc: 'Manuelle Therapie zur Blockadenlösung.' },
  { name: 'Diätetik', desc: 'Fünf-Elemente-Ernährung für Ihre Balance.' },
  { name: 'Qigong', desc: 'Meditative Übung zur inneren Kultivierung.' },
];

const conditions = [
  "Rückenschmerzen & Ischias", "Migräne & Kopfschmerm", "Schlafstörungen", 
  "Verdauungsprobleme", "Hormonelle Dysbalance", "Allergien & Haut", 
  "Burnout-Prävention"
];

export default function TCMSection() {
  return (
    <section id="tcm" className="py-32 lg:py-56 bg-mineral-beige relative overflow-hidden">
      {/* Background Motifs */}
      <div className="absolute top-[20%] right-0 w-[60%] h-px bg-stone-taupe/20 hidden lg:block"></div>
      <div className="vertical-light-strip right-[10%] top-0 h-[30%]"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Image & Decorative Detail */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl"
            >
              <img 
                src="/images/tcm-ritual.png" 
                alt="TCM Ritual Akupunktur" 
                className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
              />
              <div className="absolute inset-0 bg-tea-green/5 mix-blend-multiply"></div>
            </motion.div>
            
            {/* Fine Meridian Line Detail Overlay */}
            <div className="absolute top-1/2 -right-8 w-16 h-px bg-tea-green hidden lg:block"></div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 space-y-16 lg:pt-12 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-6"
            >
              <span className="text-editorial-caption">
                TRADITIONELLE CHINESISCHE MEDIZIN
              </span>
              <h2 className="text-5xl md:text-8xl leading-[0.9] text-deep-charcoal max-w-xl">
                Die fünf Säulen <br />
                <span className="italic">der Harmonie.</span>
              </h2>
              <p className="max-w-lg text-lg text-stone-taupe leading-relaxed font-sans">
                Seit über zwei Jahrtausenden bewährt: Die TCM betrachtet den Menschen als Ganzes. Wir lösen energetische Blockaden und aktivieren Ihre natürlichen Selbstheilungskräfte durch ein präzise abgestimmtes Heilsystem.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-tea-green font-medium">Behandlungsschwerpunkte</h4>
                <div className="space-y-6">
                  {pillars.map((pillar, i) => (
                    <motion.div 
                      key={pillar.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <h5 className="font-serif text-2xl text-deep-charcoal group-hover:text-tea-green transition-colors">{pillar.name}</h5>
                      <p className="text-sm text-stone-taupe font-sans mt-1">{pillar.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-8 p-10 bg-warm-ivory/50 backdrop-blur-sm border border-stone-taupe/10 rounded-sm">
                <h4 className="text-[10px] tracking-[0.3em] uppercase text-stone-taupe font-medium">Anwendungsfelder</h4>
                <ul className="space-y-4">
                  {conditions.map((item) => (
                    <li key={item} className="flex items-center gap-4 text-sm text-deep-charcoal/80 font-sans">
                      <div className="w-1 h-1 rounded-full bg-tea-green/40"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-stone-taupe/10">
                   <p className="text-xs italic text-stone-taupe font-serif">
                     "Jede Symptomatik ist ein Signal des Körpers, das wir gemeinsam entschlüsseln."
                   </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
