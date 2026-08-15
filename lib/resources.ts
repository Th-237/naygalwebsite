export const resources = [
  { slug: 'feuille-de-route-numerique', type: 'Guide', category: 'Guides', title: 'Créer une feuille de route numérique réaliste', description: 'Les étapes essentielles pour identifier les priorités, organiser vos actions et mesurer les progrès.', duration: '12 min', color: 'bg-[#e8f3ff]', icon: '↗' },
  { slug: 'essentiels-cybersecurite', type: 'Checklist', category: 'Outils', title: 'Les essentiels de la cybersécurité', description: 'Une liste claire pour renforcer la protection de vos accès, postes et données.', duration: '8 points', color: 'bg-[#edf7e7]', icon: '✓' },
  { slug: 'cloud-hybride-architecture', type: 'Article', category: 'Articles', title: 'Le cloud hybride : garder le contrôle sans freiner l’évolution', description: 'Comprendre les choix d’architecture qui répondent aux besoins réels des organisations.', duration: '5 min', color: 'bg-[#fff4df]', icon: '☁' },
  { slug: 'demarrer-avec-ia', type: 'Conseil', category: 'Conseils', title: 'Bien démarrer avec l’intelligence artificielle', description: 'Des cas d’usage concrets pour expérimenter l’IA avec méthode et sécurité.', duration: '7 min', color: 'bg-[#f0ebfb]', icon: 'AI' },
  { slug: 'choisir-outils-collaboration', type: 'Guide', category: 'Guides', title: 'Choisir les bons outils pour faire collaborer vos équipes', description: 'Une méthode simple pour aligner les outils, les usages et les compétences.', duration: '10 min', color: 'bg-[#e8f3ff]', icon: '↗' },
  { slug: 'evaluer-maturite-numerique', type: 'Outil', category: 'Outils', title: "Évaluer la maturité numérique de votre organisation", description: 'Faites le point sur vos pratiques, vos outils et les priorités de transformation.', duration: 'Auto-évaluation', color: 'bg-[#edf7e7]', icon: '01' },
  // PDF resource placed in public/documents/ressources/articles/
  { slug: 'enseignement-ia-cameroun', type: 'Article', category: 'Articles', title: "L'enseignement avec l'IA : guide pour les enseignants", description: "Article (PDF) — enseignement et IA au Cameroun.", duration: 'PDF', color: 'bg-[#fff4df]', icon: '📄', href: '/documents/ressources/articles/article_ia_enseignants_cameroun.pdf' },
]

export function findResourceBySlug(slug: string) {
  return resources.find((r) => r.slug === slug) || null
}

export default resources
