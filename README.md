# Problem Solving Blog

Un blog Astro explorant l'art et la science de la résolution de problèmes à travers des articles, exemples et insights pratiques.

## 🚀 Structure du Projet

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPost.astro
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── definition-problem-solving.mdx
│   │   │   ├── methode-5-pourquoi.mdx
│   │   │   ├── diagramme-ishikawa.mdx
│   │   │   └── problem-solving-programmation.mdx
│   │   ├── index.astro
│   │   └── blog.astro
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 📝 Articles du Blog

Le blog contient plusieurs articles sur le problem solving :

1. **Qu'est-ce que le Problem Solving ?** - Introduction complète au concept de résolution de problèmes
2. **La Méthode des 5 Pourquoi** - Technique d'analyse des causes racines avec des exemples concrets
3. **Le Diagramme d'Ishikawa (Fishbone)** - Outil visuel pour identifier les causes d'un problème
4. **Problem Solving en Programmation** - Approches et exemples pratiques pour les développeurs

## 🧞 Commandes

Toutes les commandes s'exécutent depuis la racine du projet :

| Commande                | Action                                           |
| :---------------------- | :----------------------------------------------- |
| `npm install`           | Installe les dépendances                        |
| `npm run dev`           | Lance le serveur de développement sur `localhost:4321` |
| `npm run build`         | Construit le site de production dans `./dist/`  |
| `npm run preview`       | Prévisualise la version de production localement |

## 🌐 Déploiement sur GitHub Pages

Le projet est configuré pour être déployé automatiquement sur GitHub Pages. Chaque push sur la branche `main` déclenche un workflow GitHub Actions qui construit et déploie le site.

### Configuration requise

1. Dans les paramètres du dépôt GitHub, activez GitHub Pages
2. Configurez la source sur "GitHub Actions"
3. Le workflow `.github/workflows/deploy.yml` s'occupe du reste

## 🔧 Technologies Utilisées

- [Astro](https://astro.build/) - Framework web moderne pour des sites rapides
- [MDX](https://mdxjs.com/) - Markdown avec support JSX pour le contenu des articles
- CSS intégré dans les composants Astro

## 📄 Licence

MIT