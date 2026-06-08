const { readFileSync, writeFileSync, mkdirSync } = require('fs');
const { join } = require('path');

const inputPath = '/mnt/user-uploads/image.png';
const outputDir = 'public/products/images';

try {
  mkdirSync(outputDir, { recursive: true });
  const imageBuffer = readFileSync(inputPath);
  
  writeFileSync(join(outputDir, 'mini-anturio-1.png'), imageBuffer);
  writeFileSync(join(outputDir, 'mini-anturio-2.png'), imageBuffer);
  writeFileSync(join(outputDir, 'mini-anturio-3.png'), imageBuffer);
  
  console.log('Images saved successfully');
} catch (error) {
  console.error('Error saving images:', error);
  process.exit(1);
}
