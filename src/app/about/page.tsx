"use client";
import {
  NotebookText,
  Users2,
  ShieldCheck,
  ListChecks,
  CalendarClock,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-[-5%] top-[40%] h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-10%] h-[350px] w-[350px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full bg-muted/40 backdrop-blur-sm text-muted-foreground">
            About WalletPlus
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            A simple way to keep track of <br />
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              lent and borrowed money.
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            WalletPlus is a small, offline-first app built to help you manage
            the money you lend or borrow from friends, family, or anyone else.
            No accounts, no syncing, no complications — just clean and clear
            records stored on your device.
          </p>
        </div>

        {/* Grid Sections */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <NotebookText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">
                Why This App Exists
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Many people simply need a lightweight way to note down who owes
              them money, who they owe, and how much is pending. WalletPlus
              helps keep these records organized so nothing gets forgotten or
              lost.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-semibold text-foreground">
                Local & Private
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Your data stays **on your device** only. No cloud uploads. No
              servers. No account required. Everything is stored locally with
              optional app lock for basic protection.
            </p>
          </div>
        </div>

        {/* Why WalletPlus */}
        <div className="mt-24">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground">
            What You Can Do With WalletPlus
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground leading-relaxed">
            The app focuses only on what matters — keeping simple, reliable
            records of money you have given or taken.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {[
              {
                icon: Users2,
                title: "Contact-wise Records",
                description:
                  "Maintain a separate ledger for each person you transact with.",
              },
              {
                icon: ListChecks,
                title: "Clear Transactions",
                description:
                  "Add entries for lent, borrowed, or settled amounts with notes.",
              },
              {
                icon: CalendarClock,
                title: "Money Schedules",
                description:
                  "Plan when you will receive or send money and keep track of upcoming dates.",
              },
              {
                icon: ShieldCheck,
                title: "Offline & Secure",
                description:
                  "Works without internet and stores data securely on the device.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
            WalletPlus is simple, local, and built to make your daily
            money-tracking easy — nothing more, nothing less.
          </p>
        </div>
      </div>
    </section>
  );
}
