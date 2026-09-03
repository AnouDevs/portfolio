# AnouDev — Portfolio

Portfolio personnel présentant mes projets, mes compétences techniques, et un moyen de
me contacter — construit pour m'accompagner dans ma recherche de poste ou de mission
freelance en développement web.

🔗 [anoudevs-portfolio.vercel.app](https://anoudevs-portfolio.vercel.app)

## Stack technique

- Next.js
- TypeScript
- React
- Tailwind CSS
- Drizzle ORM
- PostgreSQL
- Git/GitHub
- Framer Motion

## Lancer le projet en local

1. Cloner le repo :
\`\`\`bash
git clone https://github.com/AnouDevs/portfolio.git
\`\`\`

2. Installer les dépendances :
\`\`\`bash
pnpm install
\`\`\`

3. Copier `.env.example` en `.env.local` et remplir vos propres valeurs (base de données Postgres, clé API Resend).

4. Lancer le serveur de développement :
\`\`\`bash
pnpm dev
\`\`\`

5. Ouvrir [http://localhost:3000](http://localhost:3000)

## Déploiement

Le projet est déployé sur [Vercel](https://vercel.com), connecté directement au repo GitHub.
Chaque push sur une branche génère une preview automatique ; chaque merge sur `main` déploie en production.

Variables d'environnement à configurer sur Vercel (Production, Preview, Development) :
- `POSTGRES_URL`
- `RESEND_API_KEY`

## Décisions techniques

- **Drizzle ORM** plutôt que Prisma : syntaxe proche du SQL natif, plus simple à raisonner
  et à déboguer, sans couche d'abstraction supplémentaire.
- **Pas d'authentification** : le portfolio est un site vitrine one-page, sans zone privée
  ni contenu réservé — aucune notion de compte utilisateur n'est nécessaire ici.
- **Pas d'espace admin** : le contenu (projets, compétences) est codé en dur dans le projet
  et mis à jour via `git push`, pour garder le site simple à maintenir.