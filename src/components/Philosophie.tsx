'use client';

import { motion } from 'framer-motion';

export default function Philosophie() {
  return (
    <section id="philosophy" className="section-padding py-32 bg-forest-whisper text-earth-glow relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <span className="text-sand-vitality font-cinzel tracking-widest text-sm uppercase">Unsere Philosophie</span>
            <h2 className="text-4xl md:text-6xl font-cinzel leading-tight tracking-tight">
              Die Ursachen erkennen, <br />
              <span className="italic text-sage-harmony">beseitigen</span> und heilen.
            </h2>
            <div className="w-20 h-1 bg-sand-vitality rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-6 font-spectral text-xl font-light opacity-90 leading-[1.8]"
          >
            <p>
              "Bei uns steht Ihre Gesundheit im Mittelpunkt. Unser Team aus erfahrenen Heilpraktikern und Therapeuten begleitet Sie auf Ihrem Weg zu mehr Wohlbefinden und Lebensqualität."
            </p>
            <p>
              Wir legen großen Wert darauf, nicht nur Symptome zu behandeln, sondern den Ursachen Ihrer Beschwerden auf den Grund zu gehen. Wir kombinieren traditionelles Wissen wie Ayurveda und TCM mit moderner Naturheilkunde für Ihr inneres Gleichgewicht.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
