'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  {
    value: 30,
    suffix: '+',
    label: 'Jahre Erfahrung',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Zufriedene Patienten',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Behandlungsmethoden',
  },
];

const AnimatedNumber = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
};

export default function StatsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Wave Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-sand-gold/10 blur-[120px] rounded-full animate-float opacity-60"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-sage-glow/15 blur-[100px] rounded-full animate-breathe opacity-50"></div>
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] text-forest-deep" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 C20,40 40,60 60,50 C80,40 100,60 100,50 L100,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-playfair text-forest-deep"
          >
            Unsere Ergebnisse sprechen für sich
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-outfit text-forest-deep/60"
          >
            Zahlen untermauern die Wirksamkeit unserer Methoden
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 relative">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="flex flex-col items-center text-center space-y-4 px-8"
              >
                <div className="flex items-baseline">
                  <span className="text-6xl md:text-8xl font-playfair font-bold text-[#5B6759] tracking-tight">
                    <AnimatedNumber value={stat.value} />
                  </span>
                  <span className="text-4xl md:text-5xl font-playfair font-medium text-sand-gold ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-sand-gold/30 group-hover:w-20 transition-all duration-700"></div>
                <p className="text-lg md:text-xl font-outfit text-forest-deep/70 font-light tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
              
              {/* Vertical Divider for Desktop */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-sand-gold/20 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
