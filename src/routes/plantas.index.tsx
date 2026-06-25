import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useEffect } from 'react'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { Sparkles, Leaf, Heart } from 'lucide-react'

export const Route = createFileRoute('/plantas/')({
  component: PlantasPage,
})

const WHATSAPP_MESSAGE = 'Oii, tudo bem? Gostaria de saber as opções de plantas disponíveis!'
const WHATSAPP_URL = `https://wa.me/5511918475136?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const PLANT_TYPES: Array<{ emoji: string; name: string; note: string }> = [
  { emoji: '🌸', name: 'Orquídeas', note: 'Phalaenopsis, Dendrobium e outras variedades.' },
  { emoji: '🌿', name: 'Suculentas', note: 'Em vasinhos delicados, prontas para presentear.' },
  { emoji: '❤️', name: 'Antúrios', note: 'Folhas brilhantes e flores em formato de coração.' },
  { emoji: '🌺', name: 'Bromélias', note: 'Cores vibrantes que enchem o ambiente de vida.' },
  { emoji: '🍃', name: 'Samambaias', note: 'Folhagem leve, perfeita para varandas e cantinhos.' },
  { emoji: '🌼', name: 'Kalanchoes', note: 'Flores duradouras em tons quentes e românticos.' },
  { emoji: '🪴', name: 'Espadas-de-São-Jorge', note: 'Robustas, modernas e cheias de simbolismo.' },
  { emoji: '✿', name: 'Plantas raras', note: 'Pergunte: muitas vezes temos surpresas no estoque.' },
]

function PlantasPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />

      {/* Hero — Estufa Romântica */}
      <section className="relative overflow-hidden pt-40 pb-24 md:pb-32 bg-gradient-to-br from-cream via-[#F5EFE6] to-[#EDE4D3]">
        {/* Folhagens decorativas */}
        <div aria-hidden="true" className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#A8C4A0]/20 blur-3xl" />
        <div aria-hidden="true" className="absolute top-10 -right-32 w-[28rem] h-[28rem] rounded-full bg-gold-main/10 blur-3xl" />
        <div aria-hidden="true" className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-purple-main/10 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl reveal-fade">
          <span className="inline-flex items-center gap-2 text-gold-main font-sans font-bold uppercase tracking-[0.25em] text-xs mb-6">
            <Leaf size={14} /> Estufa TM Flores
          </span>
          <h1 className="font-serif text-5xl md:text-7xl italic font-light text-purple-deep leading-[1.05] mb-6">
            Plantas <span className="text-[#6B8E5A]">vivas</span>,<br />
            cuidadas <span className="text-gold-main">à mão</span>.
          </h1>
          <p className="font-script text-3xl md:text-4xl text-purple-main mb-8 leading-snug">
            "Onde o verde encontra o romântico."
          </p>
          <p className="text-lg text-text-medium leading-relaxed max-w-xl mx-auto mb-10">
            Nossa coleção de plantas é viva e muda toda semana. Por isso, em vez de uma vitrine fixa,
            convidamos você a conversar com a gente: nos conte qual planta você está procurando e
            mostramos o que temos disponível agora — com foto, preço e cuidado.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn btn-whatsapp btn-magnetic inline-flex px-10 py-4"
          >
            <WhatsAppIcon size={20} className="mr-2" />
            Ver plantas disponíveis hoje
          </a>
        </div>
      </section>

      {/* Tipos de plantas que vendem */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal-fade">
            <span className="text-gold-main font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
              O que costuma ter por aqui
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic font-light text-purple-deep leading-tight mb-4">
              Um pedacinho da nossa estufa
            </h2>
            <p className="text-text-medium leading-relaxed">
              Trabalhamos com plantas selecionadas a dedo, mudando conforme a estação e a disponibilidade
              dos nossos parceiros. Confira algumas das categorias que costumam morar com a gente:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal-stagger">
            {PLANT_TYPES.map((type) => (
              <article
                key={type.name}
                className="group relative bg-white rounded-3xl p-8 text-center border border-gold-main/10 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 overflow-hidden"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#A8C4A0] via-gold-main to-purple-main opacity-60"
                />
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {type.emoji}
                </div>
                <h3 className="font-serif text-xl font-semibold text-purple-deep mb-2">
                  {type.name}
                </h3>
                <p className="text-sm text-text-medium leading-relaxed">
                  {type.note}
                </p>
              </article>
            ))}
          </div>

          <p className="text-center text-text-light text-sm mt-10 italic">
            Procurando outra espécie? Pergunte! Muitas vezes conseguimos encomendar para você.
          </p>
        </div>
      </section>

      {/* Como funciona o pedido */}
      <section className="py-24 bg-gradient-to-b from-[#F5EFE6] to-cream">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16 reveal-fade">
            <span className="text-gold-main font-sans font-bold uppercase tracking-[0.25em] text-xs mb-3 block">
              Simples assim
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic font-light text-purple-deep leading-tight">
              Como escolher sua planta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger">
            {[
              {
                icon: <Sparkles size={24} className="text-gold-main" />,
                step: '01',
                title: 'Chame no WhatsApp',
                text: 'Nos diga qual planta você está procurando — ou descreva o ambiente, o estilo, o presente.',
              },
              {
                icon: <Leaf size={24} className="text-[#6B8E5A]" />,
                step: '02',
                title: 'Mostramos o estoque',
                text: 'Enviamos fotos reais das plantas disponíveis hoje, com preço, tamanho e dicas de cuidado.',
              },
              {
                icon: <Heart size={24} className="text-purple-main" />,
                step: '03',
                title: 'Sua planta chega cuidada',
                text: 'Embalada com carinho, pronta para presentear ou para decorar seu cantinho preferido.',
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-3xl p-8 shadow-card border border-gold-main/10 relative"
              >
                <span className="absolute top-6 right-6 font-serif italic text-3xl text-purple-main/20">
                  {s.step}
                </span>
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-purple-deep mb-3">
                  {s.title}
                </h3>
                <p className="text-text-medium text-sm leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final — Estufa */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="relative max-w-3xl mx-auto bg-gradient-to-br from-purple-deep via-purple-main to-purple-deep rounded-[2.5rem] p-12 md:p-16 text-center overflow-hidden shadow-2xl reveal-scale">
            <div aria-hidden="true" className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-gold-main/20 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-[#A8C4A0]/20 blur-3xl" />

            <span className="relative text-5xl mb-6 block">🪴</span>
            <h2 className="relative font-serif text-3xl md:text-5xl italic font-light text-white leading-tight mb-6">
              Vamos achar a planta <span className="text-gold-main">perfeita</span> para você?
            </h2>
            <p className="relative text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
              Cada planta é única — e merece ser escolhida assim. Conte para a gente o que procura
              e te mostramos o que temos vivo, fresco e pronto pra ir embora com você hoje.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="relative btn btn-whatsapp btn-magnetic inline-flex px-10 py-4"
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
