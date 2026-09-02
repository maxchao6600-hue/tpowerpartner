import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const logo = path.join(root, "public/brand/tpower-logo.png");
const out = path.join(root, "public");

const sizes = [
  { name: "favicon-48x48.png", size: 48 },
  { name: "favicon-96x96.png", size: 96 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

async function generate() {
  for (const { name, size } of sizes) {
    const buffer = await sharp(logo)
      .resize(size, size, { fit: "contain", background: { r: 10, g: 10, b: 10, alpha: 1 } })
      .png()
      .toBuffer();
    await writeFile(path.join(out, name), buffer);
    console.log(`✓ ${name}`);
  }

  const icoBuffer = await sharp(logo)
    .resize(32, 32, { fit: "contain", background: { r: 10, g: 10, b: 10, alpha: 1 } })
    .png()
    .toBuffer();
  await writeFile(path.join(out, "favicon.ico"), icoBuffer);
  console.log("✓ favicon.ico (32px PNG container)");

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
  await writeFile(path.join(out, "site.webmanifest"), JSON.stringify(manifest, null, 2));
  console.log("✓ site.webmanifest");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
