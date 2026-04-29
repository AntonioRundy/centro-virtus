import sharp from "sharp";
import { readFileSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC    = join(__dirname, "../public");

function kb(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

async function optimise(file, opts) {
  const input  = join(PUBLIC, file);
  const before = statSync(input).size;

  const buf = readFileSync(input);
  let pipeline = sharp(buf).rotate(); // auto-orient from EXIF

  if (opts.width) {
    pipeline = pipeline.resize(opts.width, opts.height ?? null, {
      fit:       "inside",
      withoutEnlargement: true,
    });
  }

  if (opts.format === "webp") {
    pipeline = pipeline.webp({ quality: opts.quality ?? 82 });
  } else {
    pipeline = pipeline.png({ compressionLevel: 9, quality: opts.quality ?? 85 });
  }

  await pipeline.toFile(input);

  const after = statSync(input).size;
  console.log(`✓ ${file}: ${kb(before)} → ${kb(after)}  (saved ${kb(before - after)})`);
}

console.log("\nOptimising images…\n");

await optimise("logo.png",  { width: 320,  quality: 90 });
await optimise("hero.png",  { width: 1200, quality: 82 });

console.log("\nDone.\n");
