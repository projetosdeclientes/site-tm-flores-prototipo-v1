import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProductModalProps {
  product: {
    id: string;
    name: string;
    description: string;
    price?: string;
    images: string[];
    tagline?: string;
    typeBadge?: string;
    unitLabel?: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  const whatsappUrl = `https://wa.me/5511918475136?text=${encodeURIComponent(
    `Olá! Tenho interesse no ${product.name}. Poderia me ajudar?`
  )}`;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay 
          className="fixed inset-0 z-50 bg-[#1A1220]/60 backdrop-blur-[8px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" 
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-[50%] top-[50%] z-50 w-full max-w-[95vw] md:max-w-[900px] translate-x-[-50%] translate-y-[-50%] overflow-hidden bg-white rounded-[20px] shadow-[0_25px_80px_rgba(74,21,117,0.2)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-right duration-[350ms] ease-out focus:outline-none",
            "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,_white,_#F0EAFF)] before:-z-10"
          )}
        >

          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] h-full max-h-[90vh] overflow-y-auto md:overflow-hidden">
            {/* Lado Esquerdo: Galeria */}
            <div className="p-6 md:p-8 flex flex-col gap-6 bg-white/50">
              <Tabs defaultValue="0" className="w-full flex flex-col gap-6">
                <div className="aspect-square w-full rounded-xl overflow-hidden shadow-lg bg-lavender-ultra/20">
                  {product.images.map((img, idx) => (
                    <TabsContent key={idx} value={idx.toString()} className="m-0 w-full h-full animate-in fade-in duration-500">
                      <img src={img} alt={`${product.name} - Foto ${idx + 1}`} className="w-full h-full object-cover" />
                    </TabsContent>
                  ))}
                  {/* Se não houver 3 fotos, mantemos o padrão visual do site para as abas vazias se necessário, 
                      mas como o usuário disse que TODOS têm 3 fotos, vamos mapear o que existir. */}
                </div>

                <TabsList className="bg-transparent h-auto p-0 flex justify-start gap-4">
                  {product.images.map((img, idx) => (
                    <TabsTrigger 
                      key={idx}
                      value={idx.toString()} 
                      className="p-0 border-2 border-transparent data-[state=active]:border-[#C9A040] rounded-lg overflow-hidden transition-all w-20 md:w-24 aspect-square bg-white shadow-sm"
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Lado Direito: Informações */}
            <div className="p-8 md:p-10 flex flex-col bg-white/30 backdrop-blur-sm relative border-l border-purple-main/5">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <span className="bg-[#F0EAFF] text-[#8B5AB6] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {product.typeBadge || (product.unitLabel === "Unidade" ? "Rosa" : "Buquê")}
                  </span>
                </div>

                <h2 className="font-serif text-[32px] md:text-[36px] text-[#2D1A4A] leading-tight font-bold">
                  {product.name}
                </h2>

                <p className="italic text-[#8B5AB6] text-sm md:text-base">
                  {product.tagline || "Um gesto simples, mas cheio de emoção."}
                </p>

                <div className="h-[1px] w-[60px] bg-[#C9A040] my-2" />

                <p className="font-sans text-[15px] text-[#6B4E8A] leading-[1.8]">
                  {product.description}
                </p>

                <div className="mt-4">
                  <p className="font-bold text-[28px] text-[#4A1575]">
                    {product.price}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white w-full rounded-full py-4 px-6 flex items-center justify-center gap-3 font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/20"
                >
                  <MessageCircle size={22} />
                  Pedir pelo WhatsApp
                </a>
              </div>
            </div>
          </div>

          <DialogPrimitive.Close className="absolute right-6 top-6 rounded-full p-2 bg-white/80 backdrop-blur-sm shadow-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
            <X className="h-5 w-5 text-[#2D1A4A]" />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}