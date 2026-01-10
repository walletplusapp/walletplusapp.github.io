// "use client";
// import React from "react";

// const TermsPage = () => {
//   return (
//     <section>
//       {/* Header Section */}
//       <div className="py-16 border-b">
//         <div className="mx-auto max-w-screen-xl px-6">
//           <h1 className="text-4xl font-bold">Terms & Conditions</h1>
//           <p className="mt-4 max-w-2xl">
//             Last Updated: December 2025
//             <br />
//             These terms explain how you can use WalletPlus — a simple offline
//             app for managing lending, borrowing, and payment schedules.
//           </p>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="mx-auto max-w-screen-lg px-6 py-16 space-y-10 leading-relaxed">
//         {/* Section 1 */}
//         <div>
//           <h2 className="text-xl font-semibold">1. Purpose of the App</h2>
//           <p className="mt-3 text-sm">
//             WalletPlus is a simple personal finance tool that helps users record
//             money they lend or borrow, manage transactions, and set schedules or
//             reminders for future payments. It does not provide banking,
//             investment, or financial advisory services.
//           </p>
//         </div>

//         {/* Section 2 */}
//         <div>
//           <h2 className="text-xl font-semibold">2. Local Storage Only</h2>
//           <p className="mt-3 text-sm">
//             All data you enter into WalletPlus is stored only on your device.
//             WalletPlus does not collect, upload, sync, or share any user data.
//             Deleting the app may permanently delete all stored information.
//           </p>
//         </div>

//         {/* Section 3 */}
//         <div>
//           <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
//           <p className="mt-3 text-sm">
//             You are responsible for the accuracy of all entries, including loan
//             amounts, dates, names, and schedules. WalletPlus does not verify or
//             validate your entries. You are also responsible for maintaining the
//             security of your device and not using the app for illegal
//             activities.
//           </p>
//         </div>

//         {/* Section 4 */}
//         <div>
//           <h2 className="text-xl font-semibold">
//             4. No Guarantees o text-smr Financial Advice
//           </h2>
//           <p className="mt-3">
//             WalletPlus is provided on an “as-is” basis. The app may contain
//             errors or limitations, and we do not guarantee uninterrupted or
//             error-free performance. The app does not offer legal or financial
//             advice. Any loss from incorrect entries or personal decisions is
//             your own responsibility.
//           </p>
//         </div>

//         {/* Section 5 */}
//         <div>
//           <h2 className="text-xl font-semibold">5. Third-Party Services</h2>
//           <p className="mt-3 text-sm">
//             WalletPlus currently does not use third-party analytics, ads,
//             tracking tools, or external services. If these are added in the
//             future, this document will be updated accordingly.
//           </p>
//         </div>

//         {/* Section 6 */}
//         <div>
//           <h2 className="text-xl font-semibold">6. Updates & Changes</h2>
//           <p className="mt-3 text-sm">
//             We may update the app, its features, or these Terms & Conditions
//             without prior notice. Updated terms will be available at the same
//             link that you will provide during app submission.
//           </p>
//         </div>

//         {/* Section 7 */}
//         <div>
//           <h2 className="text-xl font-semibold">7. Contact</h2>
//           <p className="mt-3 text-sm">
//             If you have any questions or need support, you may contact us at:
//             <br />
//             <strong>Email:</strong> walletplus.dev@gmail.com
//             <br />
//             <strong>Website:</strong> walletplusapp.github.io
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TermsPage;

"use client";

import React from "react";
import { FileText, ShieldAlert, Mail, Globe } from "lucide-react";
import Link from "next/link";

const termsData = {
  lastUpdated: "December 2025",
  intro: {
    title: "Terms & Conditions",
    description:
      "These terms explain how you can use WalletPlus — a simple offline app for managing lending, borrowing, and payment schedules.",
  },
  sections: [
    {
      id: 1,
      title: "Purpose of the App",
      content:
        "WalletPlus is a simple personal finance tool that helps users record money they lend or borrow, manage transactions, and set schedules or reminders for future payments. It does not provide banking, investment, or financial advisory services.",
    },
    {
      id: 2,
      title: "Local Storage Only",
      content:
        "All data you enter into WalletPlus is stored only on your device. WalletPlus does not collect, upload, sync, or share any user data. Deleting the app may permanently delete all stored information.",
    },
    {
      id: 3,
      title: "User Responsibilities",
      content:
        "You are responsible for the accuracy of all entries, including loan amounts, dates, names, and schedules. WalletPlus does not verify or validate your entries. You are also responsible for maintaining the security of your device and not using the app for illegal activities.",
    },
    {
      id: 4,
      title: "No Guarantees or Financial Advice",
      content:
        "WalletPlus is provided on an “as-is” basis. The app may contain errors or limitations, and we do not guarantee uninterrupted or error-free performance. The app does not offer legal or financial advice. Any loss from incorrect entries or personal decisions is your own responsibility.",
    },
    {
      id: 5,
      title: "Third-Party Services",
      content:
        "WalletPlus currently does not use third-party analytics, ads, tracking tools, or external services. If these are added in the future, this document will be updated accordingly.",
    },
    {
      id: 6,
      title: "Updates & Changes",
      content:
        "We may update the app, its features, or these Terms & Conditions without prior notice. Updated terms will be available at the same link that you will provide during app submission.",
    },
  ],
  contact: {
    email: "walletplus.dev@gmail.com",
    website: "walletplusapp.github.io",
  },
};

export default function TermsPage() {
  return (
    <section className="bg-background">
      {/* Header Section */}
      <div className="border-b py-20">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex items-center gap-3 text-primary mb-4">
            <FileText size={24} />
            <span className="text-sm font-bold uppercase tracking-widest">
              Legal
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            {termsData.intro.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Last Updated: {termsData.lastUpdated}
            <br />
            {termsData.intro.description}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-screen-xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Left Side: Table of Contents / Summary (Desktop Only) */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {termsData.sections.map((section) => (
                <div key={section.id} className="group">
                  <h2 className="text-lg font-bold text-foreground flex gap-4 transition-colors group-hover:text-primary">
                    <span className="text-muted-foreground/70">
                      {section.id}.
                    </span>
                    {section.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {section.content}
                  </p>
                </div>
              ))}

              {/* Contact Section */}
              <div className="mt-16 rounded-2xl py-8">
                <h2 className="text-xl font-bold text-foreground">
                  Questions or Support?
                </h2>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background border shadow-sm">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-muted-foreground">
                        Email
                      </p>
                      <Link
                        href={`mailto:${termsData.contact.email}`}
                        className="text-sm font-medium"
                      >
                        {termsData.contact.email}
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background border shadow-sm">
                      <Globe size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-muted-foreground">
                        Website
                      </p>
                      <Link
                        href={`https://${termsData.contact.website}`}
                        className="text-sm font-medium"
                      >
                        {termsData.contact.website}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Mapping the Terms Sections */}
          <div className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-24 space-y-8 rounded-2xl border bg-card p-6">
              <div className="flex items-center gap-2 font-bold">
                <ShieldAlert size={18} className="text-primary" />
                Quick Summary
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="font-bold text-primary">✓</span>
                  Offline-first: Your data stays with you.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">✓</span>
                  No hidden fees or banking services.
                </li>
                <li className="flex gap-2">
                  <span className="font-bold text-primary">✓</span>
                  User is responsible for data accuracy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
