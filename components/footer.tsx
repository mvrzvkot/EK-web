import { Phone, Mail, MapPin } from "lucide-react"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-accent flex items-center justify-center">
                  <span className="text-accent font-serif text-2xl font-bold">EK</span>
                </div>
                <div className="text-primary-foreground">
                  <div className="font-serif text-xl font-bold tracking-wide">Ewelina Kijewska</div>
                  <div className="text-xs tracking-widest uppercase text-accent">Kancelaria Adwokacka</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Profesjonalna obsługa prawna. Kompleksowe doradztwo i reprezentacja w sprawach cywilnych, karnych,
              rodzinnych i administracyjnych.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Szybkie linki</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-accent transition-colors text-primary-foreground/80">
                  Strona główna
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors text-primary-foreground/80">
                  O mnie
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent transition-colors text-primary-foreground/80">
                  Oferta
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors text-primary-foreground/80">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+48510677716" className="hover:text-accent transition-colors text-primary-foreground/80">
                  +48 510 677 716
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a
                  href="mailto:kancelaria@adwokatkijewska.pl"
                  className="hover:text-accent transition-colors text-primary-foreground/80 break-all"
                >
                  kancelaria@adwokatkijewska.pl
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/80">
                  Aleja Legionów 16
                  <br />
                  18-400 Łomża
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Ewelina Kijewska - Kancelaria Adwokacka. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}
