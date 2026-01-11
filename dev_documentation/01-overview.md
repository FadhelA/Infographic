# AntV Infographic - Architecture Overview

## What Is This Project?

**@antv/infographic** is a declarative infographic generation and rendering framework. It transforms structured JSON data into high-quality SVG infographics.

**Key characteristics:**
- 100+ built-in templates and components
- AI-friendly declarative JSON configuration
- Themeable with multiple style options (gradients, patterns, hand-drawn)
- Built-in interactive editor
- High-quality SVG output

## Core Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        User Input                               │
│  { template, data, theme, themeConfig, design }                │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     Options Parser                              │
│  - Resolves template → design components                        │
│  - Parses theme → themeConfig                                   │
│  - Gets Structure, Item, Title components from registries       │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Composition                                │
│  - Structure component receives data + Item components          │
│  - Returns JSX tree with positioned elements                    │
│  - Elements marked with data-element-type, data-indexes         │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     JSX → SVG                                   │
│  - Custom JSX runtime (not React)                               │
│  - Converts JSX objects to SVG string                           │
│  - Parses string to SVGElement                                  │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Renderer                                   │
│  - Fills template with actual data                              │
│  - Applies theme colors and styles                              │
│  - Loads resources (icons, images)                              │
│  - Applies stylization (gradients, patterns, rough)             │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Final SVG Output                             │
│  - Ready for display or export (SVG/PNG)                        │
│  - Optional: Editor attachment for interactivity                │
└─────────────────────────────────────────────────────────────────┘
```

## Directory Structure

```
src/
├── runtime/           # Main Infographic class
├── jsx/               # Custom JSX runtime → SVG rendering
├── renderer/          # SVG rendering engine, stylization
├── designs/           # Design components
│   ├── structures/    # Layout algorithms (list, sequence, hierarchy, chart)
│   ├── items/         # Data item renderers (cards, nodes, text)
│   ├── components/    # Shared components (ItemLabel, ItemIcon, etc.)
│   └── layouts/       # Layout utilities (FlexLayout)
├── templates/         # Template registry and built-in templates
├── themes/            # Theme system and built-in themes
├── resource/          # Resource loaders (icons, images)
├── editor/            # Interactive editing system
├── exporter/          # SVG and PNG export
├── options/           # Options parsing
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Key Concepts

| Concept | Description | Location |
|---------|-------------|----------|
| **Template** | Pre-configured combination of structure + items | `src/templates/` |
| **Structure** | Layout algorithm that positions items | `src/designs/structures/` |
| **Item** | Renders a single data point | `src/designs/items/` |
| **Theme** | Color scheme, fonts, and base styles | `src/themes/` |
| **Palette** | Array of colors for item differentiation | `themeConfig.palette` |
| **Stylize** | Visual effects (gradient, pattern, rough) | `themeConfig.stylize` |

## Tech Stack

- **TypeScript** - Strict type safety
- **Custom JSX Runtime** - For SVG generation (not DOM)
- **D3.js** - Layout algorithms
- **RoughJS** - Hand-drawn style rendering
- **Vite** - Build tool
- **Vitest** - Testing framework
