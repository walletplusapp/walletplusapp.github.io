import Link from "next/link";
import { Wallet, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-6 py-24 text-center relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top Center Glow (Primary) */}
        <div className="absolute left-1/2 top-[10%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

        {/* Right Mid Glow (Secondary) */}
        <div className="absolute right-[-5%] top-[15%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

        {/* Left Bottom Glow (Accent) */}
        <div className="absolute bottom-[8%] left-[-8%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>
      {/* Visual Indicator */}
      <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-50 shadow-md">
        <Wallet className="h-10 w-10 text-primary" />
        <div className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-background shadow-sm border">
          <Search className="h-4 w-4 text-primary" />
        </div>
      </div>

      {/* Text Content */}
      <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
        Lost in the ledger?
      </h1>
      <p className="mt-4 max-w-[450px] text-lg text-muted-foreground">
        {`We couldn't find the page or transaction you're looking for. It might
        have been moved or deleted.`}
      </p>

      {/* Actions */}
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-black px-8 py-4 text-sm font-bold text-white transition-all hover:bg-primary sm:w-auto"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <Link
          href="/contact"
          className="w-full rounded-xl border border-input bg-background px-8 py-4 text-sm font-semibold transition-colors hover:bg-secondary sm:w-auto"
        >
          Contact Support
        </Link>
      </div>
    </div>
  );
}
