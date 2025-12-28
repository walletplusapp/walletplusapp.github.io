import { Lock, Fingerprint, Database, ShieldCheck } from "lucide-react";

const securityFeatures = [
  {
    icon: Lock,
    title: "App Lock Protection",
    description: "Secure your wallet with PIN or biometric authentication.",
  },
  {
    icon: Database,
    title: "Offline & Local Storage",
    description: "Your data stays on your device — no forced cloud sync.",
  },
  {
    icon: ShieldCheck,
    title: "Encrypted Data",
    description: "Sensitive financial data is encrypted for maximum safety.",
  },
  {
    icon: Fingerprint,
    title: "Privacy First",
    description: "No ads, no tracking, no selling your personal data.",
  },
];

export default function Security() {
  return (
    <section id="security" className="relative pb-10 md:pb-24 lg:pb-32 px-6">
      <div className="absolute inset-0 -z-10 overflow-hidden hidden md:block">
        {/* Top Center Glow (Primary) */}
        <div className="absolute left-1/2 top-[0%] z-30 h-[200px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/5 blur-[160px]" />
      </div>

      <div className="mx-auto max-w-screen-2xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Security & Privacy <br className="hidden sm:block" />
              You Can Trust
            </h2>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Wallet Plus is designed with a privacy-first approach to ensure
              your financial data remains safe, encrypted, and fully under your
              control.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {securityFeatures.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-4 rounded-2xl border bg-background p-5 transition-all hover:shadow-md"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Panel */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full rounded-3xl border bg-gradient-to-br from-primary/15 via-background to-accent/10 p-12 text-center shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <ShieldCheck className="h-10 w-10" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground">
                Built for Financial Safety
              </h3>

              <p className="mt-3 text-sm text-muted-foreground">
                Your money data is protected with modern security practices —
                always private, always yours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
