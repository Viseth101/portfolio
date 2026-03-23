const fs = require('fs');
const images = require('./extracted_images.json');

const content = `// Auto-generated from extracted text.txt data

export const blockImages: Record<string, string> = ${JSON.stringify(images, null, 2)};

export const renderGridConfig = {
  gridConfig: [8, 8, 6, 6, 6, 6, 6, 3],
  reducedGridConfig: [4, 4, 3, 2, 2, 2, 2, 1],
  blockAnimationDuration: 1000,
  blockSlideOutDelay: 50,
  availableBlocks: ['block-a', 'block-b', 'block-c', 'block-d', 'block-e', 'block-f'] as const,
  staticBlockPositions: [[1, 2], [1, 5], [4, 1], [5, 4], [6, 0]],
  falseSquares: {
    normal: [[0, 0], [3, 0], [5, 0]],
    reduced: [[0, 0], [4, 0]]
  }
};
`;

fs.writeFileSync('d:\\Programming Lesson\\Codes\\portfolio\\src\\data\\render-grid-data.ts', content);
console.log('Successfully generated render-grid-data.ts');
