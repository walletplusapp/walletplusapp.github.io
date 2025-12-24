// import { Button } from "@/components/ui/button";
// import { ChevronRight, Globe, Lock, Zap } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden bg-background">
//       {/* Gradient Background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-[-20%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,208,97,0.25),transparent_60%)]" />
//         <div className="absolute right-[-10%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,111,208,0.25),transparent_60%)]" />
//       </div>

//       <div className="container mx-auto px-6 py-28 text-center">
//         {/* Badge */}
//         <div className="mb-6 inline-flex items-center rounded-full bg-muted px-4 py-1 text-sm text-muted-foreground">
//           💰 Smart Wallet for Modern Money Tracking
//         </div>

//         {/* Big Title */}
//         <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
//           Track Every{" "}
//           <span className="bg-gradient-to-r from-primary via-[#00D061] to-[#EBDA25] bg-clip-text text-transparent">
//             Currency
//           </span>
//           .<br />
//           Control Every Transaction.
//         </h1>

//         {/* Subtitle */}
//         <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
//           WalletPlus helps you manage receivables, payables, expenses, and
//           income with clarity, security, and simplicity.
//         </p>

//         {/* CTA Buttons */}
//         <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
//           <Button
//             size="lg"
//             className="group h-14 rounded-full bg-primary px-8 text-base font-medium transition-all hover:shadow-[0_0_20px_rgba(0,165,146,0.3)]"
//           >
//             Get Started Free
//             <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//           </Button>

//           <Button
//             size="lg"
//             variant="ghost"
//             className="rounded-full border-border px-8 py-6 text-base font-semibold"
//           >
//             View Features
//           </Button>
//         </div>

//         {/* Trust Text */}
//         <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-border/50 pt-10 text-muted-foreground">
//           <div className="flex items-center gap-2">
//             <Lock className="h-4 w-4" />
//             <span className="text-sm font-medium">Offline-First</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Globe className="h-4 w-4" />
//             <span className="text-sm font-medium">Any Currency</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Zap className="h-4 w-4" />
//             <span className="text-sm font-medium">Instant Sync</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Button } from "@/components/ui/button";
import { ChevronRight, Globe, Lock, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent min-h-screen flex flex-col justify-center -mt-[64px]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top Center Glow (Primary) */}
        <div className="absolute left-1/2 top-[-10%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        {/* Right Mid Glow (Secondary) */}
        <div className="absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

        {/* Left Bottom Glow (Accent) */}
        <div className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Minimalist Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-md">
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
          WalletPlus helps you manage receivables, payables, and global expenses
          with clarity, security, and total simplicity.
        </p>

        {/* CTA Buttons - Using --btn variable */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
            View Features
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 border-border/50 pt-12 text-muted-foreground/80">
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
