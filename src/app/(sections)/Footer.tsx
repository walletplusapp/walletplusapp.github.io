import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-screen-2xl px-6 pb-8 pt-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-24">
          {/* Brand Section - Takes more space for better UX */}
          <div className="md:col-span-5 lg:col-span-6">
            <Link
              href="/"
              className="flex items-center gap-2 transition-opacity hover:opacity-90"
            >
              <Image
                src="/logo.png"
                alt="Wallet Plus"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold tracking-tight">
                Wallet Plus
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-balance text-sm leading-relaxed text-muted-foreground">
              A smart wallet for tracking receivables, payables, and daily
              transactions — securely and simply.
            </p>
          </div>

          {/* Navigation Grids */}
          <div className="grid grid-cols-2 gap-8 md:col-span-7 lg:col-span-6">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                Product
              </h4>
              <ul className="space-y-3 text-sm">
                {["About", "Contact", "Features", "Pricing"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                Legal & Support
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:walletplus.dev@gmail.com"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    walletplus.dev@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Wallet Plus. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              App Status: Operational
            </span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
