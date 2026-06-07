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
      <div className="container mx-auto px-6 relative z-10 category-hero-content reveal-fade">
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
  const buques = products.filter(p => p.category === 'buques');


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <CategoryHero 
        eyebrow="Nossa coleção"
        title="Buquês"
        subtitle="Rosas frescas, selecionadas com cuidado, prontas para emocionar. Do gesto simples à declaração inesquecível."
      />

      <section className="py-24 bg-cream products-catalog-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 products-catalog-grid reveal-stagger">
            {buques.map((buque) => (
              <ProductCard key={buque.id} {...buque} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
