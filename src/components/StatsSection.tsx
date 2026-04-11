'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  {
    value: 30,
    suffix: '+',
    label: 'Jahre Exzellenz',
  },
  {
    value: 100,
    suffix: '%',
    label: 'Wohlbefinden',
  },
  {
    value: 30,
    suffix: '+',
    label: 'Methodiken',
  },
];

const AnimatedNumber = ({ value, duration = 3 }: { value: number; duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: [0.22, 1, 0.36, 1],
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
    <section className="relative py-32 lg:py-48 overflow-hidden bg-warm-ivory">
      <div className="absolute inset-0 bg-noise pointer-events-none opacity-[0.03]"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-end">
          
          {/* Header Column */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-editorial-caption">ERGEBNISSE</span>
              <h2 className="text-5xl lg:text-7xl font-serif text-deep-charcoal leading-tight">
                Ein Fundament aus <br />
                <span className="italic">Erfahrung.</span>
              </h2>
              <p className="text-lg text-stone-taupe font-sans font-light leading-relaxed">
                Zahlen sind nur ein Teil der Geschichte. Doch sie untermauern die Wirksamkeit unserer ganzheitlichen Ansätze und das Vertrauen, das uns seit Jahrzehnten entgegengebracht wird.
              </p>
            </motion.div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1.2 }}
                className="space-y-4"
              >
                <div className="h-px w-12 bg-tea-green/30"></div>
                <div className="flex items-baseline">
                  <span className="text-7xl lg:text-8xl font-serif text-deep-charcoal tracking-tight">
                    <AnimatedNumber value={stat.value} />
                  </span>
                  <span className="text-2xl lg:text-3xl font-serif text-stone-taupe ml-1">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-taupe font-medium font-sans">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
