"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa6";

const NAV_LINKS = [
  { id: "home", label: "HOME" },
  { id: "products", label: "PRODUCTS" },
  { id: "about", label: "ABOUT US" },
  { id: "contact", label: "CONTACT US" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navLinks = NAV_LINKS;

  const socialLinks = [
    {
      label: "Instagram",
      icon: <FaInstagram className="size-5" />,
      href: "https://www.instagram.com/glowbharat.official?igsh=bDd3OHZpbmd4aHNv",
      target: "_blank" as const,
      rel: "noopener noreferrer",
    },
    {
      label: "Facebook",
      icon: <FaFacebookF className="size-5" />,
      href: "#",
    },
    {
      label: "WhatsApp",
      icon: <FaWhatsapp className="size-5" />,
      href: "https://wa.me/917894963892",
      target: "_blank" as const,
      rel: "noopener noreferrer",
    },
  ];

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetId: string
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    setActiveSection(targetId);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 160;
      let currentSectionId = navLinks[0]?.id ?? "";

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (!section) continue;

        const { top } = section.getBoundingClientRect();
        if (top - headerOffset <= 0) {
          currentSectionId = link.id;
        }
      }

      setActiveSection((prev) =>
        prev === currentSectionId ? prev : currentSectionId
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navLinks]);

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-transparent backdrop-blur-md border-b border-white/40 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-4 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Image
                src="/logo.png"
                alt="CB Logo"
                width={60}
                height={60}
                className="drop-shadow-lg"
                priority
              />
            </a>
          </div>

          {/* Navigation Links - Centered */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-4 py-2 rounded-full font-bold transition-colors duration-200 ${
                  activeSection === link.id
                    ? "bg-white/80 text-[#0B3B7A] shadow-sm"
                    : "text-blue-950/70 hover:text-blue-950 hover:bg-white/60"
                }`}
                onClick={(event) => handleNavClick(event, link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-[#0B3B7A] hover:text-[#06224f] transition-colors text-xl"
                  aria-label={social.label}
                  target={social.target}
                  rel={social.rel}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <span className="relative flex flex-col items-center justify-center gap-1">
                <span
                  className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-6 bg-current transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-6 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                ></span>
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0B3B7A]/95 backdrop-blur-md border-b border-white/20 shadow-xl rounded-b-2xl overflow-hidden">
            <nav className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`block uppercase text-sm font-semibold tracking-wide px-4 py-3 rounded-lg border bg-white/80 transition-colors ${
                    activeSection === link.id
                      ? "text-white bg-[#0B3B7A] border-[#0B3B7A]"
                      : "text-[#0B3B7A] border-white/60 hover:bg-white"
                  }`}
                  onClick={(event) => handleNavClick(event, link.id)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="px-6 pb-6 pt-4 flex items-center gap-5 text-white border-t border-white/15">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white hover:text-white/80 transition-colors text-xl"
                  aria-label={social.label}
                  target={social.target}
                  rel={social.rel}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
