import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Zmiany w prawie rodzinnym 2024",
      excerpt:
        "Omówienie najważniejszych zmian w prawie rodzinnym, które weszły w życie w 2024 roku i ich wpływ na postępowania sądowe.",
      date: "15 marca 2024",
      author: "Ewelina Kijewska",
      category: "Prawo rodzinne",
      image: "/legal-documents-family-law.jpg",
    },
    {
      id: 2,
      title: "Jak przygotować się do rozwodu?",
      excerpt:
        "Praktyczny przewodnik po procesie rozwodowym - od pierwszej wizyty u adwokata po finalizację postępowania.",
      date: "8 marca 2024",
      author: "Ewelina Kijewska",
      category: "Prawo rodzinne",
      image: "/divorce-legal-consultation.jpg",
    },
    {
      id: 3,
      title: "Ochrona praw konsumenta w e-commerce",
      excerpt: "Jakie prawa przysługują konsumentom przy zakupach online i jak skutecznie je egzekwować.",
      date: "1 marca 2024",
      author: "Ewelina Kijewska",
      category: "Prawo cywilne",
      image: "/online-shopping-consumer-rights.jpg",
    },
    {
      id: 4,
      title: "Alimenty - najczęstsze pytania",
      excerpt: "Odpowiedzi na najczęściej zadawane pytania dotyczące alimentów, ich wysokości i sposobu egzekucji.",
      date: "22 lutego 2024",
      author: "Ewelina Kijewska",
      category: "Prawo rodzinne",
      image: "/child-support-legal-documents.jpg",
    },
    {
      id: 5,
      title: "Prawo spadkowe - testament czy dziedziczenie ustawowe?",
      excerpt: "Kiedy warto sporządzić testament i jakie są różnice między dziedziczeniem testamentowym a ustawowym.",
      date: "14 lutego 2024",
      author: "Ewelina Kijewska",
      category: "Prawo spadkowe",
      image: "/inheritance-law-testament.jpg",
    },
    {
      id: 6,
      title: "Odszkodowanie za wypadek komunikacyjny",
      excerpt: "Jak dochodzić odszkodowania po wypadku drogowym i jakie dokumenty są niezbędne w postępowaniu.",
      date: "7 lutego 2024",
      author: "Ewelina Kijewska",
      category: "Prawo cywilne",
      image: "/car-accident-compensation.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 text-balance">Blog prawniczy</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Aktualne informacje, porady prawne i komentarze do najważniejszych zmian w prawie. Dzielę się wiedzą i
              doświadczeniem, aby pomóc Państwu lepiej zrozumieć swoje prawa.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-3 text-balance">{post.title}</h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  <Link href={`/blog/${post.id}`}>
                    <Button variant="ghost" className="group px-0 text-accent hover:text-accent/80">
                      Czytaj więcej
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
