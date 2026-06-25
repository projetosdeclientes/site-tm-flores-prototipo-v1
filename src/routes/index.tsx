import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '@/data/products'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard, MoreCard } from '@/components/ProductCard'
import { ArrowRight, Star } from 'lucide-react'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { useEffect, useState } from 'react'
import { LogoCircle } from '@/components/LogoCircle'


export const Route = createFileRoute('/')({
  component: Index,
})

function AnnouncementBar() {
  return (
    <div className="bg-purple-deep py-2 px-6 overflow-hidden border-b border-gold-main/20 announcement-bar hidden md:flex">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-4 text-[11px] md:text-xs font-sans font-bold uppercase tracking-[0.2em] text-lavender-light text-center announcement-track">
          <span className="flex items-center gap-2 announcement-text">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-main animate-pulse announcement-pulse" />
            ✦ Buquê do seu jeito — mande a foto do que sonha e a gente faz acontecer.
            <Link to="/encomendas" className="text-gold-main hover:text-white transition-colors underline underline-offset-4 ml-2 announcement-link">
              Ver como funciona →
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}


function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000&auto=format&fit=crop",
      eyebrow: "TM Flores e Plantas",
      headline: "Flores que *falam pelo coração*",
      cta: "Ver nossos buquês",
      link: "/buques",
      overlay: "bg-black/45"
    },
    {
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=2000&auto=format&fit=crop",
      eyebrow: "Para quem você ama",
      headline: "Um gesto *simples* que fica para sempre",
      cta: "Presentear agora",
      link: "/buques",
      overlay: "bg-black/35"
    },
    {
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000&auto=format&fit=crop",
      eyebrow: "Para os momentos únicos",
      headline: "Flores que marcam *histórias reais*",
      cta: "Fazer um pedido especial",
      link: "/encomendas",
      overlay: "bg-black/55"
    }
  ]

  const [current, setCurrent] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) nextSlide()
    if (isRightSwipe) prevSlide()
  }

  return (
    <section 
      className="relative h-[65vh] min-h-[480px] md:h-[90vh] overflow-hidden bg-text-dark hero-carousel group/hero"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-silk hero-slide ${
            idx === current ? "opacity-100 scale-105 z-20" : "opacity-0 scale-100 z-10 pointer-events-none"
          }`}
        >
          <div className={`absolute inset-0 z-10 ${slide.overlay}`} />
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover hero-parallax-layer"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 hero-content">
            <span className="text-gold-main font-sans font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 hero-eyebrow drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {slide.eyebrow}
            </span>
            <h1 
              className="font-serif text-white text-[28px] md:text-7xl lg:text-8xl italic font-light leading-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 hero-headline drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
              dangerouslySetInnerHTML={{ __html: slide.headline.replace(/\*(.*?)\*/g, '<span class="text-gold-main drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">$1</span>') }}
            />
            <div className="flex justify-center w-full animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
              {slide.link.startsWith('http') ? (
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-whatsapp px-8 py-4 text-base hero-cta w-full max-w-[320px] md:w-auto relative z-50"
                >
                  <WhatsAppIcon size={20} />
                  {slide.cta}
                </a>
              ) : (
                <Link
                  to={slide.link as any}
                  className="bg-white text-text-dark px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gold-main hover:text-white transition-all shadow-xl hero-cta w-full max-w-[320px] md:w-auto text-center flex items-center justify-center relative z-50"
                >
                  {slide.cta}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/20 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white hover:text-text-dark transition-all duration-300 md:opacity-0 md:group-hover/hero:opacity-100"
        aria-label="Slide anterior"
      >
        <ArrowRight size={24} className="rotate-180" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 bg-black/20 text-white flex items-center justify-center backdrop-blur-sm hover:bg-white hover:text-text-dark transition-all duration-300 md:opacity-0 md:group-hover/hero:opacity-100"
        aria-label="Próximo slide"
      >
        <ArrowRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex gap-3 hero-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="w-12 h-[44px] flex items-center justify-center cursor-pointer hero-dot-container group/dot"
            aria-label={`Ir para slide ${idx + 1}`}
          >
             <div className={`h-1 rounded-full transition-all duration-500 hero-dot ${
              idx === current ? "bg-gold-main w-16" : "bg-white/30 w-8 group-hover/dot:bg-white/60"
            }`} />
          </button>
        ))}
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title, centered = true }: { eyebrow: string; title: string; centered?: boolean }) {
  return (
    <div className={`section-header mb-12 ${centered ? 'text-center' : 'text-left'} reveal-title`}>
      <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-3 block">
        {eyebrow}
      </span>
      <h2 className="section-title text-3xl md:text-5xl font-serif font-bold text-purple-deep leading-tight">
        {title}
      </h2>
    </div>
  )
}

function Index() {
  const maisVendidos = [
    products.find(p => p.id === "buque-misto-sol-radiante")!,
    products.find(p => p.id === "buque-6-rosas")!,
    products.find(p => p.id === "buque-12-rosas")!,
    products.find(p => p.id === "buque-misto-girassol")!
  ];

  const buquesHome = [
    products.find(p => p.id === "buque-1-rosa")!,
    products.find(p => p.id === "buque-misto-encanto")!,
    products.find(p => p.id === "buque-8-rosas")!,
    products.find(p => p.id === "buque-15-rosas")!
  ];




  return (
    <main className="min-h-screen">
      {/* Removed AnnouncementBar */}
      <Navbar />
      <Hero />

      {/* Seção: Mais Vendidos */}
      <section className="py-24 bg-cream products-section" id="maisVendidos">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Destaques" title="Mais Vendidos" />
          
          <div className="products-carousel-wrapper">
            <div className="flex overflow-x-auto pb-10 gap-3 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible products-carousel reveal-stagger px-4 md:px-0">
              {maisVendidos.map((product) => (
                <div key={product.id} className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                  <ProductCard {...product} />
                </div>
              ))}
              <div className="snap-center lg:hidden min-w-[78vw]">
                <MoreCard to="/buques" label="Ver todos os buquês" icon="🌹" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção: Buquês */}
      <section className="py-24 bg-cream products-section border-t border-gold-main/5">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Coleção" title="Buquês" />
          
          <div className="products-carousel-wrapper">
            <div className="flex overflow-x-auto pb-10 gap-3 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible products-carousel reveal-stagger px-4 md:px-0">
              {buquesHome.map((product) => (
                <div key={product.id} className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

          </div>
          <div className="mt-16 flex justify-center reveal-up">
            <Link 
              to="/buques" 
              className="group relative overflow-hidden bg-white border-2 border-purple-main/20 px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-lavender-ultra/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="font-serif italic text-xl text-purple-deep font-semibold">Descobrir coleção completa</span>
                <div className="w-10 h-10 rounded-full bg-purple-deep flex items-center justify-center text-white group-hover:bg-gold-main transition-colors duration-300">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção: Plantas */}
      <section className="py-24 bg-cream products-section border-t border-gold-main/5">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Doçura" title="Cestas & Chocolates" />
          
          <div className="products-carousel-wrapper">
            <div className="flex overflow-x-auto pb-10 gap-3 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible products-carousel reveal-stagger px-4 md:px-0">
              {products
                .filter(p => p.category === 'cestas-chocolates')
                .slice(0, 4)
                .map((p) => (
                  <div key={p.id} className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                    <ProductCard {...p} />
                  </div>
                ))}
              <div className="snap-center lg:hidden min-w-[78vw]">
                <MoreCard to="/cestas-chocolates" label="Ver todas as cestas" icon="🎁" />
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center reveal-up">
            <Link 
              to="/cestas-chocolates" 
              className="group relative overflow-hidden bg-white border-2 border-purple-main/20 px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-lavender-ultra/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="font-serif italic text-xl text-purple-deep font-semibold">Descobrir cestas e chocolates</span>
                <div className="w-10 h-10 rounded-full bg-purple-deep flex items-center justify-center text-white group-hover:bg-gold-main transition-colors duration-300">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção: Plantas */}
      <section className="py-24 bg-cream products-section border-t border-gold-main/5">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Verde" title="Plantas" />
          
          <div className="products-carousel-wrapper">
            <div className="flex overflow-x-auto pb-10 gap-3 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible products-carousel reveal-stagger px-4 md:px-0">
              {products
                .filter(p => p.category === 'plantas')
                .slice(0, 4)
                .map((p) => (
                  <div key={p.id} className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                    <ProductCard {...p} />
                  </div>
                ))}
              <div className="snap-center lg:hidden min-w-[78vw]">
                <MoreCard to="/plantas" label="Ver todas as plantas" icon="🌱" />
              </div>
            </div>

          </div>
          <div className="mt-16 flex justify-center reveal-up">
            <Link 
              to="/plantas" 
              className="group relative overflow-hidden bg-white border-2 border-purple-main/20 px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-lavender-ultra/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative flex items-center gap-3">
                <span className="font-serif italic text-xl text-purple-deep font-semibold">Descobrir plantas naturais</span>
                <div className="w-10 h-10 rounded-full bg-purple-deep flex items-center justify-center text-white group-hover:bg-gold-main transition-colors duration-300">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Seção: Conheça a Loja */}
      <section className="py-24 bg-cream-warm store-teaser-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center store-teaser-grid">
            <div className="flex flex-col items-start store-teaser-content reveal-right lg:order-2">
              <SectionHeader eyebrow="Nossa história" title="Ainda não conhece a nossa loja?" centered={false} />
              <p className="text-lg text-text-medium mb-8 leading-relaxed store-teaser-text">
                Nascemos em 2024 com um sonho: levar beleza, emoção e cuidado para a vida das pessoas. 
                Cada buquê que sai daqui carrega uma história, um sentimento, uma memória.
              </p>
              <p className="font-script text-4xl text-purple-main mb-12 store-teaser-script">
                "Florescendo histórias e fortalecendo laços."
              </p>
              <Link 
                to="/sobre" 
                className="btn btn-primary btn-magnetic bg-purple-deep text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-purple-main transition-all shadow-xl group flex items-center gap-3"
              >
                Conheça nossa história
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative group store-teaser-image reveal-left lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl store-teaser-img-wrapper relative">
                <img 
                  src="/products/images/interior-loja.jpg" 
                  alt="Interior da Loja" 
                  className="w-full h-auto block transition-transform duration-700 group-hover:scale-105 store-teaser-img"
                />

                
                {/* Floating Logo Overlay */}
                <LogoCircle className="absolute top-6 left-6 w-24 h-24 animate-float" />


                <div className="absolute bottom-6 right-6 bg-gold-gradient p-3 px-5 rounded-full shadow-xl text-text-dark font-sans font-bold text-xs uppercase tracking-widest store-teaser-badge">
                  Fundada em 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Depoimentos Preview */}
      <section className="py-24 bg-cream testimonials-preview-section">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Quem já recebeu" title="O que dizem sobre a gente" />
          
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 testimonials-grid reveal-stagger pb-8 scrollbar-hide snap-x px-4 md:px-0">
            {[1, 2, 3].map((num) => (
              <div key={num} className="testimonial-card bg-white p-4 rounded-2xl shadow-card border border-gold-main/5 flex flex-col gap-6 min-w-[85vw] md:min-w-0 snap-center overflow-hidden">
                <img 
                  src={`/testimonials/images/depoimento-0${num}.png`} 
                  alt={`Depoimento ${num}`}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            ))}
          </div>

          
          <div className="mt-16 text-center">
            <Link to="/sobre" className="text-purple-main font-bold uppercase text-xs tracking-widest hover:text-gold-main transition-colors flex items-center justify-center gap-2 underline underline-offset-4">
              Ver todos os depoimentos
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <script dangerouslySetInnerHTML={{ __html: `
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal-title, .reveal-stagger, .reveal-up, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
          observer.observe(el);
        });
      `}} />
      <Footer />
    </main>
  )
}
