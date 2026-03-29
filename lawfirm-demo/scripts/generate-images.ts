/**
 * Script to generate AI images for Meridian Legal law firm site using Nano Banana
 * (Google Gemini Imagen 3 image generation).
 *
 * Usage:
 *   GEMINI_API_KEY=your_key npx tsx scripts/generate-images.ts
 *
 * Get your API key at: https://aistudio.google.com/apikey
 * Or via Nano Banana: https://nanobananas.ai (select "Create images" from tools)
 *
 * Generated images are saved to public/images/ and paths written to public/images.json
 */

import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY environment variable is required.");
  console.error("Get your key at https://aistudio.google.com/apikey");
  process.exit(1);
}

const IMAGES = [
  {
    id: "hero",
    name: "Hero Background",
    prompt:
      "Grand neoclassical courthouse exterior at dusk. Tall marble columns, stone steps, American flag, warm golden light. Authoritative, prestigious architecture. Wide angle. Professional architectural photography.",
    aspectRatio: "16:9",
  },
  {
    id: "office",
    name: "Law Office Interior",
    prompt:
      "Prestigious law firm conference room. Dark mahogany table, leather chairs, floor-to-ceiling bookshelves with law books, brass fixtures, large windows with city view. Professional interior architecture photography.",
    aspectRatio: "16:9",
  },
  {
    id: "attorney_eleanor",
    name: "Managing Partner Eleanor Whitmore",
    prompt:
      "Professional headshot of a confident senior female attorney in her 50s. Conservative dark navy blazer, white blouse, pearl necklace. Neutral gray background. Sharp, authoritative expression. Studio portrait photography, soft even lighting.",
    aspectRatio: "4:5",
  },
  {
    id: "attorney_james",
    name: "Senior Partner James Thornton",
    prompt:
      "Professional headshot of a distinguished male attorney in his 60s. Dark charcoal suit, silk tie. Silver hair, strong jaw. Neutral gray background. Confident, experienced expression. Studio portrait photography, professional lighting.",
    aspectRatio: "4:5",
  },
  {
    id: "attorney_sophia",
    name: "Partner Sophia Kaur",
    prompt:
      "Professional headshot of a sharp female attorney in her 40s of South Asian descent. Elegant dark blazer, minimal gold jewelry. Neutral gray background. Intelligent, focused expression. Studio portrait photography, professional lighting.",
    aspectRatio: "4:5",
  },
];

interface ImagenResponse {
  predictions: Array<{
    bytesBase64Encoded: string;
    mimeType: string;
  }>;
}

async function generateImage(
  prompt: string,
  aspectRatio: string
): Promise<Buffer> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${API_KEY}`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: {
        sampleCount: 1,
        aspectRatio,
        safetyFilterLevel: "block_only_high",
        personGeneration: "allow_adult",
      },
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Imagen API error ${response.status}: ${err}`);
  }

  const data = (await response.json()) as ImagenResponse;
  const b64 = data.predictions[0].bytesBase64Encoded;
  return Buffer.from(b64, "base64");
}

async function main() {
  console.log("⚖ Generating AI images for Meridian Legal via Nano Banana / Imagen 3...\n");

  const imagesDir = join(process.cwd(), "public", "images");
  if (!existsSync(imagesDir)) mkdirSync(imagesDir, { recursive: true });

  const results: Record<string, string> = {};

  for (const img of IMAGES) {
    console.log(`Generating: ${img.name}`);
    console.log(`  Prompt: ${img.prompt.substring(0, 70)}...`);

    try {
      const buffer = await generateImage(img.prompt, img.aspectRatio);
      const filename = `${img.id}.jpg`;
      const outputPath = join(imagesDir, filename);
      writeFileSync(outputPath, buffer);
      results[img.id] = `/images/${filename}`;
      console.log(`  ✅ Saved: public/images/${filename}\n`);
    } catch (err) {
      console.error(`  ❌ Failed: ${err}\n`);
    }
  }

  const jsonPath = join(process.cwd(), "public", "images.json");
  writeFileSync(jsonPath, JSON.stringify(results, null, 2));
  console.log(`✅ Saved image paths to public/images.json`);
  console.log("   Deploy your site and the images will load automatically.");
}

main().catch(console.error);
