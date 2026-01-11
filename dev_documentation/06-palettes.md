# Color Palettes

## What Is a Palette?

A **palette** is a set of colors used to differentiate items in an infographic. When you have multiple data items (e.g., 5 steps in a process), each gets a color from the palette.

## Palette Definition

Palettes can be defined in three ways:

```typescript
// 1. Array of colors (most common)
palette: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']

// 2. Named palette from registry
palette: 'rainbow'

// 3. Function for dynamic colors
palette: (ratio, index, total) => `hsl(${index * 30}, 70%, 50%)`
```

## How Colors Are Assigned

Colors cycle through the palette based on item index:

```typescript
// If palette has 4 colors and data has 6 items:
// Item 0 → Color 0
// Item 1 → Color 1
// Item 2 → Color 2
// Item 3 → Color 3
// Item 4 → Color 0 (wraps around)
// Item 5 → Color 1

const color = palette[index % palette.length];
```

## Where Palette Is Used

### 1. In Structures (Direct)

Structures call `getPaletteColor()` to color shapes:

```typescript
// src/designs/structures/sequence-pyramid.tsx
import { getPaletteColor, getThemeColors } from '../utils';

items.forEach((item, index) => {
  const color = getPaletteColor(options, [index]) || themeColors.colorPrimary;

  pyramidElements.push(
    <Polygon points={points} fill={color} />
  );
});
```

### 2. In Items (Optional)

Items can use palette colors via `usePaletteColor` prop:

```typescript
// src/designs/items/SimpleItem.tsx
const labelColor = usePaletteColor
  ? themeColors.colorPrimary  // Uses palette-derived color
  : themeColors.colorText;     // Uses standard text color
```

## Palette Utility Functions

**File:** `src/designs/utils/color.ts`

```typescript
// Get color for a specific item
import { getPaletteColor } from '../utils';
const color = getPaletteColor(options, [index]);

// Get all palette colors
import { getPaletteColors } from '../utils';
const colors = getPaletteColors(options);  // Returns string[]

// Get primary color
import { getColorPrimary } from '../utils';
const primary = getColorPrimary(options);
```

## Setting Palettes

### In Theme Definition

```typescript
registerTheme('my-colorful-theme', {
  colorBg: '#ffffff',
  palette: [
    '#ef4444', // red
    '#f97316', // orange
    '#eab308', // yellow
    '#22c55e', // green
    '#3b82f6', // blue
    '#8b5cf6', // violet
  ],
});
```

### At Runtime

```typescript
new Infographic({
  theme: 'shadcn',
  themeConfig: {
    palette: ['#dc2626', '#ea580c', '#16a34a', '#2563eb'],
  },
  data: { ... },
});
```

### Dynamic Palette Function

```typescript
new Infographic({
  themeConfig: {
    palette: (ratio, index, total) => {
      // Generate colors along a gradient
      const hue = 200 + (index / total) * 60;  // blue to purple
      return `hsl(${hue}, 70%, 50%)`;
    },
  },
  data: { ... },
});
```

## Palette vs Theme Colors

These are **separate systems**:

| System | Affects | Example |
|--------|---------|---------|
| **Theme colors** | Background, borders, default text | `colorBg`, `colorPrimary`, `base.text.fill` |
| **Palette** | Individual items in the infographic | Colors for pyramid segments, timeline nodes |

You can combine both:

```typescript
// Use shadcn styling (theme) but with colorful items (palette)
{
  theme: 'shadcn',
  themeConfig: {
    palette: ['#ef4444', '#22c55e', '#3b82f6', '#8b5cf6'],
  },
}
```

## Fallback Behavior

If no palette is defined:

```typescript
// src/designs/utils/color.ts
export function getPaletteColors(options) {
  const { colorPrimary, palette } = options.themeConfig;

  if (!palette || palette.length === 0) {
    // All items get the same primary color
    return Array(data.items.length).fill(colorPrimary || DEFAULT_COLOR);
  }

  return data.items.map((_, i) =>
    getPaletteColor(palette, [i], data.items.length) || DEFAULT_COLOR
  );
}
```

## Pre-built Palette Examples

### Monochromatic (Single Color Family)

```typescript
// Zinc grays
palette: ['#18181b', '#3f3f46', '#52525b', '#71717a', '#a1a1aa']

// Blue shades
palette: ['#1e40af', '#2563eb', '#3b82f6', '#60a5fa', '#93c5fd']
```

### Rainbow (Full Spectrum)

```typescript
// Vibrant 500-level
palette: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899']

// Pastel 300-level
palette: ['#fca5a5', '#fdba74', '#fcd34d', '#86efac', '#93c5fd', '#c4b5fd', '#f9a8d4']

// Professional 600-level
palette: ['#dc2626', '#ea580c', '#ca8a04', '#16a34a', '#2563eb', '#7c3aed', '#db2777']
```

## Key Files

| File | Purpose |
|------|---------|
| `src/renderer/palettes/types.ts` | Palette type definition |
| `src/renderer/palettes/registry.ts` | Named palette registration |
| `src/renderer/palettes/utils.ts` | `getPaletteColor()` implementation |
| `src/designs/utils/color.ts` | High-level palette utilities |
