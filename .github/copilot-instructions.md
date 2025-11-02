# Instructions GitHub Copilot pour Problem Solving Blog

## À propos du projet

Ce projet est un blog Astro explorant l'art et la science de la résolution de problèmes. Le contenu est rédigé en français et présente différentes méthodologies, techniques et exemples pratiques de problem solving.

## Stack technique

- **Framework**: Astro 5.x
- **Intégrations**: @astrojs/mdx pour le contenu
- **Langage**: TypeScript/JavaScript (ES Modules)
- **Style**: CSS intégré dans les composants Astro
- **Déploiement**: GitHub Pages (https://alassa50.github.io/Problem-solving-)

## Structure du projet

```
/
├── .github/
│   ├── workflows/          # GitHub Actions pour le déploiement
│   └── copilot-instructions.md
├── public/                 # Fichiers statiques (favicon, images)
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro      # Layout de base pour toutes les pages
│   │   └── BlogPost.astro        # Layout spécifique pour les articles
│   └── pages/
│       ├── index.astro           # Page d'accueil
│       ├── blog.astro            # Page listant tous les articles
│       └── blog/                 # Articles de blog en MDX
│           ├── definition-problem-solving.mdx
│           ├── methode-5-pourquoi.mdx
│           └── ...
├── astro.config.mjs        # Configuration Astro
├── package.json
└── tsconfig.json
```

## Conventions de code

### Langue

- **Tout le contenu visible par l'utilisateur doit être en français** (titres, descriptions, textes d'interface)
- Les commentaires de code peuvent être en français ou en anglais
- Les noms de variables et fonctions doivent être en anglais (convention standard)

### Composants Astro (.astro)

- Utiliser le frontmatter avec `---` pour la logique JavaScript/TypeScript
- Préférer les styles inline avec l'attribut `style` pour la simplicité
- Utiliser les variables CSS personnalisées définies dans le projet :
  - `var(--accent)` pour la couleur d'accentuation
  - `rgb(var(--gray))` pour le gris
  - `rgb(var(--gray-light))` pour le gris clair
- Formater les dates en français : `toLocaleDateString('fr-FR')`

### Articles de blog (.mdx)

- **Structure frontmatter obligatoire** :
  ```yaml
  ---
  layout: ../../layouts/BlogPost.astro
  title: "Titre de l'article"
  description: "Description complète de l'article"
  pubDate: YYYY-MM-DD
  ---
  ```

- **Organisation du contenu** :
  - Commencer par une introduction claire
  - Utiliser des titres de niveau 2 (`##`) pour les sections principales
  - Utiliser des titres de niveau 3 (`###`) pour les sous-sections
  - Inclure des exemples concrets quand c'est pertinent
  - Privilégier les listes à puces ou numérotées pour la clarté

- **Style d'écriture** :
  - Ton professionnel mais accessible
  - Phrases claires et concises
  - Utiliser le gras (`**texte**`) pour mettre en évidence les concepts clés
  - Éviter le jargon technique excessif
  - Fournir des explications concrètes avec des exemples

### Thématiques du blog

Les articles portent sur :
- Méthodologies de résolution de problèmes (5 Pourquoi, PDCA, etc.)
- Outils visuels (Diagramme d'Ishikawa, etc.)
- Problem solving en programmation
- Pensée critique et analyse
- Techniques de brainstorming
- Travail d'équipe et collaboration
- Analyse SWOT

## Configuration Astro

- **Base path**: `/Problem-solving-` (important pour les liens et les routes)
- **Site**: `https://alassa50.github.io`
- Toujours utiliser le base path dans les liens internes :
  - ✅ `/Problem-solving-/blog`
  - ❌ `/blog`

## Commandes importantes

```bash
npm install           # Installer les dépendances
npm run dev          # Serveur de développement (localhost:4321)
npm run build        # Build de production (avec astro check)
npm run preview      # Prévisualiser le build de production
```

## Bonnes pratiques

### Accessibilité

- Toujours inclure des attributs `alt` pour les images
- Utiliser une hiérarchie de titres logique (h1 → h2 → h3)
- Assurer un contraste suffisant pour le texte

### Performance

- Astro génère du HTML statique par défaut - ne pas ajouter de JavaScript côté client sans raison
- Optimiser les images avant de les ajouter dans `public/`

### SEO

- Toujours fournir un `title` et une `description` pour chaque page
- Les descriptions doivent être informatives et concises (150-160 caractères)

### Git et déploiement

- Le déploiement sur GitHub Pages est automatique via GitHub Actions
- Pousser sur `main` déclenche le build et le déploiement
- Vérifier que le build passe avant de merger (`npm run build`)

## Création de nouveaux articles

Pour ajouter un nouvel article :

1. Créer un fichier `.mdx` dans `src/pages/blog/`
2. Utiliser un nom de fichier en kebab-case descriptif
3. Ajouter le frontmatter complet (layout, title, description, pubDate)
4. Structurer le contenu avec des sections claires
5. Relire pour vérifier l'orthographe et la grammaire française
6. Tester localement avec `npm run dev`

## Exemples de code

### Lien interne vers un article

```astro
<a href="/Problem-solving-/blog/methode-5-pourquoi">La Méthode des 5 Pourquoi</a>
```

### Bouton stylisé

```astro
<a 
  href="/Problem-solving-/blog" 
  style="display: inline-block; background: var(--accent); color: white; padding: 0.75rem 2rem; border-radius: 5px; font-weight: bold; text-decoration: none;"
>
  Texte du bouton
</a>
```

### Grille responsive

```astro
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
  <!-- Contenu -->
</div>
```

## Remarques importantes

- **Ne pas modifier** la configuration `base` dans `astro.config.mjs` sans raison valable
- Tester les liens après modification pour s'assurer qu'ils fonctionnent avec le base path
- Maintenir la cohérence du style entre les articles existants
- Privilégier la simplicité et la clarté dans le code et le contenu
