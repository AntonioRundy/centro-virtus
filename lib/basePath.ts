// Resolved at build time by Next.js (NEXT_PUBLIC_ vars are inlined).
// Locally: empty string → images served from /public root.
// GitHub Pages CI: base path injected via NEXT_PUBLIC_BASE_PATH → correct prefixed path.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${BASE}${path}`;
}
