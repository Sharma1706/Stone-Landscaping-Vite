import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/450d3a94-140b-45bb-a5c7-66985d0d8107_1776186547508.jpg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center z-50">
          <div className="bg-white/95 rounded-xl px-2 py-1 shadow-sm">
            <img
              src={logoImg}
              alt="Stones Landscaping Services Inc."
              className="h-16 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    isScrolled ? "text-muted-foreground" : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild variant="default" size="lg" className={isScrolled ? "" : "bg-white text-primary hover:bg-white/90"}>
            <a href="#contact" data-testid="btn-nav-quote">Get a Free Quote</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 p-2 ${
            isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 right-0 bg-background h-screen flex flex-col pt-24 px-6 pb-6 md:hidden"
            >
              <ul className="flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-2xl font-semibold text-foreground hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pb-8">
                <Button asChild className="w-full" size="lg">
                  <a
                    href="#contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get a Free Quote
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
