import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SectionSeparator } from "@/components/section-separator"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Services />
      <SectionSeparator />
      <Contact />
      <Footer />
    </main>
  )
}
