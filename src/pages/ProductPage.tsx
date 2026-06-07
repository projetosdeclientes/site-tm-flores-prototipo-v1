import { useParams, Link } from '@tanstack/react-router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { MessageCircle, Check, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { products as productsData } from '@/data/products';

export function ProductPage() {
  const { slug } = useParams({ from: '/buques/$slug' });
  const productIndex = productsData.findIndex(p => p.id === slug);
  const product = productIndex !== -1 ? productsData[productIndex] : productsData[0];
  const [mainImage, setMainImage] = useState(product.image);
  const [activeThumb, setActiveThumb] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMainImage(product.image);
    setActiveThumb(0);
  }, [product.id]);

  const relatedProducts = productsData
    .filter(p => p.id !== product.id && p.category === 'buques')
    .slice(0, 4);

  const thumbnails = [
    { 
      label: "Foto Principal", 
      filter: "none", 
      objectPosition: "center 60%",
      transform: "none",
      description: "Visão frontal e detalhada do arranjo." 
    },
    { 
      label: "Detalhes", 
      filter: "saturate(1.5) brightness(1.06) contrast(1.12)", 
      objectPosition: "center 40%",
      transform: "scale(1.35)",
      description: "Destaque para a textura e vivacidade das pétalas." 
    },
    { 
      label: "Cena", 
      filter: "sepia(0.15) brightness(0.93) contrast(1.1)", 
      objectPosition: "center 55%",
      transform: "none",
      description: "O buquê em um ambiente real e aconchegante." 
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF5EC] overflow-x-hidden">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-[#FAF5EC]">
        <div className="container mx-auto px-6">
          <nav className="flex items-center gap-2 text-[13px] text-[#9B8AB5] font-sans mb-12">
            <Link to="/" className="hover:text-purple-main transition-colors">Início</Link>
            <span>&gt;</span>
            <Link to="/buques" className="hover:text-purple-main transition-colors">Buquês</Link>
            <span>&gt;</span>
            <span className="font-semibold text-text-dark">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6">
              <div className="relative h-[320px] md:h-[520px] rounded-[20px] overflow-hidden shadow-xl bg-white">
                {mainImage ? (
                  <img 
                    src={mainImage} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{ 
                      filter: thumbnails[activeThumb].filter,
                      objectPosition: thumbnails[activeThumb].objectPosition,
                      transform: thumbnails[activeThumb].transform
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-[#9B8AB5] gap-4 bg-[#F8F7FF]">
                    <ImageIcon size={48} strokeWidth={1} />
                    <p className="text-sm font-sans">Carregando imagem...</p>
                  </div>
                )}
              </div>
              <div className="flex gap-4">
                {thumbnails.map((thumb, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveThumb(i)}
                    className={`relative w-24 aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      activeThumb === i ? 'border-[2.5px] border-[#C9A040] scale-105 shadow-md' : 'border-2 border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="w-full h-full overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={`${product.name} - ${thumb.label}`} 
                        className="w-full h-full object-cover"
                        style={{ 
                          filter: thumb.filter,
                          objectPosition: thumb.objectPosition,
                          transform: i === 1 ? 'scale(1.2)' : 'none'
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start pt-4">
              {product.badge ? (
                <span className="px-4 py-1.5 bg-[#FFF8E7] text-[#B8860B] border border-[#EEDC82] rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
                  {product.badge}
                </span>
              ) : (
                <span className="px-4 py-1.5 bg-[#F0EAFF] text-[#8B5AB6] border border-[#C4A8DC] rounded-full text-[11px] font-bold uppercase tracking-widest mb-6">
                  Buquê Artesanal
                </span>
              )}
              
              <h1 className="font-serif text-[28px] md:text-[42px] font-bold text-[#2D1A4A] leading-[1.15] mb-2">
                {product.name}
              </h1>
              
              <p className="font-sans text-base italic text-[#8B5AB6] mt-2">
                {product.tagline || "Flores colhidas com carinho para momentos únicos"}
              </p>

              <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#D4A840] to-[#8B6B1E] my-8" />

              <div className="flex flex-col mb-8">
                <span className="text-[13px] text-[#9B8AB5] font-sans mb-1">Valor do investimento</span>
                <span className="text-[32px] font-bold text-[#4A1575] font-sans">
                  {product.price}
                </span>
              </div>

              <p className="text-[15px] text-[#6B4E8A] leading-[1.85] mb-6 max-w-lg">
                {product.description}
              </p>

              <div className="bg-[#F8F7FF] border border-[#E8E4F5] rounded-xl p-5 mb-10 w-full max-w-lg">
                <h4 className="text-[13px] font-bold text-[#4A1575] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Check size={14} className="text-[#C9A040]" />
                  Destaques deste Buquê
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "Flores frescas colhidas no dia",
                    "Embalagem luxuosa e artesanal",
                    "Cartão de mensagem incluso",
                    "Durabilidade garantida"
                  ].map((item, idx) => (
                    <li key={idx} className="text-[13px] text-[#6B4E8A] flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[#C9A040]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full space-y-4">
                <a 
                  href={`https://wa.me/5511918475136?text=${encodeURIComponent(`Olá! Tenho interesse no ${product.name}. Poderia me ajudar?`)}`}
                  target="_blank"
                  rel="noopener"
                  className="w-full h-[54px] bg-[#25D366] text-white flex items-center justify-center rounded-full font-bold gap-3 shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:scale-[1.02] transition-transform"
                >
                  <MessageCircle size={22} />
                  Pedir pelo WhatsApp
                </a>
                <p className="text-center text-[12px] text-[#9B8AB5] font-sans flex items-center justify-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  💬 Resposta rápida pelo WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-[28px] font-bold text-[#2D1A4A] mb-12">
            Você também pode gostar
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}