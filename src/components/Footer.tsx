import { Link } from "@tanstack/react-router";
import { Instagram, MapPin, Clock, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-cream-warm pt-20 pb-10 border-t border-gold-main/10 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 text-center md:text-left">
        {/* Brand */}
        <div className="flex flex-col gap-6 items-center md:items-start">
          <Link to="/" className="text-2xl font-serif font-bold gold-text tracking-wider">
            TM FLORES
          </Link>
          <p className="text-text-medium text-sm leading-relaxed max-w-[280px]">
            Especialistas em buquês artesanais e plantas ornamentais. 
            Levando beleza e emoção para Cotia e região desde 2024.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/tmfloreseplantas"
              target="_blank"
              rel="noopener"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif text-lg font-bold text-purple-deep mb-6 uppercase tracking-wider">
            Navegação
          </h4>
          <ul className="flex flex-col gap-3 text-sm font-semibold text-text-medium">
            <li><Link to="/" className="hover:text-purple-main transition-colors underline-offset-4 hover:underline">Início</Link></li>
            <li><Link to="/buques" className="hover:text-purple-main transition-colors underline-offset-4 hover:underline">🌹 Buquês</Link></li>
            <li><Link to="/plantas" className="hover:text-purple-main transition-colors underline-offset-4 hover:underline">🌿 Plantas</Link></li>
            <li><Link to="/encomendas" className="hover:text-purple-main transition-colors underline-offset-4 hover:underline">Encomendas Personalizadas</Link></li>
            <li><Link to="/sobre" className="hover:text-purple-main transition-colors underline-offset-4 hover:underline">Sobre a Loja</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif text-lg font-bold text-purple-deep mb-6 uppercase tracking-wider">
            Contato
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-text-medium items-center md:items-start">
            <li className="flex gap-3">
              <Phone size={18} className="text-gold-main shrink-0" />
              <a href="https://wa.me/5511918475136" target="_blank" rel="noopener" className="hover:text-purple-main">
                +55 11 91847-5136
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="text-gold-main shrink-0" />
              <span>
                Shopping Central Park Cotia<br />
                Subsolo · Vargem Grande Paulista - SP
              </span>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-serif text-lg font-bold text-purple-deep mb-6 uppercase tracking-wider">
            Horário
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-text-medium items-center md:items-start">
            <li className="flex gap-3">
              <Clock size={18} className="text-gold-main shrink-0" />
              <div>
                <p className="font-bold text-text-dark">Segunda a Sábado</p>
                <p>10h às 22h</p>
              </div>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="text-gold-main shrink-0" />
              <div>
                <p className="font-bold text-text-dark">Domingo</p>
                <p>12h às 20h</p>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gold-main/5 text-center text-xs text-text-light flex flex-col items-center gap-8">
        <div className="w-full max-w-4xl h-[220px] md:hidden rounded-2xl overflow-hidden shadow-lg">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.87654!2d-46.9937432!3d-23.6428329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa79bd9be0649%3A0x59310925c559aeae!2sTM%20Flores%20e%20Plantas!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <p>© 2026 TM Flores e Plantas. Todos os direitos reservados.</p>
      </div>

    </footer>
  );
}
