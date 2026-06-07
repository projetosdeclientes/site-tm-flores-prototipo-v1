import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price?: string;
  priceLabel?: string;
  image: string;
}

export function ProductCard({
  id,
  name,
  price,
  priceLabel,
  image,
}: ProductCardProps) {
  const whatsappUrl = `https://wa.me/5511918475136?text=${encodeURIComponent(
    `Olá! Tenho interesse no ${name}. Poderia me ajudar?`
  )}`;

  return (
    <article className="product-card group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-gold-main/5 flex flex-col h-full cursor-pointer">
      <Link to={`/buques/${id}`} className="block">
        <div className="product-card-gallery relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="product-card-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ objectPosition: 'center 60%' }}
            loading="lazy"
          />


        </div>
      </Link>

      <div className="product-card-body p-4 flex flex-col flex-grow">
        <Link to={`/buques/${id}`} className="block">
          <h3 className="product-card-name font-serif text-lg font-semibold text-text-dark mb-1 group-hover:text-purple-main transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <div className="mt-1 mb-3">
          {price && (
            <div className="product-card-price text-[17px] font-bold text-purple-deep font-sans">
              {priceLabel && (
                <span className="text-[13px] font-normal text-text-light mr-1">
                  {priceLabel}
                </span>
              )}
              {price}
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <Link
            to={`/buques/${id}`}
            className="w-full justify-center text-[13px] py-2.5 px-4 border-[1.5px] border-purple-main text-purple-main rounded-full font-semibold flex items-center gap-1 hover:bg-purple-main hover:text-white transition-all"
          >
            Ver produto →
          </Link>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener"
            onClick={(e) => e.stopPropagation()}
            className="w-full justify-center text-[13px] py-2.5 px-4 bg-whatsapp text-white rounded-full font-semibold flex items-center gap-1 transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle size={16} />
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export function MoreCard({ to, label, icon }: { to: string; label: string; icon: string }) {
  return (
    <Link
      to={to}
      className="product-card-more flex flex-col items-center justify-center bg-lavender-ultra/30 border-2 border-dashed border-lavender rounded-2xl p-8 text-center group hover:bg-lavender-ultra/50 transition-all duration-300 w-[260px] h-full"
    >
      <span className="product-card-more-icon text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </span>
      <span className="font-serif text-xl font-bold text-purple-deep group-hover:text-purple-main">
        {label}
      </span>
      <span className="product-card-more-arrow mt-2 text-gold-main group-hover:translate-x-2 transition-transform duration-300">
        →
      </span>
    </Link>
  );
}
