# Structures

## What Is a Structure?

A **structure** is a layout component that:
1. Receives data and item components
2. Calculates positions for each item
3. Returns JSX with positioned elements

```typescript
Structure = Layout Algorithm + JSX Composition
```

## Structure Interface

```typescript
interface BaseStructureProps {
  Title?: ComponentType<TitleProps>;      // Title component
  Item: ComponentType<BaseItemProps>;     // Item component
  Items: ComponentType<BaseItemProps>[];  // Multiple item types
  data: Data;                             // The data to render
  options: ParsedInfographicOptions;      // Theme, palette, etc.
}

interface Structure {
  component: ComponentType<BaseStructureProps>;
  composites: string[];  // What it uses: ['title', 'item']
}
```

## Structure Categories

| Category | Examples | Description |
|----------|----------|-------------|
| **List** | `list-row`, `list-grid`, `list-pyramid` | Linear/grid positioning |
| **Sequence** | `sequence-timeline`, `sequence-steps`, `sequence-zigzag` | Sequential with decorations |
| **Hierarchy** | `hierarchy-tree`, `hierarchy-mindmap` | Recursive tree layouts |
| **Chart** | `chart-bar`, `chart-pie`, `chart-line` | Data visualization |
| **Compare** | `compare-binary`, `compare-swot` | Side-by-side layouts |

## Simple Structure Example

```typescript
import { ComponentType, JSXElement } from '../../jsx';
import { Group } from '../../jsx';
import { ItemsGroup } from '../components';
import { registerStructure } from './registry';
import type { BaseStructureProps } from './types';

export interface ListRowProps extends BaseStructureProps {
  gap?: number;
}

export const ListRow: ComponentType<ListRowProps> = (props) => {
  const { Title, Item, data, gap = 20 } = props;
  const { title, desc, items = [] } = data;

  // 1. Render title
  const titleContent = Title ? <Title title={title} desc={desc} /> : null;

  // 2. Calculate positions and render items
  const itemElements: JSXElement[] = items.map((item, index) => {
    const x = index * (itemWidth + gap);

    return (
      <Item
        key={index}
        indexes={[index]}     // For palette color lookup
        datum={item}          // Individual item data
        data={data}           // Full data context
        x={x}                 // Calculated position
      />
    );
  });

  // 3. Return composed layout
  return (
    <FlexLayout flexDirection="column">
      {titleContent}
      <Group>
        <ItemsGroup>{itemElements}</ItemsGroup>
      </Group>
    </FlexLayout>
  );
};

// Register the structure
registerStructure('list-row', {
  component: ListRow,
  composites: ['title', 'item'],
});
```

## Key Utilities for Structures

### Getting Palette Colors

```typescript
import { getPaletteColor, getThemeColors } from '../utils';

// Get theme-derived colors
const themeColors = getThemeColors(options.themeConfig);

// Get palette color for item at index
const color = getPaletteColor(options, [index]) || themeColors.colorPrimary;
```

### Measuring Elements

```typescript
import { getElementBounds } from '../../jsx';

// Measure an item to calculate layout
const bounds = getElementBounds(<Item datum={items[0]} />);
const itemWidth = bounds.width;
const itemHeight = bounds.height;
```

## Creating a Custom Structure

### Step 1: Create the Component

```typescript
// src/designs/structures/my-radial.tsx
import { ComponentType, JSXElement } from '../../jsx';
import { Group } from '../../jsx';
import { ItemsGroup } from '../components';
import { registerStructure } from './registry';
import type { BaseStructureProps } from './types';

export interface MyRadialProps extends BaseStructureProps {
  radius?: number;
}

export const MyRadial: ComponentType<MyRadialProps> = (props) => {
  const { Title, Item, data, radius = 200, options } = props;
  const { title, desc, items = [] } = data;

  const titleContent = Title ? <Title title={title} desc={desc} /> : null;

  const itemElements: JSXElement[] = items.map((item, index) => {
    // Position items in a circle
    const angle = (2 * Math.PI * index) / items.length - Math.PI / 2;
    const x = radius + radius * Math.cos(angle);
    const y = radius + radius * Math.sin(angle);

    return (
      <Item
        indexes={[index]}
        datum={item}
        data={data}
        x={x}
        y={y}
      />
    );
  });

  return (
    <Group>
      {titleContent}
      <ItemsGroup x={0} y={100}>
        {itemElements}
      </ItemsGroup>
    </Group>
  );
};

registerStructure('my-radial', {
  component: MyRadial,
  composites: ['title', 'item'],
});
```

### Step 2: Export from Index

```typescript
// src/designs/structures/index.ts
export * from './my-radial';
```

### Step 3: Use in a Template

```typescript
registerTemplate('radial-cards', {
  design: {
    structure: { type: 'my-radial', radius: 250 },
    items: [{ type: 'badge-card' }],
  },
});
```

## Structure Complexity Levels

| Difficulty | Type | What's Involved |
|------------|------|-----------------|
| **Easy** | Simple list/grid | Basic x/y positioning |
| **Medium** | Sequences | Connecting lines, arrows, decorations |
| **Hard** | Hierarchies | Recursive layouts, edge routing |
| **Hard** | Charts | Data scales, axes, complex shapes |

## Key Files

| File | Purpose |
|------|---------|
| `src/designs/structures/registry.ts` | Structure registration |
| `src/designs/structures/types.ts` | BaseStructureProps interface |
| `src/designs/structures/list-row.tsx` | Simple row layout |
| `src/designs/structures/list-grid.tsx` | Grid layout |
| `src/designs/structures/hierarchy-tree.tsx` | Tree layout (complex) |
| `src/designs/structures/sequence-timeline.tsx` | Timeline with decorations |

## Available Structures

```typescript
import { getStructures } from '@antv/infographic';
console.log(getStructures());
// ['list-row', 'list-grid', 'list-pyramid', 'hierarchy-tree', ...]
```
