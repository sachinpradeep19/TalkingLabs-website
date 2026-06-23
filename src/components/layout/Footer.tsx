import { Button } from "@/components/ui/Button";
import {
  AURAVO_URL,
  COMPANY_NAME,
  CONTACT_EMAIL,
  NAV_LINKS,
} from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-background transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <Link href="#home" className="inline-block">
              <Image
                src="/logo.png"
                alt={COMPANY_NAME}
                width={140}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {COMPANY_NAME}
              <br />
              Bangalore, Karnataka
            </p>
            <div className="mt-6 space-y-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-sm text-muted transition-colors duration-200 hover:text-navy"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href="https://www.talkinglabs.in"
                className="block text-sm text-muted transition-colors duration-200 hover:text-navy"
              >
                www.talkinglabs.in
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Navigation</h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-navy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Get Started</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Experience AI-powered English communication coaching with Auravo.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href={AURAVO_URL}
                external
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Launch Auravo
              </Button>
              <Button href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-subtle">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
          <p className="text-xs text-subtle">
            AI-Powered English Communication Platform
          </p>
        </div>
      </div>
    </footer>
  );
}
