/*
  Studio route - no longer used - replaced with static data approach
*/
"use client";

export default function StudioClient() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black dark">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-text-primary">Sanity CMS Removed</h1>
        <p className="mt-2 text-text-secondary">
          Studio route is no longer active. Portfolio now uses static data from <code className="font-mono">src/data/portfolio-data.ts</code>.
        </p>
        <p className="mt-4 text-sm text-text-muted">
          Visit <code className="font-mono">/admin</code> for portfolio management.
        </p>
      </div>
    </div>
  );
}
