import { readFileSync, existsSync } from "fs";
import { join } from "path";

export interface ImageUrls {
  hero?: string;
  about?: string;
  chef?: string;
  pasta?: string;
  wine?: string;
  [key: string]: string | undefined;
}

/**
 * Reads the generated image paths from public/images.json.
 * Returns an empty object if the file doesn't exist yet.
 * Call this in Server Components to pass paths to AIImage components.
 */
export function getImageUrls(): ImageUrls {
  const filePath = join(process.cwd(), "public", "images.json");
  if (!existsSync(filePath)) return {};
  try {
    return JSON.parse(readFileSync(filePath, "utf-8"));
  } catch {
    return {};
  }
}
