export function About() {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">O mnie</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground font-medium text-[15px] leading-relaxed mb-6">
              Moja działalność zawodowa obejmuje bieżące doradztwo prawne i świadczenie obsługi prawnej. Reprezentuję
              klientów w sądach powszechnymi wszystkich instancji oraz przed organami władzy, administracji państwowej
              oraz urzędami.
            </p>

            <p className="text-foreground font-medium text-[15px] leading-relaxed mb-6">
              Oferuję kompleksową bądź jednorazową obsługę prawną z zakresu prawa karnego, rodzinnego, cywilnego oraz
              administracyjnego.
            </p>

            <p className="text-foreground font-medium text-[15px] leading-relaxed mb-6">
              Jestem absolwentką prawa na Uniwersytecie Warmińsko-Mazurskim w Olsztynie. Już w trakcie studiów
              praktykowałam w sądzie oraz w prokuraturze. W 2021 r. zdałam egzamin wstępny i w latach 2022-2025
              odbywałam aplikację adwokacką w Izbie Adwokackiej w Olsztynie. Zdobywałam wówczas cenną wiedzę i
              umiejętności praktyczne, pracując w jednej z największych olsztyńskich kancelarii oraz regularnie
              występując przed sądami.
            </p>

            <p className="text-foreground font-medium text-[15px] leading-relaxed">
              W kwietniu 2025 r. pomyślnie zdałam egzamin adwokacki i zostałam wpisana na listę adwokatów Okręgowej Rady
              Adwokackiej w Białymstoku.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
