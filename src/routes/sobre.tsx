import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useEffect } from 'react'
import { MapPin, Star, Clock } from 'lucide-react'
import { WhatsAppIcon } from '@/components/WhatsAppIcon'
import { InstagramIcon } from '@/components/InstagramIcon'
import { LogoCircle } from '@/components/LogoCircle'


export const Route = createFileRoute('/sobre')({
  component: SobrePage,
})

function SobrePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="about-hero pt-48 pb-32 bg-purple-deep relative overflow-hidden text-center">
        <div className="container mx-auto px-6 relative z-10 about-hero-content reveal-fade">
          <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-[0.3em] text-xs mb-6 block">
            Conheça nossa história
          </span>
          <h1 className="about-hero-title font-serif text-5xl md:text-8xl font-light text-white leading-tight mb-8">
            Sobre a<br />
            <em className="gold-text italic">TM Flores e Plantas</em>
          </h1>
          <p className="about-hero-lead font-script text-2xl md:text-4xl text-lavender-light">
            Nascemos de um sonho. Crescemos com amor.
            E estamos aqui para florescer junto com você.
          </p>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-purple-main blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-gold-main blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Wave bottom */}
        <div className="about-hero-wave absolute bottom-[-1px] left-0 w-full leading-[0]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FAF5EC" />
          </svg>
        </div>
      </section>

      {/* Nossa História */}
      <section className="about-story-section py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="about-story-grid grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="about-story-text reveal-left">
              <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-4 block">
                Nossa história
              </span>
              <h2 className="section-title text-3xl md:text-5xl font-serif font-bold text-purple-deep leading-tight mb-10 text-left">
                Fundada com amor,<br />cultivada com paixão
              </h2>
              
              <div className="about-story-content space-y-6 text-lg text-text-medium leading-relaxed mb-12">
                <p>
                  Fundada em 2024, nossa floricultura nasceu da realização de um sonho cultivado com amor, dedicação e a paixão pela beleza que a natureza oferece.
                </p>
                <p>
                  Acreditamos que as flores têm o poder de transmitir sentimentos, criar memórias e tornar cada momento mais especial.
                </p>
                <p>
                  Com sensibilidade e cuidado, levamos beleza e emoção para a vida das pessoas, florescendo histórias e fortalecendo laços. 🌻
                </p>
              </div>

              <blockquote className="about-story-quote border-l-4 border-gold-main bg-lavender-ultra/30 p-8 rounded-r-2xl mb-12">
                <p className="font-script text-3xl text-purple-main leading-relaxed">
                  "Florescendo histórias<br />e fortalecendo laços."
                </p>
              </blockquote>

              <div className="about-story-stats flex flex-wrap gap-12 items-center">
                <div className="about-stat text-center">
                  <span className="about-stat-number block font-serif text-4xl font-bold text-purple-deep">2024</span>
                  <span className="about-stat-label text-xs uppercase tracking-widest text-text-light font-bold">Fundação</span>
                </div>
                <div className="about-stat-divider w-px h-12 bg-cream-dark hidden sm:block" />
                <div className="about-stat text-center">
                  <span className="about-stat-number block font-serif text-4xl font-bold text-purple-deep">100%</span>
                  <span className="about-stat-label text-xs uppercase tracking-widest text-text-light font-bold">Flores Frescas</span>
                </div>
                <div className="about-stat-divider w-px h-12 bg-cream-dark hidden sm:block" />
                <div className="about-stat text-center">
                  <span className="about-stat-number block font-serif text-4xl font-bold text-purple-deep">★ 5.0</span>
                  <span className="about-stat-label text-xs uppercase tracking-widest text-text-light font-bold">Google Maps</span>
                </div>
              </div>
            </div>

            <div className="about-story-images reveal-right">
              <div className="about-images-grid flex flex-col gap-8">
                <div className="about-image-item w-full rounded-2xl overflow-hidden shadow-xl relative">
                  <img 
                    src="/about/images/historia-02.png" 
                    className="w-full h-auto block" 
                    alt="Fachada e Interior da Loja" 
                  />
                  <LogoCircle className="absolute top-4 left-4 w-12 h-12 md:w-20 md:h-20 opacity-90 shadow-lg border border-white/40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="about-image-item w-full rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/about/images/historia-01.png" 
                      className="w-full h-auto block" 
                      alt="Logo TM e Buquê" 
                    />
                  </div>
                  <div className="about-image-item w-full rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="/about/images/historia-03.png" 
                      className="w-full h-auto block" 
                      alt="Cliente com Orquídeas" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="testimonials-full-section py-24 bg-cream-warm" id="depoimentos">
        <div className="container mx-auto px-6">
          <div className="section-header text-center mb-16 reveal-title">
            <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-4 block">
              O que dizem nossos clientes
            </span>
            <h2 className="section-title text-3xl md:text-5xl font-serif font-bold text-purple-deep leading-tight">
              Depoimentos
            </h2>
          </div>

          <div className="testimonials-prints-grid grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 reveal-stagger max-w-5xl mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="testimonial-print-card bg-white rounded-3xl overflow-hidden shadow-xl hover:translate-y-[-8px] transition-all duration-300 cursor-pointer border border-gold-main/10 ring-8 ring-white/50">
                <div className="relative group">
                  <div className="absolute inset-0 bg-purple-deep/5 group-hover:bg-transparent transition-colors duration-300" />
                  <img 
                    src={`/testimonials/images/depoimento-0${i}.png`} 
                    alt={`Print depoimento 0${i}`}
                    className="w-full h-auto object-contain relative z-10 p-2"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-gold-main shadow-sm z-20 border border-gold-main/20">
                    DEPOIMENTO #0{i}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonials-gmaps-cta text-center reveal-up">
            <p className="text-sm text-text-light mb-6">Veja todas as avaliações no Google</p>
            <a 
              href="https://www.google.com/maps/place/TM+Flores+e+Plantas" 
              target="_blank" 
              rel="noopener"
              className="btn btn-outline inline-flex items-center gap-2 border-2 border-purple-deep text-purple-deep px-8 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-purple-deep hover:text-white transition-all"
            >
              ★ Ver avaliações no Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Encontre a gente */}
      <section className="find-us-section py-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="section-header text-center mb-16 reveal-title">
            <span className="section-eyebrow text-gold-main font-sans font-bold uppercase tracking-widest text-xs mb-4 block">
              Visite-nos
            </span>
            <h2 className="section-title text-3xl md:text-5xl font-serif font-bold text-purple-deep leading-tight">
              Encontre a Gente
            </h2>
          </div>

          <div className="find-us-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="find-us-info space-y-6 reveal-left">
              <div className="contact-block">
                <a 
                  href="https://wa.me/5511918475136" 
                  target="_blank" 
                  rel="noopener"
                  className="contact-btn contact-btn-whatsapp flex items-center gap-6 p-8 bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all border border-gold-main/5 group"
                >
                  <div className="w-14 h-14 bg-whatsapp rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <WhatsAppIcon size={32} />
                  </div>
                  <div>
                    <strong className="text-xl font-bold text-text-dark block">(11) 91847-5136</strong>
                    <span className="text-sm text-text-medium">WhatsApp · Clique para falar</span>
                  </div>
                </a>
              </div>

              <div className="contact-block">
                <a 
                  href="https://www.instagram.com/tmfloreseplantas" 
                  target="_blank" 
                  rel="noopener"
                  className="contact-btn contact-btn-instagram flex items-center gap-6 p-8 bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all border border-gold-main/5 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-2xl flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                    <InstagramIcon size={32} />
                  </div>
                  <div>
                    <strong className="text-xl font-bold text-text-dark block">@tmfloreseplantas</strong>
                    <span className="text-sm text-text-medium">Instagram · Nos siga</span>
                  </div>
                </a>
              </div>

              <div className="contact-block contact-address p-8 bg-white rounded-3xl shadow-card border border-gold-main/5 flex gap-6">
                <div className="contact-address-icon text-3xl shrink-0">📍</div>
                <div>
                  <strong className="text-xl font-bold text-text-dark block mb-2">Nossa Localização</strong>
                  <p className="text-sm text-text-medium leading-relaxed mb-4">
                    Subsolo · Shopping Central Park Cotia<br />
                    Av. Ivo Mário Isaac Pires, 4040<br />
                    Tijuco Preto, Vargem Grande Paulista — SP<br />
                    CEP: 06741-128
                  </p>
                  <a href="https://www.google.com/maps/place/TM+Flores+e+Plantas" target="_blank" rel="noopener" className="contact-address-link text-purple-main font-bold text-xs uppercase tracking-widest hover:text-gold-main underline underline-offset-4">
                    Abrir no Google Maps →
                  </a>
                </div>
              </div>

              <div className="contact-block contact-hours p-8 bg-white rounded-3xl shadow-card border border-gold-main/5 flex gap-6">
                <div className="contact-hours-icon text-3xl shrink-0">🕐</div>
                <div className="flex-grow">
                  <strong className="text-xl font-bold text-text-dark block mb-4">Horário de Atendimento</strong>
                  <div className="hours-table space-y-2">
                    <div className="hours-row flex justify-between text-sm">
                      <span className="hours-day text-text-medium">Segunda a Sábado</span>
                      <span className="hours-time font-bold text-text-dark">10h às 22h</span>
                    </div>
                    <div className="hours-row flex justify-between text-sm">
                      <span className="hours-day text-text-medium">Domingo</span>
                      <span className="hours-time font-bold text-text-dark">12h às 20h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="find-us-map rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white h-[220px] md:h-full min-h-[220px] md:min-h-[400px] reveal-right">
              <div className="map-wrapper h-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.87654!2d-46.9937432!3d-23.6428329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa79bd9be0649%3A0x59310925c559aeae!2sTM%20Flores%20e%20Plantas!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </main>
  )
}
