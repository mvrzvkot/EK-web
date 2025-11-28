"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-law-office-with-books-and-scales-of-justic.jpg"
          alt="Kancelaria Adwokacka"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-8 text-balance leading-tight">
          Profesjonalna obsługa prawna
          <br />
          <span className="text-accent">Adwokat Ewelina Kijewska</span>
        </h1>
        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-primary font-semibold uppercase tracking-wider px-10 py-6 text-base shadow-xl hover:shadow-2xl transition-all"
        >
          Umów spotkanie
        </Button>
      </div>
    </section>
  )
}
