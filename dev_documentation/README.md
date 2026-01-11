# Developer Documentation

This folder contains documentation explaining the key concepts and architecture of the AntV Infographic framework.

## Contents

| File | Topic |
|------|-------|
| [01-overview.md](./01-overview.md) | Architecture overview and project structure |
| [02-rendering.md](./02-rendering.md) | How the rendering pipeline works |
| [03-templates.md](./03-templates.md) | Creating and using templates |
| [04-structures.md](./04-structures.md) | Building layout structures |
| [05-themes.md](./05-themes.md) | Theming and styling (gradients, patterns, rough) |
| [06-palettes.md](./06-palettes.md) | Color palettes for item differentiation |
| [07-icons.md](./07-icons.md) | Icon loading and external libraries |
| [08-editor.md](./08-editor.md) | Interactive editing system |

## Quick Start

### Using the Framework

```typescript
import { Infographic } from '@antv/infographic';

new Infographic({
  container: '#container',
  template: 'list-pyramid-badge-card',
  theme: 'shadcn-vibrant',
  data: {
    title: 'My Infographic',
    items: [
      { label: 'Step 1', desc: 'Description', icon: 'lucide:rocket' },
      { label: 'Step 2', desc: 'Description', icon: 'lucide:target' },
      { label: 'Step 3', desc: 'Description', icon: 'lucide:trophy' },
    ],
  },
}).render();
```

### Key Extension Points

| What | How | Location |
|------|-----|----------|
| **Add Template** | `registerTemplate(name, options)` | `src/templates/` |
| **Add Structure** | `registerStructure(name, structure)` | `src/designs/structures/` |
| **Add Item** | `registerItem(name, item)` | `src/designs/items/` |
| **Add Theme** | `registerTheme(name, config)` | `src/themes/` |
| **Add Pattern** | Create in `patterns/`, export from index | `src/renderer/stylize/patterns/` |
| **Add Icon Source** | `registerResourceLoader(handler)` | `src/resource/` |

## Available Themes (as of this writing)

### Original
- `dark` - Dark background
- `hand-drawn` - Rough/sketchy style

### shadcn-inspired
- `shadcn` - Light, zinc monochrome
- `shadcn-dark` - Dark, zinc monochrome
- `shadcn-blue` - Blue accent

### shadcn with Diverse Palettes
- `shadcn-vibrant` / `shadcn-vibrant-dark` - Bright rainbow
- `shadcn-pastel` / `shadcn-pastel-dark` - Soft pastels
- `shadcn-professional` / `shadcn-professional-dark` - Deep business colors

## Running the Dev Environment

```bash
# Install dependencies
npm install
cd dev && npm install

# Start dev server
npm run dev

# Open http://localhost:5173
```

The dev environment provides:
- **Composite tab**: Mix and match structures + items
- **Preview tab**: Browse all templates
- **Item Preview tab**: Preview individual items

## Running Tests

```bash
npm test
```

## Building

```bash
npm run build
```

Outputs:
- `esm/` - ES modules
- `lib/` - CommonJS
- `dist/` - UMD bundle
