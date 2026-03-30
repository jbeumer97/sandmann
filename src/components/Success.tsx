'use client';

import { motion } from 'framer-motion';

export default function Success() {
  return (
    <section id="success" className="section-padding py-32 bg-white relative">
      <div className="section-container text-center space-y-16">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-5xl font-cinzel text-root-deep leading-tight">Unsere Philosophie in Zahlen</h2>
          <p className="font-spectral text-xl text-root-deep/60 leading-relaxed">
            Wir suchen nach den Ursachen Ihrer Beschwerden, statt nur die Symptome zu verwalten. Die folgenden Zahlen untermauern unseren Weg:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: 'Jahrelange Praxis-Erfahrung', value: '25+' },
            { label: 'Individuell betreute Patienten', value: '1.000+' },
            { label: 'Ganzheitliche Behandlungen / Jahr', value: '2.500+' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 rounded-3xl bg-earth-glow/30 border border-root-deep/5 space-y-4"
            >
              <div className="text-6xl font-cinzel text-forest-whisper font-bold">{stat.value}</div>
              <div className="text-sm font-cinzel uppercase tracking-widest text-root-deep/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <p className="font-cinzel text-root-deep italic text-2xl max-w-2xl mx-auto opacity-70">
          "Heilung beginnt da, wo der Mensch als Ganzes wahrgenommen wird."
        </p>
      </div>
    </section>
  );
}
