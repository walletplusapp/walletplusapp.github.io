import {
  Wallet,
  Users,
  Layers,
  ShieldCheck,
  Globe,
  WifiOff,
} from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Receivables & Payables",
    description:
      "Clearly track money you give and receive with dedicated categories.",
  },
  {
    icon: Users,
    title: "Contact-Wise Ledger",
    description:
      "Each contact gets a detailed transaction history and balance view.",
  },
  {
    icon: Layers,
    title: "Partial Payments",
    description:
      "Handle settlements flexibly without losing track of remaining amounts.",
  },
  {
    icon: WifiOff,
    title: "Offline-First",
    description: "Access and manage your data anytime — even without internet.",
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Track money across currencies with a clean and unified view.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Your data stays private with app lock and encrypted local storage.",
  },
];

export default function Features() {
  return (
    <section className="relative bg-transparent pb-24 px-6" id="features">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top Center Glow (Primary) */}
        <div className="absolute left-1/2 top-[20%] h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        {/* Right Mid Glow (Secondary) */}
        <div className="absolute right-[-5%] top-[10%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px]" />

        {/* Left Bottom Glow (Accent) */}
        <div className="absolute bottom-[8%] left-[-8%] h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      </div>
      <div className="mx-auto max-w-screen-2xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Everything you need to manage money — effortlessly
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Wallet Plus is built to simplify receivables, payables, and daily
            transactions with clarity and confidence.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary/10 text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
