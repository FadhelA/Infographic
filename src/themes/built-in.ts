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
