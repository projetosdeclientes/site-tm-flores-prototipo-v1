import { createFileRoute } from '@tanstack/react-router'
import { products } from '@/data/products'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/ProductCard'
import { LogoCircle } from '@/components/LogoCircle'

export const Route = createFileRoute('/cestas')({
  component: CestasPage,
})

function CestasPage() {
  const cestas = products.filter(p => p.category === 'cestas');

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      <header className="pt-32 pb-16 bg-cream-warm relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-4 block animate-in fade-in slide-in-from-bottom-3 duration-700">
              Presentes Especiais
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-purple-deep mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Cestas e Chocolates
            </h1>
            <p className="text-lg text-text-medium leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
              A doçura ideal para acompanhar suas flores. Cestas cuidadosamente montadas com os melhores chocolates e mimos para surpreender e encantar.
            </p>
          </div>
        </div>
        
        {/* Decorative element */}
        <LogoCircle className="absolute -top-12 -right-12 w-64 h-64 opacity-[0.03] rotate-12" />
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cestas.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}