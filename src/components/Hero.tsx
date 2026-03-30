'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MousePointer2, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-sand-sun pt-20">
      {/* Immersive Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 scale-110">
        <img 
          src="/images/wellness_massage.jpg" 
          alt="Natural Healing" 
          className="w-full h-full object-cover filter brightness-[0.8] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-sand-sun scale-105"></div>
      </motion.div>

      {/* Floating Organic Shapes */}
      <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-sage-glow/20 blur-[150px] rounded-full animate-float"></div>
      <div className="absolute bottom-[10%] -right-[5%] w-[30vh] h-[30vh] bg-sand-gold/10 blur-[120px] rounded-full animate-breathe delay-1000"></div>

      {/* Hero Content */}
      <div className="section-container relative z-10 text-center space-y-16 mt-12 md:mt-0">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
           className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-premium border-white/50 text-forest-deep font-medium text-[10px] md:text-sm uppercase tracking-[0.2em]">
            <Sparkles className="w-4 h-4 text-sand-gold animate-pulse" />
            Exzellenz in Naturheilkunde
          </div>
          
          <h1 className="text-5xl md:text-9xl leading-[1.1] md:leading-[0.9] text-white font-playfair font-bold text-glow px-4">
            Ganzheitlich <br />
            <span className="italic font-medium text-sand-gold">Heilen</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-forest-deep font-outfit font-medium leading-relaxed tracking-wide bg-sand-sun/40 backdrop-blur-md p-6 md:p-8 rounded-[2.5rem] border border-white/30 shadow-xl mx-4">
            Im Naturheilzentrum Sandmann verbinden wir ayurvedische Weisheit mit moderner TCM für Ihre vollkommene Balance von Körper und Geist.
          </p>
        </motion.div>

        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1, duration: 1.5 }}
           className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 pt-4"
        >
          <a href="#treatments" className="btn-premium w-full md:w-auto group flex items-center justify-center gap-4 text-sm md:text-base tracking-widest uppercase py-5 px-10">
            Behandlungen entdecken
            <MousePointer2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
          <a href="#philosophy" className="text-white/90 border-b border-sand-gold/50 pb-1 font-playfair italic text-lg md:text-xl hover:text-sand-gold transition-all duration-500">
            Unsere Philosophie kennenlernen
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-sand-gold to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
