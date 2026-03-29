/**
 * Script to generate Kling AI animations for Bella Vista restaurant site.
 *
 * Usage:
 *   KLING_AI_API_KEY=your_key npx tsx scripts/generate-animations.ts
 *
 * This generates animations and saves the video URLs to public/animations.json
 * which the site then uses for the video components.
 */

import { generateTextToVideo, waitForTask } from "../lib/kling-ai";
import { writeFileSync } from "fs";
import { join } from "path";

const ANIMATIONS = [
  {
    id: "hero",
    name: "Hero Background",
    prompt:
      "Cinematic overhead shot of an elegant Italian restaurant table at golden hour. Fresh pasta, a glass of red wine, soft candlelight flickering. Warm amber tones, shallow depth of field. Camera slowly drifts downward. Photorealistic, high-end food photography style.",
    aspect_ratio: "16:9" as const,
    duration: 10 as const,
    mode: "pro" as const,
  },
  {
    id: "pasta",
    name: "Signature Pasta Reveal",
    prompt:
      "Macro close-up of hand-rolled tagliatelle pasta being delicately plated. Bolognese sauce being spooned, fresh basil leaf landing softly, parmesan being shaved. Slow motion. Warm lighting. Cinematic. Appetizing.",
    aspect_ratio: "1:1" as const,
    duration: 5 as const,
    mode: "pro" as const,
  },
  {
    id: "wine",
    name: "Wine Pour",
    prompt:
      "Elegant dark red wine being poured into a crystal wine glass. Candlelight catches the liquid. Slow motion macro. Black marble surface. Sophisticated and luxurious atmosphere.",
    aspect_ratio: "9:16" as const,
    duration: 5 as const,
    mode: "pro" as const,
  },
];

async function main() {
  console.log("🎬 Generating Kling AI animations for Bella Vista...\n");

  const results: Record<string, string> = {};

  for (const anim of ANIMATIONS) {
    console.log(`Generating: ${anim.name}`);
    console.log(`  Prompt: ${anim.prompt.substring(0, 60)}...`);

    try {
      const task = await generateTextToVideo({
        prompt: anim.prompt,
        aspect_ratio: anim.aspect_ratio,
        duration: anim.duration,
        mode: anim.mode,
        model_name: "kling-v1-5",
      });

      console.log(`  Task ID: ${task.task_id} — polling...`);
      const completed = await waitForTask(task.task_id);

      if (completed.task_result?.videos[0]) {
        const url = completed.task_result.videos[0].url;
        results[anim.id] = url;
        console.log(`  ✅ Done: ${url}\n`);
      }
    } catch (err) {
      console.error(`  ❌ Failed: ${err}\n`);
    }
  }

  const outputPath = join(process.cwd(), "public", "animations.json");
  writeFileSync(outputPath, JSON.stringify(results, null, 2));
  console.log(`\n✅ Saved animation URLs to public/animations.json`);
  console.log("   Deploy your site and the videos will load automatically.");
}

main().catch(console.error);
