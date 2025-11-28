"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Kontakt</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card className="p-6 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Telefon</h3>
                  <a href="tel:+48510677716" className="text-foreground/75 hover:text-accent transition-colors text-lg">
                    +48 510 677 716
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:kancelaria@adwokatkijewska.pl"
                    className="text-foreground/75 hover:text-accent transition-colors break-all"
                  >
                    kancelaria@adwokatkijewska.pl
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Adres</h3>
                  <p className="text-foreground/75 leading-relaxed">
                    Aleja Legionów 16
                    <br />
                    18-400 Łomża
                  </p>
                  <p className="text-foreground/60 text-sm mt-2">NIP: 718-217-59-66</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-border/50 hover:border-accent/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">Godziny otwarcia</h3>
                  <p className="text-foreground/75 leading-relaxed">
                    Poniedziałek - Piątek: 9:00 – 15:00
                    <br />
                    Sobota - Niedziela: Zamknięte
                  </p>
                  <p className="text-foreground/60 text-sm mt-2">W pilnych sprawach możliwy kontakt telefoniczny</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-8 border-border/50 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Umów spotkanie</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Imię i nazwisko
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Wiadomość
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-primary font-semibold uppercase tracking-wider py-6"
              >
                Wyślij wiadomość
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
