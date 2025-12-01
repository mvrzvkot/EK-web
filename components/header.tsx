"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Logo } from "./logo"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Top bar */}
      <div className="py-2.5 px-4 border-b border-accent/20 bg-accent">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-end items-center gap-3 md:gap-6 text-xs md:text-sm">
          <a
            href="tel:+48510677716"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
            <span>+48 510 677 716</span>
          </a>
          <a
            href="mailto:kancelaria@adwokatkijewska.pl"
            className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">kancelaria@adwokatkijewska.pl</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-primary shadow-lg" : "bg-primary"}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Logo className="h-12" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide"
              >
                Strona główna
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide"
              >
                O mnie
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide"
              >
                Oferta
              </button>
              <Link
                href="/blog"
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide"
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide"
              >
                Kontakt
              </button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground hover:text-accent"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-primary border-t border-accent/20">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide text-left"
              >
                Strona główna
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide text-left"
              >
                O mnie
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide text-left"
              >
                Oferta
              </button>
              <Link
                href="/blog"
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground hover:text-accent transition-colors text-sm uppercase tracking-wide text-left"
              >
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
