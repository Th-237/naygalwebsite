import 'server-only'
import type { StudyDomain, StoredQuizQuestion } from './passacad-types'

export const passingScore = 3
export const quizQuestionCount = 5

export const studentTests: Record<StudyDomain, StoredQuizQuestion[]> = {
  it: [
    { id: 'it-password-link', prompt: 'Un site te demande ton mot de passe après un clic sur un lien inattendu. Quel réflexe adopter ?', options: ['Vérifier l’adresse et l’expéditeur avant toute action.', 'Répondre si le message semble urgent.', 'Transférer le lien à ses contacts.'], answer: 0 },
    { id: 'it-router', prompt: 'À quoi sert principalement un routeur dans un réseau ?', options: ['À relier des réseaux et orienter les données.', 'À remplacer tous les logiciels d’un ordinateur.', 'À stocker les mots de passe des utilisateurs.'], answer: 0 },
    { id: 'it-account', prompt: 'Comment mieux protéger un compte en ligne ?', options: ['Réutiliser le même mot de passe partout.', 'Utiliser un mot de passe unique et activer la double authentification.', 'Envoyer son mot de passe à un ami.'], answer: 1 },
    { id: 'it-ai', prompt: 'Une IA donne une réponse technique importante. Que faire ?', options: ['La vérifier avec une documentation ou une source fiable.', 'La considérer exacte parce qu’elle est bien formulée.', 'La publier sans la relire.'], answer: 0 },
    { id: 'it-documentation', prompt: 'Pourquoi documenter un projet informatique ?', options: ['Pour faciliter sa compréhension, son usage et sa maintenance.', 'Pour empêcher toute collaboration.', 'Pour remplacer les tests.'], answer: 0 },
    { id: 'it-backup', prompt: 'Une mise à jour importante est prévue sur un serveur. Quel réflexe est le plus prudent ?', options: ['Vérifier qu’une sauvegarde récente peut être restaurée.', 'Désactiver toutes les sauvegardes.', 'Lancer la mise à jour sans vérifier les dépendances.'], answer: 0 },
    { id: 'it-permissions', prompt: 'Quel principe appliquer pour donner un accès à un outil professionnel ?', options: ['Donner uniquement les droits nécessaires à la mission.', 'Partager un compte administrateur avec toute l’équipe.', 'Laisser les accès actifs après le départ d’un membre.'], answer: 0 },
    { id: 'it-network', prompt: 'Un collègue ne peut plus accéder au réseau. Quelle première vérification est utile ?', options: ['Vérifier sa connexion et l’étendue du problème avant de modifier la configuration.', 'Réinitialiser tous les équipements du bureau.', 'Désactiver le pare-feu sans diagnostic.'], answer: 0 },
  ],
  engineering: [
    { id: 'eng-sensor', prompt: 'Tu utilises un capteur pour mesurer une température. Quel élément faut-il aussi considérer ?', options: ['La précision et les conditions de mesure du capteur.', 'La couleur du boîtier uniquement.', 'Le nombre de personnes dans la salle.'], answer: 0 },
    { id: 'eng-prototype', prompt: 'Avant de construire un prototype, quelle démarche est la plus utile ?', options: ['Définir le problème et tester une première solution simple.', 'Acheter tous les composants disponibles.', 'Attendre que la solution soit parfaite avant tout essai.'], answer: 0 },
    { id: 'eng-graph', prompt: 'Un graphique montre des résultats inattendus. Que faire ?', options: ['Vérifier les données, les unités et la méthode de mesure.', 'Supprimer les résultats qui dérangent.', 'Conclure immédiatement que l’expérience a réussi.'], answer: 0 },
    { id: 'eng-simulation', prompt: 'Quel usage du numérique peut aider un projet d’ingénierie ?', options: ['Simuler ou modéliser une solution avant sa réalisation.', 'Éviter toute prise de mesure.', 'Remplacer la collaboration entre les membres.'], answer: 0 },
    { id: 'eng-ai', prompt: 'Une IA propose une solution à un problème technique. Quelle est la bonne suite ?', options: ['Vérifier ses hypothèses et tester la solution.', 'L’appliquer sans contrôle.', 'Ignorer les contraintes du projet.'], answer: 0 },
    { id: 'eng-units', prompt: 'Deux mesures doivent être comparées. Que faut-il vérifier en priorité ?', options: ['Qu’elles utilisent des unités et des conditions comparables.', 'Qu’elles aient été écrites avec la même couleur.', 'Qu’elles proviennent du même ordinateur.'], answer: 0 },
    { id: 'eng-safety', prompt: 'Avant un essai avec un montage électrique, quelle priorité adopter ?', options: ['Identifier les risques et respecter les consignes de sécurité.', 'Augmenter la puissance pour gagner du temps.', 'Laisser le montage sans surveillance.'], answer: 0 },
    { id: 'eng-team', prompt: 'Un prototype ne fonctionne pas comme prévu. Quelle réaction aide le projet ?', options: ['Noter les observations et tester les causes une par une.', 'Masquer les résultats et présenter le prototype comme terminé.', 'Modifier plusieurs paramètres au hasard.'], answer: 0 },
  ],
  business: [
    { id: 'biz-payment', prompt: 'Tu reçois une facture inattendue avec un lien de paiement. Que faire ?', options: ['Vérifier l’expéditeur et confirmer la demande par un canal officiel.', 'Payer rapidement pour éviter un blocage.', 'Partager le lien avec toute l’équipe.'], answer: 0 },
    { id: 'biz-spreadsheet', prompt: 'À quoi sert un tableur dans une petite activité ?', options: ['Organiser et analyser des données comme les ventes ou les dépenses.', 'Remplacer automatiquement toute décision de gestion.', 'Protéger un compte contre tous les piratages.'], answer: 0 },
    { id: 'biz-client-data', prompt: 'Quel est un bon réflexe avant de partager un fichier client ?', options: ['Vérifier les destinataires et limiter l’accès aux personnes concernées.', 'Le rendre public pour gagner du temps.', 'L’envoyer dans un groupe non lié au travail.'], answer: 0 },
    { id: 'biz-ai', prompt: 'Une IA aide à rédiger une proposition commerciale. Que faire avant de l’envoyer ?', options: ['Vérifier les chiffres, les faits et le ton.', 'Envoyer le texte sans relecture.', 'Ajouter des informations confidentielles du client.'], answer: 0 },
    { id: 'biz-indicators', prompt: 'Pourquoi suivre des indicateurs dans un projet ?', options: ['Pour comprendre les résultats et ajuster les actions.', 'Pour éviter d’écouter les besoins des clients.', 'Pour garantir le succès sans autre effort.'], answer: 0 },
    { id: 'biz-password', prompt: 'Un collègue quitte l’équipe. Que faire pour protéger les outils partagés ?', options: ['Mettre à jour ses accès selon la procédure de l’organisation.', 'Garder son mot de passe pour les prochains arrivants.', 'Publier les identifiants dans un groupe.'], answer: 0 },
    { id: 'biz-backup', prompt: 'Pourquoi conserver une sauvegarde des documents importants ?', options: ['Pour les récupérer après une erreur ou une panne.', 'Pour les rendre accessibles publiquement.', 'Pour éviter de classer les fichiers.'], answer: 0 },
    { id: 'biz-feedback', prompt: 'Un client signale un problème récurrent. Quelle démarche est la plus utile ?', options: ['Documenter le problème et chercher sa cause avant de proposer une solution.', 'Ignorer le retour si le service fonctionne parfois.', 'Supprimer les messages du client.'], answer: 0 },
  ],
  creative: [
    { id: 'creative-rights', prompt: 'Tu publies une image trouvée en ligne pour un projet. Que vérifier ?', options: ['Les droits d’utilisation et les conditions de la licence.', 'Uniquement sa résolution.', 'Si elle a déjà été publiée par quelqu’un.'], answer: 0 },
    { id: 'creative-accessibility', prompt: 'Comment rendre un visuel plus accessible ?', options: ['Prévoir un contraste lisible et des descriptions utiles.', 'Utiliser le plus de polices possible.', 'Mettre toutes les informations dans une image sans texte alternatif.'], answer: 0 },
    { id: 'creative-ai', prompt: 'Une IA génère une illustration pour une campagne. Quel réflexe garder ?', options: ['Relire le résultat et vérifier les droits et les biais possibles.', 'Publier sans vérifier.', 'Présenter automatiquement l’image comme une photo réelle.'], answer: 0 },
    { id: 'creative-files', prompt: 'Avant de partager un dossier de création avec un client, que faire ?', options: ['Vérifier les accès et ne partager que les fichiers nécessaires.', 'Activer un lien public permanent.', 'Inclure les brouillons confidentiels d’autres clients.'], answer: 0 },
    { id: 'creative-collaboration', prompt: 'Quel outil facilite le travail d’une équipe créative ?', options: ['Un espace partagé avec des versions et des retours organisés.', 'Des fichiers envoyés sans nom ni date.', 'Un seul mot de passe communiqué à tous.'], answer: 0 },
    { id: 'creative-fonts', prompt: 'Tu utilises une police téléchargée pour un projet commercial. Que vérifier ?', options: ['Que sa licence autorise cet usage.', 'Que le fichier porte un nom court.', 'Que la police est installée sur ton ordinateur uniquement.'], answer: 0 },
    { id: 'creative-feedback', prompt: 'Tu reçois un retour contradictoire sur un visuel. Quelle suite est utile ?', options: ['Clarifier l’objectif et les critères avant de réviser la proposition.', 'Ignorer tous les commentaires.', 'Changer le design au hasard.'], answer: 0 },
    { id: 'creative-export', prompt: 'Avant de publier une affiche, que vérifier ?', options: ['Le texte, les coordonnées, le format et la lisibilité sur mobile.', 'Uniquement la taille du fichier.', 'Que tous les éléments soient animés.'], answer: 0 },
  ],
  other: [
    { id: 'other-link', prompt: 'Un lien inattendu te demande ton mot de passe. Que faire ?', options: ['Vérifier la source et ne pas communiquer son mot de passe.', 'Répondre si le message semble urgent.', 'Transférer le lien à ses contacts.'], answer: 0 },
    { id: 'other-account', prompt: 'Quel est le meilleur réflexe pour protéger un compte important ?', options: ['Utiliser le même mot de passe partout.', 'Choisir un mot de passe unique et activer la double authentification.', 'Envoyer le mot de passe à un proche.'], answer: 1 },
    { id: 'other-ai', prompt: 'Une IA donne une information importante. Que faire ?', options: ['La vérifier avec des sources fiables.', 'La croire automatiquement.', 'La partager tout de suite.'], answer: 0 },
    { id: 'other-backup', prompt: 'Pourquoi sauvegarder ses fichiers importants ?', options: ['Pour les récupérer en cas de perte ou de panne.', 'Pour supprimer les originaux.', 'Ce n’est utile qu’aux informaticiens.'], answer: 0 },
    { id: 'other-community', prompt: 'Quelle attitude aide une communauté en ligne à progresser ?', options: ['Respecter les autres et partager des ressources utiles.', 'Publier sans rapport avec le sujet.', 'Garder pour soi les informations utiles.'], answer: 0 },
    { id: 'other-privacy', prompt: 'Avant de publier la photo d’une autre personne, que faire ?', options: ['Demander son accord et respecter son choix.', 'Ajouter sa localisation personnelle.', 'La publier dans tous les groupes.'], answer: 0 },
    { id: 'other-public-wifi', prompt: 'Tu te connectes à un Wi-Fi public. Quel réflexe est prudent ?', options: ['Éviter les opérations sensibles si la connexion n’est pas fiable.', 'Partager tes identifiants avec les autres utilisateurs.', 'Désactiver le verrouillage de ton téléphone.'], answer: 0 },
    { id: 'other-source', prompt: 'Tu vois une information surprenante sur un réseau social. Que faire ?', options: ['Vérifier la source avant de la relayer.', 'La transférer immédiatement.', 'Ajouter des détails non vérifiés.'], answer: 0 },
  ],
}
