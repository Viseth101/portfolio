import Link from "next/link";

/**
 * Custom 404 page that matches portfolio visuals.
 */
export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background-primary px-6 text-center">
      <div className="hero-dot-grid absolute inset-0 opacity-[0.1]" aria-hidden />

      <div className="relative z-10 max-w-xl">
        <p className="gradient-text text-7xl font-extrabold tracking-tight sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-bold text-text-primary sm:text-4xl">Page not found</h1>
        <p className="mt-4 text-base text-text-secondary sm:text-lg">
          This page doesn&apos;t exist or was moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-accent-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-glow"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
