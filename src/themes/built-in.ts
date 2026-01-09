import { registerTheme } from './registry';

registerTheme('dark', {
  colorBg: '#1F1F1F',
  base: {
    text: {
      fill: '#fff',
    },
  },
});

registerTheme('hand-drawn', {
  base: {
    text: {
      'font-family': '851tegakizatsu',
    },
  },
  stylize: {
    type: 'rough',
  },
});

// Modern shadcn/ui inspired theme - Light mode
// Clean, minimal design with zinc color palette
registerTheme('shadcn', {
  colorBg: '#ffffff',
  colorPrimary: '#18181b', // zinc-900
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#09090b', // zinc-950
    },
    shape: {
      fill: '#fafafa', // zinc-50
      stroke: '#e4e4e7', // zinc-200
      'stroke-width': 1,
    },
  },
  palette: [
    '#18181b', // zinc-900
    '#3f3f46', // zinc-700
    '#52525b', // zinc-600
    '#71717a', // zinc-500
    '#a1a1aa', // zinc-400
    '#d4d4d8', // zinc-300
  ],
  title: {
    fill: '#09090b', // zinc-950
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#71717a', // zinc-500
  },
  item: {
    label: {
      fill: '#18181b', // zinc-900
      'font-weight': 500,
    },
    desc: {
      fill: '#71717a', // zinc-500
    },
    value: {
      fill: '#09090b', // zinc-950
      'font-weight': 600,
    },
    shape: {
      fill: '#f4f4f5', // zinc-100
      stroke: '#e4e4e7', // zinc-200
      'stroke-width': 1,
    },
  },
  stylize: {
    type: 'linear-gradient',
    angle: 180,
    colors: [
      { color: '#fafafa', offset: '0%' }, // zinc-50
      { color: '#f4f4f5', offset: '100%' }, // zinc-100
    ],
  },
});

// Modern shadcn/ui inspired theme - Dark mode
registerTheme('shadcn-dark', {
  colorBg: '#09090b', // zinc-950
  colorPrimary: '#fafafa', // zinc-50
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#fafafa', // zinc-50
    },
    shape: {
      fill: '#18181b', // zinc-900
      stroke: '#27272a', // zinc-800
      'stroke-width': 1,
    },
  },
  palette: [
    '#fafafa', // zinc-50
    '#d4d4d8', // zinc-300
    '#a1a1aa', // zinc-400
    '#71717a', // zinc-500
    '#52525b', // zinc-600
    '#3f3f46', // zinc-700
  ],
  title: {
    fill: '#fafafa', // zinc-50
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#a1a1aa', // zinc-400
  },
  item: {
    label: {
      fill: '#fafafa', // zinc-50
      'font-weight': 500,
    },
    desc: {
      fill: '#a1a1aa', // zinc-400
    },
    value: {
      fill: '#fafafa', // zinc-50
      'font-weight': 600,
    },
    shape: {
      fill: '#27272a', // zinc-800
      stroke: '#3f3f46', // zinc-700
      'stroke-width': 1,
    },
  },
  stylize: {
    type: 'linear-gradient',
    angle: 180,
    colors: [
      { color: '#1f1f23', offset: '0%' },
      { color: '#18181b', offset: '100%' }, // zinc-900
    ],
  },
});

// Colorful shadcn variant with blue accent
registerTheme('shadcn-blue', {
  colorBg: '#ffffff',
  colorPrimary: '#2563eb', // blue-600
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#09090b',
    },
    shape: {
      fill: '#eff6ff', // blue-50
      stroke: '#bfdbfe', // blue-200
      'stroke-width': 1,
    },
  },
  palette: [
    '#2563eb', // blue-600
    '#3b82f6', // blue-500
    '#60a5fa', // blue-400
    '#93c5fd', // blue-300
    '#bfdbfe', // blue-200
    '#dbeafe', // blue-100
  ],
  title: {
    fill: '#1e3a8a', // blue-900
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#64748b', // slate-500
  },
  item: {
    label: {
      fill: '#1e40af', // blue-800
      'font-weight': 500,
    },
    desc: {
      fill: '#64748b', // slate-500
    },
    value: {
      fill: '#2563eb', // blue-600
      'font-weight': 600,
    },
    shape: {
      fill: '#eff6ff', // blue-50
      stroke: '#bfdbfe', // blue-200
      'stroke-width': 1,
    },
  },
  stylize: {
    type: 'linear-gradient',
    angle: 135,
    colors: [
      { color: '#eff6ff', offset: '0%' }, // blue-50
      { color: '#dbeafe', offset: '100%' }, // blue-100
    ],
  },
});

// =============================================================================
// DIVERSE COLOR PALETTE VARIANTS
// shadcn styling with multi-color palettes for visual distinction
// =============================================================================

// Vibrant - Bright, high-contrast rainbow colors
registerTheme('shadcn-vibrant', {
  colorBg: '#ffffff',
  colorPrimary: '#3b82f6', // blue-500 as primary accent
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#09090b', // zinc-950
    },
    shape: {
      fill: '#fafafa', // zinc-50
      stroke: '#e4e4e7', // zinc-200
      'stroke-width': 1,
    },
  },
  palette: [
    '#ef4444', // red-500
    '#f97316', // orange-500
    '#eab308', // yellow-500
    '#22c55e', // green-500
    '#3b82f6', // blue-500
    '#8b5cf6', // violet-500
    '#ec4899', // pink-500
    '#14b8a6', // teal-500
  ],
  title: {
    fill: '#09090b', // zinc-950
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#71717a', // zinc-500
  },
  item: {
    label: {
      fill: '#18181b', // zinc-900
      'font-weight': 500,
    },
    desc: {
      fill: '#71717a', // zinc-500
    },
    value: {
      fill: '#09090b', // zinc-950
      'font-weight': 600,
    },
    shape: {
      fill: '#f4f4f5', // zinc-100
      stroke: '#e4e4e7', // zinc-200
      'stroke-width': 1,
    },
  },
});

// Vibrant Dark - Same vibrant colors on dark background
registerTheme('shadcn-vibrant-dark', {
  colorBg: '#09090b', // zinc-950
  colorPrimary: '#60a5fa', // blue-400
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#fafafa', // zinc-50
    },
    shape: {
      fill: '#18181b', // zinc-900
      stroke: '#27272a', // zinc-800
      'stroke-width': 1,
    },
  },
  palette: [
    '#f87171', // red-400
    '#fb923c', // orange-400
    '#facc15', // yellow-400
    '#4ade80', // green-400
    '#60a5fa', // blue-400
    '#a78bfa', // violet-400
    '#f472b6', // pink-400
    '#2dd4bf', // teal-400
  ],
  title: {
    fill: '#fafafa', // zinc-50
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#a1a1aa', // zinc-400
  },
  item: {
    label: {
      fill: '#fafafa', // zinc-50
      'font-weight': 500,
    },
    desc: {
      fill: '#a1a1aa', // zinc-400
    },
    value: {
      fill: '#fafafa', // zinc-50
      'font-weight': 600,
    },
    shape: {
      fill: '#27272a', // zinc-800
      stroke: '#3f3f46', // zinc-700
      'stroke-width': 1,
    },
  },
});

// Pastel - Soft, muted colors that feel refined
registerTheme('shadcn-pastel', {
  colorBg: '#fafafa', // slightly warm white
  colorPrimary: '#64748b', // slate-500 as neutral primary
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#334155', // slate-700
    },
    shape: {
      fill: '#ffffff',
      stroke: '#e2e8f0', // slate-200
      'stroke-width': 1,
    },
  },
  palette: [
    '#fca5a5', // red-300
    '#fdba74', // orange-300
    '#fcd34d', // amber-300
    '#86efac', // green-300
    '#93c5fd', // blue-300
    '#c4b5fd', // violet-300
    '#f9a8d4', // pink-300
    '#5eead4', // teal-300
  ],
  title: {
    fill: '#1e293b', // slate-800
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#64748b', // slate-500
  },
  item: {
    label: {
      fill: '#334155', // slate-700
      'font-weight': 500,
    },
    desc: {
      fill: '#64748b', // slate-500
    },
    value: {
      fill: '#1e293b', // slate-800
      'font-weight': 600,
    },
    shape: {
      fill: '#f8fafc', // slate-50
      stroke: '#e2e8f0', // slate-200
      'stroke-width': 1,
    },
  },
  stylize: {
    type: 'linear-gradient',
    angle: 180,
    colors: [
      { color: '#ffffff', offset: '0%' },
      { color: '#f8fafc', offset: '100%' }, // slate-50
    ],
  },
});

// Pastel Dark - Soft colors on dark background
registerTheme('shadcn-pastel-dark', {
  colorBg: '#0f172a', // slate-900
  colorPrimary: '#94a3b8', // slate-400
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#e2e8f0', // slate-200
    },
    shape: {
      fill: '#1e293b', // slate-800
      stroke: '#334155', // slate-700
      'stroke-width': 1,
    },
  },
  palette: [
    '#fca5a5', // red-300
    '#fdba74', // orange-300
    '#fcd34d', // amber-300
    '#86efac', // green-300
    '#93c5fd', // blue-300
    '#c4b5fd', // violet-300
    '#f9a8d4', // pink-300
    '#5eead4', // teal-300
  ],
  title: {
    fill: '#f1f5f9', // slate-100
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#94a3b8', // slate-400
  },
  item: {
    label: {
      fill: '#e2e8f0', // slate-200
      'font-weight': 500,
    },
    desc: {
      fill: '#94a3b8', // slate-400
    },
    value: {
      fill: '#f1f5f9', // slate-100
      'font-weight': 600,
    },
    shape: {
      fill: '#1e293b', // slate-800
      stroke: '#334155', // slate-700
      'stroke-width': 1,
    },
  },
  stylize: {
    type: 'linear-gradient',
    angle: 180,
    colors: [
      { color: '#1e293b', offset: '0%' }, // slate-800
      { color: '#0f172a', offset: '100%' }, // slate-900
    ],
  },
});

// Professional - Deep, desaturated colors for business contexts
registerTheme('shadcn-professional', {
  colorBg: '#ffffff',
  colorPrimary: '#475569', // slate-600 as primary
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#1e293b', // slate-800
    },
    shape: {
      fill: '#f8fafc', // slate-50
      stroke: '#cbd5e1', // slate-300
      'stroke-width': 1,
    },
  },
  palette: [
    '#dc2626', // red-600
    '#ea580c', // orange-600
    '#ca8a04', // yellow-600
    '#16a34a', // green-600
    '#2563eb', // blue-600
    '#7c3aed', // violet-600
    '#db2777', // pink-600
    '#0d9488', // teal-600
  ],
  title: {
    fill: '#0f172a', // slate-900
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#475569', // slate-600
  },
  item: {
    label: {
      fill: '#1e293b', // slate-800
      'font-weight': 500,
    },
    desc: {
      fill: '#475569', // slate-600
    },
    value: {
      fill: '#0f172a', // slate-900
      'font-weight': 600,
    },
    shape: {
      fill: '#f1f5f9', // slate-100
      stroke: '#cbd5e1', // slate-300
      'stroke-width': 1,
    },
  },
  stylize: {
    type: 'linear-gradient',
    angle: 180,
    colors: [
      { color: '#ffffff', offset: '0%' },
      { color: '#f8fafc', offset: '100%' }, // slate-50
    ],
  },
});

// Professional Dark - Deep colors on dark background
registerTheme('shadcn-professional-dark', {
  colorBg: '#020617', // slate-950
  colorPrimary: '#cbd5e1', // slate-300
  base: {
    text: {
      'font-family': 'Inter, system-ui, -apple-system, sans-serif',
      fill: '#e2e8f0', // slate-200
    },
    shape: {
      fill: '#0f172a', // slate-900
      stroke: '#1e293b', // slate-800
      'stroke-width': 1,
    },
  },
  palette: [
    '#dc2626', // red-600
    '#ea580c', // orange-600
    '#ca8a04', // yellow-600
    '#16a34a', // green-600
    '#2563eb', // blue-600
    '#7c3aed', // violet-600
    '#db2777', // pink-600
    '#0d9488', // teal-600
  ],
  title: {
    fill: '#f8fafc', // slate-50
    'font-weight': 600,
    'letter-spacing': '-0.025em',
  },
  desc: {
    fill: '#94a3b8', // slate-400
  },
  item: {
    label: {
      fill: '#e2e8f0', // slate-200
      'font-weight': 500,
    },
    desc: {
      fill: '#94a3b8', // slate-400
    },
    value: {
      fill: '#f8fafc', // slate-50
      'font-weight': 600,
    },
    shape: {
      fill: '#1e293b', // slate-800
      stroke: '#334155', // slate-700
      'stroke-width': 1,
    },
  },
  stylize: {
    type: 'linear-gradient',
    angle: 180,
    colors: [
      { color: '#1e293b', offset: '0%' }, // slate-800
      { color: '#0f172a', offset: '100%' }, // slate-900
    ],
  },
});
