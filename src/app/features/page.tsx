"use client";

import {
  Wallet,
  Users,
  Layers,
  WifiOff,
  Globe,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

export const featureList = [
  {
    icon: Wallet,
    title: "Lent & Borrow",
    description:
      "Easily manage money you lend and borrow with clear categorization.",
  },
  {
    icon: Users,
    title: "Contact-Wise Ledger",
    description:
      "Every contact gets their own ledger with history, totals, and balances.",
  },
  {
    icon: Layers,
    title: "Partial Payments",
    description:
      "Record settlements in portions while keeping track of remaining amounts.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Management",
    description:
      "Add reminders for when you need to pay or receive money — stay ahead effortlessly.",
  },
  {
    icon: WifiOff,
    title: "Offline-First",
    description:
      "Works anytime, anywhere — no internet required to manage your finances.",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description:
      "Track money in different currencies with clean, unified calculations.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Protected with biometric/PIN lock and encrypted local storage.",
  },
];

export default function FeaturesPage() {
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
            Features
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Powerful features to simplify your financial tracking
          </h1>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            WalletPlus gives you everything you need to manage lent, borrow,
            reminders, and money records — all privately stored on your device.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {featureList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border bg-card p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-6 w-6 text-primary" />
                  <h2 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h2>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
