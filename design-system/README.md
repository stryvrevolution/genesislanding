# GENESIS Design System

## Style: Transformation Physique / Under Armour

Design system inspiré de l'esthétique technique et data-driven, avec un style puissant orienté performance et transformation physique.

---

## 🎨 Palette de Couleurs

### Backgrounds
- **bg-primary**: `#000000` - Noir pur (fond principal)
- **bg-secondary**: `#0A0A0A` - Noir profond (sections alternées)
- **bg-tertiary**: `#1A1A1A` - Gris anthracite (cards/overlays)
- **bg-elevated**: `#2B2B2B` - Gris foncé (éléments surélevés)

### Overlays/Panels
- **overlay-offWhite**: `#F5F5F0` - Blanc cassé (panneau central principal)
- **overlay-beige**: `#E8E8E3` - Beige technique (variante)
- **overlay-cream**: `#FAFAF5` - Crème (alternative légère)

### Text Colors
- **text-primary**: `#000000` - Noir pur (texte sur overlay)
- **text-secondary**: `#1A1A1A` - Gris très foncé
- **text-light**: `#FFFFFF` - Blanc (texte sur fond sombre)
- **text-muted**: `#666666` - Gris moyen (texte secondaire)
- **text-accent**: `#E63946` - Rouge (texte accent)

### Accents & CTAs
- **accent-primary**: `#E63946` - Rouge technique principal
- **accent-secondary**: `#DC143C` - Rouge accent profond
- **accent-dark**: `#C41E3A` - Rouge foncé (hover states)
- **accent-light**: `#FF4757` - Rouge clair (highlights)

### Borders
- **border-dark**: `#2A2A2A` - Bordure sombre
- **border-medium**: `#404040` - Bordure moyenne
- **border-light**: `#666666` - Bordure claire
- **border-accent**: `#E63946` - Bordure accent rouge

---

## 🔤 Typographie

### Polices

1. **Primary (Rajdhani)**
   - Usage: Titres principaux, éléments de navigation
   - Style: Technique, condensée, puissante
   - Poids: 300-700
   - Tracking: -0.02em

2. **Secondary (Orbitron)**
   - Usage: Éléments futuristes, badges techniques
   - Style: Futuriste, techno
   - Poids: 400-900
   - Tracking: 0.05em

3. **Display (Barlow Condensed)**
   - Usage: Titres d'impact maximum
   - Style: Condensée, impact
   - Poids: 400-900
   - Tracking: 0.05em

4. **Mono (JetBrains Mono)**
   - Usage: Données techniques, codes, statistiques
   - Style: Technique, code-like
   - Poids: 400-700
   - Tracking: 0.02em

5. **Body (Inter)**
   - Usage: Corps de texte, descriptions
   - Style: Moderne, lisible
   - Poids: 400-900

### Classes Tailwind

```jsx
// Utilisation dans les composants
className="font-primary"      // Rajdhani
className="font-secondary"    // Orbitron
className="font-display"      // Barlow Condensed
className="font-mono"         // JetBrains Mono
className="font-body"         // Inter (par défaut)
```

---

## 📦 Composants

### PowerButton
Bouton puissant avec effet technique et vocabulaire de transformation.

```jsx
<PowerButton variant="primary" size="lg">
  ACTIVATE YOUR POTENTIAL →
</PowerButton>
```

**Variants**: `primary`, `secondary`, `outline`, `ghost`
**Sizes**: `sm`, `md`, `lg`, `xl`

### PowerHeading
Titre puissant avec style technique.

```jsx
<PowerHeading level={1} variant="default" accent={false}>
  PUSH BEYOND YOUR LIMITS
</PowerHeading>
```

**Levels**: `1`, `2`, `3`, `4`
**Variants**: `default`, `overlay`, `accent`

### TechnicalBadge
Badge technique avec style data-driven.

```jsx
<TechnicalBadge variant="accent">
  ELEVATE_03.1
</TechnicalBadge>
```

**Variants**: `default`, `accent`, `overlay`

### StatCard
Carte de statistique technique.

```jsx
<StatCard value="50+" label="Transformations" />
```

### WorkoutPanel
Panneau de programme d'entraînement style infographic.

```jsx
<WorkoutPanel 
  title="ELEVATE_03.1" 
  sequence="#SEQ.ACT-3A.5.12" 
/>
```

### HeroSection
Section hero complète avec tous les éléments.

```jsx
<HeroSection />
```

---

## 💬 Style Oratoire

### Ton
- **Puissant**: Direct, impératif, technique
- **Vocabulaire**: Protocole, seuil, charge, système, performance

### Patterns de Langage

#### Impératifs Puissants
- PUSH BEYOND YOUR LIMITS
- ACTIVATE YOUR POTENTIAL
- ELEVATE YOUR OUTPUT
- BREAK THE THRESHOLD
- MAXIMIZE YOUR LOAD
- INITIATE TRANSFORMATION

#### Vocabulaire Technique
- THRESHOLD BREAKING PROTOCOL
- SYSTEM INIT: TRANSFORMATION
- OUTPUT LOAD 80-90%
- RPE 8-9
- MOVEMENT PROTOCOL
- CONDITIONING NODE
- FOUNDATION WITHOUT SYSTEMIC FATIGUE

#### Termes Clés
- **Technique**: PROTOCOL, THRESHOLD, LOAD, OUTPUT, RPE, SYSTEM, NODE, PHASE, MODE, INIT
- **Action**: PUSH, ACTIVATE, ELEVATE, BREAK, MAXIMIZE, UNLOCK, OPTIMIZE, TRANSFORM
- **Transformation**: TRANSFORMATION, PERFORMANCE, POTENTIAL, FOUNDATION, RECOVERY

---

## 🚀 Utilisation

### Installation

Les polices sont déjà chargées via Google Fonts dans `styles/globals.css`.

### Import des Composants

```jsx
import PowerButton from '../components/PowerButton';
import PowerHeading from '../components/PowerHeading';
import TechnicalBadge from '../components/TechnicalBadge';
import StatCard from '../components/StatCard';
import WorkoutPanel from '../components/WorkoutPanel';
```

### Utilisation des Couleurs Tailwind

```jsx
// Backgrounds
className="bg-bg-primary"
className="bg-bg-secondary"

// Text
className="text-text-light"
className="text-accent-primary"

// Borders
className="border-border-dark"
className="border-accent-primary"
```

---

## 📄 Documentation Complète

Voir la page de démonstration: `/design-system`

---

## 🎯 Principes de Design

1. **Puissance**: Design audacieux, impact maximum
2. **Technique**: Esthétique data-driven, précision
3. **Performance**: Orientation résultats, transformation
4. **Clarté**: Hiérarchie visuelle forte, lisibilité optimale

---

© 2024 GENESIS Coaching 3.0

