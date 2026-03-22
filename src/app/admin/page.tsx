"use client";

/**
 * Simple admin panel for portfolio management.
 * Password-protected route (not linked from main site).
 * Open-to-work toggle persists in browser localStorage.
 */

import { useState } from "react";
import { siteConfig } from "@/data/portfolio-data";
import {
  AvailabilityMode,
  readAvailabilityModePreference,
  readOpenToWorkPreference,
  writeAvailabilityModePreference,
  writeOpenToWorkPreference,
} from "@/lib/open-to-work";

const ADMIN_PASSWORD = "portfolio2026";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [openToWork, setOpenToWork] = useState(() => readOpenToWorkPreference(siteConfig.openToWork));
  const [availabilityMode, setAvailabilityMode] = useState<AvailabilityMode>(() =>
    readAvailabilityModePreference("internships")
  );

  const handleLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordInput("");
    } else {
      alert("Incorrect password");
      setPasswordInput("");
    }
  };

  const handleOpenToWorkToggle = () => {
    const nextValue = !openToWork;
    setOpenToWork(nextValue);
    writeOpenToWorkPreference(nextValue);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasswordInput("");
  };

  const handleAvailabilityModeChange = (value: AvailabilityMode) => {
    setAvailabilityMode(value);
    writeAvailabilityModePreference(value);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 dark:bg-background-primary sm:px-6">
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-border/80 dark:bg-background-card sm:p-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-text-primary">Portfolio Admin</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-text-secondary">Enter password to continue</p>

          <div className="mt-6 space-y-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              placeholder="Password"
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-accent-primary focus:outline-none dark:border-border dark:bg-background-secondary dark:text-text-primary dark:placeholder:text-text-muted"
            />
            <button
              onClick={handleLogin}
              className="w-full rounded-lg bg-accent-primary px-4 py-2 font-semibold text-white hover:bg-accent-glow"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 dark:bg-background-primary sm:px-6 sm:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-text-primary">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-border dark:text-text-secondary dark:hover:bg-background-secondary"
          >
            Logout
          </button>
        </div>

        {/* Quick Settings Section */}
        <div className="mb-12 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-border/80 dark:bg-background-card sm:p-8">
          <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-text-primary">Quick Settings</h2>

          <div className="space-y-6">
            {/* Open to Work Toggle */}
            <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-border/50 dark:bg-background-secondary/30">
              <div>
                <p className="font-semibold text-slate-900 dark:text-text-primary">Open to Work</p>
                <p className="text-sm text-slate-600 dark:text-text-secondary">
                  Currently: <strong>{openToWork ? "Yes" : "No"}</strong>
                </p>
              </div>
              <button
                onClick={handleOpenToWorkToggle}
                aria-label="Toggle open to work"
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                  openToWork ? "bg-emerald-600" : "bg-slate-400"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                    openToWork ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-border/50 dark:bg-background-secondary/30">
              <p className="font-semibold text-slate-900 dark:text-text-primary">Availability Badge Label</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-text-secondary">
                Choose which message appears on the navbar badge.
              </p>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => handleAvailabilityModeChange("internships")}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                    availabilityMode === "internships"
                      ? "border-accent-primary bg-accent-primary/10 text-accent-primary"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-border dark:text-text-secondary dark:hover:bg-background-secondary"
                  }`}
                >
                  Open to internships
                </button>
                <button
                  type="button"
                  onClick={() => handleAvailabilityModeChange("work")}
                  className={`rounded-lg border px-3 py-2 text-sm font-semibold transition-colors ${
                    availabilityMode === "work"
                      ? "border-accent-primary bg-accent-primary/10 text-accent-primary"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-border dark:text-text-secondary dark:hover:bg-background-secondary"
                  }`}
                >
                  Open to work
                </button>
              </div>
            </div>

            {/* Contact Info Display */}
            <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-border/50 dark:bg-background-secondary/30">
              <p className="font-semibold text-slate-900 dark:text-text-primary">Contact Info (Read-only)</p>
              <div className="grid gap-2 text-sm">
                <p className="text-slate-600 dark:text-text-secondary">
                  Email: <span className="text-accent-primary">{siteConfig.email}</span>
                </p>
                <p className="text-slate-600 dark:text-text-secondary">
                  GitHub: <span className="text-accent-primary truncate">{siteConfig.github}</span>
                </p>
                <p className="text-slate-600 dark:text-text-secondary">
                  LinkedIn: <span className="text-accent-primary truncate">{siteConfig.linkedin}</span>
                </p>
              </div>
            </div>

            {/* Save Notice */}
            <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-4">
              <p className="text-sm text-amber-700 dark:text-amber-200">
                Availability settings now save in your browser (localStorage) and update the navbar badge immediately.
              </p>
            </div>
          </div>
        </div>

        {/* How to Update Guide */}
        <div>
          <h2 className="mb-6 text-xl font-bold text-slate-900 dark:text-text-primary">How to Update Your Portfolio</h2>

          <div className="grid gap-4 md:grid-cols-2">
            {/* Card 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-border/80 dark:bg-background-secondary/40">
              <h3 className="mb-2 font-bold text-slate-900 dark:text-text-primary">Add a New Project</h3>
              <p className="text-sm text-slate-600 dark:text-text-secondary">
                Open <code className="font-mono text-accent-primary">src/data/portfolio-data.ts</code> and copy an existing project object
                in the <code className="font-mono">projects</code> array. Fill in your details and set status to{" "}
                <code className="font-mono">'live'</code>. Redeploy to Vercel.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-border/80 dark:bg-background-secondary/40">
              <h3 className="mb-2 font-bold text-slate-900 dark:text-text-primary">Update Your Skills</h3>
              <p className="text-sm text-slate-600 dark:text-text-secondary">
                Open <code className="font-mono text-accent-primary">src/data/portfolio-data.ts</code> and add a new object to the{" "}
                <code className="font-mono">skills</code> array with name, category, and proficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-border/80 dark:bg-background-secondary/40">
              <h3 className="mb-2 font-bold text-slate-900 dark:text-text-primary">Add Experience</h3>
              <p className="text-sm text-slate-600 dark:text-text-secondary">
                Open <code className="font-mono text-accent-primary">src/data/portfolio-data.ts</code> and add a new object to the{" "}
                <code className="font-mono">experiences</code> array.
              </p>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 dark:border-border/80 dark:bg-background-secondary/40">
              <h3 className="mb-2 font-bold text-slate-900 dark:text-text-primary">Change Personal Info</h3>
              <p className="text-sm text-slate-600 dark:text-text-secondary">
                Open <code className="font-mono text-accent-primary">src/data/portfolio-data.ts</code> and edit the{" "}
                <code className="font-mono">siteConfig</code> object at the top of the file.
              </p>
            </div>

            {/* Card 5 */}
            <div className="md:col-span-2 rounded-xl border border-slate-200 bg-white p-6 dark:border-border/80 dark:bg-background-secondary/40">
              <h3 className="mb-2 font-bold text-slate-900 dark:text-text-primary">Deploy Changes</h3>
              <p className="text-sm text-slate-600 dark:text-text-secondary">
                Run: <code className="font-mono">git add .</code> then{" "}
                <code className="font-mono">git commit -m 'your message'</code> then{" "}
                <code className="font-mono">git push origin main</code> — Vercel deploys automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
