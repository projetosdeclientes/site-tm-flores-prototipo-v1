import { createFileRoute } from '@tanstack/react-router'
import { products } from '@/data/products'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { useEffect } from 'react'
import { Sprout } from 'lucide-react'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export const Route = createFileRoute('/plantas')({
  component: PlantasPage,
})

function CategoryHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="category-hero category-hero--plants bg-gradient-to-br from-cream via-[#E8F5E4] to-lavender-ultra pt-40 pb-20 relative overflow-hidden text-center">
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
      <div className="category-hero-decoration absolute top-0 right-0 w-64 h-64 bg-green-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
    </section>
  )
}

function PlantasPage() {
  const plantas = products.filter(p => p.category === 'plantas');


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <CategoryHero 
        eyebrow="Verde que transforma"
        title="Plantas"
        subtitle="Beleza que dura. Presentes que crescem com quem recebe. Cada planta conta uma história de cuidado e carinho."
      />

      <section className="py-24 bg-cream products-catalog-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 products-catalog-grid reveal-stagger">
            {plantas.map((planta) => (
              <ProductCard key={planta.id} {...planta} />
            ))}
            
            {/* Placeholder card */}
            <article className="product-card bg-[#F0EAFF] border-2 border-dashed border-[#C4A8DC] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full group">
              <div className="product-card-gallery--placeholder mb-6">
                <Sprout size={48} className="text-purple-main opacity-50 group-hover:scale-110 transition-transform placeholder-img" />
              </div>
              <div className="product-card-body">
                <h2 className="product-card-name font-serif text-xl font-bold text-text-dark mb-4">Mais variedades</h2>
                <p className="product-card-desc text-text-medium text-sm leading-relaxed mb-8">
                  Consulte disponibilidade
                </p>
                <a 
                  href="https://wa.me/5511918475136?text=Olá! Quero saber quais plantas vocês têm disponíveis!" 
                  className="btn btn-whatsapp w-full justify-center text-sm py-3 px-6 bg-whatsapp text-white rounded-full font-semibold flex items-center gap-2 transition-all hover:scale-105"
                >
                  <WhatsAppIcon size={18} />
                  Ver disponibilidade
                </a>
              </div>
            </article>
          </div>

        </div>
      </section>

      {/* Seção: Consulte disponibilidade */}
      <section className="py-24 bg-cream-warm plants-cta-section">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl border border-gold-main/10 text-center plants-cta-box reveal-scale">
            <span className="text-4xl mb-6 block plants-cta-icon">🌿</span>
            <h2 className="font-serif text-3xl font-bold text-text-dark mb-6 plants-cta-title">Não encontrou o que procura?</h2>
            <p className="text-text-medium mb-10 leading-relaxed plants-cta-text">
              Nosso estoque de plantas é renovado constantemente. Orquídeas, suculentas, bromélias, samambaias e muito mais — fale com a gente pelo WhatsApp e veja o que temos disponível agora.
            </p>
            <a 
              href="https://wa.me/5511918475136" 
              className="btn btn-whatsapp btn-magnetic px-10 py-4 mx-auto"
            >
              <WhatsAppIcon size={20} className="mr-2" />
              Falar com a floricultura
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
