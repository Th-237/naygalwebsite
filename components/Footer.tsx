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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-naygal-dark text-white pb-0">
      <div className="container-custom pt-6 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Logo NAYGAL"
                width={64}
                height={64}
                className="h-14 w-14 object-contain"
              />
              <span className="text-2xl font-bold">
                <span className="text-naygal-blue">NAY</span>
                <span className="text-naygal-green">GAL</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Le numérique de demain, aujourd'hui. Expert en infrastructures, cybersécurité, IA et cloud.
            </p>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Nous accompagnons les organisations africaines pour transformer leur IT, leurs services et leur expérience client.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition-smooth transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-smooth transition-colors" aria-label="X">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-smooth transition-colors" aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">NAYGAL Academy</h3>
            <ul className="space-y-2">
              {footerLinks.academy.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-gray-400">
                <span className="text-naygal-green font-semibold">contact@naygal.cm</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">+237 655 002 493</p>
              <p className="text-sm text-gray-400 mt-3">Réponse rapide en journée ouvrée.</p>
            </div>
          </div>

          {/* Ressources + Mouvement */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Ressources & Mouvement</h3>
            <ul className="space-y-2">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.mouvement.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 grid gap-4 text-sm text-gray-400 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="space-y-2">
            <p className="font-semibold text-white">Envie d’en discuter ?</p>
            <p>Contactez notre équipe pour une étude rapide de votre projet numérique.</p>
            <p>Nous respectons le RGPD : plus d’informations sur le site officiel de la CNIL.</p>
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#52a234] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#438a2c]">
              Nous contacter
            </Link>
            <div className="flex flex-wrap gap-4">
              <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
              <Link href="#" className="hover:text-white transition-colors">Politique de confidentialité</Link>
              <Link href="#" className="hover:text-white transition-colors">CGU</Link>
              <a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">RGPD</a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-white/5 pt-6 pb-0 text-center text-xs text-gray-400">
          © {currentYear} NAYGAL TECHNOLOGY — Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}
