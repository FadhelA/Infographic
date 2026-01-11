# Themes and Styling

## What Is a Theme?

A **theme** defines the visual appearance of an infographic:
- Colors (background, primary, text)
- Typography (font family, weights)
- Shape styling (fill, stroke, borders)
- Palette (colors for items)
- Stylization (gradients, patterns, rough)

## Theme Structure

```typescript
interface ThemeConfig {
  colorBg?: string;           // Background color
  colorPrimary?: string;      // Primary accent color

  base?: {
    global?: BaseAttributes;  // Applied to all elements
    shape?: ShapeAttributes;  // Default shape styling
    text?: TextAttributes;    // Default text styling
  };

  palette?: Palette;          // Colors for items

  title?: TextAttributes;     // Title text styling
  desc?: TextAttributes;      // Description text styling

  item?: {
    icon?: IconAttributes;
    label?: TextAttributes;
    desc?: TextAttributes;
    value?: TextAttributes;
    shape?: ShapeAttributes;
  };

  stylize?: StylizeConfig;    // Visual effects
}
```

## Creating a Theme

### Simple Theme

```typescript
import { registerTheme } from './registry';

registerTheme('my-theme', {
  colorBg: '#ffffff',
  colorPrimary: '#3b82f6',
  base: {
    text: {
      'font-family': 'Inter, sans-serif',
      fill: '#1a1a1a',
    },
  },
});
```

### Complete Theme (shadcn-style)

```typescript
registerTheme('shadcn-vibrant', {
  colorBg: '#ffffff',
  colorPrimary: '#3b82f6',

  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#09090b',
    },
    shape: {
      fill: '#fafafa',
      stroke: '#e4e4e7',
      'stroke-width': 1,
    },
  },

  palette: [
    '#ef4444', // red
    '#f97316', // orange
    '#eab308', // yellow
    '#22c55e', // green
    '#3b82f6', // blue
    '#8b5cf6', // violet
  ],

  title: {
    fill: '#09090b',
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },

  desc: {
    fill: '#71717a',
  },

  item: {
    label: {
      fill: '#18181b',
      'font-weight': 500,
    },
    desc: {
      fill: '#71717a',
    },
    shape: {
      fill: '#f4f4f5',
      stroke: '#e4e4e7',
      'stroke-width': 1,
    },
  },

  stylize: {
    type: 'linear-gradient',
    angle: 180,
    colors: [
      { color: '#fafafa', offset: '0%' },
      { color: '#f4f4f5', offset: '100%' },
    ],
  },
});
```

## Stylization Options

### 1. Gradients

```typescript
// Linear gradient
stylize: {
  type: 'linear-gradient',
  angle: 45,  // 0-360 degrees
  colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
  // Or with offsets:
  colors: [
    { color: '#FF6B6B', offset: '0%' },
    { color: '#4ECDC4', offset: '50%' },
    { color: '#45B7D1', offset: '100%' },
  ],
}

// Radial gradient
stylize: {
  type: 'radial-gradient',
  colors: ['#FF6B6B', '#4ECDC4'],
}
```

### 2. Patterns

```typescript
stylize: {
  type: 'pattern',
  pattern: 'dot',  // or 'line', 'square', 'mosaic', 'hex', 'diamond'
  scale: 1.5,
  foregroundColor: '#333',
  backgroundColor: '#fff',
}
```

### 3. Rough (Hand-drawn)

```typescript
stylize: {
  type: 'rough',
  roughness: 1.5,    // Line roughness
  bowing: 1,         // Line curvature
  fillWeight: 2,     // Fill line weight
  hachureGap: 4,     // Gap between hatch lines
}
```

## Built-in Themes

| Theme | Description |
|-------|-------------|
| `dark` | Dark background with light text |
| `hand-drawn` | Rough/sketchy style |
| `shadcn` | Modern minimal (zinc grays) |
| `shadcn-dark` | Dark mode shadcn |
| `shadcn-blue` | Blue accent shadcn |
| `shadcn-vibrant` | Colorful rainbow palette |
| `shadcn-vibrant-dark` | Dark mode vibrant |
| `shadcn-pastel` | Soft pastel colors |
| `shadcn-pastel-dark` | Dark mode pastel |
| `shadcn-professional` | Deep business colors |
| `shadcn-professional-dark` | Dark mode professional |

## Using Themes

```typescript
// Use built-in theme
new Infographic({
  theme: 'shadcn-vibrant',
  data: { ... },
});

// Override theme settings
new Infographic({
  theme: 'shadcn',
  themeConfig: {
    colorPrimary: '#8b5cf6',  // Override primary color
    palette: ['#ef4444', '#22c55e', '#3b82f6'],  // Custom palette
  },
  data: { ... },
});

// Custom theme inline
new Infographic({
  themeConfig: {
    colorBg: '#1a1a2e',
    colorPrimary: '#e94560',
    base: {
      text: { fill: '#ffffff' },
    },
  },
  data: { ... },
});
```

## Adding Custom Patterns

```typescript
// src/renderer/stylize/patterns/wave.ts
import { createElement } from '../../../utils';
import { PatternGenerator } from '../../types';

export const wave: PatternGenerator = ({
  scale = 1,
  backgroundColor,
  foregroundColor,
}) => {
  const pattern = createElement('pattern', {
    id: 'pattern-wave',
    width: '20',
    height: '20',
    patternTransform: `scale(${scale})`,
    patternUnits: 'userSpaceOnUse',
  });

  pattern.appendChild(createElement('rect', {
    width: '100%',
    height: '100%',
    fill: backgroundColor,
  }));

  pattern.appendChild(createElement('path', {
    d: 'M0 10 Q5 5, 10 10 T20 10',
    stroke: foregroundColor,
    fill: 'none',
    'stroke-width': '2',
  }));

  return pattern;
};

// Export from patterns/index.ts
export { wave } from './wave';
```

## Key Files

| File | Purpose |
|------|---------|
| `src/themes/registry.ts` | Theme registration |
| `src/themes/types.ts` | ThemeConfig interface |
| `src/themes/built-in.ts` | Built-in theme definitions |
| `src/themes/generator.ts` | Dynamic color generation |
| `src/renderer/stylize/gradient.ts` | Gradient implementation |
| `src/renderer/stylize/pattern.ts` | Pattern implementation |
| `src/renderer/stylize/rough.ts` | Rough.js integration |
| `src/renderer/stylize/patterns/` | Built-in pattern definitions |
