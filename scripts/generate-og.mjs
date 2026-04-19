import sharp from "sharp"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")

const svg = readFileSync(join(root, "public/og-image.svg"))

await sharp(Buffer.from(svg))
  .resize(1200, 630)
  .png({ quality: 95 })
  .toFile(join(root, "public/og-image.png"))

console.log("✓ public/og-image.png generado")
