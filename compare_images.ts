import fs from 'fs';
import path from 'path';

const logo = fs.readFileSync('src/assets/logo.png');
const anturio = fs.readFileSync('public/products/images/mini-anturio-2.png');
const kalanchoe = fs.readFileSync('public/products/images/mini-kalanchoe-2.png');

console.log(`Logo size: ${logo.length}`);
console.log(`Anturio size: ${anturio.length}`);
console.log(`Kalanchoe size: ${kalanchoe.length}`);

if (logo.equals(anturio)) {
  console.log('Anturio is identical to Logo');
} else {
  console.log('Anturio is DIFFERENT from Logo');
}

if (logo.equals(kalanchoe)) {
  console.log('Kalanchoe is identical to Logo');
} else {
  console.log('Kalanchoe is DIFFERENT from Logo');
}
