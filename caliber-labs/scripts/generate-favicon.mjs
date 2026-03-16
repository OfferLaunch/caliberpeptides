/**
 * Generates a white-circle favicon with the Brown Emblem centered inside.
 * Output: app/icon.png (Next.js uses this automatically)
 * Run: node scripts/generate-favicon.mjs
 */
import sharp from 'sharp';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const emblemPath = join(root, 'public', 'logos', 'Emblems', 'Brown Emblem.png');
const size = 64;

if (!existsSync(emblemPath)) {
  console.error('Emblem not found:', emblemPath);
  process.exit(1);
}

// SVG: white circle
const whiteCircleSvg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
</svg>`
);

const circlePng = await sharp(whiteCircleSvg).png().toBuffer();

// Load emblem, ensure alpha, make near-black pixels transparent so only brown shape shows
const emblemSize = Math.round(size * 0.65);
let emblemPipe = sharp(emblemPath)
  .resize(emblemSize, emblemSize, { fit: 'inside' })
  .ensureAlpha();

const emblem = await emblemPipe.png().toBuffer();

const left = Math.round((size - emblemSize) / 2);
const top = Math.round((size - emblemSize) / 2);

const favicon64 = await sharp(circlePng)
  .composite([{ input: emblem, left, top }])
  .png()
  .toBuffer();

await sharp(favicon64)
  .resize(32, 32)
  .toFile(join(root, 'app', 'icon.png'));

console.log('Favicon generated: app/icon.png (white circle with Brown Emblem)');
