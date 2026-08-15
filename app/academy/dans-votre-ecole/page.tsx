import Link from 'next/link'
import Image from 'next/image'

const etapes = [
  ['01', 'Présentation', 'Nous échangeons avec la direction sur les besoins, le calendrier et les conditions de mise en œuvre.'],
  ['02', 'Sensibilisation gratuite', 'Une première session de découverte du numérique permet aux élèves et à l’établissement d’expérimenter le programme.'],
  ['03', 'Lancement des ateliers', 'Les premiers groupes commencent un parcours pratique, encadré par l’équipe NAYGAL Academy.'],
  ['04', 'Montée en puissance', 'La salle et les équipements évoluent progressivement vers la NAYTECH ROOM.'],
  ['05', 'Accompagnement durable', 'Mentorat, certification DK et orientation vers les filières IT partenaires prolongent le parcours des apprenants.'],
]

const partnerGroups = [
  {
    title: 'Passerelles académiques',
    description: 'Des établissements d’enseignement supérieur pour aider les élèves à poursuivre un parcours IT ambitieux.',
    partners: [
      { name: 'IUT', logo: '/images/partners/iut.png' },
      { name: 'ISTAG', logo: '/images/partners/istag.png' },
      { name: 'ISGA' },
    ],
  },
  {
    title: 'Réseau professionnel',
    description: 'Des entreprises qui rapprochent les apprenants des réalités, des stages et des métiers du numérique.',
    partners: [
      { name: 'MPT' },
      { name: 'KAVENOR', logo: '/images/partners/kavenor.png' },
    ],
  },
]

const partners = partnerGroups.flatMap((group) => group.partners)

const internationalPlatforms = [
  { name: 'Cisco Networking Academy', logo: '/images/platforms/Cisco.png' },
  { name: 'Fortinet Training Institute', logo: '/images/platforms/fortinet.png' },
  { name: 'OpenClassrooms', logo: '/images/platforms/openclassrooms.png' },
  { name: 'Google for Education', logo: '/images/platforms/google-for-ed.png' },
  { name: 'edX', logo: '/images/platforms/edx.png' },
]

export default function AcademyInSchoolPage() {
  return (
    <main className="bg-white pt-[72px] text-[#032965]">
      <section className="relative overflow-hidden bg-[#021d47] py-20 text-white sm:py-28">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#276f91]/40 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-[#52a234]/20 blur-3xl" />
        <div className="container-custom relative">
          <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">NAYGAL Academy · Établissements partenaires</p>
          <div className="mt-5 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.07] tracking-[-.04em] sm:text-6xl">NAYAC dans votre école.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Un programme de formation numérique pratique, accessible et encadré, conçu pour donner aux collégiens et lycéens des compétences réelles et reconnues.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex justify-center bg-[#52a234] px-6 py-3.5 font-semibold text-white transition hover:bg-[#438a2c]">Planifier une présentation</Link>
                <a href="#deploiement" className="inline-flex justify-center border border-white/35 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10">Voir le fonctionnement</a>
              </div>
            </div>
            <div className="border border-white/15 bg-white/10 p-6 backdrop-blur sm:p-7">
              <p className="text-sm font-bold uppercase tracking-[.15em] text-[#a4d78f]">Un partenariat progressif</p>
              <p className="mt-5 text-2xl font-semibold leading-snug">Votre établissement met à disposition un espace. NAYGAL assure le programme, l’encadrement et la montée en puissance.</p>
              <p className="mt-5 border-t border-white/15 pt-5 text-sm leading-6 text-slate-300">Le projet peut démarrer dans une salle informatique existante ou un espace mis à disposition, puis évoluer vers une NAYTECH ROOM dédiée.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIE NAYAC */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#438a2c]">Galerie</p>
            <h2 className="mt-3 text-[#032965]">NAYAC dans votre école — images & ambiances</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Quelques images représentatives d’ateliers, d’espaces d’apprentissage et de rencontres entre élèves et formateurs.</p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: 'https://source.unsplash.com/1400x900/?african,students', alt: "Élèves africains en atelier", caption: 'Atelier : élèves en groupe'},
              { src: 'https://source.unsplash.com/1400x900/?african,classroom', alt: 'Classe en Afrique', caption: 'Classe locale en pleine activité'},
              { src: 'https://source.unsplash.com/1400x900/?african,children,learning', alt: 'Enfants africains apprenant', caption: 'Apprentissage et curiosité'},
              { src: 'https://source.unsplash.com/1400x900/?african,workshop', alt: 'Atelier pratique en Afrique', caption: 'Workshop : pratique et partage'},
              { src: 'https://source.unsplash.com/1400x900/?african,teacher', alt: 'Formateur africain', caption: 'Encadrement pédagogique local'},
              { src: 'https://source.unsplash.com/1400x900/?african,technology', alt: 'Usage de technologies en Afrique', caption: 'Initiation aux outils numériques'},
            ].map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-xl bg-slate-50">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="p-3 text-sm text-slate-600">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#438a2c]">Pourquoi maintenant ?</p>
            <h2 className="mt-3 text-[#032965]">Faire du numérique une compétence concrète, et non seulement théorique.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">NAYAC complète le programme scolaire existant par des ateliers pratiques autour des réseaux, de la cybersécurité, de l’intelligence artificielle, du développement et de la robotique.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="border-t-4 border-[#276f91] bg-[#f4f8fd] p-7"><h3 className="text-xl font-semibold">Pour vos élèves</h3><p className="mt-3 leading-7 text-slate-600">Des compétences pratiques, une certification Digital Knowledge annuelle et un mentorat dans la durée.</p></div>
            <div className="border-t-4 border-[#52a234] bg-[#f3f9ef] p-7"><h3 className="text-xl font-semibold">Pour votre établissement</h3><p className="mt-3 leading-7 text-slate-600">Un projet différenciant, une salle technologique qui se développe progressivement et un accompagnement structuré.</p></div>
            <div className="border-t-4 border-[#df8b18] bg-[#fff8eb] p-7"><h3 className="text-xl font-semibold">Pour les familles</h3><p className="mt-3 leading-7 text-slate-600">Un cadre sécurisé et accessible qui prépare les jeunes aux études et opportunités numériques de demain.</p></div>
          </div>
        </div>
      </section>

      <section id="deploiement" className="bg-[#f4f8fd] py-20 sm:py-24">
        <div className="container-custom">
          <p className="eyebrow text-[#438a2c]">Déploiement</p>
          <h2 className="mt-3 max-w-3xl text-[#032965]">Un chemin simple en cinq étapes.</h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {etapes.map(([number, title, description]) => (
              <div key={number} className="bg-white p-5 shadow-sm">
                <p className="text-sm font-bold text-[#52a234]">{number}</p>
                <h3 className="mt-8 text-lg font-semibold text-[#032965]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-[#032965] p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[.18em] text-[#a4d78f]">La NAYTECH ROOM</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">Un espace fait pour apprendre, expérimenter et créer.</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-slate-200"><span className="border border-white/15 p-3">Postes de travail</span><span className="border border-white/15 p-3">Équipement réseau</span><span className="border border-white/15 p-3">Ressources pédagogiques</span><span className="border border-white/15 p-3">Connexion encadrée</span></div>
          </div>
          <div>
            <p className="eyebrow text-[#438a2c]">Un objectif progressif</p>
            <h2 className="mt-3 text-[#032965]">Le programme peut commencer avant que la salle soit complète.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">La NAYTECH ROOM est une ambition commune, pas un prérequis. NAYGAL adapte le démarrage aux ressources disponibles, puis enrichit progressivement l’espace, le matériel et les activités.</p>
            <p className="mt-5 border-l-2 border-[#52a234] pl-4 leading-7 text-slate-600">La protection des mineurs, la sécurité en ligne et l’encadrement collectif font partie intégrante du programme.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-[#f4f8fd] py-20 sm:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#438a2c]">Un réseau qui ouvre des perspectives</p>
            <h2 className="mt-3 text-[#032965]">Des passerelles pour vos élèves.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">NAYAC construit un écosystème de partenaires académiques et professionnels pour élargir les perspectives d’orientation, de mentorat et d’insertion des apprenants.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {partnerGroups.map((group) => (
              <div key={group.title} className="border border-slate-200 bg-white p-7 sm:p-8">
                <h3 className="text-xl font-semibold text-[#032965]">{group.title}</h3>
                <p className="mt-3 max-w-lg leading-7 text-slate-600">{group.description}</p>
              </div>
            ))}
          </div>
          <div className="group mt-8 overflow-hidden border-y border-slate-200 bg-white py-5" aria-label="Partenaires de NAYGAL Academy">
            <div className="animate-partner-marquee flex w-max items-center gap-5 group-hover:[animation-play-state:paused]">
              {[...partners, ...partners].map((partner, index) => (
                <div key={`${partner.name}-${index}`} aria-hidden={index >= partners.length} className="flex h-20 w-44 shrink-0 items-center justify-center border border-slate-100 bg-slate-50 px-6">
                  {partner.logo ? (
                    <Image src={partner.logo} alt={`Logo ${partner.name}`} width={160} height={80} className="h-14 w-32 object-contain" />
                  ) : (
                    <span className="text-base font-bold tracking-wide text-[#276f91]">{partner.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-500">Les logos IUT, ISTAG et KAVENOR sont intégrés. ISGA et MPT apparaissent en attendant leurs logos officiels.</p>

          <div className="mt-14 max-w-3xl">
            <p className="eyebrow text-[#438a2c]">Ouverture internationale</p>
            <h3 className="mt-3 text-2xl font-semibold text-[#032965]">Des plateformes de référence pour enrichir chaque parcours.</h3>
            <p className="mt-3 leading-7 text-slate-600">NAYAC oriente les apprenants les plus motivés vers des plateformes reconnues, afin de compléter les ateliers locaux par des ressources, parcours et certifications à portée internationale.</p>
          </div>
          <div className="group mt-7 overflow-hidden border-y border-slate-200 bg-white py-5" aria-label="Plateformes éducatives internationales">
            <div className="animate-partner-marquee flex w-max items-center gap-5 group-hover:[animation-play-state:paused]">
              {[...internationalPlatforms, ...internationalPlatforms].map((platform, index) => (
                <div key={`${platform.name}-${index}`} aria-hidden={index >= internationalPlatforms.length} className="flex h-20 w-56 shrink-0 items-center justify-center border border-slate-100 bg-slate-50 px-6 text-center">
                  <Image src={platform.logo} alt={`Logo ${platform.name}`} width={180} height={80} className="h-14 w-40 object-contain" />
                </div>
              ))}
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-500">Les plateformes affichées complètent le parcours local par des ressources et certifications de portée internationale.</p>
        </div>
      </section>

      <section className="bg-[#52a234] py-16 text-center text-white">
        <div className="container-custom"><h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight">Votre établissement peut faire partie des pionniers de l’éducation numérique.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">Commençons par une présentation du projet et une première session de sensibilisation gratuite.</p><Link href="/contact" className="mt-8 inline-flex bg-white px-7 py-4 font-semibold text-[#032965] transition hover:bg-[#eef7e9]">Nous contacter →</Link></div>
      </section>
    </main>
  )
}
