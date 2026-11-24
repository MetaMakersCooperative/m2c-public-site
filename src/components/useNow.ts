"use client";
import { useSyncExternalStore } from "react";

/** Set in next.config.ts so the server render and the client's first (hydration) render agree. */
const BUILD_TIME = Number(process.env.BUILD_TIME) || 0;

const MINUTE = 60 * 1000;

function subscribe(onChange: () => void) {
  const id = setInterval(onChange, MINUTE);
  return () => clearInterval(id);
}

// Rounded to the minute so consecutive reads return the same value, as useSyncExternalStore requires.
const getSnapshot = () => Math.floor(Date.now() / MINUTE) * MINUTE;
const getServerSnapshot = () => BUILD_TIME;

/**
 * The current time (ms), refreshed every minute.
 *
 * The site is statically exported, so pages are rendered with the build time and then update to the
 * visitor's clock right after hydration. This keeps upcoming/past events correct between deploys.
 */
export default function useNow(): number {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
