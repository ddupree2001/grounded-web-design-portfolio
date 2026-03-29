/**
 * Script to generate AI images for Bella Vista restaurant site using Nano Banana
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
      "Cinematic wide shot of an elegant Italian restaurant at golden hour. Candlelit tables with white linen, warm amber glow, wooden beams, soft bokeh in background. Michelin-star ambiance. Photorealistic, professional interior photography, horizontal format.",
    aspectRatio: "16:9",
  },
  {
    id: "about",
    name: "Restaurant Interior",
    prompt:
      "Beautiful intimate Italian restaurant dining room. Exposed brick walls, arched windows, candles on tables, wine glasses, fresh flowers. Warm evening light. Photorealistic, editorial food photography style, vertical format.",
    aspectRatio: "3:4",
  },
  {
    id: "pasta",
    name: "Signature Pasta Dish",
    prompt:
      "Close-up of hand-rolled tagliatelle pasta plated elegantly. Bolognese sauce, fresh basil leaf, shaved parmigiano. Soft candlelight, dark background, white ceramic plate. Photorealistic macro food photography.",
    aspectRatio: "1:1",
  },
  {
    id: "wine",
    name: "Wine Service",
    prompt:
      "Elegant sommelier pouring deep red Barolo wine into a crystal Burgundy glass. Cellar stone wall in background, warm amber lighting. Photorealistic, luxury hospitality photography.",
    aspectRatio: "9:16",
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
  console.log("🍃 Generating AI images for Bella Vista via Nano Banana / Imagen 3...\n");

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
