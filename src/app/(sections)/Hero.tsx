import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, Lock, Zap } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] max-h-[1000px] flex flex-col justify-center -mt-[64px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top Center Glow (Primary) */}
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        {/* Right Mid Glow (Secondary) */}
        <div className="absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

        {/* Left Bottom Glow (Accent) */}
        <div className="absolute bottom-[10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="px-6 text-center">
        {/* Minimalist Badge */}
        <div className="mb-6 md:mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
          Smart Wallet for Modern Money Tracking
        </div>

        {/* Headline with Brand Gradient */}
        <h1 className="mx-auto max-w-5xl text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Track Every{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Currency
          </span>
          .<br />
          <span className="opacity-90">Control Every Transaction.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          WalletPlus helps you manage receivables, and payables expenses with
          clarity, security, and total simplicity.
        </p>

        {/* CTA Buttons - Using --btn variable */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group h-14 rounded-full bg-[hsl(var(--btn))] px-8 text-base font-semibold text-white transition-all hover:opacity-90 hover:shadow-lg hover:shadow-secondary/20"
          >
            Get Started Free
            <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-border bg-background/50 px-8 text-base font-semibold backdrop-blur-sm"
          >
            <Link href="#features">View Features</Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-4 md:mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-border/50 pt-8 text-muted-foreground/80">
          <div className="flex items-center gap-2.5 transition-colors hover:text-foreground">
            <Lock className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium tracking-tight">
              Offline-First
            </span>
          </div>
          <div className="flex items-center gap-2.5 transition-colors hover:text-foreground">
            <Globe className="h-5 w-5 text-secondary" />
            <span className="text-sm font-medium tracking-tight">
              Multi-Currency
            </span>
          </div>
          <div className="flex items-center gap-2.5 transition-colors hover:text-foreground">
            <Zap className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium tracking-tight">
              Instant Sync
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
