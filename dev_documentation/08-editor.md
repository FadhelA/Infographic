# Editor System

## Overview

The editor enables interactive editing of infographics when `editable: true` is set. It provides selection, dragging, text editing, undo/redo, and more.

## Enabling the Editor

```typescript
new Infographic({
  container: '#container',
  editable: true,  // Enable editor
  data: { ... },
});
```

## Architecture

The editor uses a **manager-based architecture**:

```
┌─────────────────────────────────────────────────────────────────┐
│                         Editor                                  │
├──────────────┬──────────────┬──────────────┬───────────────────┤
│ StateManager │ CommandManager│ InteractionManager│ PluginManager │
└──────────────┴──────────────┴──────────────┴───────────────────┘
```

## Managers

### StateManager

Tracks and syncs data between DOM and data model:

```typescript
// Update item data
state.updateItemDatum([0], { label: 'New Label' });

// Update element attributes
state.updateElement(element, { x: 100, y: 50 });
```

### CommandManager

Implements undo/redo with Command pattern:

```typescript
// Execute a command
commander.execute(new UpdateElementCommand(element, newProps, originalProps));

// Undo/Redo
commander.undo();
commander.redo();
```

### InteractionManager

Manages user interactions and selection:

```typescript
// Select elements
interaction.select([element1, element2], 'replace');

// Clear selection
interaction.clearSelection();

// Get current selection
const selected = interaction.getSelection();
```

### PluginManager

Manages UI plugins (resize handles, toolbars):

```typescript
plugins.registerPlugin(new ResizeElementPlugin());
const plugin = plugins.getPlugin('resize-element');
```

## Interactions

| Interaction | Description |
|-------------|-------------|
| **Click Select** | Click to select, Shift+click for multi-select |
| **Brush Select** | Drag to select multiple elements |
| **Drag Element** | Drag selected elements with snap guides |
| **Double-click Edit** | Edit text inline |
| **Hotkey History** | Ctrl+Z/Ctrl+Y for undo/redo |
| **Zoom Wheel** | Mouse wheel to zoom |
| **Select Highlight** | Visual feedback for selection |

## Command Pattern

All changes are tracked via commands for undo/redo:

```typescript
// ICommand interface
interface ICommand {
  apply(state: IStateManager): Promise<void>;
  undo(state: IStateManager): Promise<void>;
  serialize(): any;
}

// UpdateElementCommand
class UpdateElementCommand implements ICommand {
  constructor(element, modifiedProps, originalProps) {}

  apply(state) {
    updateElement(this.element, this.modifiedProps);
    state.updateElement(this.element, this.modifiedProps);
  }

  undo(state) {
    updateElement(this.element, this.originalProps);
    state.updateElement(this.element, this.originalProps);
  }
}
```

## Data Flow

```
User Action → Interaction → Command → StateManager → Undo Stack
                              ↓
                         DOM Updated
                              ↓
                     Events Emitted
```

## Events

The editor emits events you can listen to:

```typescript
infographic.on('selection:change', ({ selection }) => {
  console.log('Selected:', selection);
});

infographic.on('history:change', ({ action }) => {
  console.log('History action:', action);  // 'execute' | 'undo' | 'redo'
});

infographic.on('options:change', (changes) => {
  console.log('Data changed:', changes);
});
```

## Plugins

### ResizeElement Plugin

Adds resize handles to selected elements:

```typescript
// Built-in, enabled by default when editable: true
// Shows 8 handles (corners + edges) around selected element
```

### Custom Plugin

```typescript
import { IPlugin, IEditor } from '@antv/infographic';

class MyPlugin implements IPlugin {
  name = 'my-plugin';

  init(editor: IEditor) {
    // Setup plugin
  }

  destroy() {
    // Cleanup
  }
}

// Register
new Infographic({
  editable: true,
  plugins: [new MyPlugin()],
  data: { ... },
});
```

## Key Files

| File | Purpose |
|------|---------|
| `src/editor/editor.ts` | Main Editor class |
| `src/editor/managers/state.ts` | StateManager |
| `src/editor/managers/command.ts` | CommandManager |
| `src/editor/managers/interaction.ts` | InteractionManager |
| `src/editor/managers/plugin.ts` | PluginManager |
| `src/editor/interactions/` | All interaction implementations |
| `src/editor/commands/` | Command implementations |
| `src/editor/plugins/` | Plugin implementations |
| `src/editor/types/` | Type definitions |
