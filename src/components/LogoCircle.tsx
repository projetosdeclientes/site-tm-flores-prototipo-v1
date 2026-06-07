import { cn } from "@/lib/utils";

interface LogoCircleProps {
  className?: string;
  imgClassName?: string;
  version?: string;
}

/**
 * Componente LogoCircle
 * Ajustado para compensar a assimetria natural da imagem original.
 * A imagem original tem as flores na esquerda e um espaço vazio na direita,
 * por isso aplicamos um zoom e um deslocamento negativo à esquerda para 
 * centralizar o círculo dourado e as letras "TM" visualmente.
 */
export function LogoCircle({ className, imgClassName, version = "25" }: LogoCircleProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-full aspect-square flex items-center justify-center bg-white",
        className
      )}
    >
      <img 
        src={`/logo.png?v=${version}`} 
        alt="TM Flores e Plantas Logo" 
        className={cn(
          // Aumentamos a escala para cobrir o círculo e aplicamos deslocamentos precisos
          "w-[124%] h-[124%] max-w-none object-contain logo-pixel-perfect", 
          // Movemos para a esquerda (-7.5%) para centralizar o TM e o círculo dourado
          // Movemos levemente para baixo (1.5%) para compensar o peso visual
          "relative -left-[7.5%] top-[1.5%] pointer-events-none select-none",
          imgClassName
        )}
      />
    </div>
  );
}
