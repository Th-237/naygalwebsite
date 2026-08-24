# Utiliser les polices Microsoft (Segoe UI)

Ce projet peut utiliser les polices Microsoft (Segoe UI) lorsque disponibles sur le système ou si vous fournissez les fichiers webfont licenciés.

Important — licence
- Segoe UI et d'autres polices Microsoft sont la propriété de Microsoft. Vous ne devez pas redistribuer ces fichiers sans licence.

Options d'utilisation

1) Utilisation système (recommandée)
- Si vos utilisateurs (ou votre environnement Windows) ont déjà `Segoe UI` installé, le navigateur utilisera la police locale automatiquement via `local('Segoe UI')`.
- Aucune action supplémentaire nécessaire.

2) Héberger les fichiers (si vous avez une licence)
- Placez les fichiers webfont licenciés dans `public/fonts/`, par exemple :
  - `public/fonts/SegoeUI.woff2`
  - `public/fonts/SegoeUIVariable.woff2`
- Le CSS du projet inclut déjà des règles `@font-face` qui tenteront d'utiliser ces fichiers.

3) Alternative open-source
- Si vous ne pouvez pas utiliser Segoe UI pour des raisons de licence, utilisez une police open-source proche (ex: `Inter`, `Roboto`, `Noto Sans`) et modifiez `app/globals.css` pour la référencer.

À propos du code
- Les règles `@font-face` dans `app/globals.css` privilégient la présence locale (`local()`), puis utilisent `url('/fonts/...')` si vous fournissez les fichiers.
- N'ajoutez pas de fichiers propriétaires au dépôt public sans vérification de licence.

Besoin d'aide
- Voulez-vous que j'ajoute une copie d'exemple (vide) dans `public/fonts/` et un script d'extraction pour les plateformes qui supportent l'installation automatique ? Je peux aussi basculer le site vers `Inter` ou `Roboto` si vous préférez une solution entièrement libre.
