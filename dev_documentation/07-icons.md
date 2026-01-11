# Icons and Resources

## Overview

The infographic framework supports icons and illustrations through a flexible resource loading system. Icons can come from multiple sources and are loaded asynchronously.

## Specifying Icons in Data

### String Formats

```json
{
  "items": [
    { "icon": "ref:search:database", "label": "Database" },
    { "icon": "ref:remote:https://example.com/icon.svg", "label": "Remote" },
    { "icon": "data:image/svg+xml,<svg>...</svg>", "label": "Inline" }
  ]
}
```

### Object Format

```typescript
{
  "icon": {
    source: 'inline' | 'remote' | 'search' | 'custom',
    format?: 'svg' | 'image',
    data: string,
  }
}
```

## Built-in Resource Sources

### 1. Icon Search Service

Uses WeaveVox semantic icon API (100k+ icons):

```json
{ "icon": "ref:search:computer network" }
{ "icon": "ref:search:database" }
{ "icon": "ref:search:人工智能" }  // Chinese supported
```

### 2. Remote URLs

```json
{ "icon": "ref:remote:https://example.com/icon.svg" }
{ "icon": "ref:remote:svg:https://example.com/icon.svg" }
{ "icon": "ref:remote:png:https://example.com/image.png" }
```

### 3. Inline SVG / Data URIs

```json
{ "icon": "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'>...</svg>" }
{ "icon": "data:image/png;base64,iVBORw0KGgo..." }
```

### 4. Raw SVG Strings

```json
{ "icon": "<svg xmlns='http://www.w3.org/2000/svg'><circle cx='12' cy='12' r='10'/></svg>" }
```

## Using External Icon Libraries

Register a custom loader to use libraries like **Lucide**, **FontAwesome**, etc. via **Iconify API**:

```typescript
import { registerResourceLoader, loadSVGResource } from '@antv/infographic';

registerResourceLoader(async (config) => {
  const { data, scene = 'icon' } = config;

  // Iconify API - supports 200,000+ icons
  const url = `https://api.iconify.design/${data}.svg`;

  const response = await fetch(url);
  const svgString = await response.text();
  return loadSVGResource(svgString);
});
```

Then use Iconify icon IDs:

```json
{
  "items": [
    { "icon": "lucide:database", "label": "Database" },
    { "icon": "lucide:users", "label": "Users" },
    { "icon": "mdi:account-circle", "label": "Account" },
    { "icon": "fa6-solid:rocket", "label": "Launch" }
  ]
}
```

## Iconify Icon Sets

| Prefix | Library | Examples |
|--------|---------|----------|
| `lucide:` | Lucide Icons | `lucide:home`, `lucide:settings` |
| `mdi:` | Material Design | `mdi:account`, `mdi:email` |
| `fa6-solid:` | Font Awesome 6 | `fa6-solid:star`, `fa6-solid:check` |
| `heroicons:` | Heroicons | `heroicons:user`, `heroicons:cog` |
| `tabler:` | Tabler Icons | `tabler:brand-github` |

Browse all: https://icon-sets.iconify.design/

## Custom Resource Loader

```typescript
registerResourceLoader(async (config) => {
  const { data, scene } = config;

  // Handle different sources by prefix
  if (data.startsWith('my-icons:')) {
    const name = data.replace('my-icons:', '');
    const url = `https://my-cdn.com/icons/${name}.svg`;
    const response = await fetch(url);
    return loadSVGResource(await response.text());
  }

  // Handle illustrations
  if (scene === 'illus') {
    const url = `https://my-cdn.com/illustrations/${data}.svg`;
    const response = await fetch(url);
    return loadSVGResource(await response.text());
  }

  // Fallback to Iconify
  const url = `https://api.iconify.design/${data}.svg`;
  const response = await fetch(url);
  return loadSVGResource(await response.text());
});
```

## Icon vs Illustration

| Type | Use Case | Data Property |
|------|----------|---------------|
| **Icon** | Small symbols, 24-48px | `datum.icon` |
| **Illustration** | Larger images, decorative | `datum.illus` or `data.illus` |

## How Icons Are Rendered

1. Resource is loaded and converted to `<symbol>` in SVG `<defs>`
2. `<use>` element references the symbol
3. Icon inherits fill/stroke from theme or palette

```svg
<defs>
  <symbol id="icon-database-abc123">
    <!-- SVG content -->
  </symbol>
</defs>

<use href="#icon-database-abc123" x="10" y="10" width="24" height="24" />
```

## Key Files

| File | Purpose |
|------|---------|
| `src/resource/loader.ts` | Main resource loading orchestrator |
| `src/resource/loaders/svg.ts` | SVG parsing and processing |
| `src/resource/loaders/image.ts` | Image to SVG conversion |
| `src/resource/loaders/remote.ts` | Remote URL fetching |
| `src/resource/loaders/search.ts` | Icon search service |
| `src/resource/utils/parser.ts` | String/config parsing |
| `src/resource/registry.ts` | Custom loader registration |
| `src/utils/icon.ts` | Icon element creation |
| `src/renderer/composites/icon.ts` | Icon rendering |
