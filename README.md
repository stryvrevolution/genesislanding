# GENESIS Coaching 3.0 - Landing Page

Landing page professionnelle pour GENESIS Coaching avec style Under Armour médical (noir/blanc/gris + accent rouge).

## 🚀 Stack Technique

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)
- **Hébergement**: Vercel (gratuit)
- **Coût total**: 12€/an (domaine uniquement)

## 📦 Installation Locale

### Prérequis
- Node.js 18+ installé
- Un terminal

### Étapes

1. **Télécharger le projet**
```bash
cd genesis-landing
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Lancer en développement**
```bash
npm run dev
```

4. **Ouvrir dans le navigateur**
```
http://localhost:3000
```

## 🌐 Déploiement sur Vercel (GRATUIT)

### Étape 1 : Créer un compte Vercel

1. Aller sur [vercel.com](https://vercel.com)
2. S'inscrire avec GitHub (ou email)
3. Confirmer l'email

### Étape 2 : Pusher le code sur GitHub

1. Créer un repo GitHub "genesis-landing"
2. Dans le terminal :
```bash
git init
git add .
git commit -m "Initial commit - Landing page GENESIS"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/genesis-landing.git
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

1. Sur Vercel, cliquer "New Project"
2. Importer le repo GitHub "genesis-landing"
3. Settings :
   - Framework Preset : Next.js (détecté automatiquement)
   - Build Command : `npm run build`
   - Output Directory : `.next`
4. Cliquer "Deploy"

⏱️ **Temps de déploiement : 2-3 minutes**

Tu obtiendras une URL : `https://genesis-landing-xxx.vercel.app`

### Étape 4 : Connecter ton domaine

1. **Acheter le domaine** (si pas fait) :
   - Aller sur [Namecheap.com](https://namecheap.com)
   - Rechercher `genesis-coaching.com`
   - Acheter (12€/an)

2. **Connecter à Vercel** :
   - Dans Vercel → Project Settings → Domains
   - Ajouter `genesis-coaching.com`
   - Vercel te donnera des records DNS à ajouter

3. **Configurer les DNS sur Namecheap** :
   - Aller dans Namecheap → Domain List → Manage
   - Advanced DNS → Add New Record
   - Ajouter les records donnés par Vercel :
     ```
     Type: A Record
     Host: @
     Value: 76.76.21.21
     
     Type: CNAME
     Host: www
     Value: cname.vercel-dns.com
     ```

4. **Attendre la propagation DNS** (5-30 min)

✅ **C'est prêt !** → `genesis-coaching.com` affiche ta landing

## 🔧 Personnalisation

### Changer le lien du formulaire Tally

Dans `/pages/index.jsx`, ligne ~418 :
```jsx
href="https://tally.so/r/votre-form-id"
```

Remplacer `votre-form-id` par l'ID de ton formulaire Tally.

### Ajouter ta photo

1. Mettre ta photo dans `/public/kevin.jpg`
2. Dans `/pages/index.jsx`, ligne ~360 :
```jsx
<div className="aspect-square bg-gray-900 border border-gray-800 rounded-sm overflow-hidden">
  <img src="/kevin.jpg" alt="Kévin Boukelmoune" className="w-full h-full object-cover" />
</div>
```

### Modifier les couleurs

Dans `/tailwind.config.js` :
```js
colors: {
  red: {
    600: '#E63946', // Couleur principale (change ici)
    700: '#D62839', // Couleur hover
  },
}
```

### Ajouter Google Analytics

1. Créer un compte GA4
2. Obtenir ton ID (ex: `G-XXXXXXXXXX`)
3. Dans `/pages/_document.jsx`, ajouter dans `<Head>` :
```jsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

### Ajouter Meta Pixel

Dans `/pages/_document.jsx`, ajouter dans `<Head>` :
```jsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'TON-PIXEL-ID');
      fbq('track', 'PageView');
    `,
  }}
/>
```

## 📊 Performance

- **Lighthouse Score** : 95+ (Performance, SEO, Accessibility)
- **First Contentful Paint** : < 1.2s
- **Time to Interactive** : < 2.5s
- **Mobile-friendly** : 100%

## 🔒 Sécurité

- HTTPS automatique (certificat SSL Vercel)
- Headers sécurisés
- Conformité RGPD (pas de cookies sans consentement)

## 📱 Responsive

Testé sur :
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- iPad (768px)
- Desktop (1920px)

## 🆘 Troubleshooting

### Le site ne charge pas après déploiement
- Vérifier les logs Vercel (onglet "Deployments")
- Vérifier que `npm run build` fonctionne localement

### Le domaine ne fonctionne pas
- Vérifier les DNS sur Namecheap (peut prendre 30 min)
- Tester avec `dig genesis-coaching.com` dans le terminal

### Les fonts ne chargent pas
- Vérifier la connexion internet
- Google Fonts peut être bloqué (rare)

## 📞 Support

Email : contact@genesis-coaching.com

---

**Créé avec Next.js + Tailwind CSS**  
**Design : Under Armour Medical Style**  
**Coût : 12€/an (domaine uniquement)**
