// "use client";

// import { Shield, Lock, Smartphone, Trash2, Database } from "lucide-react";

// export default function PrivacyPolicy() {
//   return (
//     <section className="relative py-24 px-6 overflow-hidden">
//       {/* Background Glows */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
//         <div className="absolute right-[-5%] top-[40%] h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[120px]" />
//         <div className="absolute bottom-[5%] left-[-10%] h-[350px] w-[350px] rounded-full bg-accent/10 blur-[120px]" />
//       </div>

//       <div className="mx-auto max-w-screen-xl">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="inline-block px-4 py-1.5 text-xs font-medium border border-border rounded-full bg-muted/40 backdrop-blur-sm text-muted-foreground">
//             Privacy Policy
//           </span>

//           <h1 className="mt-6 text-4xl md:text-5xl font-bold text-foreground tracking-tight">
//             Your privacy matters — everything stays on your device.
//           </h1>

//           <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
//             WalletPlus is built to be simple and private. We do not collect,
//             store, or share any personal data. Everything you add to the app
//             stays securely on your device only.
//           </p>
//         </div>

//         {/* Policy Sections */}
//         <div className="mt-20 grid gap-12 md:grid-cols-2">
//           {/* No Data Collection */}
//           <div className="rounded-2xl border bg-card p-8 shadow-sm">
//             <div className="flex items-center gap-3 mb-4">
//               <Shield className="h-6 w-6 text-primary" />
//               <h2 className="text-xl font-semibold text-foreground">
//                 No Personal Data Collection
//               </h2>
//             </div>

//             <p className="text-muted-foreground leading-relaxed">
//               WalletPlus does not collect, store, or transmit any personal
//               information. We do not require an account, email, phone number, or
//               any identity details to use the app.
//             </p>
//           </div>

//           {/* Local Storage */}
//           <div className="rounded-2xl border bg-card p-8 shadow-sm">
//             <div className="flex items-center gap-3 mb-4">
//               <Smartphone className="h-6 w-6 text-secondary" />
//               <h2 className="text-xl font-semibold text-foreground">
//                 Local-Only Storage
//               </h2>
//             </div>

//             <p className="text-muted-foreground leading-relaxed">
//               All data — including contacts, lent/borrowed entries, and
//               schedules — is stored locally on your device. We do not upload
//               your data to any server or cloud service.
//             </p>
//           </div>

//           {/* Security */}
//           <div className="rounded-2xl border bg-card p-8 shadow-sm">
//             <div className="flex items-center gap-3 mb-4">
//               <Lock className="h-6 w-6 text-accent" />
//               <h2 className="text-xl font-semibold text-foreground">
//                 App Security & Protection
//               </h2>
//             </div>

//             <p className="text-muted-foreground leading-relaxed">
//               You can enable app lock (PIN or biometric depending on device
//               support). This ensures only you can access your stored financial
//               entries.
//             </p>
//           </div>

//           {/* No Third Parties */}
//           <div className="rounded-2xl border bg-card p-8 shadow-sm">
//             <div className="flex items-center gap-3 mb-4">
//               <Database className="h-6 w-6 text-primary" />
//               <h2 className="text-xl font-semibold text-foreground">
//                 No Third-Party Usage
//               </h2>
//             </div>

//             <p className="text-muted-foreground leading-relaxed">
//               WalletPlus does not integrate with analytics, advertising
//               services, or external SDKs. We do not share your information with
//               third parties because we never collect it in the first place.
//             </p>
//           </div>
//         </div>

//         {/* Data Deletion */}
//         <div className="mt-20 max-w-3xl mx-auto rounded-2xl border bg-card p-8 shadow-sm">
//           <div className="flex items-center gap-3 mb-4">
//             <Trash2 className="h-6 w-6 text-secondary" />
//             <h2 className="text-xl font-semibold text-foreground">
//               Data Deletion (Your Control)
//             </h2>
//           </div>

//           <p className="text-muted-foreground leading-relaxed">
//             Since all data is stored locally:
//           </p>

//           <ul className="list-disc ml-6 mt-2 text-muted-foreground leading-relaxed">
//             <li>Uninstalling the app permanently deletes all stored data.</li>
//             <li>
//               You may manually clear the app’s storage anytime from your device
//               settings.
//             </li>
//           </ul>

//           <p className="mt-4 text-muted-foreground leading-relaxed">
//             We do not store any backups or copies of your information.
//           </p>
//         </div>

//         {/* Closing */}
//         <div className="mt-20 max-w-3xl mx-auto text-center">
//           <p className="text-lg text-muted-foreground leading-relaxed">
//             If you have any questions about this Privacy Policy, you may contact
//             us at:
//           </p>

//           <a
//             href="mailto:walletplus.dev@gmail.com"
//             className="mt-2 text-foreground font-semibold text-lg"
//           >
//             walletplus.dev@gmail.com
//           </a>

//           <p className="mt-10 text-muted-foreground text-sm">
//             This Privacy Policy may be updated if new features are added, but we
//             will always remain transparent and privacy-first.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { Shield, Lock, Smartphone, Trash2, Database } from "lucide-react";

const privacyContent = {
  header: {
    badge: "Privacy Policy",
    title: "Your privacy matters — everything stays on your device.",
    description:
      "WalletPlus is built to be simple and private. We do not collect, store, or share any personal data. Everything you add to the app stays securely on your device only.",
  },
  policies: [
    {
      id: "no-collection",
      title: "No Personal Data Collection",
      description:
        "WalletPlus does not collect, store, or transmit any personal information. We do not require an account, email, phone number, or any identity details to use the app.",
      icon: Shield,
      colorClass: "text-primary",
    },
    {
      id: "local-storage",
      title: "Local-Only Storage",
      description:
        "All data — including contacts, lent/borrowed entries, and schedules — is stored locally on your device. We do not upload your data to any server or cloud service.",
      icon: Smartphone,
      colorClass: "text-secondary",
    },
    {
      id: "security",
      title: "App Security & Protection",
      description:
        "You can enable app lock (PIN or biometric depending on device support). This ensures only you can access your stored financial entries.",
      icon: Lock,
      colorClass: "text-accent",
    },
    {
      id: "no-third-party",
      title: "No Third-Party Usage",
      description:
        "WalletPlus does not integrate with analytics, advertising services, or external SDKs. We do not share your information with third parties because we never collect it in the first place.",
      icon: Database,
      colorClass: "text-primary",
    },
  ],
  deletion: {
    title: "Data Deletion (Your Control)",
    description: "Since all data is stored locally:",
    list: [
      "Uninstalling the app permanently deletes all stored data.",
      "You may manually clear the app’s storage anytime from your device settings.",
    ],
    footer: "We do not store any backups or copies of your information.",
    icon: Trash2,
    colorClass: "text-secondary",
  },
  contact: {
    text: "If you have any questions about this Privacy Policy, you may contact us at:",
    email: "walletplus.dev@gmail.com",
    footer:
      "This Privacy Policy may be updated if new features are added, but we will always remain transparent and privacy-first.",
  },
};

export default function PrivacyPolicy() {
  const { header, policies, deletion, contact } = privacyContent;

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background Glows */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-[-5%] top-[40%] h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-10%] h-[350px] w-[350px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-screen-xl">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-border bg-muted/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
            {header.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {header.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {header.description}
          </p>
        </div>

        {/* Policy Grid Section (Mapped) */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {policies.map((policy) => {
            const IconComponent = policy.icon;
            return (
              <div
                key={policy.id}
                className="rounded-2xl border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-3">
                  <IconComponent className={`h-6 w-6 ${policy.colorClass}`} />
                  <h2 className="text-lg font-semibold text-foreground">
                    {policy.title}
                  </h2>
                </div>
                <p className="leading-relaxed text-muted-foreground">
                  {policy.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Data Deletion Section */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border bg-card p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <deletion.icon className={`h-6 w-6 ${deletion.colorClass}`} />
            <h2 className="text-lg font-semibold text-foreground">
              {deletion.title}
            </h2>
          </div>

          <p className="leading-relaxed text-muted-foreground">
            {deletion.description}
          </p>

          <ul className="ml-6 mt-2 list-disc leading-relaxed text-muted-foreground">
            {deletion.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            {deletion.footer}
          </p>
        </div>

        {/* Closing / Contact Section */}
        <div className="mx-auto mt-20 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {contact.text}
          </p>

          <a
            href={`mailto:${contact.email}`}
            className="mt-2 text-lg font-semibold text-foreground hover:text-primary transition-colors"
          >
            {contact.email}
          </a>

          <p className="mt-10 text-sm text-muted-foreground">
            {contact.footer}
          </p>
        </div>
      </div>
    </section>
  );
}
