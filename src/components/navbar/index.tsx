"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Contact", href: "/contact" },
];
export default function Navbar() {
  const pathname = usePathname();
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
        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
          {navLinks.map((link) => {
            // 2. Logic to check if the link is active
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors",
                  // Inactive Styles
                  "text-muted-foreground hover:text-foreground",
                  // Active Styles
                  isActive && "text-foreground"
                )}
              >
                {link.name}

                {/* 3. Subtle Active Indicator (Optional Product UI) */}
                {isActive && (
                  <span className="absolute inset-x-4 -bottom-0 h-0.5 bg-primary" />
                )}
              </Link>
            );
          })}
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
