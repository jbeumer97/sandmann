export interface Treatment {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  benefits: string[];
  process: string[];
  symptoms: string[];
  image: string;
}

export const treatments: Treatment[] = [
  {
    slug: "colon-hydro-therapie",
    title: "Colon-Hydro-Therapie",
    category: "Naturheilkunde",
    subtitle: "Sanfte Reinigung für vitale Gesundheit",
    description: "Die Colon-Hydro-Therapie ist eine moderne Form der Dickdarmspülung. Sie dient der Entgiftung und Reinigung des Körpers von Schlacken und Giftstoffen, die sich im Laufe der Zeit im Darm ansammeln können.",
    benefits: ["Vitalisierung des gesamten Organismus", "Stärkung des Immunsystems", "Verbesserung des Hautbildes", "Unterstützung bei Gewichtsreduktion"],
    process: ["Einführung von angenehm temperiertem Wasser", "Sanfte Bauchmassage zur Unterstützung", "Geruchloses Abfließen des Wassers im geschlossenen System", "Dauer ca. 45-60 Minuten"],
    symptoms: ["Verstopfung & Blähungen", "Chronische Müdigkeit", "Hautprobleme (Akne, Ekzeme)", "Allergien & Unverträglichkeiten"],
    image: "/images/colon_hydro.jpg"
  },
  {
    slug: "akupunktur-dauernadeln",
    title: "Akupunktur & Dauernadeln",
    category: "TCM",
    subtitle: "Präzise Impulse für den Energiefluss",
    description: "Akupunktur ist das bekannteste Verfahren der TCM. Durch das Setzen feiner Nadeln an spezifischen Meridianpunkten wird der Energiefluss (Qi) harmonisiert und Blockaden gelöst.",
    benefits: ["Unterstützung in der Schmerztherapie", "Hormonelle Balance", "Stressreduktion", "Aktivierung der Selbstheilungskräfte"],
    process: ["Ausführliche Puls- und Zungendiagnose", "Setzen steriler Einmalnadeln", "Ruhephase von ca. 20-30 Minuten", "Optional: Einsatz von Dauernadeln für Langzeitwirkung"],
    symptoms: ["Rückenschmerzen", "Migräne", "Schlafstörungen", "Hormonelle Beschwerden"],
    image: "/images/acupuncture.jpg"
  },
  {
    slug: "fadenlifting",
    title: "Fadenlifting",
    category: "Ästhetik",
    subtitle: "Sanftes Lifting ohne Skalpell",
    description: "Beim Fadenlifting werden resorbierbare Fäden unter die Haut eingebracht, um hängende Partien anzuheben und die Kollagenproduktion massiv anzuregen.",
    benefits: ["Natürliches Verjüngungsergebnis", "Sofortiger Hebe-Effekt", "Langfristiger Kollagenaufbau", "Keine Ausfallzeiten"],
    process: ["Lokale Betäubung der Areale", "Präzises Einsetzen der PDO-Fäden", "Sanftes Modellieren der Konturen", "Dauer ca. 30-45 Minuten"],
    symptoms: ["Erschlaffte Wangenpartien", "Hängende Augenbrauen", "Halsstraffung", "Konturverlust"],
    image: "/images/thread_lift.jpg"
  },
  {
    slug: "panchakarma",
    title: "Panchakarma",
    category: "Ayurveda",
    subtitle: "Die Königsdisziplin der Reinigung",
    description: "Panchakarma ist die intensivste Form der ayurvedischen Entgiftungskur. Sie dient der tiefgreifenden Reinigung von Körper, Geist und Seele.",
    benefits: ["Ganzheitliche Reinigung", "Innere Ruhe & Klarheit", "Stärkung der Vitalität", "Prävention chronischer Erkrankungen"],
    process: ["Vorbereitende Ölbehandlungen (Snehana)", "Schwitzkur (Swedana)", "Spezifische Reinigungsverfahren", "Aufbauphase & Ernährungsplan"],
    symptoms: ["Burnout-Gefühl", "Stoffwechselstörungen", "Chronische Entzündungen", "Wunsch nach Neuanfang"],
    image: "/images/panchakarma.jpg"
  },
  {
    slug: "schroepfen",
    title: "Schröpfen (Blutig/Unblutig)",
    category: "TCM",
    subtitle: "Tiefenwirksame Faszien- und Gewebereduktion",
    description: "Schröpfen ist ein traditionelles Therapieverfahren, bei dem unter Vakuum stehende Gläser auf die Haut gesetzt werden. Es fördert die Durchblutung und den Lymphfluss massiv.",
    benefits: ["Lösung von Myogelosen", "Stärkung des Immunsystems", "Abtransport von Stoffwechselchlacken", "Schmerzreduktion im Rücken"],
    process: ["Lokalisierung von Triggerpunkten", "Aufsetzen der Schröpfgläser", "Verbleib ca. 10-15 Minuten", "Nachruhe"],
    symptoms: ["Muskelverspannungen", "Rückenschmerzen", "Hinterkopfschmerz", "Durchblutungsstörungen"],
    image: "/images/cupping.jpg"
  },
  {
    slug: "impulstherapie",
    title: "Bioadaptive Impulstherapie",
    category: "TCM",
    subtitle: "Intelligente Schmerztherapie",
    description: "Diese High-Tech Therapie nutzt elektrische Impulse, die in Echtzeit mit dem Körper kommunizieren (Bio-Feedback), um körpereigene Regenerationsprozesse interaktiv zu unterstützen.",
    benefits: ["Unterstützung der Regeneration", "Nicht-invasiv", "Keine Nebenwirkungen", "Kurze Behandlungsdauer"],
    process: ["Analyse der Schmerzpunkte", "Behandlung mit dem Impulsgeber", "Echtzeit-Anpassung der Intensität", "Kurze Behandlungsdauer"],
    symptoms: ["Akute Sportverletzungen", "Chronische Gelenkschmerzen", "Neuralgien", "Narbenentstörung"],
    image: "/images/impulse_therapy.jpg"
  },
  {
    slug: "darmsanierung",
    title: "Darmsanierung",
    category: "TCM",
    subtitle: "Das Zentrum Ihrer Gesundheit stärken",
    description: "Die mikrobiologische Darmsanierung stellt die Balance Ihrer Darmflora wieder her – die Basis für ein starkes Immunsystem und einen funktionierenden Stoffwechsel.",
    benefits: ["Linderung von Nahrungsmittelunverträglichkeiten", "Verbesserung der Nährstoffaufnahme", "Stärkung der Abwehrkräfte", "Mehr Energie im Alltag"],
    process: ["Stuhlanalyse im Labor", "Individueller Einnahmeplan", "Gezielter Probiotika-Aufbau", "Begleitende Ernährungsanpassung"],
    symptoms: ["Reizdarm", "Infektanfälligkeit", "Nahrungsmittelunverträglichkeiten", "Pilzbelastungen"],
    image: "/images/gut_health.jpg"
  },
  {
    slug: "magnetfeldtherapie",
    title: "Magnetfeldtherapie",
    category: "TCM",
    subtitle: "Zellregeneration durch pulsierende Energie",
    description: "Die Magnetfeldtherapie nutzt elektromagnetische Impulse, um den Zellstoffwechsel zu aktivieren und die Selbstheilungskräfte des Körpers tiefgreifend zu unterstützen.",
    benefits: ["Unterstützung der Knochenregeneration", "Linderung bei Gelenkbeschwerden", "Verbesserte Sauerstoffaufnahme", "Stressabbau"],
    process: ["Positionierung der Magnetspulen", "Einstellung der spezifischen Frequenz", "Behandlung ca. 20-40 Minuten", "Völlig schmerzfreie Anwendung"],
    symptoms: ["Osteoporose", "Knochenbrüche", "Chronische Entzündungen", "Burnout & Erschöpfung"],
    image: "/images/magnetic_therapy.jpg"
  },
  {
    slug: "ernaehrungsberatung",
    title: "Ernährungs- & Gesundheitsberatung",
    category: "Ayurveda",
    subtitle: "Nahrung als Medizin",
    description: "Im Ayurveda ist die Ernährung der Schlüssel zur langfristigen Gesundheit. Wir ermitteln Ihre Konstitution (Dosha) und erstellen einen maßgeschneiderten Plan für Ihre Vitalität.",
    benefits: ["Optimale Verdauungskraft (Agni)", "Prävention von Zivilisationskrankheiten", "Nachhaltige Gewichtsregulierung", "Steigerung des Wohlbefindens"],
    process: ["Analyse der Konstitutionstypen", "Ermittlung von Ungleichgewichten", "Erstellung des Ernährungsplans", "Begleitende Lifestyle-Empfehlungen"],
    symptoms: ["Übergewicht", "Trägheit", "Verdauungsbeschwerden", "Hautprobleme"],
    image: "/images/nutrition.jpg"
  },
  {
    slug: "ayurveda-massagen",
    title: "Ayurvedische Massagen",
    category: "Ayurveda",
    subtitle: "Tiefenentspannung durch medizinisches Öl",
    description: "Von der Ganzkörpermassage (Abhyanga) bis zum Stirnguss (Shirodhara) – unsere ayurvedischen Massagen lösen Blockaden und reinigen das Gewebe tiefenwirksam.",
    benefits: ["Stärkung des Nervensystems", "Entgiftung über die Haut", "Verbesserung des Schlafes", "Verjüngungseffekt"],
    process: ["Erwärmung hochwertiger Kräuteröle", "Synchronisierte Massage-Striche", "Gezielte Stimulierung der Marmapunkte", "Nachruhe & warme Dusche"],
    symptoms: ["Schlafstörungen", "Innere Unruhe", "Gliederschmerzen", "Trockene Haut"],
    image: "/images/ayurveda_massage.jpg"
  },
  {
    slug: "permanent-make-up",
    title: "Permanent Make-up",
    category: "Ästhetik",
    subtitle: "Zeitlose Schönheit, jeden Tag",
    description: "Betonen Sie Ihre natürliche Ausstrahlung durch präzise Pigmentierung. Von Augenbrauen (Microblading) bis hin zu Lippenkonturen – für ein stets perfektes Erscheinungsbild.",
    benefits: ["Zeitersparnis am Morgen", "Korrektur von Asymmetrien", "Ideal für Allergiker", "Sport- & schwimmfest"],
    process: ["Detaillierte Vorzeichnung & Beratung", "Wahl der typgerechten Pigmente", "Schmerzarme Pigmentierung", "Nachbehandlung nach ca. 4 Wochen"],
    symptoms: ["Sparsames Brauenhaar", "Blasse Lippen", "Wunsch nach Kontur", "Schmink-Unverträglichkeiten"],
    image: "/images/permanent_makeup.jpg"
  },
  {
    slug: "wellness-behandlungen",
    title: "Wellness & Entspannung",
    category: "Wellness",
    subtitle: "Rückzugsort für Körper und Seele",
    description: "Unsere Wellness-Behandlungen kombinieren klassische Techniken mit modernen Ansätzen für maximale Regeneration und pures Wohlbefinden.",
    benefits: ["Stressabbau", "Anregung des Lymphflusses", "Lockerung der Muskulatur", "Mentale Klarheit"],
    process: ["Aromatherapeutische Einstimmung", "Wahl der Massage-Technik", "Gezielte Tiefenwirkung", "Regenerative Ruhephase"],
    symptoms: ["Alltagsstress", "Verspannungen", "Schwere Beine", "Erschöpfung"],
    image: "/images/wellness_massage.jpg"
  },
  {
    slug: "gesicht",
    title: "Ästhetische Gesichtsbehandlungen",
    category: "Ästhetik",
    subtitle: "Ganzheitliche Verjüngung",
    description: "Ein umfassendes Portfolio an modernsten Gesichtsbehandlungen – von Hyaluron und Fadenlifting bis hin zu innovativen Peelings für ein strahlendes Aussehen.",
    benefits: ["Strahlender Teint", "Faltenreduktion", "Hautstraffung", "Narbenverbesserung"],
    process: ["Hautanalyse", "Individuelles Behandlungsprotokoll", "Durchführung der gewählten Methode", "Pflege-Empfehlung"],
    symptoms: ["Faltentiefe", "Hauterschlaffung", "Pigmentflecken", "Unreinheiten"],
    image: "/images/facial_aesthetics.jpg"
  },
  {
    slug: "koerper",
    title: "Ästhetische Körperbehandlungen",
    category: "Ästhetik",
    subtitle: "Kontur & Straffung",
    description: "Spezialisierte Verfahren zur Körperformung, wie die Fett-weg-Spritze (Lipolyse) und PRP-Therapien für ein vitales Erscheinungsbild von Kopf bis Fuß.",
    benefits: ["Gezielter Fettabbau", "Gewebestraffung", "Behandlung von Problemzonen", "Natürliche Resultate"],
    process: ["Beratungsgespräch", "Behandlungsplanung", "Minimal-invasive Anwendung", "Heilungsbegleitung"],
    symptoms: ["Lokale Fettdepots", "Doppelkinn", "Cellulite", "Wunsch nach Kontur"],
    image: "/images/body_aesthetics.jpg"
  }
];
