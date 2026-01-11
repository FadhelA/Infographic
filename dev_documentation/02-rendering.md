# Rendering System

## Overview

The rendering system transforms user options into a final SVG through a two-phase process:

1. **Composition Phase**: Creates JSX template with positioned elements
2. **Rendering Phase**: Fills template with data, applies styles, loads resources

## Phase 1: Composition

### Entry Point
**File:** `src/runtime/Infographic.tsx`

```typescript
compose(): SVGSVGElement {
  const { design, data } = this.parsedOptions;
  const { structure, title, item, items } = design;

  // Get components from parsed design
  const { component: Structure } = structure;
  const Title = title.component;
  const Item = item.component;

  // Create JSX structure
  const svg = renderSVG(
    <Structure
      data={data}
      Title={Title}
      Item={Item}
      Items={Items}
      options={this.parsedOptions}
    />,
  );

  return parseSVG(svg);  // Convert string to SVGElement
}
```

### JSX Runtime
**File:** `src/jsx/jsx-runtime.ts`

The framework uses a custom JSX runtime (not React). JSX elements are plain objects:

```typescript
function jsx(type, props) {
  return { type, props };
}

// <Rect width={100} fill="red" />
// Becomes: { type: 'rect', props: { width: 100, fill: 'red' } }
```

### JSX to SVG String
**File:** `src/jsx/renderer.ts`

```typescript
function renderSVG(element): string {
  const processed = processElement(element);  // Expand components
  const content = render(processed);          // Convert to HTML string
  return `<svg>${content}</svg>`;
}

function processElement(element) {
  // If function component, call it
  if (typeof element.type === 'function') {
    const rendered = element.type(element.props);
    return processElement(rendered);
  }
  // Process children recursively
  // ...
}
```

## Phase 2: Rendering

### Main Render
**File:** `src/renderer/renderer.ts`

```typescript
public render(): SVGSVGElement {
  renderTemplate(svg, this.options);  // Fill with data
  setView(this.template, this.options);  // Set viewBox
  loadFonts(this.template);  // Load fonts
  return svg;
}
```

### Data Filling
**File:** `src/renderer/renderer.ts` - `fill()` function

Elements are identified by `data-element-type` attribute:

```typescript
function fill(svg, options) {
  const elements = svg.querySelectorAll('[data-element-type]');

  elements.forEach((element) => {
    if (isTitle(element)) {
      renderText(element, data.title, themeConfig.title);
    }
    if (isItemLabel(element)) {
      const indexes = getItemIndexes(element.dataset.indexes);
      const text = getDatumByIndexes(data, indexes).label;
      renderText(element, text, themeConfig.item.label);
    }
    if (isShape(element)) {
      renderShape(svg, element, options);  // Apply theme + stylize
    }
    // ... more element types
  });
}
```

### Element Type Markers

Components mark elements with data attributes for later identification:

```typescript
// ItemLabel component
<Text
  data-element-type="item-label"
  data-indexes={indexes}  // e.g., "0" or "1,2"
>
  {children}
</Text>
```

## Stylization

**File:** `src/renderer/composites/shape.ts`

Shapes can be stylized with gradients, patterns, or rough (hand-drawn) effects:

```typescript
function stylizeShape(node, svg, options) {
  const { type } = options.themeConfig.stylize;

  if (type === 'rough') {
    return applyRoughStyle(node, svg, config);
  }
  if (type === 'pattern') {
    return applyPatternStyle(node, svg, options);
  }
  if (type === 'linear-gradient' || type === 'radial-gradient') {
    applyGradientStyle(node, svg, config, 'fill');
  }
}
```

## Key Files

| File | Purpose |
|------|---------|
| `src/runtime/Infographic.tsx` | Main class, orchestrates rendering |
| `src/jsx/renderer.ts` | JSX to SVG string conversion |
| `src/renderer/renderer.ts` | Data filling and theme application |
| `src/renderer/composites/text.ts` | Text element rendering |
| `src/renderer/composites/shape.ts` | Shape rendering and stylization |
| `src/renderer/composites/icon.ts` | Icon rendering |
| `src/renderer/stylize/` | Gradient, pattern, rough implementations |
