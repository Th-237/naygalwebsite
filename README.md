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

Le test étudiant ne demande pas d’adresse e-mail et peut être recommencé sans limite. Le serveur
génère une session signée dans un cookie HttpOnly pour associer les réponses au bon QCM. Les scores
et les tentatives de la session sont conservés dans `data/passacad-attempts.json` en développement ;
les entrées inactives sont supprimées après 90 jours. Les fichiers de données créés par une version
antérieure peuvent encore contenir les adresses alors enregistrées, qui sont effacées lors de la
prochaine utilisation de l’API.

En production, définir
`PASSACAD_ATTEMPTS_FILE` vers un chemin absolu sur un volume persistant et inscriptible.
Configurer aussi `PASSACAD_HASH_SECRET` avec une valeur aléatoire privée d’au moins 32 caractères.
Les paramètres `SMTP_*` ne sont pas requis par PassAcad ; ils restent utilisés par le formulaire
de contact. Ne pas utiliser un disque éphémère ou un stockage local non partagé entre plusieurs
instances : les tentatives doivent rester sur le même volume persistant.
