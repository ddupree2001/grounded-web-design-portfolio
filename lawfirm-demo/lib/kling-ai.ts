/**
 * Kling AI API client
 * Docs: https://kling.ai/document-api/quickStart/productIntroduction/overview
 *
 * Set KLING_ACCESS_KEY and KLING_SECRET_KEY in your environment variables.
 * A fresh JWT is generated per request using HS256.
 */

import { createHmac } from "crypto";

const KLING_API_BASE = "https://api.klingai.com/v1";

function base64url(input: string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

function generateJwt(): string {
  const accessKey = process.env.KLING_ACCESS_KEY;
  const secretKey = process.env.KLING_SECRET_KEY;
  if (!accessKey || !secretKey) {
    throw new Error(
      "KLING_ACCESS_KEY and KLING_SECRET_KEY must be set in .env.local"
    );
  }
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = base64url(
    JSON.stringify({ iss: accessKey, exp: now + 1800, nbf: now - 5 })
  );
  const signature = createHmac("sha256", secretKey)
    .update(`${header}.${payload}`)
    .digest("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
  return `${header}.${payload}.${signature}`;
}

export interface KlingTextToVideoParams {
  /** The text prompt describing the animation */
  prompt: string;
  /** Negative prompt to avoid certain content */
  negative_prompt?: string;
  /** Video duration in seconds (5 or 10) */
  duration?: 5 | 10;
  /** Aspect ratio of the output video */
  aspect_ratio?: "16:9" | "9:16" | "1:1";
  /** Model version: kling-v1, kling-v1-5, or kling-v2 */
  model_name?: "kling-v1" | "kling-v1-5" | "kling-v2";
  /** Creative mode for more dynamic outputs */
  mode?: "std" | "pro";
  /** Number of generations (1-4) */
  n?: number;
}

export interface KlingImageToVideoParams {
  /** The source image URL */
  image: string;
  /** Tail image URL (for morphing/interpolation) */
  image_tail?: string;
  /** Motion prompt describing how the image should animate */
  prompt?: string;
  /** Video duration in seconds */
  duration?: 5 | 10;
  /** Model version */
  model_name?: "kling-v1" | "kling-v1-5" | "kling-v2";
  /** Creative mode */
  mode?: "std" | "pro";
}

export interface KlingVideoTask {
  task_id: string;
  task_status: "submitted" | "processing" | "succeed" | "failed";
  task_status_msg?: string;
  created_at: number;
  updated_at: number;
  task_result?: {
    videos: Array<{
      id: string;
      url: string;
      duration: string;
    }>;
  };
}

export interface KlingGenerateResponse {
  code: number;
  message: string;
  request_id: string;
  data: KlingVideoTask;
}

/**
 * Generates a video from a text prompt using Kling AI.
 * Returns a task that you must poll with `getTaskStatus`.
 */
export async function generateTextToVideo(
  params: KlingTextToVideoParams
): Promise<KlingVideoTask> {
  const response = await fetch(`${KLING_API_BASE}/videos/text2video`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${generateJwt()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model_name: "kling-v1-5",
      mode: "std",
      duration: 5,
      aspect_ratio: "16:9",
      n: 1,
      ...params,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Kling AI API error (${response.status}): ${error}`);
  }

  const result: KlingGenerateResponse = await response.json();
  if (result.code !== 0) {
    throw new Error(`Kling AI error: ${result.message}`);
  }
  return result.data;
}

/**
 * Generates a video from an image using Kling AI.
 * Returns a task that you must poll with `getTaskStatus`.
 */
export async function generateImageToVideo(
  params: KlingImageToVideoParams
): Promise<KlingVideoTask> {
  const response = await fetch(`${KLING_API_BASE}/videos/image2video`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${generateJwt()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model_name: "kling-v1-5",
      mode: "std",
      duration: 5,
      n: 1,
      ...params,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Kling AI API error (${response.status}): ${error}`);
  }

  const result: KlingGenerateResponse = await response.json();
  if (result.code !== 0) {
    throw new Error(`Kling AI error: ${result.message}`);
  }
  return result.data;
}

/**
 * Gets the status of a video generation task.
 * Poll every 5-10 seconds until task_status === 'succeed' or 'failed'.
 */
export async function getTaskStatus(taskId: string): Promise<KlingVideoTask> {
  const response = await fetch(
    `${KLING_API_BASE}/videos/text2video/${taskId}`,
    {
      headers: {
        Authorization: `Bearer ${generateJwt()}`,
      },
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Kling AI API error (${response.status}): ${error}`);
  }

  const result: KlingGenerateResponse = await response.json();
  if (result.code !== 0) {
    throw new Error(`Kling AI error: ${result.message}`);
  }
  return result.data;
}

/**
 * Polls a task until it completes or fails.
 * Times out after `maxWaitMs` milliseconds (default: 5 minutes).
 */
export async function waitForTask(
  taskId: string,
  pollIntervalMs = 5000,
  maxWaitMs = 300_000
): Promise<KlingVideoTask> {
  const start = Date.now();
  while (Date.now() - start < maxWaitMs) {
    const task = await getTaskStatus(taskId);
    if (task.task_status === "succeed") return task;
    if (task.task_status === "failed") {
      throw new Error(`Task failed: ${task.task_status_msg}`);
    }
    await new Promise((r) => setTimeout(r, pollIntervalMs));
  }
  throw new Error(`Task timed out after ${maxWaitMs / 1000}s`);
}
