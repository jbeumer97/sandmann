'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    title: "Akupunktur & Dauernadeln: Sanfte Impulse",
    excerpt: "Dauernadeln sind feine Nadeln, die diskret im Ohr verbleiben und über Tage hinweg stimulieren...",
    date: "25. März 2026",
    tag: "TCM"
  },
  {
    title: "Die Kraft der Traditionellen Chinesischen Medizin",
    excerpt: "Seit über 2.000 Jahren bewährt: Wie TCM Ihren Energiefluss harmonisiert und Heilung aktiviert...",
    date: "12. März 2026",
    tag: "Wissen"
  },
  {
    title: "Ganzheitlicher Ansatz: Mehr als Symptombekämpfung",
    excerpt: "Warum wir im Naturheilzentrum Sandmann Körper, Geist und Seele als untrennbare Einheit betrachten...",
    date: "01. März 2026",
    tag: "Philosophie"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding py-32 bg-earth-glow">
      <div className="section-container">
        <div className="flex justify-between items-end mb-20">
          <div className="max-w-xl">
            <span className="text-sage-harmony font-cinzel tracking-widest text-sm uppercase">Magazin</span>
            <h2 className="text-5xl font-cinzel text-root-deep mt-4">Aktuelles aus der <br />Naturheilkunde</h2>
          </div>
          <button className="hidden md:block font-cinzel text-sm border-b border-root-deep pb-1 hover:text-sage-harmony transition-colors">
            Alle Artikel
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div 
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-root-deep/5 rounded-3xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-forest-whisper opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-cinzel font-bold tracking-widest">
                  {post.tag}
                </div>
              </div>
              <div className="text-xs text-root-deep/40 font-cinzel mb-2 uppercase tracking-widest">{post.date}</div>
              <h3 className="text-2xl font-cinzel text-root-deep leading-snug group-hover:text-forest-whisper transition-colors">
                {post.title}
              </h3>
              <p className="font-spectral text-sm opacity-60 mt-4 line-clamp-2">
                {post.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
