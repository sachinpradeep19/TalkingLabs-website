"use client";

import { Button } from "@/components/ui/Button";
import { AURAVO_URL, NAV_LINKS } from "@/lib/constants";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) => {
    const isActive = activeSection === href;
    return `rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-nav-active-bg text-nav-active-text shadow-[0_2px_12px_-2px_rgba(255,193,7,0.5)]"
        : "text-foreground/75 hover:bg-yellow-soft hover:text-foreground"
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-nav-bg backdrop-blur-xl shadow-sm"
          : "bg-nav-bg/80 backdrop-blur-md"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="#home" className="-my-3 flex shrink-0 items-center lg:-my-4">
          <Image
            src="/logo.png"
            alt="Talking Labs EdTech LLP"
            width={320}
            height={160}
            className="h-[5rem] w-auto object-contain lg:h-[6rem]"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button href="#contact" variant="secondary">
            Book a Demo
          </Button>
          <Button
            href={AURAVO_URL}
            external
            icon={<ArrowUpRight className="h-4 w-4" />}
          >
            Launch Auravo
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors duration-200 hover:bg-yellow-soft md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-b border-border bg-nav-bg backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-b-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={linkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
            <Button href="#contact" variant="secondary" className="w-full">
              Book a Demo
            </Button>
            <Button
              href={AURAVO_URL}
              external
              className="w-full"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Launch Auravo
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
