import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/logo.png"
              alt="WalletPlus Logo"
              height={100}
              width={100}
              className="object-contain h-8 w-8"
              priority
            />
          </div>
          <span className="text-xl font-semibold tracking-tight ">
            Wallet<span className="text-primary"> Plus</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-4 lg:gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Features
          </Link>
          <Link
            href="#receivables"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Receivables
          </Link>
          <Link
            href="#payables"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Payables
          </Link>
          <Link
            href="#reports"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Reports
          </Link>
          <Link
            href="#security"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Security
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Button className="rounded-xl bg-[#00A592] px-6 font-semibold text-white hover:opacity-90">
            Download App
          </Button>
        </div>
      </div>
    </header>
  );
}
