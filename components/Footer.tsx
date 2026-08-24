import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  entreprise: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Expertises', href: '/expertises' },
    { name: 'Projets', href: '/projets' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Infrastructure', href: '/services/infrastructure' },
    { name: 'Cybersécurité', href: '/services/cybersecurite' },
    { name: 'Cloud & Données', href: '/expertises/cloud' },
    { name: 'IA & Automatisation', href: '/services/automatisation-ia' },
    { name: 'Transformation numérique', href: '/expertises/transformation-numerique' },
  ],
  academy: [
    { name: 'Formations', href: '/academy/formations' },
    { name: 'Ateliers', href: '/academy/ateliers' },
    { name: 'Événements', href: '/academy/evenements' },
  ],
  ressources: [
    { name: 'Articles', href: '/ressources/articles' },
    { name: 'Conseils', href: '/ressources/conseils' },
    { name: 'Guides', href: '/ressources/guides' },
  ],
  mouvement: [
    { name: 'Notre mission', href: '/mouvement/notre-mission' },
    { name: 'Devenir partenaire', href: '/mouvement/devenir-partenaire' },
    { name: 'Proposer un projet', href: '/mouvement/proposer-un-projet' },
    { name: 'Soutenir nos initiatives', href: '/mouvement/soutenir-nos-initiatives' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
    { name: 'CGU', href: '/cgu' },
    { name: 'Accessibilité', href: '/accessibilite' },
  ],
}

const socialLinks = [
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M13.5 22v-8h3l.5-3h-3.5V7.5c0-.9.3-1.5 1.6-1.5H17V3.1c-.3-.1-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.3V11H8v3h2.5v8h3Z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M18.9 2h3.4l-7.4 8.5L23 22h-6.7l-5.2-7.2L5.3 22H1.9l7.9-9.1L1 2h6.9l4.7 6.5L18.9 2Zm-1.2 18h1.9L7.1 3.9H5.1L17.7 20Z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M6.9 8.5A1.8 1.8 0 1 1 6.9 5a1.8 1.8 0 0 1 0 3.5ZM5.2 9.8h3.3V19H5.2V9.8Zm5.5 0h3.1v1.2h.1c.4-.8 1.6-1.7 3.3-1.7 3.5 0 4.1 2.3 4.1 5.3V19h-3.3v-17.9h3.3V19h-3.3v-5.6c0-1.4-.1-3.1-1.9-3.1-1.9 0-2.2 1.5-2.2 3V19H10.7V9.8Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-naygal-dark text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#52a234] to-transparent" />

      <div className="container-custom relative py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr]">
          <div className="xl:pr-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-emerald-900/10">
                <Image
                  src="/images/logo.png"
                  alt="Logo NAYGAL"
                  width={56}
                  height={56}
                  className="h-11 w-11 object-contain"
                />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tight">
                  <span className="text-naygal-blue">NAY</span>
                  <span className="text-naygal-green">GAL</span>
                </div>
              </div>
            </div>

            <p className="max-w-xs text-sm leading-7 text-slate-300">
              Le numérique de demain, aujourd&apos;hui. Nous aidons les organisations à transformer leurs infrastructures, leurs services et leur expérience client avec des solutions durables et performantes.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:border-[#52a234]/60 hover:bg-[#52a234]/10 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.14em] text-slate-200">Entreprise</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.14em] text-slate-200">Services</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.14em] text-slate-200">NAYGAL Academy</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {footerLinks.academy.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-base font-semibold uppercase tracking-[0.14em] text-slate-200">Contact</h3>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <div>
                <p className="text-slate-400">Email</p>
                <a href="mailto:contact@naygal.cm" className="mt-1 block font-medium text-white hover:text-[#8ed15b]">
                  contact@naygal.cm
                </a>
              </div>
              <div>
                <p className="text-slate-400">Téléphone</p>
                <a href="tel:+237655002493" className="mt-1 block font-medium text-white hover:text-[#8ed15b]">
                  +237 655 002 493
                </a>
              </div>
              <div>
                <p className="text-slate-400">Disponible</p>
                <p className="mt-1 font-medium text-white">Du lundi au vendredi</p>
              </div>
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#52a234] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#448b2b]"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              {footerLinks.legal.map((link) => (
                <Link key={link.name} href={link.href} className="transition-colors hover:text-white">
                  {link.name}
                </Link>
              ))}
            </div>

            <p className="text-sm text-slate-400">© {currentYear} NAYGAL TECHNOLOGY — Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
