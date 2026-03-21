import { Github, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Viseth101", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Email", href: "mailto:you@example.com", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-slate-100/70 dark:bg-background-secondary/60">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:items-center lg:px-8">
        <div>
          <p className="text-lg font-semibold text-slate-900 dark:text-text-primary">Viseth Sok</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-text-secondary">
            Building secure, intelligent, and user-focused full-stack products.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 transition-colors hover:text-accent-primary dark:text-text-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 lg:justify-end">
          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-slate-700 transition-colors hover:bg-slate-200 hover:text-accent-primary dark:text-text-secondary dark:hover:bg-background-card"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500 dark:text-text-muted">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
