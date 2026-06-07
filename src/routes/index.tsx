import { createFileRoute, Link } from '@tanstack/react-router'
import { products } from '@/data/products'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductCard, MoreCard } from '@/components/ProductCard'
import { MessageCircle, ArrowRight, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

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
      image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=2000&auto=format&fit=crop", // placeholder banner-01
      eyebrow: "TM Flores e Plantas",
      headline: "Flores que *falam pelo coração*",
      cta: "Fazer meu pedido",
      link: "https://wa.me/5511918475136"
    },
    {
      image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=2000&auto=format&fit=crop", // placeholder banner-02
      eyebrow: "Para quem você ama",
      headline: "Um gesto *simples* que fica para sempre",
      cta: "Ver nossos buquês",
      link: "/buques"
    },
    {
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=2000&auto=format&fit=crop", // placeholder banner-03
      eyebrow: "Para os momentos únicos",
      headline: "Flores que marcam *histórias reais*",
      cta: "Fazer um pedido especial",
      link: "/encomendas"
    }
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-[65vh] min-h-[480px] md:h-[90vh] overflow-hidden bg-text-dark hero-carousel">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-silk hero-slide ${
            idx === current ? "opacity-100 scale-105 active" : "opacity-0 scale-100"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover hero-parallax-layer"
          />
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 hero-content">
            <span className="text-gold-main font-sans font-bold uppercase tracking-[0.3em] text-sm md:text-base mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700 hero-eyebrow">
              {slide.eyebrow}
            </span>
            <h1 
              className="font-serif text-white text-[28px] md:text-7xl lg:text-8xl italic font-light leading-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 hero-headline"
              dangerouslySetInnerHTML={{ __html: slide.headline.replace(/\*(.*?)\*/g, '<span class="gold-text">$1</span>') }}
            />
            {slide.link.startsWith('http') ? (
              <a
                href={slide.link}
                target="_blank"
                rel="noopener"
                className="btn btn-whatsapp px-8 py-4 text-base hero-cta w-full max-w-[320px] md:w-auto"
              >
                <MessageCircle size={20} />
                {slide.cta}
              </a>
            ) : (
              <Link
                to={slide.link as any}
                className="bg-white text-text-dark px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-gold-main hover:text-white transition-all shadow-xl hero-cta w-full max-w-[320px] md:w-auto text-center"
              >
                {slide.cta}
              </Link>
            )}
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3 hero-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-12 h-[44px] flex items-center justify-center cursor-pointer hero-dot-container`}
            aria-label={`Ir para slide ${idx + 1}`}
          >
             <div className={`w-full h-1 rounded-full transition-all duration-500 hero-dot ${
              idx === current ? "bg-gold-main w-16 active" : "bg-white/30"
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
    products.find(p => p.id === "buque-3-rosas")!,
    products.find(p => p.id === "buque-6-rosas")!,
    products.find(p => p.id === "buque-12-rosas")!,
    products.find(p => p.id === "buque-25-rosas")!
  ];

  const buquesHome = [
    products.find(p => p.id === "buque-1-rosa")!,
    products.find(p => p.id === "buque-4-rosas")!,
    products.find(p => p.id === "buque-8-rosas")!,
    products.find(p => p.id === "buque-15-rosas")!
  ];




  return (
    <main className="min-h-screen">
      <AnnouncementBar />
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
          <SectionHeader eyebrow="Verde" title="Plantas" />
          
          <div className="products-carousel-wrapper">
            <div className="flex overflow-x-auto pb-10 gap-3 scrollbar-hide snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible products-carousel reveal-stagger px-4 md:px-0">
              {[
                { name: "Orquídea Rosa", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800", desc: "Phalaenopsis rosa em vaso decorativo. Elegância que dura semanas." },
                { name: "Orquídea Roxa", image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800", desc: "Em tom lilás intenso, sofisticação para qualquer ambiente." },
                { name: "Cesta Presente", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800", desc: "Kit gourmet em bandeja elegante com laço. Perfeito para datas especiais." }
              ].map((p, i) => (
                <div key={i} className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                  <ProductCard id={p.name.toLowerCase().replace(' ', '-')} name={p.name} description={p.desc} price="Sob consulta" image={p.image} />
                </div>
              ))}
              <div className="snap-center min-w-[78vw] md:min-w-[260px] lg:min-w-0">
                <article className="product-card bg-[#F0EAFF] border-2 border-dashed border-[#C4A8DC] rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full">
                    <span className="text-4xl mb-4">🌱</span>
                    <h3 className="font-serif text-xl font-bold text-purple-deep">Mais variedades</h3>
                    <p className="text-text-medium text-sm mb-6">Consulte disponibilidade</p>
                    <Link to="/plantas" className="btn-whatsapp w-full justify-center py-3">Ver disponibilidade</Link>
                </article>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seção: Conheça a Loja */}
      <section className="py-24 bg-cream-warm store-teaser-section">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center store-teaser-grid">
            <div className="relative group store-teaser-image reveal-left lg:order-1">
              <div className="aspect-[4/3] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl store-teaser-img-wrapper">

                <img 
                  src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=1000&auto=format&fit=crop" 
                  alt="Interior da Loja" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 store-teaser-img"
                />
                <div className="absolute bottom-6 right-6 bg-gold-gradient p-3 px-5 rounded-full shadow-xl text-text-dark font-sans font-bold text-xs uppercase tracking-widest store-teaser-badge">
                  Fundada em 2024
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start store-teaser-content reveal-right">
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
          </div>
        </div>
      </section>

      {/* Seção: Depoimentos Preview */}
      <section className="py-24 bg-cream testimonials-preview-section">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Quem já recebeu" title="O que dizem sobre a gente" />
          
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 testimonials-grid reveal-stagger pb-8 scrollbar-hide snap-x px-4 md:px-0">
            {[
              {
                name: "Mariana S.",
                initial: "M",
                text: "Recebi o buquê de 12 rosas e me emocionei demais. As flores chegaram frescas, a embalagem estava perfeita. Com certeza voltarei mais vezes!"
              },
              {
                name: "Carlos R.",
                initial: "C",
                text: "Comprei como presente de aniversário. A floricultura é incrível, atendimento cuidadoso e as flores são lindas. Recomendo muito!"
              },
              {
                name: "Ana P.",
                initial: "A",
                text: "Pedi um buquê personalizado enviando a foto e ficou exatamente como sonhei. Atendimento via WhatsApp super rápido e atencioso."
              }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card bg-white p-8 rounded-2xl shadow-card border border-gold-main/5 flex flex-col gap-6 min-w-[85vw] md:min-w-0 snap-center">
                <div className="testimonial-stars flex text-gold-main gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial-text italic text-text-medium leading-relaxed">"{testimonial.text}"</p>
                <div className="testimonial-author flex items-center gap-4 mt-auto">
                  <div className="testimonial-avatar w-10 h-10 rounded-full bg-lavender flex items-center justify-center font-bold text-purple-deep">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-bold text-text-dark text-sm">{testimonial.name}</p>
                    <p className="text-xs text-text-light">Cliente</p>
                  </div>
                </div>
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
