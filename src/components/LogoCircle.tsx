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
export function LogoCircle({ className, imgClassName, version = "50" }: LogoCircleProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-full aspect-square flex items-center justify-center bg-transparent border-0",
        className
      )}
    >
      <img 
        src={`/logo.png?v=${version}`} 
        alt="TM Flores e Plantas Logo" 
        className={cn(
          "w-[101%] h-[101%] max-w-none object-cover pointer-events-none select-none",
          imgClassName
        )}
      />
    </div>
  );
}
