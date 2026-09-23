# NSI MAKER

Ressource pédagogique autonome, en français, pour Première et Terminale NSI.

## Lancement

Ouvrir `index.html` dans un navigateur récent. Aucun téléchargement, service externe, serveur ni compilation nécessaire. Garder `index.html`, `maker.css` et `maker.js` ensemble. Les liens documentaires externes sont facultatifs.

## Intégration

Le dossier initial contenait uniquement un dépôt Git sans commit, sans remote et sans fichiers du site. Aucun style, composant ou menu existant ne pouvait être repris ou testé. Pour intégrer la ressource, copier ces trois fichiers dans un sous-dossier `nsi-maker/` du site et ajouter un lien vers `nsi-maker/index.html` à sa navigation. Ne pas remplacer l’index du site hôte. Les styles sont isolés par la page autonome.

## Choix techniques

- HTML sémantique, CSS responsive et JavaScript natif ; aucune dépendance en production.
- SVG locaux pour les schémas, simulation de couches, modèle de disque, code synchronisé et exports texte SCAD/Python via Blob.
- Coloration syntaxique légère locale ; copie avec repli pour un contexte fichier local.
- Quiz à huit questions avec corrections, indices séquentiels, correction masquée jusqu’au troisième indice.
- Navigation clavier, focus visible, sommaire, retours de quiz, préférence de réduction des animations.
- Aucun Python/OpenSCAD exécuté dans le navigateur : les vues sont des illustrations, pas un moteur géométrique ni un slicer. Les exports STL réels nécessitent OpenSCAD sur le poste.
- La série de disques est exportée également en fichiers séparés pour éviter une rangée dépassant le plateau. Pas d’impression sans validation de l’enseignant.

## Vérification

Voir `VERIFICATION.md`. `tests/interaction.cjs` est un contrôle navigateur avec Playwright (outil de développement uniquement). Exécution : `node tests/interaction.cjs` avec Playwright disponible dans `NODE_PATH` ou installé localement. Les captures de test ne sont pas nécessaires au fonctionnement.

## Passerelle S01

La version intégrée dans `siteNSI/TP/nsi-maker` ajoute `s01.js`, `s01.css` et trois PDF élèves dans `documents/`. Conserver ces ressources avec la page. Les renvois au chapitre Terminale et à NSI Arcade utilisent des chemins relatifs dans le site. Les corrigés ne sont pas publiés.
