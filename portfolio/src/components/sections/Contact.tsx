"use client";

/**
 * Contact section:
 * - Left column lists contact channels and copy-to-clipboard for email.
 * - Right column submits with Formspree using NEXT_PUBLIC_FORMSPREE_ID.
 * - Shows loading, success, and error UI states with subtle transitions.
 */
import { FormspreeProvider, useForm } from "@formspree/react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCheck, Clipboard, Github, Linkedin, Loader2, Mail } from "lucide-react";

import { useClipboard } from "@/hooks/useClipboard";

const emailAddress = "udtarakvisethlay@gmail.com";
const githubLink = "https://github.com/Viseth101";
const linkedInLink = "https://www.linkedin.com/in/udtarakviseth-lay-774858373/";

function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  // Formspree integration pattern:
  // useForm(formId) returns submission state + submit handler.
  // We bind handleSubmit to <form> and drive loading/success/error UI from state.
  const [state, handleSubmit] = useForm(formId ?? "");

  const showConfigError = !formId;
  const showSubmitError = Boolean(state.errors) && !showConfigError;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-border/90 dark:bg-background-card">
      <AnimatePresence mode="wait">
        {state.succeeded ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex min-h-[340px] flex-col items-center justify-center text-center"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
              <Check className="h-6 w-6" />
            </div>
            <p className="max-w-sm text-base leading-7 text-slate-700 dark:text-text-secondary">
              Thanks for reaching out! I&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-text-secondary">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30 dark:border-border dark:bg-background-secondary dark:text-text-primary dark:placeholder:text-text-muted"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-text-secondary">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30 dark:border-border dark:bg-background-secondary dark:text-text-primary dark:placeholder:text-text-muted"
                placeholder="udtarakvisethlay@gmail.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-500 focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30 dark:border-border dark:bg-background-secondary dark:text-text-primary dark:placeholder:text-text-muted"
                placeholder="Tell me about your role, project, or idea..."
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting || showConfigError}
              className="inline-flex w-full items-center justify-center rounded-xl bg-accent-primary px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-glow disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state.submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send message"}
            </button>

            {showConfigError ? (
              <p className="text-sm text-rose-400">
                Form is not configured. Add NEXT_PUBLIC_FORMSPREE_ID to your environment.
              </p>
            ) : null}

            {showSubmitError ? (
              <p className="text-sm text-rose-400">Something went wrong. Please try again.</p>
            ) : null}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const { copied, copy } = useClipboard();

  return (
    <section id="contact" className="px-6 py-20 sm:px-8 lg:px-0">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-text-muted">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-text-primary sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 dark:text-text-secondary">
            I&apos;m actively looking for Summer 2026 internship opportunities. Whether you have a
            role, a project, or just want to connect — my inbox is open.
          </p>

          <div className="mt-8 space-y-3">
            <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-border/80 dark:bg-background-card">
              <div className="flex min-w-0 items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-secondary" />
                <span className="truncate text-sm text-slate-900 dark:text-text-primary">{emailAddress}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  void copy(emailAddress);
                }}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-300 bg-slate-100 text-slate-700 transition-colors hover:border-accent-primary hover:text-accent-secondary dark:border-border dark:bg-background-secondary dark:text-text-secondary"
                aria-label="Copy email"
              >
                {copied ? <CheckCheck className="h-4 w-4 text-emerald-300" /> : <Clipboard className="h-4 w-4" />}
              </button>
            </div>

            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-colors hover:border-accent-primary dark:border-border/80 dark:bg-background-card dark:text-text-primary"
            >
              <Github className="h-4 w-4 text-accent-secondary" />
              <span>github.com/Viseth101</span>
            </a>

            <a
              href={linkedInLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-colors hover:border-accent-primary dark:border-border/80 dark:bg-background-card dark:text-text-primary"
            >
              <Linkedin className="h-4 w-4 text-accent-secondary" />
              <span>linkedin.com/in/udtarakviseth-lay-774858373</span>
            </a>
          </div>
        </div>

        <FormspreeProvider>
          <ContactForm />
        </FormspreeProvider>
      </div>
    </section>
  );
}
