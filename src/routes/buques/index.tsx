import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '@/data/products'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { useEffect } from 'react'

export const Route = createFileRoute('/buques/')({
  component: BuquesPage,
})

function CategoryHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="category-hero bg-gradient-to-br from-cream to-lavender-ultra pt-40 pb-20 relative overflow-hidden text-center">
      <div className="container mx-auto px-6 relative z-10 category-hero-content opacity-100">
        <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-4 block">
          {eyebrow}
        </span>
        <h1 className="category-hero-title font-serif text-5xl md:text-8xl italic font-light text-purple-deep leading-tight mb-6">
          {title}
        </h1>
        <p className="category-hero-subtitle max-w-xl mx-auto text-lg text-text-medium leading-relaxed">
          {subtitle}
        </p>
      </div>
      
      <div className="category-hero-decoration absolute top-0 right-0 w-64 h-64 bg-purple-main/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
    </section>
  )
}

function BuquesPage() {
  const buquesRosas = products.filter(p => p.category === 'buques');
  const buquesMistos = products.filter(p => p.category === 'buques-mistos');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <CategoryHero 
        eyebrow="Nossa coleção"
        title="Buquês"
        subtitle="Rosas frescas e composições exclusivas, selecionadas com cuidado para emocionar."
      />

      <section className="py-24 bg-cream products-catalog-section relative z-10">
        <div className="container mx-auto px-6">
          {/* Section: Buquês de Rosas */}
          <div className="mb-20 opacity-100">
            <h2 className="font-serif text-3xl md:text-4xl text-purple-deep mb-10 pb-4 border-b border-purple-main/10 italic">
              Buquês de Rosas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {buquesRosas.map((buque) => (
                <ProductCard key={buque.id} {...buque} />
              ))}
            </div>
          </div>

          {/* Section: Buquês Mistos */}
          {buquesMistos.length > 0 && (
            <div className="mt-20 opacity-100">
              <h2 className="font-serif text-3xl md:text-4xl text-purple-deep mb-10 pb-4 border-b border-purple-main/10 italic">
                Buquês Mistos
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                {buquesMistos.map((buque) => (
                  <ProductCard key={buque.id} {...buque} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
