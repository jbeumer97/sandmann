export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "die-kraft-der-meridiane",
    title: "Die Kraft der Meridiane: Warum Akupunktur wirklich hilft",
    date: "24. März 2026",
    category: "TCM",
    excerpt: "Erfahren Sie, wie feine Nadeln den Energiefluss in Ihrem Körper harmonisieren und Blockaden lösen können.",
    image: "/images/blog_tcm.jpg",
    content: [
      "Akupunktur ist weit mehr als nur das Setzen von Nadeln. Es ist eine jahrtausendealte Kunst, die darauf abzielt, das Qi – unsere Lebensenergie – wieder ins Gleichgewicht zu bringen.",
      "Nach der Traditionellen Chinesischen Medizin (TCM) fließt dieses Qi durch ein Netzwerk von Kanälen, die wir Meridiane nennen. Wenn dieser Fluss durch Stress, falsche Ernährung oder Verletzungen blockiert wird, entstehen Beschwerden.",
      "Durch gezielte Reize an spezifischen Punkten können diese Blockaden gelöst werden. Wissenschaftliche Studien zeigen heute, dass Akupunktur die Ausschüttung von Endorphinen anregt und das Nervensystem beruhigt.",
      "In unserer Praxis in Meerbusch nutzen wir Akupunktur vor allem bei chronischen Schmerzzuständen, Migräne und zur Unterstützung in stressigen Lebensphasen. Der Prozess beginnt immer mit einer ausführlichen Diagnose, um den Ursprung der Dysbalance zu finden."
    ]
  },
  {
    slug: "ayurvedische-ernaehrung-im-alltag",
    title: "Ayurvedische Ernährung: Mehr Energie durch typgerechtes Essen",
    date: "20. März 2026",
    category: "Ayurveda",
    excerpt: "Nahrung ist im Ayurveda die wichtigste Medizin. Entdecken Sie, wie Sie Ihren Stoffwechsel durch kleine Anpassungen optimieren.",
    image: "/images/blog_ayurveda.jpg",
    content: [
      "Im Ayurveda sagen wir: 'Du bist, was du verdauen kannst.' Es geht nicht nur darum, was wir essen, sondern wie unser Körper es verwertet.",
      "Jeder Mensch hat eine einzigartige Konstitution (Dosha) – Vata, Pitta oder Kapha. Eine für alle passende Diät gibt es nicht. Während der eine Wärme und erdende Speisen braucht, benötigt der andere kühlende und leichte Kost.",
      "Ein einfacher Tipp für den Alltag ist das Trinken von warmem Wasser am Morgen. Dies entfacht das Verdauungsfeuer (Agni) und hilft dem Körper, Schlacken (Ama) abzutransporten.",
      "In unseren Beratungen erstellen wir individuelle Ernährungspläne, die sich ohne Stress in Ihren modernen Alltag integrieren lassen. Denn Gesundheit sollte keine zusätzliche Belastung sein, sondern Freude bereiten."
    ]
  },
  {
    slug: "natuerliche-aesthetik-ohne-skalpell",
    title: "Natürliche Ästhetik: Frische und Ausstrahlung ohne Skalpell",
    date: "15. März 2026",
    category: "Ästhetik",
    excerpt: "Moderne Verfahren wie das Fadenlifting oder PRP ermöglichen eine Verjüngung, die Ihre natürliche Mimik bewahrt.",
    image: "/images/blog_aesthetic.jpg",
    content: [
      "Wahre Schönheit kommt von innen – aber manchmal braucht das Äußere eine sanfte Unterstützung, um wieder zu strahlen.",
      "Der Trend in der ästhetischen Medizin geht klar weg vom 'maskenhaften' Aussehen hin zu natürlichen Resultaten. Verfahren wie das Fadenlifting nutzen die eigene Regenerationskraft der Haut, indem sie die Kollagenbildung massiv anregen.",
      "PRP-Therapien (auch als Vampire-Lift bekannt) nutzen körpereigene Faktoren aus dem Blut, um die Zellerneuerung zu beschleunigen. Das Ergebnis ist ein frischerer Teint und eine straffere Hautstruktur.",
      "Wichtig ist uns dabei immer die Harmonie Ihres Gesichts. Wir beraten Sie ausführlich dazu, welche Methode am besten zu Ihren Wünschen und Ihrem Typ passt, damit Sie sich wieder rundum wohl in Ihrer Haut fühlen."
    ]
  }
];
