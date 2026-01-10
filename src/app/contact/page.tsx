"use client";
import React from "react";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-background">
      {/* Subtle Header */}
      <div className="bg-slate-50/ py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
            How can we help?
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Have questions about your wallet, transactions, or security? Our
            team is here to ensure your financial data stays smooth and secure.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Support Channels
              </h2>
              <p className="mt-2 text-muted-foreground">
                Choose the way that works best for you.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <h3 className="font-bold">Email Us</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For general inquiries and account support.
                  <br />
                  <span className="font-medium text-foreground">
                    walletplus.dev@gmail.com
                  </span>
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageSquare size={20} />
                </div>
                <h3 className="font-bold">Help Center</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Browse our guides and frequently asked questions.
                  <br />
                  <Link
                    href="#"
                    className="font-medium text-primary hover:underline italic"
                  >
                    Coming Soon
                  </Link>
                </p>
              </div>
            </div>

            {/* <div className="rounded-2xl border bg-slate-50 p-6">
              <h3 className="flex items-center gap-2 font-bold">
                <Globe size={18} className="text-primary" />
                Global Presence
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Wallet Plus operates globally. Our support team is distributed
                across multiple time zones to provide faster response times.
              </p>
            </div> */}
          </div>

          {/* Right Side: The Form */}
          <div className="rounded-2xl border bg-card p-8 shadow-sm">
            <form className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-tight">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold tracking-tight">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-tight">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-tight">
                  Reason for Contact
                </label>
                <select className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                  <option>General Inquiry</option>
                  <option>Transaction Issue</option>
                  <option>Account Security</option>
                  <option>Feature Request</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold tracking-tight">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                ></textarea>
              </div>

              <Button variant={"secondary"} className="w-full">
                Send Message
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                By messaging us, you agree to our{" "}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
