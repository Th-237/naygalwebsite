import 'server-only'
import { randomInt } from 'node:crypto'
import type { StudyDomain, StoredQuizQuestion } from './passacad-types'

export const passingScore = 4
export const quizQuestionCount = 7

const naygalQuestions: StoredQuizQuestion[] = [
  {
    id: 'study-career-future',
    prompt: 'À ton avis, aujourd’hui, les études suffisent-elles à elles seules pour construire un avenir professionnel solide ?',
    options: [
      'Elles apportent des bases importantes, mais il faut aussi continuer à apprendre, acquérir de l’expérience et développer des compétences numériques utiles.',
      'Oui : une fois le diplôme obtenu, les compétences et les outils numériques n’ont plus vraiment besoin d’évoluer.',
      'Pas forcément : le plus sûr reste de trouver des relations très haut placées… et de leur laisser refaire son CV à sa place !',
    ],
    answer: 0,
  },
  {
    id: 'academy-purpose',
    prompt: 'Une université veut lancer une académie NAYGAL sous un nom lié à son identité. Quel exemple correspond au modèle de NAYGAL Academy ?',
    options: [
      'À l’ISTAG, l’Académie des bâtisseurs transmet des compétences numériques aux étudiants.',
      'À l’ISTAG, l’académie prend le nom de l’université mais propose uniquement des prestations aux entreprises.',
      'À l’ISTAG, l’académie organise des événements ponctuels sans parcours de transmission de compétences.',
    ],
    answer: 0,
  },
]

const reasoningQuestions: Record<StudyDomain, StoredQuizQuestion[]> = {
  it: [
    {
      id: 'it-network-scope',
      prompt: 'Dans un campus, les étudiants d’un seul bâtiment perdent l’accès au réseau ; les autres bâtiments et Internet fonctionnent. Quel premier test aide le plus à localiser la panne ?',
      options: [
        'Comparer la connexion d’un appareil touché en Wi-Fi et en câble, puis vérifier l’équipement commun à ce bâtiment.',
        'Vérifier si les appareils touchés reçoivent une adresse réseau et une passerelle cohérentes.',
        'Comparer les journaux du point d’accès du bâtiment avec ceux d’un bâtiment qui fonctionne.',
      ],
      answer: 0,
    },
    {
      id: 'it-data-growth',
      prompt: 'Une application affiche 100 nouveaux dossiers chaque jour. Au bout d’une semaine, elle en affiche toujours environ 100 au total. Quelle hypothèse faut-il vérifier en premier ?',
      options: [
        'Les dossiers précédents sont peut-être remplacés ; comparer les enregistrements persistés au résultat affiché.',
        'La page affiche peut-être seulement un nombre limité de résultats ; comparer le compteur à la requête complète.',
        'Les créations peuvent être différées ou échouer ; comparer les demandes reçues aux écritures confirmées.',
      ],
      answer: 0,
    },
    {
      id: 'it-software-test',
      prompt: 'Une modification corrige un bug signalé, mais un autre écran se met ensuite à afficher de mauvaises données. Quelle démarche réduit le risque de nouvelles régressions ?',
      options: [
        'Reproduire les deux cas, isoler le changement commun et vérifier les comportements avec des tests ciblés.',
        'Restaurer rapidement la version précédente, puis réintroduire la correction après avoir couvert les deux cas.',
        'Corriger le nouvel écran séparément et vérifier ensuite que le bug initial ne réapparaît pas.',
      ],
      answer: 0,
    },
  ],
  engineering: [
    {
      id: 'eng-sensor-reliability',
      prompt: 'Deux capteurs mesurent la même pièce : l’un indique 24 °C et l’autre 28 °C. Quelle vérification permet le mieux de départager les mesures ?',
      options: [
        'Les placer côte à côte, vérifier leur étalonnage et répéter la mesure dans les mêmes conditions.',
        'Comparer leur historique de calibration et leur temps de réponse avant une nouvelle mesure.',
        'Faire plusieurs lectures avec chaque capteur et comparer leur dispersion, sans corriger leur éventuel décalage.',
      ],
      answer: 0,
    },
    {
      id: 'eng-prototype-testing',
      prompt: 'Un prototype consomme plus d’énergie que prévu. Pour savoir quelle modification l’améliore réellement, que faut-il faire ?',
      options: [
        'Modifier un paramètre à la fois et comparer la consommation dans des conditions identiques.',
        'Changer plusieurs composants en même temps et attribuer le résultat au composant le moins cher.',
        'Réduire la durée du test jusqu’à ce que la consommation mesurée baisse.',
      ],
      answer: 0,
    },
    {
      id: 'eng-data-interpretation',
      prompt: 'Un graphique semble montrer que la température augmente quand la ventilation accélère. Avant d’en déduire une causalité, que vérifier ?',
      options: [
        'L’ordre des mesures, les unités et l’existence d’un autre facteur qui varie en même temps.',
        'Si les deux variables ont été mesurées sur la même période et avec une résolution comparable.',
        'Si la ventilation a été modifiée avant la hausse, puis comparer avec une période sans modification.',
      ],
      answer: 0,
    },
  ],
  business: [
    {
      id: 'biz-sales-analysis',
      prompt: 'Une boutique reçoit plus de visites après une campagne, mais son bénéfice baisse. Quelle analyse est la plus utile avant d’augmenter le budget publicitaire ?',
      options: [
        'Comparer par canal le coût d’acquisition, le taux d’achat, la marge et les retours.',
        'Comparer les nouveaux visiteurs aux clients réguliers et vérifier si les produits achetés ont la même marge.',
        'Examiner le coût publicitaire et les abandons de panier avant de décider si la campagne doit être ajustée.',
      ],
      answer: 0,
    },
    {
      id: 'biz-stock-analysis',
      prompt: 'Un commerce manque souvent d’un produit alors que son stock théorique indique qu’il en reste. Quelle première vérification est la plus pertinente ?',
      options: [
        'Comparer les entrées, les ventes et les pertes réelles sur un échantillon de références.',
        'Effectuer un comptage physique ciblé et rapprocher chaque écart des mouvements récents.',
        'Vérifier si les ventes et les réceptions sont enregistrées au même moment que les mouvements réels.',
      ],
      answer: 0,
    },
    {
      id: 'biz-survey-quality',
      prompt: 'Une enquête en ligne indique que 90 % des répondants veulent un nouveau service. Quelle information manque le plus pour décider de le lancer ?',
      options: [
        'Comment les répondants ont été sélectionnés et s’ils accepteraient réellement de payer ou de l’utiliser.',
        'Si les répondants représentent les utilisateurs visés et rencontrent le problème que le service veut résoudre.',
        'Si les personnes interrogées choisiraient le service face aux solutions qu’elles utilisent déjà.',
      ],
      answer: 0,
    },
  ],
  creative: [
    {
      id: 'creative-campaign-testing',
      prompt: 'Une affiche est très appréciée en réunion, mais peu de personnes comprennent l’action demandée lorsqu’elles la voient sur téléphone. Quel test est le plus instructif ?',
      options: [
        'La montrer sur téléphone à quelques personnes du public visé et leur demander ce qu’elles comprennent et feraient.',
        'Ajouter davantage de texte pour que tous les détails soient présents sur l’affiche.',
        'Conserver la version actuelle puisque les personnes présentes en réunion l’ont appréciée.',
      ],
      answer: 0,
    },
    {
      id: 'creative-audience-analysis',
      prompt: 'Deux versions d’un visuel obtiennent le même nombre de clics, mais l’une provoque plus d’inscriptions terminées. Quelle conclusion est la plus solide ?',
      options: [
        'Comparer le parcours complet et tester si la différence se répète auprès d’un public comparable.',
        'Vérifier si les publics et les périodes étaient comparables avant d’attribuer l’écart au visuel.',
        'Garder la version qui convertit mieux et vérifier que le résultat se maintient sur un nouvel échantillon.',
      ],
      answer: 0,
    },
    {
      id: 'creative-feedback-criteria',
      prompt: 'Deux responsables demandent des changements opposés sur une maquette. Quelle question aide le mieux à décider ?',
      options: [
        'Quel objectif utilisateur et quel critère de réussite chacun cherche-t-il à améliorer ?',
        'Quelle demande s’appuie sur des retours d’utilisateurs ou des contraintes vérifiables ?',
        'Peut-on tester les deux variantes auprès du même public avant de choisir ?',
      ],
      answer: 0,
    },
  ],
  other: [
    {
      id: 'other-schedule-priorities',
      prompt: 'Tu dois remettre un dossier dans trois jours, mais une donnée essentielle manque. Quelle action protège le mieux le délai sans inventer d’information ?',
      options: [
        'Demander la donnée tout de suite, avancer les parties indépendantes et signaler clairement ce qui reste à confirmer.',
        'Définir une estimation provisoire avec sa source et la faire valider avant de l’utiliser dans les conclusions.',
        'Préparer le dossier avec un emplacement réservé et préciser qui doit fournir la donnée et à quelle échéance.',
      ],
      answer: 0,
    },
    {
      id: 'other-source-comparison',
      prompt: 'Deux sources fiables donnent des chiffres différents sur un même sujet. Quel réflexe permet une comparaison équitable ?',
      options: [
        'Vérifier la période, la définition et la méthode utilisées par chacune.',
        'Vérifier si elles couvrent la même population et le même territoire avant de comparer les valeurs.',
        'Comparer les méthodes de collecte et retenir celle qui répond le mieux à la question posée.',
      ],
      answer: 0,
    },
    {
      id: 'other-project-outcome',
      prompt: 'Un projet accumule des tâches terminées, mais son objectif principal n’avance pas. Quelle décision est la plus utile ?',
      options: [
        'Revoir les tâches à partir du résultat attendu et supprimer ou réordonner celles qui n’y contribuent pas.',
        'Vérifier si le résultat attendu est encore mesurable et compris de la même façon par l’équipe.',
        'Identifier le blocage principal et réaffecter les efforts avant d’ajouter du travail.',
      ],
      answer: 0,
    },
  ],
}

const digitalFutureQuestions: StoredQuizQuestion[] = [
  {
    id: 'future-digital-access',
    prompt: 'Un service numérique doit aider des usagers dont certains ont un téléphone ancien et une connexion irrégulière. Quel choix sert le mieux son adoption réelle ?',
    options: [
      'Concevoir un parcours léger, utilisable sur téléphone modeste, avec une solution en cas de coupure.',
      'Tester une version web légère et un parcours permettant de reprendre une démarche interrompue.',
      'Proposer une application complète avec synchronisation différée, puis mesurer son fonctionnement sur les appareils les plus anciens.',
    ],
    answer: 0,
  },
  {
    id: 'future-digital-ai',
    prompt: 'Une organisation veut utiliser l’IA pour orienter des demandes importantes. Quelle démarche est la plus responsable avant un déploiement large ?',
    options: [
      'Tester les résultats sur des cas variés, prévoir une vérification humaine et un moyen de contester une décision.',
      'Comparer l’outil à la procédure actuelle et limiter son usage aux cas où une personne peut revoir la décision.',
      'Faire un pilote avec des cas représentatifs, une mesure des erreurs et des règles d’escalade vers un humain.',
    ],
    answer: 0,
  },
  {
    id: 'future-digital-skills',
    prompt: 'Une nouvelle technologie est disponible, mais les équipes ne savent pas encore quel problème elle résout. Quelle étape devrait précéder l’investissement ?',
    options: [
      'Observer les besoins, définir un résultat mesurable et tester une petite solution avec les personnes concernées.',
      'Comparer quelques usages possibles à la stratégie de l’organisation avant de choisir un projet pilote.',
      'Mener un pilote limité avec un indicateur de valeur, un coût estimé et un critère d’arrêt.',
    ],
    answer: 0,
  },
]

const studySuccessQuestions: StoredQuizQuestion[] = [
  {
    id: 'study-success-revision',
    prompt: 'Un examen approche et tu reconnais les cours en les relisant, mais tu as du mal à répondre sans les notes. Quelle stratégie teste mieux ta maîtrise ?',
    options: [
      'Fermer le cours, répondre à des questions de mémoire, corriger ses erreurs puis revoir les notions à intervalles espacés.',
      'Faire un sujet blanc dans les conditions de l’examen, puis consacrer le temps restant aux erreurs récurrentes.',
      'Alterner les chapitres et s’interroger sans notes, en espaçant les reprises des notions difficiles.',
    ],
    answer: 0,
  },
  {
    id: 'study-success-team',
    prompt: 'Dans un travail de groupe, une seule personne avance tandis que les autres attendent des consignes. Quel changement rend le travail plus apprenant et plus fiable ?',
    options: [
      'Découper le livrable, attribuer des responsabilités explicites et prévoir des points de revue croisée.',
      'Faire expliciter les prochaines tâches par le groupe, puis vérifier régulièrement les dépendances entre elles.',
      'Attribuer des parties selon les compétences de chacun et convenir à l’avance d’une intégration commune.',
    ],
    answer: 0,
  },
  {
    id: 'study-success-feedback',
    prompt: 'Après une mauvaise note, quelle démarche donne le meilleur levier pour progresser au prochain devoir ?',
    options: [
      'Classer les erreurs par cause, demander un retour ciblé et s’entraîner sur les notions mal comprises.',
      'Comparer la copie au barème pour distinguer erreur de méthode, de connaissance et de gestion du temps.',
      'Demander un exemple de réponse attendue et refaire un exercice différent sur les mêmes notions.',
    ],
    answer: 0,
  },
]

const digitalEconomyQuestions: StoredQuizQuestion[] = [
  {
    id: 'economy-conversion',
    prompt: 'Une boutique en ligne double son audience, mais ses revenus restent stables. Quelle analyse permet de savoir où agir ?',
    options: [
      'Examiner le parcours par type d’usager : visites, commandes commencées, paiements aboutis et panier moyen.',
      'Comparer les conversions par canal et appareil pour repérer où la progression diffère.',
      'Examiner le panier moyen, les abandons et les paiements refusés avant de choisir une action.',
    ],
    answer: 0,
  },
  {
    id: 'economy-mobile-money',
    prompt: 'Des commerçants hésitent à accepter un paiement numérique malgré une demande des clients. Quelle enquête éclaire le mieux le problème économique ?',
    options: [
      'Comparer frais, délais de réception, réseau disponible et contraintes de trésorerie avec commerçants et clients.',
      'Observer une transaction réelle et comparer son coût total et son délai à ceux du paiement actuel.',
      'Interroger séparément commerçants et clients sur les frais, la confiance et les situations où le paiement échoue.',
    ],
    answer: 0,
  },
  {
    id: 'economy-digital-value',
    prompt: 'Une plateforme attire beaucoup d’inscriptions gratuites, mais peu d’utilisateurs reviennent. Quel indicateur aide à distinguer visibilité et valeur durable ?',
    options: [
      'Le retour des utilisateurs et la réalisation répétée d’une action utile, segmentés selon leurs besoins.',
      'La part des nouveaux inscrits qui réalisent à nouveau l’action principale après plusieurs semaines.',
      'Le taux de rétention par cohorte, associé à l’usage qui répond effectivement au besoin annoncé.',
    ],
    answer: 0,
  },
]

const futureJobsQuestions: StoredQuizQuestion[] = [
  {
    id: 'jobs-ai-routine',
    prompt: 'Si un outil automatise une partie des rapports d’un métier, quelle compétence aide le plus à garder une contribution utile ?',
    options: [
      'Vérifier la qualité des données, interpréter les résultats dans leur contexte et expliquer les décisions.',
      'Savoir formuler les bonnes questions, repérer les limites de l’outil et relier ses résultats aux besoins du métier.',
      'Se spécialiser dans la validation des résultats tout en approfondissant les connaissances du secteur concerné.',
    ],
    answer: 0,
  },
  {
    id: 'jobs-career-portfolio',
    prompt: 'Tu débutes et n’as pas encore d’expérience professionnelle. Quel élément de portfolio montre le mieux ta capacité à contribuer ?',
    options: [
      'Un projet concret qui explique le besoin, tes choix, les difficultés rencontrées et le résultat obtenu.',
      'Un projet réalisé pour un besoin réel, accompagné de retours reçus et des améliorations apportées.',
      'Une étude de cas qui justifie les choix effectués et distingue clairement ce qui a été testé de ce qui reste à faire.',
    ],
    answer: 0,
  },
  {
    id: 'jobs-career-learning',
    prompt: 'Face à un métier qui évolue vite, quel plan d’apprentissage est le plus robuste ?',
    options: [
      'Combiner des bases transférables, des projets pratiques et une veille régulière sur les outils du secteur.',
      'Renforcer les fondamentaux du métier et actualiser les outils à partir de projets et de retours concrets.',
      'Choisir une spécialité recherchée, tout en gardant du temps pour les compétences voisines qui la complètent.',
    ],
    answer: 0,
  },
]

function shuffle<T>(items: T[]) {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInt(index + 1)
    const current = result[index]
    const swap = result[swapIndex]
    if (current !== undefined && swap !== undefined) {
      result[index] = swap
      result[swapIndex] = current
    }
  }
  return result
}

function pickQuestion(pool: StoredQuizQuestion[]) {
  const question = pool[randomInt(pool.length)]
  if (!question) throw new Error('A PassAcad student question pool is empty.')
  return question
}

export function createStudentQuiz(domain: StudyDomain): StoredQuizQuestion[] {
  const questions = [
    ...naygalQuestions,
    pickQuestion(reasoningQuestions[domain]),
    pickQuestion(digitalFutureQuestions),
    pickQuestion(studySuccessQuestions),
    pickQuestion(digitalEconomyQuestions),
    pickQuestion(futureJobsQuestions),
  ]

  return shuffle(questions).map((question) => {
    const optionIndexes = shuffle(question.options.map((_, index) => index))
    return {
      ...question,
      options: optionIndexes.map((index) => question.options[index] ?? ''),
      answer: optionIndexes.indexOf(question.answer),
    }
  })
}
