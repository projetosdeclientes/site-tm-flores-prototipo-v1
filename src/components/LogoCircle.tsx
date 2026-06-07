import { cn } from "@/lib/utils";

interface LogoCircleProps {
  className?: string;
  imgClassName?: string;
  version?: string;
}

export function LogoCircle({ className, imgClassName, version = "10" }: LogoCircleProps) {
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
          "w-[145%] h-[145%] max-w-none object-contain logo-pixel-perfect", 
          "relative -left-[14%] -top-[1%]",
          imgClassName
        )}
      />


    </div>
  );
}
