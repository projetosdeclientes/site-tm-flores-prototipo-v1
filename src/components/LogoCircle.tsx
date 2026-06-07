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
export function LogoCircle({ className, imgClassName, version = "32" }: LogoCircleProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-full aspect-square flex items-center justify-center bg-white shadow-sm",
        className
      )}
    >
      <img 
        src={`/logo.png?v=${version}`} 
        alt="TM Flores e Plantas Logo" 
        className={cn(
          "w-full h-full object-cover scale-[1.05] pointer-events-none select-none",
          imgClassName
        )}
      />
    </div>
  );
}
