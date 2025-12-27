import { UserPlus, ArrowLeftRight, BarChart3, Bell } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Add a Contact",
    description:
      "Create or select a contact to start tracking receivables or payables.",
  },
  {
    step: "02",
    icon: ArrowLeftRight,
    title: "Record a Transaction",
    description: "Add amounts, choose category, and include optional remarks.",
  },
  {
    step: "03",
    icon: BarChart3,
    title: "Track Balances",
    description: "View real-time balances and detailed transaction history.",
  },
  {
    step: "04",
    icon: Bell,
    title: "Settle & Stay Updated",
    description: "Mark payments as completed or partial and receive reminders.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative pb-10 md:pb-24 lg:pb-32 px-6"
      id="how-it-works"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-full -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(var(--primary-rgb),0.05)_0%,transparent_100%)]" />
      </div>

      <div className="mx-auto max-w-screen-2xl">
        {/* Header */}
        <div className="max-w-3xl py-4 md:py-8 lg:py-16">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Get started in{" "}
            <span className="text-muted-foreground">four simple steps.</span>
          </h3>
        </div>

        {/* Steps Grid */}
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 z-0" />

          {steps.map((item, index) => (
            <div
              key={index}
              className="group shadow-sm relative z-10 flex flex-col items-start p-8 rounded-3xl border border-muted/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className="flex w-full justify-between items-start mb-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="h-7 w-7" />
                </div>
                <span className="text-5xl font-bold text-muted/10 transition-colors duration-300 group-hover:text-primary/10">
                  {item.step}
                </span>
              </div>

              <h4 className="text-xl font-bold mb-3 text-foreground">
                {item.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-balance">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
