'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TCMSection from "@/components/TCMSection";
import AyurvedaSection from "@/components/AyurvedaSection";
import AestheticSection from "@/components/AestheticSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-sand-sun overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Philosophy Brief Overlay */}
      <section id="philosophy" className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="section-container text-center space-y-8">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="max-w-4xl mx-auto space-y-10"
           >
             <h2 className="text-4xl md:text-6xl font-playfair text-forest-deep leading-tight">
               Den gesamten Menschen sehen: <br />
               <span className="italic text-sand-gold font-medium italic">Körper, Geist & Seele</span>
             </h2>
             <div className="w-32 h-0.5 bg-sand-gold/30 mx-auto"></div>
             <p className="text-2xl font-outfit font-light text-forest-deep/70 leading-relaxed">
               "Bei uns geht es nicht nur darum, Symptome zu lindern – wir suchen nach den Ursachen Ihrer Beschwerden, um den Weg zu Ihrer nachhaltigen Genesung zu finden." 
             </p>
             <p className="text-sm font-outfit uppercase tracking-[0.3em] text-forest-deep/30">
               Praxis für ganzheitliche Medizin • Meerbusch
             </p>
           </motion.div>
        </div>
      </section>

      <TCMSection />
      <AyurvedaSection />
      <AestheticSection />

      {/* Colon-Hydro-Therapie Featured Section */}
      <section id="detox" className="py-32 bg-sand-sun relative overflow-hidden">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-sand-gold font-playfair italic text-2xl">Inneres Gleichgewicht</span>
              <h2 className="text-5xl md:text-7xl font-playfair text-forest-deep leading-tight">
                Vitalität durch <br /><span className="italic">Darmgesundheit</span>
              </h2>
              <p className="text-xl font-outfit text-forest-deep/60 leading-relaxed">
                Unsere Colon-Hydro-Therapie ist weit mehr als eine Reinigung. Sie ist der Grundstein für ein starkes Immunsystem, klare Haut und neue Lebensenergie. In einem geschlossenen, geruchlosen System führen wir Sie sanft zu Ihrem neuen Wohlbefinden.
              </p>
              <div className="flex gap-4">
                <Link href="/behandlung/colon-hydro-therapie" className="btn-premium bg-forest-deep text-sand-sun border-none">
                  Mehr über Colon-Hydro
                </Link>
                <Link href="/behandlung/darmsanierung" className="btn-premium border-forest-deep/20 text-forest-deep">
                  Darmsanierung
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1974&auto=format&fit=crop" 
                alt="Colon-Hydro-Therapie" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest-deep/10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Placeholder */}
      <section id="success" className="section-padding py-32 bg-forest-deep text-sand-sun">
         <div className="section-container text-center space-y-20">
            <h2 className="text-5xl font-playfair italic">Erfahrung trifft Hingabe</h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { label: 'Jahre Praxis', val: '25+' },
                { label: 'Behandlungen', val: '10k+' },
                { label: 'Zufriedene Herzen', val: '1000+' }
              ].map(stat => (
                <div key={stat.label} className="space-y-4">
                  <div className="text-7xl font-playfair font-bold text-sand-gold">{stat.val}</div>
                  <div className="text-xs uppercase tracking-widest opacity-40">{stat.label}</div>
                </div>
              ))}
            </div>
         </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding py-32 bg-sand-sun">
        <div className="section-container flex flex-col items-center gap-20">
          <div className="text-center space-y-6">
            <h2 className="text-6xl md:text-8xl font-playfair text-forest-deep">Kontakt</h2>
            <p className="text-2xl font-outfit font-light text-forest-deep/60">Lassen Sie uns gemeinsam Ihren Heilungsweg beginnen.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 w-full">
            <div className="glass-premium p-12 rounded-[4rem] space-y-12">
               <div className="space-y-6">
                  <h4 className="font-playfair text-3xl font-bold uppercase tracking-tighter">Naturheilzentrum Sandmann</h4>
                  <div className="space-y-4 text-xl font-outfit text-forest-deep/70">
                    <p>Dimitri & Irina Sandmann<br />Heilpraktiker</p>
                    <p>Telefon: +49 (0) 2159 8159903<br />medizin@naturheilzentrum-sandmann.de</p>
                    <p className="text-sm italic text-sand-gold">Standort Meerbusch / Düsseldorf</p>
                  </div>
               </div>
               {/* Aesthetic Map Marker */}
               <div className="w-full h-48 bg-forest-deep/5 rounded-3xl border border-forest-deep/10 flex items-center justify-center italic text-forest-deep/30 font-playfair uppercase tracking-widest text-xs">
                 Meerbusch Map Placeholder
               </div>
            </div>

            <div className="bg-forest-deep p-12 rounded-[4rem] text-sand-sun space-y-8 shadow-2xl">
               <h3 className="text-3xl font-playfair">Nachricht senden</h3>
               <form className="space-y-6">
                  <input type="text" placeholder="NAME" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-sand-gold outline-none transition-colors uppercase tracking-widest text-xs" />
                  <input type="email" placeholder="E-MAIL" className="w-full bg-transparent border-b border-white/10 py-4 focus:border-sand-gold outline-none transition-colors uppercase tracking-widest text-xs" />
                  <textarea placeholder="IHR ANLIEGEN" rows={3} className="w-full bg-transparent border-b border-white/10 py-4 focus:border-sand-gold outline-none transition-colors uppercase tracking-widest text-xs" />
                  <button className="btn-premium w-full text-forest-deep bg-sand-gold hover:bg-white hover:text-forest-deep border-none py-6">Termin Anfragen</button>
               </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 bg-forest-deep text-sand-sun/30 text-center font-outfit text-xs tracking-[0.4em] uppercase">
        © 2026 Naturheilzentrum Sandmann • Impressum • Datenschutz
      </footer>
    </main>
  );
}
