const fs = require('fs');

const bg = '#141414'; // Dark background
const c1 = '#8A05FF'; // Purple
const c2 = '#59FFA4'; // Mint green
const c3 = '#F347FF'; // Pink/Magenta
const c4 = '#E6DAFF'; // Light purple/white
const c5 = '#1EFE9D'; // Bright green

const svgs = {
  // Pattern A: Cyber Grid & Blinking Dot
  'block-a': `<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
    <rect width='100' height='100' fill='${bg}'/>
    <path d='M0 25 H100 M0 50 H100 M0 75 H100 M25 0 V100 M50 0 V100 M75 0 V100' stroke='${c1}' stroke-width='1' stroke-opacity='0.3'/>
    <rect x='50' y='50' width='25' height='25' fill='${c2}' opacity='0.8'/>
    <rect x='25' y='25' width='25' height='25' fill='${c1}' opacity='0.5'/>
  </svg>`,

  // Pattern B: Diagonal Data Streams
  'block-b': `<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
    <rect width='100' height='100' fill='${bg}'/>
    <path d='M-20 120 L120 -20 M-10 120 L120 -10 M0 120 L120 0' stroke='${c3}' stroke-width='2' stroke-opacity='0.6'/>
    <path d='M-20 80 L80 -20 M-10 80 L80 -10 M0 80 L80 0' stroke='${c4}' stroke-width='1' stroke-opacity='0.3'/>
    <circle cx='50' cy='50' r='8' fill='${bg}' stroke='${c5}' stroke-width='3'/>
  </svg>`,

  // Pattern C: Tech Crosshairs
  'block-c': `<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
    <rect width='100' height='100' fill='${bg}'/>
    <path d='M10 50 H40 M60 50 H90 M50 10 V40 M50 60 V90' stroke='${c5}' stroke-width='2'/>
    <circle cx='50' cy='50' r='3' fill='${c3}'/>
    <rect x='10' y='10' width='10' height='10' fill='none' stroke='${c1}' stroke-width='2'/>
    <rect x='80' y='80' width='10' height='10' fill='none' stroke='${c1}' stroke-width='2'/>
  </svg>`,

  // Pattern D: Circuit Traces
  'block-d': `<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
    <rect width='100' height='100' fill='${bg}'/>
    <path d='M10 90 L30 90 L50 70 L50 10' fill='none' stroke='${c1}' stroke-width='3'/>
    <path d='M50 70 L90 70' fill='none' stroke='${c1}' stroke-width='3'/>
    <circle cx='50' cy='10' r='4' fill='${c4}'/>
    <circle cx='10' cy='90' r='4' fill='${c4}'/>
    <circle cx='90' cy='70' r='4' fill='${c4}'/>
    <circle cx='30' cy='50' r='3' fill='${c3}'/>
    <circle cx='70' cy='30' r='3' fill='${c2}'/>
  </svg>`,

  // Pattern E: Diamond Core
  'block-e': `<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
    <rect width='100' height='100' fill='${bg}'/>
    <polygon points='50,10 90,50 50,90 10,50' fill='none' stroke='${c4}' stroke-width='1'/>
    <polygon points='50,25 75,50 50,75 25,50' fill='none' stroke='${c2}' stroke-width='2'/>
    <polygon points='50,40 60,50 50,60 40,50' fill='${c3}'/>
    <path d='M50 0 V10 M50 90 V100 M0 50 H10 M90 50 H100' stroke='${c1}' stroke-width='2'/>
  </svg>`,

  // Pattern F: Pulse Waves
  'block-f': `<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
    <rect width='100' height='100' fill='${bg}'/>
    <circle cx='50' cy='50' r='40' fill='none' stroke='${c1}' stroke-width='1' stroke-dasharray='4 4'/>
    <circle cx='50' cy='50' r='25' fill='none' stroke='${c3}' stroke-width='2' stroke-dasharray='8 4'/>
    <circle cx='50' cy='50' r='14' fill='none' stroke='${c2}' stroke-width='3'/>
    <circle cx='50' cy='50' r='4' fill='${c4}'/>
  </svg>`
};

const blockImages = {};
for (const [key, svg] of Object.entries(svgs)) {
    const minified = svg.replace(/\n/g, '').replace(/\s+/g, ' ');
    const encoded = encodeURIComponent(minified);
    blockImages[key] = `data:image/svg+xml,${encoded}`;
}

const content = `// Auto-generated tech patterns

export const blockImages: Record<string, string> = ${JSON.stringify(blockImages, null, 2)};

export const renderGridConfig = {
  gridConfig: [8, 7, 5, 6, 4, 6, 6, 3],
  reducedGridConfig: [4, 3, 2, 2, 1, 2, 2, 1],
  blockAnimationDuration: 1000,
  blockSlideOutDelay: 50,
  availableBlocks: ['block-a', 'block-b', 'block-c', 'block-d', 'block-e', 'block-f'] as const,
  staticBlockPositions: [[1, 2], [1, 5], [4, 1], [5, 4], [6, 0]],
  falseSquares: {
    normal: [] as [number, number][],
    reduced: [] as [number, number][]
  }
};
`;

fs.writeFileSync('d:\\\\Programming Lesson\\\\Codes\\\\portfolio\\\\src\\\\data\\\\render-grid-data.ts', content);
console.log('Successfully generated new custom SVGs!');
