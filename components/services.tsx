import { Card } from "@/components/ui/card"
import { Scale, Users, FileText, Home, Heart, Landmark, FileCheck, Shield } from "lucide-react"

const services = [
  {
    icon: Scale,
    title: "Prawo Karne",
    description:
      "Obrona oskarżonych/podejrzanych oraz reprezentacja pokrzywdzonych/oskarżycieli posiłkowych w toku całego postępowania (postępowanie przygotowawcze, sądowe i wykonawcze).",
  },
  {
    icon: Users,
    title: "Prawo Cywilne",
    description:
      "Reprezentacja powodów i pozwanych w sprawach z zakresu szeroko pojętego prawa cywilnego, na etapie przedsądowym i w postępowaniu sądowym.",
  },
  {
    icon: Heart,
    title: "Prawo Rodzinne",
    description:
      "Reprezentacja w sprawach rozwodowych, podział majątku, separacja, ograniczenie lub pozbawienie władzy rodzicielskiej, alimenty, ustalenie kontaktów z dzieckiem, zaprzeczenie ojcostwa lub macierzyństwa, rozwiązanie przysposobienia.",
  },
  {
    icon: Home,
    title: "Sprawy Spadkowe",
    description:
      "Reprezentacja w sprawach cywilnych z zakresu prawa spadkowego – stwierdzenie nabycia spadku, dział spadku, sprawy o zachowek.",
  },
  {
    icon: FileCheck,
    title: "Postępowanie Egzekucyjne",
    description:
      "Reprezentacja w postępowaniach dotyczących egzekucji należności, zarówno po stronie wierzyciela jak i dłużnika.",
  },
  {
    icon: Landmark,
    title: "Prawo Administracyjne",
    description: "Reprezentacja przed organami administracji publicznej oraz na etapie postępowania sądowego.",
  },
  {
    icon: FileText,
    title: "Analiza i sporządzanie umów",
    description: "Przygotowywanie i weryfikacja umów wykorzystywanych w obrocie cywilnoprawnym i gospodarczym.",
  },
  {
    icon: Shield,
    title: "Prawo Pracy",
    description:
      "Bieżące doradztwo dla pracodawców i reprezentacja w sporach sądowych zarówno po stronie pracownika jak i pracodawcy.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Oferta</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg leading-relaxed mb-4">
            Moja praca sprowadza się przede wszystkim do tego, aby zaproponować Ci i wdrożyć najlepsze rozwiązanie
            Twojej sprawy.
          </p>
          <p className="text-lg">
            Jeżeli nie jesteś pewien czy zajmuję się kategorią spraw, która Ciebie dotyczy, opisz mi swoją sytuację, a
            ja postaram się niezwłocznie rozwiać Twoje wątpliwości.
          </p>
        </div>

        {/* Services organized by category */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-6 text-justify justify-center">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 bg-card border-border/50 hover:border-accent/30 group w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">{service.title}</h3>
                    <p className="text-foreground/75 leading-relaxed text-[15px]">{service.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
