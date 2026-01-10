import {
  Wallet,
  Users,
  Layers,
  WifiOff,
  Globe,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";

export const featureList: {
  icon: typeof Wallet;
  title: string;
  description: string;
}[] = [
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
