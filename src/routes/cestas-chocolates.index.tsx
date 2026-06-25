import { createFileRoute } from '@tanstack/react-router'
import { products } from '@/data/products'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { useEffect } from 'react'
import { Gift } from 'lucide-react'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'

export const Route = createFileRoute('/cestas-chocolates/')({
  component: CestasChocolatesPage,
})

function CategoryHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="category-hero category-hero--baskets bg-gradient-to-br from-cream via-[#F5E6D3] to-lavender-ultra pt-40 pb-20 relative overflow-hidden text-center">
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
      <div className="category-hero-decoration absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
    </section>
  )
}

function CestasChocolatesPage() {
  const cestas = products.filter(p => p.category === 'cestas-chocolates');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <CategoryHero 
        eyebrow="Doçura que encanta"
        title="Cestas & Chocolates"
        subtitle="Presentes deliciosos para tornar qualquer momento especial. Cada cesta é montada com carinho para surpreender quem você ama."
      />

      <section className="py-24 bg-cream products-catalog-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 products-catalog-grid reveal-stagger">
            {cestas.map((cesta) => (
              <ProductCard key={cesta.id} {...cesta} />
            ))}

            {/* Placeholder card */}
            <article className="product-card bg-[#F0EAFF] border-2 border-dashed border-[#C4A8DC] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full group">
              <div className="product-card-gallery--placeholder mb-6">
                <Gift size={48} className="text-purple-main opacity-50 group-hover:scale-110 transition-transform placeholder-img" />
              </div>
              <div className="product-card-body">
                <h2 className="product-card-name font-serif text-xl font-bold text-text-dark mb-4">Mais opções</h2>
                <p className="product-card-desc text-text-medium text-sm leading-relaxed mb-8">
                  Consulte disponibilidade
                </p>
                <a 
                  href="https://wa.me/5511918475136?text=Olá! Quero saber quais cestas e chocolates vocês têm disponíveis!" 
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
            <span className="text-4xl mb-6 block plants-cta-icon">🎁</span>
            <h2 className="font-serif text-3xl font-bold text-text-dark mb-6 plants-cta-title">Quer uma cesta personalizada?</h2>
            <p className="text-text-medium mb-10 leading-relaxed plants-cta-text">
              Montamos cestas sob medida com seus chocolates, doces e itens favoritos. Fale com a gente pelo WhatsApp e crie um presente único.
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