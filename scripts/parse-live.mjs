import fs from "fs";

const h = fs.readFileSync("tmp-live.html", "utf8");
const urls = [...new Set([...h.matchAll(/url=%2F([^&"]+)/g)].map((m) => decodeURIComponent(m[1])))]
  .filter((u) => /logo|hero|image|brand|favicon|promo|casino/i.test(u))
  .sort();
console.log("asset urls:\n" + urls.join("\n"));

const idx = h.indexOf("tpower-logo");
if (idx !== -1) console.log("\ncontext:\n" + h.slice(Math.max(0, idx - 120), idx + 220));
