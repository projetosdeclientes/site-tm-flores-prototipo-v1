import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useEffect } from 'react'
import { MessageCircle, Camera, MessageSquare, Flower2, Gift } from 'lucide-react'

export const Route = createFileRoute('/encomendas')({
  component: EncomendasPage,
})

function EncomendasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const steps = [
    {
      number: "01",
      icon: "📸",
      title: "Escolha seu buquê",
      desc: "Encontrou a foto de um buquê que você amou? Pode ser do Pinterest, Instagram, um casamento que você foi — qualquer referência serve. Salve a foto no seu celular."
    },
    {
      number: "02",
      icon: "💬",
      title: "Mande pelo WhatsApp",
      desc: "Clique no botão abaixo e nos mande a foto diretamente pelo WhatsApp. Se quiser, pode contar também a ocasião — aniversário, pedido, presente — isso nos ajuda a entender melhor o que você precisa."
    },
    {
      number: "03",
      icon: "🌹",
      title: "A gente avalia",
      desc: "Nossa equipe analisa a foto com cuidado e te responde dizendo se conseguimos reproduzir o buquê. Se sim, já combinamos os detalhes, valor e prazo. Se não, sugerimos algo parecido e igualmente lindo."
    },
    {
      number: "04",
      icon: "🎁",
      title: "Receba seu buquê",
      desc: "Confirmado o pedido, preparamos tudo com atenção e carinho. Você retira aqui no Shopping Central Park Cotia ou combinamos a entrega. Simples assim."
    }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="orders-hero pt-40 pb-24 bg-gradient-to-br from-cream to-lavender-ultra overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start orders-hero-content reveal-up">
            <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-6 block">
              Serviço exclusivo
            </span>
            <h1 className="orders-hero-title font-serif text-5xl md:text-7xl font-light text-purple-deep leading-tight mb-8">
              O buquê que você<br />
              <em className="gold-text italic">sempre imaginou</em>
            </h1>
            <p className="orders-hero-subtitle text-xl text-text-medium leading-relaxed mb-12 max-w-lg">
              Tem uma foto de um buquê que você amou? Manda pra gente. 
              A gente olha com carinho e te diz se conseguimos fazer igualzinho — ou ainda mais lindo.
            </p>
            <a 
              href="#como-funciona" 
              className="btn btn-primary btn-magnetic orders-hero-cta bg-purple-deep text-white px-10 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-purple-main transition-all shadow-xl"
            >
              Ver como funciona ↓
            </a>
          </div>

          <div className="hidden lg:flex justify-center relative orders-hero-visual reveal-right">
            <div className="orders-hero-frame relative w-80 h-80 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-12 text-center">
              <div className="orders-hero-frame-inner flex flex-col items-center justify-center gap-4">
                <div className="w-32 h-32 mb-4 animate-float">
                  <img src="/assets/logo.png" alt="Logo TM Flores" className="w-full h-full object-contain" />
                </div>
                <p className="orders-hero-frame-text font-script text-2xl text-purple-main">
                  "Manda a foto do buquê dos seus sonhos"
                </p>
              </div>
              <div className="orders-hero-frame-border absolute inset-0 border-4 border-gold-main/20 rounded-3xl scale-105 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="how-it-works py-24 bg-cream" id="como-funciona">
        <div className="container mx-auto px-6">
          <div className="section-header text-center mb-16 reveal-title">
            <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-4 block">
              Simples assim
            </span>
            <h2 className="section-title text-3xl md:text-5xl font-serif font-bold text-purple-deep leading-tight">
              Como Funciona
            </h2>
          </div>

          <div className="steps-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 reveal-stagger">
            {steps.map((step, i) => (
              <div key={i} className="step-card bg-white p-10 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 relative group overflow-hidden border border-gold-main/5 text-center">
                <span className="step-number absolute top-4 right-6 text-6xl font-serif font-bold text-lavender-light opacity-30 group-hover:opacity-50 transition-opacity">
                  {step.number}
                </span>
                <div className="step-icon text-5xl mb-6 relative z-10">{step.icon}</div>
                <h3 className="step-title font-serif text-xl font-bold text-text-dark mb-4 relative z-10">{step.title}</h3>
                <p className="step-desc text-text-medium text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="how-it-works-cta text-center reveal-up">
            <p className="how-it-works-cta-text font-script text-3xl text-purple-main mb-8">Pronto pra começar?</p>
            <a 
              href="https://wa.me/5511918475136?text=Olá! Quero fazer um buquê personalizado. Vou te mandar a foto de referência!" 
              className="btn btn-whatsapp btn-lg btn-magnetic px-12 py-5 text-base mx-auto bg-whatsapp text-white rounded-full font-semibold flex items-center justify-center gap-3 transition-all hover:scale-105"
              target="_blank"
              rel="noopener"
            >
              <MessageCircle size={24} />
              Mandar minha foto agora
            </a>
          </div>
        </div>
      </section>

      {/* Por que personalizado? */}
      <section className="why-custom-section py-24 bg-cream-warm">
        <div className="container mx-auto px-6">
          <div className="why-custom-grid grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="why-custom-text reveal-left">
              <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-4 block">
                Por que escolher
              </span>
              <h2 className="section-title text-3xl md:text-5xl font-serif font-bold text-purple-deep leading-tight mb-12 text-left">
                Um buquê feito<br /><span className="italic gold-text">só para você</span>
              </h2>
              
              <ul className="why-custom-list space-y-8">
                {[
                  { title: "É único", desc: "Nenhum outro buquê igual ao seu vai existir. Ele foi pensado e feito especialmente para a sua história." },
                  { title: "Mais significado", desc: "Quando você escolhe cada detalhe, o presente ganha um nível de carinho que qualquer um consegue sentir." },
                  { title: "Sem complicação", desc: "É só mandar a foto. A gente cuida de todo o resto com atenção e profissionalismo." },
                  { title: "Flores frescas", desc: "Todos os nossos buquês são feitos com flores selecionadas no dia, garantindo frescor e beleza máximos." }
                ].map((item, i) => (
                  <li key={i} className="why-custom-item flex gap-4 items-start">
                    <span className="why-custom-check text-gold-main shrink-0 mt-1 font-bold text-xl">✦</span>
                    <div>
                      <strong className="block font-bold text-text-dark mb-1">{item.title}</strong>
                      <p className="text-text-medium text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="why-custom-visual bg-purple-deep p-16 rounded-[3rem] text-center relative overflow-hidden shadow-2xl reveal-right">
              <div className="why-custom-quote-card">
                <span className="why-custom-quote-icon absolute top-10 left-10 text-[10rem] font-serif font-bold text-gold-main opacity-10 leading-none select-none">"</span>
                <p className="why-custom-quote-text text-2xl md:text-3xl font-serif italic text-white leading-relaxed mb-8 relative z-10">
                  Flores têm o poder de transmitir sentimentos, criar memórias e tornar cada momento mais especial.
                </p>
                <cite className="why-custom-quote-author text-gold-main font-sans font-bold uppercase tracking-widest text-xs block relative z-10 not-italic">
                  — TM Flores e Plantas
                </cite>
              </div>
              
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gold-main/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Importante Section */}
      <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
              <div className="bg-white rounded-[20px] border-t-4 border-[#C9A040] max-w-[720px] mx-auto p-10 shadow-lg">
                  <h3 className="font-serif text-2xl font-bold text-purple-deep mb-8 text-center">📋 Algumas coisinhas importantes</h3>
                  <ul className="space-y-6">
                      {[
                          { t: "Avaliamos cada pedido individualmente.", d: "Nem sempre conseguimos reproduzir exatamente como na foto, mas sempre buscamos chegar o mais perto possível." },
                          { t: "O valor varia conforme o buquê.", d: "Depois de avaliar a foto, te passamos o preço antes de confirmar. Sem surpresas." },
                          { t: "Faça o pedido com antecedência.", d: "Recomendamos encomendar com pelo menos 24–48h de antecedência." },
                          { t: "Retirada ou entrega.", d: "Você pode retirar no Shopping Central Park Cotia ou combinamos a entrega." }
                      ].map((item, i) => (
                          <li key={i} className="flex gap-3 items-start">
                              <span className="text-[#C9A040] font-bold">✦</span>
                              <div>
                                  <strong className="block text-text-dark">{item.t}</strong>
                                  <p className="text-text-medium text-sm">{item.d}</p>
                              </div>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#4A1575] to-[#8B5AB6] text-center">
          <div className="container mx-auto px-6">
              <span className="text-[#C9A040] text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Tudo começa com uma mensagem</span>
              <h2 className="font-serif text-[42px] md:text-[52px] italic text-white leading-tight">Manda a foto.</h2>
              <h2 className="font-serif text-[42px] md:text-[52px] italic text-[#DDD0F0] leading-tight mb-12">A gente cuida do resto.</h2>
              <a href="https://wa.me/5511918475136" className="inline-block bg-[#25D366] text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform">Iniciar meu pedido personalizado</a>
              <p className="text-[12px] text-white/40 mt-8">Seg a Sáb 10h–22h · Dom 12h–20h</p>
          </div>
      </section>


      <Footer />
    </main>
  )
}
