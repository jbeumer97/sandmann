'use client';

import { motion } from 'framer-motion';

const aestheticServices = [
  'Hyaluronsäure', 'Fadenlifting', 'Mesotherapie', 'Vampirlifting (PRP)', 'Bio-Facelifting'
];

const wellnessServices = [
  { name: 'Honigmassage', desc: 'Entgiftend & vitalisierend' },
  { name: 'Aromaölmassage', desc: 'Entspannung für die Sinne' },
  { name: 'Schröpfmassage', desc: 'Faszienlockerung' },
  { name: 'Hot Stone', desc: 'Wärmende Balance' }
];

export default function AestheticSection() {
  return (
    <section id="aesthetic" className="py-32 lg:py-56 bg-warm-ivory relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-stone-taupe/10"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-center">
          
          {/* Left: Content Spread */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="space-y-8"
            >
              <span className="text-editorial-caption">
                ÄSTHETIK & WELLNESS
              </span>
              <h2 className="text-5xl md:text-8xl leading-[0.9] text-deep-charcoal">
                Zeitlose <br />
                <span className="italic">Ausstrahlung.</span>
              </h2>
              <p className="max-w-xl text-lg text-stone-taupe leading-relaxed font-sans font-light">
                Natürliche Verjüngung auf höchstem Niveau. Wir nutzen die Kraft regenerativer Verfahren und modernste naturheilkundliche Methoden, um Ihre individuelle Schönheit von innen heraus zu entfalten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
               {/* Aesthetic List */}
               <div className="space-y-8">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase text-tea-green font-medium">Ästhetische Heilkunde</h4>
                  <div className="space-y-4">
                    {aestheticServices.map((service, i) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-6 group cursor-default"
                      >
                        <div className="w-[4px] h-[4px] rounded-full bg-stone-taupe group-hover:bg-tea-green transition-colors"></div>
                        <span className="font-serif text-2xl text-deep-charcoal/80 italic group-hover:text-deep-charcoal transition-colors tracking-tight">
                          {service}
                        </span>
                      </motion.div>
                    ))}
                  </div>
               </div>

               {/* Wellness List */}
               <div className="space-y-8">
                  <h4 className="text-[10px] tracking-[0.3em] uppercase text-stone-taupe font-medium">Regenerative Rituale</h4>
                  <div className="grid gap-4">
                    {wellnessServices.map((service) => (
                      <div
                        key={service.name}
                        className="surface-limestone p-6 rounded-sm border-stone-taupe/10 flex flex-col group cursor-pointer transition-all duration-700 hover:shadow-2xl"
                      >
                        <h5 className="font-serif text-xl text-deep-charcoal">{service.name}</h5>
                        <p className="text-[10px] uppercase tracking-widest text-stone-taupe mt-1">{service.desc}</p>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>

          {/* Right: Immersive Imagery */}
          <div className="lg:col-span-12 xl:col-span-5 relative">
             <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl"
            >
              <img 
                src="/images/aesthetic-ritual.png" 
                alt="Aesthetic Wellness Ritual" 
                className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-mineral-beige/5 mix-blend-multiply"></div>
            </motion.div>
            
            {/* Signature vertical glow */}
            <div className="vertical-light-strip right-[-5%] bottom-[10%] h-[60%]"></div>
            
            <div className="absolute -top-10 -left-10 md:-left-20 p-10 surface-frosted border-stone-taupe/10 hidden lg:block">
               <span className="text-[9px] tracking-[0.4em] uppercase text-tea-green font-medium mb-4 block">QUALITÄT</span>
               <p className="text-xl font-serif text-deep-charcoal italic leading-relaxed">
                  "Wahre Ästhetik ist die Sichtbarkeit innerer Gesundheit."
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
