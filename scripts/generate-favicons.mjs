import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
/** Exact Header Logo asset used by Logo.tsx → brandAssets.logoMark */
const logo = path.join(root, "public/brand/tpower-logo.png");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "src/app");

const pngSizes = [
  { name: "favicon-48x48.png", size: 48 },
  { name: "favicon-96x96.png", size: 96 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

async function resizePng(size) {
  return sharp(logo)
    .resize(size, size, {
      fit: "contain",
      background: { r: 10, g: 10, b: 10, alpha: 1 },
    })
    .png()
    .toBuffer();
}

async function generate() {
  for (const { name, size } of pngSizes) {
    const buffer = await resizePng(size);
    await writeFile(path.join(publicDir, name), buffer);
    console.log(`✓ public/${name}`);
  }

  // Multi-size ICO from the exact header logo (for browsers + Google /favicon.ico)
  const icoBuffers = await Promise.all([16, 32, 48].map(resizePng));
  const ico = await pngToIco(icoBuffers);
  await writeFile(path.join(publicDir, "favicon.ico"), ico);
  console.log("✓ public/favicon.ico");

  // App Router authoritative favicon — replaces Next.js default src/app/favicon.ico
  await writeFile(path.join(appDir, "favicon.ico"), ico);
  console.log("✓ src/app/favicon.ico");

  // High-res App Router icon from the same header logo
  const icon32 = await resizePng(32);
  const icon192 = await resizePng(192);
  await writeFile(path.join(appDir, "icon.png"), icon192);
  console.log("✓ src/app/icon.png");
  await writeFile(path.join(appDir, "apple-icon.png"), await resizePng(180));
  console.log("✓ src/app/apple-icon.png");

  // Remove conflicting simplified SVG that is NOT the header logo
  try {
    await unlink(path.join(publicDir, "favicon.svg"));
    console.log("✓ removed public/favicon.svg (non-header mark)");
  } catch {
    // already absent
  }

  // Keep a copy of the 32px PNG for debugging/reference (optional public asset already covered)
  await writeFile(path.join(publicDir, "favicon-32x32.png"), icon32);
  console.log("✓ public/favicon-32x32.png");

  const manifest = {
    name: "TPOWER Partner",
    short_name: "TPOWER Partner",
    description: "Official TPOWER Casino Partner Program",
    start_url: "/en",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#e31837",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
  await writeFile(path.join(publicDir, "site.webmanifest"), JSON.stringify(manifest, null, 2));
  console.log("✓ site.webmanifest");
  console.log("\nSource: public/brand/tpower-logo.png (Header Logo)");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
