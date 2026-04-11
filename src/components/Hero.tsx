'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-warm-ivory py-20 lg:py-0">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]"></div>
      
      {/* Vertical Light Strip Motif */}
      <div className="vertical-light-strip left-[10%] top-0 hidden lg:block"></div>
      <div className="vertical-light-strip right-[15%] bottom-0 hidden lg:block h-[40%]"></div>

      <div className="section-container relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Text Content - Spans 5 columns */}
        <div className="lg:col-span-12 xl:col-span-5 space-y-12 lg:space-y-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-editorial-caption animate-pulse">
                NATURHEILZENTRUM MEERBUSCH
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] leading-[1] text-deep-charcoal text-balance">
                Heilung im <br />
                <span className="italic">Gleichgewicht.</span>
              </h1>
            </div>
            
            <p className="max-w-md text-lg md:text-xl text-stone-taupe leading-relaxed font-sans font-light">
              Wo tradionelle Weisheit auf moderne Praxis trifft. Wir begleiten Sie auf Ihrem Weg zu nachhaltigem Wohlbefinden durch TCM, Ayurveda und ganzheitliche Therapie.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#treatments" className="btn-editorial w-full sm:w-auto">
              Behandlung finden
            </a>
            <a href="#philosophy" className="btn-outline w-full sm:w-auto">
              Philosophie
            </a>
          </motion.div>
        </div>

        {/* Hero Imagery - Spans 7 columns, offset architectural layout */}
        <div className="lg:col-span-12 xl:col-start-7 xl:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative aspect-[4/5] lg:aspect-[3/4] xl:aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
          >
            <img 
              src="/images/hero-editorial.png" 
              alt="Premium Naturheilpraxis Interior" 
              className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
            />
            {/* Subtle overlay to soften the image and match background */}
            <div className="absolute inset-0 bg-mineral-beige/5 mix-blend-multiply"></div>
          </motion.div>
          
          {/* Floating Architectural Detail (Fine Line) */}
          <div className="absolute -left-10 md:-left-20 top-1/2 w-32 md:w-60 h-px bg-stone-taupe/30 hidden xl:block"></div>
          <div className="absolute -bottom-8 md:-right-8 p-8 md:p-12 surface-limestone hidden md:block max-w-xs space-y-4">
            <span className="text-[10px] tracking-[0.2em] text-tea-green uppercase font-medium">Praxis Ritual</span>
            <p className="text-sm text-stone-taupe italic font-serif">
               "Ruhe ist der Anfang aller Heilung. Treten Sie ein in einen Raum der Stille."
            </p>
          </div>
        </div>
      </div>

      {/* Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-20 hidden lg:flex flex-col items-center gap-4 group cursor-pointer"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] rotate-90 origin-left mb-4 text-stone-taupe">Entdecken</span>
        <div className="w-px h-12 bg-stone-taupe/40 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-full h-1/2 bg-tea-green"
          />
        </div>
      </motion.div>
    </section>
  );
}
