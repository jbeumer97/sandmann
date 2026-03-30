'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Flower } from 'lucide-react';

const aestheticServices = [
  'Hyaluronsäure', 'Fadenlifting', 'Mesotherapie', 'Vampirlifting (PRP)', 'Bio-Facelifting (PRX-T33)'
];

const wellnessServices = [
  { name: 'Honigmassage', desc: 'Entgiftend & vitalisierend' },
  { name: 'Aromaölmassage', desc: 'Tiefe Entspannung für die Sinne' },
  { name: 'Schröpfmassage', desc: 'Faszienlockerung & Durchblutung' },
  { name: 'Hot Stone', desc: 'Wärmende Balance für den Körper' }
];

export default function AestheticSection() {
  return (
    <section id="aesthetic" className="section-padding py-32 bg-white relative">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Aesthetic Block */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-forest-deep/30 font-playfair italic text-2xl">Natürliche Schönheit</span>
              <h2 className="text-5xl md:text-7xl font-playfair text-forest-deep leading-[1.1]">
                Ästhetische <br />Heilkunde
              </h2>
            </div>
            <p className="text-forest-deep/60 font-outfit text-xl leading-relaxed">
              Nicht-operative Verjüngung auf höchstem Niveau. Wir nutzen die Kraft der Natur und modernste Verfahren, um Ihr natürliches Strahlen von innen heraus zu fördern.
            </p>
            <div className="space-y-4">
              {aestheticServices.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.1 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-8 h-8 rounded-full bg-sand-sun flex items-center justify-center text-sand-gold group-hover:bg-forest-deep transition-all">
                    <Sparkles size={14} />
                  </div>
                  <span className="font-playfair text-2xl text-forest-deep/80 italic group-hover:text-forest-deep transition-colors tracking-tight">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Wellness Block */}
          <div className="space-y-12 bg-sand-sun/50 p-12 rounded-[4rem] border border-forest-deep/5 shadow-inner">
            <div className="space-y-6" id="wellness">
              <div className="w-16 h-16 rounded-2xl bg-forest-deep/5 flex items-center justify-center text-forest-deep">
                <Flower size={32} />
              </div>
              <h3 className="text-4xl font-playfair text-forest-deep">Wellness & Tiefe Regeneration</h3>
              <p className="font-outfit text-forest-deep/60 leading-relaxed">
                Gönnen Sie sich eine Auszeit vom Alltag mit unseren spezialisierten Massagetherapien.
              </p>
            </div>

            <div className="grid gap-6">
              {wellnessServices.map((service) => (
                <motion.div
                  key={service.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 rounded-3xl border border-forest-deep/5 flex justify-between items-center group cursor-pointer"
                >
                  <div>
                    <h4 className="font-playfair text-xl text-forest-deep">{service.name}</h4>
                    <p className="text-xs text-forest-deep/40 uppercase tracking-widest mt-1">{service.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-forest-deep/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart size={16} className="text-sand-gold" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
