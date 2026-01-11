# Templates

## What Is a Template?

A **template** is a pre-configured combination of structure + items + optional theme settings. Templates contain no rendering logic—they're just configuration objects.

```
Template = Structure + Item(s) + Optional ThemeConfig
```

## Template Structure

```typescript
interface TemplateOptions {
  design: {
    title?: string | TitleOptions;
    structure: string | StructureOptions;
    item?: string | ItemOptions;
    items?: (string | ItemOptions)[];
  };
  theme?: string;
  themeConfig?: ThemeConfig;
}
```

## Creating a Template

### Minimal Template

```typescript
import { registerTemplate } from './registry';

registerTemplate('my-simple-list', {
  design: {
    structure: { type: 'list-row' },
    items: [{ type: 'simple-item' }],
  },
});
```

### Template with Options

```typescript
registerTemplate('my-grid-cards', {
  design: {
    title: 'default',
    structure: {
      type: 'list-grid',
      columns: 3,
      gap: 20,
    },
    items: [{
      type: 'badge-card',
      width: 200,
      height: 120,
    }],
  },
});
```

### Template with Theme

```typescript
registerTemplate('my-dark-timeline', {
  design: {
    structure: { type: 'sequence-timeline' },
    items: [{ type: 'circle-node' }],
  },
  theme: 'shadcn-dark',
  themeConfig: {
    palette: ['#ef4444', '#f97316', '#eab308', '#22c55e'],
  },
});
```

### Hierarchy with Multiple Item Types

For hierarchical data, you can specify different items for each level:

```typescript
registerTemplate('my-org-chart', {
  design: {
    structure: {
      type: 'hierarchy-tree',
      direction: 'TB',
    },
    items: [
      { type: 'badge-card', width: 180 },   // Level 0 (root)
      { type: 'compact-card', width: 140 }, // Level 1
      { type: 'plain-text' },                // Level 2+
    ],
  },
});
```

## Template Naming Convention

Templates typically follow: `{structure}-{variant}-{item}`

```
list-pyramid-badge-card
│          │    └── Item type
│          └── Structure type
└── Category

sequence-steps-horizontal-icon-arrow
│              │          └── Item type
│              └── Variant
└── Structure
```

## Using a Template

```typescript
import { Infographic } from '@antv/infographic';

new Infographic({
  container: '#container',
  template: 'my-grid-cards',  // Use template by name
  data: {
    title: 'My Infographic',
    items: [
      { label: 'Item 1', desc: 'Description' },
      { label: 'Item 2', desc: 'Description' },
    ],
  },
});
```

## Overriding Template Settings

User options merge with and override template options:

```typescript
new Infographic({
  template: 'my-grid-cards',
  design: {
    structure: {
      columns: 4,  // Override template's 3 columns
    },
  },
  themeConfig: {
    colorPrimary: '#8b5cf6',  // Override color
  },
  data: { ... },
});
```

## Programmatic Template Generation

Templates can be generated programmatically:

```typescript
// Generate templates for all combinations
const structures = ['tech-style', 'dashed-line', 'curved'];
const items = ['badge-card', 'circle-node', 'compact-card'];

for (const structure of structures) {
  for (const item of items) {
    registerTemplate(`hierarchy-${structure}-${item}`, {
      design: {
        structure: { type: 'hierarchy-tree', ...structureProps[structure] },
        item: { type: item },
      },
    });
  }
}
// Creates 9 templates!
```

## Key Files

| File | Purpose |
|------|---------|
| `src/templates/registry.ts` | Template registration system |
| `src/templates/types.ts` | TemplateOptions type definition |
| `src/templates/built-in.ts` | 30+ pre-built templates |
| `src/templates/hierarchy-tree.ts` | Programmatically generated tree templates |
| `src/templates/hierarchy-mindmap.ts` | Mindmap templates |

## Available Templates

To list all registered templates:

```typescript
import { getTemplates } from '@antv/infographic';
console.log(getTemplates());
```
