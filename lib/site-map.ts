export type NavigationItem = {
  name: string
  href: string
  description: string
  children?: { name: string; href: string }[]
}

export const siteNavigation: NavigationItem[] = [
  {
    name: 'À propos',
    href: '/a-propos',
    description: 'Découvrez NAYGAL, sa vision et les personnes qui le font vivre.',
    children: [
      { name: 'Notre histoire', href: '/a-propos/notre-histoire' },
      { name: 'Vision', href: '/a-propos/vision' },
      { name: 'Valeurs', href: '/a-propos/valeurs' },
      { name: 'Équipe', href: '/a-propos/equipe' },
    ],
  },
  {
    name: 'Expertises',
    href: '/expertises',
    description: 'Les domaines techniques qui portent votre transformation.',
    children: [
      { name: 'Réseaux & Infrastructures', href: '/expertises/reseaux-infrastructures' },
      { name: 'Cybersécurité', href: '/expertises/cybersecurite' },
      { name: 'Intelligence Artificielle', href: '/expertises/intelligence-artificielle' },
      { name: 'Cloud', href: '/expertises/cloud' },
      { name: 'Transformation numérique', href: '/expertises/transformation-numerique' },
    ],
  },
  {
    name: 'Services',
    href: '/services',
    description: 'Des services concrets, adaptés à votre environnement.',
    children: [
      { name: 'Infrastructure', href: '/services/infrastructure' },
      { name: 'Serveurs NAS', href: '/services/serveurs-nas' },
      { name: 'Réseaux', href: '/services/reseaux' },
      { name: 'Maintenance', href: '/services/maintenance' },
      { name: 'Cybersécurité', href: '/services/cybersecurite' },
      { name: 'Cloud', href: '/services/cloud' },
      { name: 'Automatisation IA', href: '/services/automatisation-ia' },
    ],
  },
  { name: 'Projets', href: '/projets', description: 'Des réalisations qui répondent à des enjeux concrets.' },
  {
    name: 'NAYGAL Academy',
    href: '/academy',
    description: 'Développer les compétences qui feront avancer le numérique.',
    children: [
      { name: 'NAYGAL ACADEMY dans votre école', href: '/academy/dans-votre-ecole' },
      { name: 'Formations', href: '/academy/formations' },
      { name: 'Ateliers', href: '/academy/ateliers' },
      { name: 'Événements', href: '/academy/evenements' },
    ],
  },
  {
    name: 'Ressources',
    href: '/ressources',
    description: 'Des contenus utiles pour mieux décider et progresser.',
    children: [
      { name: 'Articles', href: '/ressources/articles' },
      { name: 'Conseils', href: '/ressources/conseils' },
      { name: 'Guides', href: '/ressources/guides' },
    ],
  },
  {
    name: 'Le Mouvement',
    href: '/mouvement',
    description: 'Une communauté engagée pour un numérique utile et durable.',
    children: [
      { name: 'Notre mission', href: '/mouvement/notre-mission' },
      { name: 'Devenir partenaire', href: '/mouvement/devenir-partenaire' },
      { name: 'Proposer un projet', href: '/mouvement/proposer-un-projet' },
      { name: 'Soutenir nos initiatives', href: '/mouvement/soutenir-nos-initiatives' },
    ],
  },
  { name: 'Actualités', href: '/actualites', description: 'Les nouvelles, événements et prises de parole de NAYGAL.' },
]

export const sitePages = siteNavigation.flatMap((item) => [
  { name: item.name, href: item.href, description: item.description },
  ...(item.children ?? []).map((child) => ({
    name: child.name,
    href: child.href,
    description: `${child.name} — ${item.name}`,
  })),
])
