/**
 * Script to generate Kling AI animations for Nexus AI startup site.
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
    name: "Hero Data Visualization",
    prompt:
      "Abstract 3D visualization of data flowing through an AI neural network. Glowing blue and purple particles streaming through interconnected nodes. Dark background with neon accents. Camera pulls back slowly revealing a vast network. Cinematic, futuristic, photorealistic.",
    aspect_ratio: "16:9" as const,
    duration: 10 as const,
    mode: "pro" as const,
  },
  {
    id: "dashboard",
    name: "Analytics Dashboard Animation",
    prompt:
      "A modern SaaS analytics dashboard coming to life. Charts animating in, real-time metrics updating, smooth transitions. Dark theme UI. Purple and indigo color scheme. Clean, minimal design. Professional software demo style.",
    aspect_ratio: "16:9" as const,
    duration: 5 as const,
    mode: "pro" as const,
  },
  {
    id: "ai_brain",
    name: "AI Brain Animation",
    prompt:
      "A 3D glowing AI brain made of light particles. Neural connections firing with electricity. Blue and purple color palette. Slowly rotating, hyper-detailed. Scientific visualization aesthetic. Dark space background.",
    aspect_ratio: "1:1" as const,
    duration: 5 as const,
    mode: "pro" as const,
  },
];

async function main() {
  console.log("🎬 Generating Kling AI animations for Nexus AI...\n");

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
