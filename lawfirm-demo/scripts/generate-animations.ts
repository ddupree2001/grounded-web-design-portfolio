/**
 * Script to generate Kling AI animations for Meridian Legal law firm site.
 *
 * Usage:
 *   KLING_AI_API_KEY=your_key npx tsx scripts/generate-animations.ts
 */

import { generateTextToVideo, waitForTask } from "../lib/kling-ai";
import { writeFileSync } from "fs";
import { join } from "path";

const ANIMATIONS = [
  {
    id: "hero",
    name: "Hero Establishing Shot",
    prompt:
      "Cinematic exterior shot of a prestigious glass skyscraper at golden hour. The camera slowly pans upward revealing the full height of the building. Dramatic clouds moving in time-lapse. Warm sunset light reflecting off glass. Professional, authoritative, architectural photography style.",
    aspect_ratio: "16:9" as const,
    duration: 10 as const,
    mode: "pro" as const,
  },
  {
    id: "gavel",
    name: "Gavel Motion",
    prompt:
      "A polished wooden gavel resting on a marble surface in a grand courtroom. Dramatic lighting with golden rays streaming through tall windows. Slow zoom in. Dust particles floating in light beams. Cinematic. Professional photography.",
    aspect_ratio: "1:1" as const,
    duration: 5 as const,
    mode: "pro" as const,
  },
  {
    id: "library",
    name: "Legal Library Pan",
    prompt:
      "A grand law library with floor-to-ceiling dark wood bookshelves filled with leather-bound legal volumes. Warm desk lamps glowing. Camera slowly pans across the room. Scholars visible in background. Prestigious, traditional, intellectual atmosphere.",
    aspect_ratio: "16:9" as const,
    duration: 5 as const,
    mode: "pro" as const,
  },
];

async function main() {
  console.log("🎬 Generating Kling AI animations for Meridian Legal...\n");

  const results: Record<string, string> = {};

  for (const anim of ANIMATIONS) {
    console.log(`Generating: ${anim.name}`);
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
        results[anim.id] = completed.task_result.videos[0].url;
        console.log(`  ✅ Done\n`);
      }
    } catch (err) {
      console.error(`  ❌ Failed: ${err}\n`);
    }
  }

  writeFileSync(
    join(process.cwd(), "public", "animations.json"),
    JSON.stringify(results, null, 2)
  );
  console.log("✅ Saved to public/animations.json");
}

main().catch(console.error);
