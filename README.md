# naygalwebsite

Il s'agit du site web du projet nayagl et naygal academie.

Ce projet a été initialisé avec [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Pour démarrer le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

## PassAcad

Le parcours étudiant ne demande plus de code par e-mail. L’adresse saisie sert d’identifiant
déclaratif : le serveur génère une session signée dans un cookie HttpOnly et enregistre l’adresse,
les scores et les tentatives dans `data/passacad-attempts.json` en développement. Trois échecs
déclenchent un blocage d’une heure pour cette adresse. Les entrées inactives sont supprimées
après 90 jours.

Sans vérification par e-mail, une personne peut saisir une adresse qui ne lui appartient pas
ou en changer pour contourner le blocage par adresse. L’e-mail est conservé en clair dans le JSON
du serveur ; limiter l’accès à ce fichier et sauvegarder le volume selon les règles de confidentialité
applicables. En production, définir
`PASSACAD_ATTEMPTS_FILE` vers un chemin absolu sur un volume persistant et inscriptible.
Configurer aussi `PASSACAD_HASH_SECRET` avec une valeur aléatoire privée d’au moins 32 caractères.
Les paramètres `SMTP_*` ne sont pas requis par PassAcad ; ils restent utilisés par le formulaire
de contact. Ne pas utiliser un disque éphémère ou un stockage local non partagé entre plusieurs
instances : les tentatives doivent rester sur le même volume persistant.
