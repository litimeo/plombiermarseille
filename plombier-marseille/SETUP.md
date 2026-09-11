# Plombier Marseille — mise en ligne

## Stack

Le site est une application **React + TypeScript + Vite + Tailwind**, sans backend. Il se déploie comme un site statique sur Vercel.

## Formulaire Formspark

L'endpoint Formspark fourni est déjà intégré dans le formulaire :

```text
https://submit-form.com/DYAlSSiR6
```

Le formulaire reprend les champs requis du snippet (`name`, `email`, `message`) et ajoute deux champs utiles au contexte local (`besoin`, `zone`). Le sujet du lead est ajouté via `_subject`. Le formulaire fonctionne avec un POST HTML standard, sans langage ou script Formspark supplémentaire.

Si vous souhaitez gérer l'endpoint par variable Vercel, définissez `VITE_FORMSPARK_ENDPOINT` avec la même URL. Sinon, le fallback intégré fonctionne directement.

## Sitemap et indexation Google

La sitemap est disponible dans `client/public/sitemap.xml` et sera servie à la racine :

```text
https://votre-domaine.fr/sitemap.xml
```

Elle contient 36 URLs : accueil, pages principales, services, 16 arrondissements de Marseille et 8 communes voisines. Avant la mise en production, remplacez `plombier-marseille.vercel.app` dans `client/public/sitemap.xml` et `client/public/robots.txt` par le domaine réel.

Ensuite, dans Google Search Console :

1. Ajoutez et validez la propriété du domaine.
2. Ouvrez **Indexation → Sitemaps**.
3. Soumettez `sitemap.xml`.
4. Demandez éventuellement l'indexation de la page d'accueil et des pages prioritaires.

## Déploiement Vercel

Depuis la racine du projet :

```bash
pnpm install
pnpm build
```

Puis importez le dépôt dans Vercel. Le fichier `vercel.json` configure la commande de build, le dossier `dist/public` et le fallback nécessaire aux routes SEO côté client.

## Cocon SEO inclus

Le site contient des pages dédiées, reliées entre elles par des liens contextuels : pages principales (`plombier Marseille`, `plombier à Marseille`, `plombier sur Marseille`, `plombier pas cher Marseille`), services (`urgence plomberie`, fuite d'eau, débouchage, chauffe-eau, recherche de fuite, plomberie et installation), les 1er à 16e arrondissements et les communes d'Aubagne, Allauch, Plan-de-Cuques, Cassis, La Penne-sur-Huveaune, Roquevaire, Cabriès et Septèmes-les-Vallons.

Le contenu répète les requêtes principales dans les titres, introductions, paragraphes, questions et liens internes de façon sémantique. Il évite le keyword stuffing artificiel, qui peut nuire à la lisibilité et à la qualité SEO, au profit d'une couverture large des intentions de recherche.

## À personnaliser avant publication

Remplacez les mentions génériques par le vrai nom de l'opérateur, les garanties réellement proposées, les horaires exacts, le domaine final et les informations légales. Ajoutez ensuite toute donnée structurée réellement vérifiable (adresse, zone, horaires, avis) avant publication.
