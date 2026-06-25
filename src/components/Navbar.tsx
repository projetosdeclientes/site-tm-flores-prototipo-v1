import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { InstagramIcon } from "./InstagramIcon";
import { LogoCircle } from "./LogoCircle";
import { useIsMobile } from "../hooks/use-mobile";


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [forceVisible, setForceVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 80) {
        setForceVisible(true);
      } else if (e.clientY > 120 && window.scrollY > 100) {
        setForceVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const navLinks = [
    { name: "Início", to: "/" },
    {
      name: "Produtos",
      dropdown: [
        { name: "Buquês", to: "/buques" },
        { name: "Cestas & Chocolates", to: "/cestas-chocolates" },
        { name: "Plantas", to: "/plantas" },
      ],
    },
    { name: "Encomendas", to: "/encomendas" },
    { name: "Sobre a Loja", to: "/sobre" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          isScrolled || forceVisible
            ? "glass-nav py-3 opacity-100 translate-y-0" 
            : "py-6 opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <LogoCircle className="w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110" />

            <span className="text-xl md:text-2xl font-serif font-bold gold-text tracking-wider hidden sm:block">
              TM FLORES
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                {link.dropdown ? (
                  <button className="flex items-center gap-1 font-sans font-semibold text-text-dark hover:text-purple-main transition-colors uppercase text-sm tracking-wide">
                    {link.name} <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className="font-sans font-semibold text-text-dark hover:text-purple-main transition-colors uppercase text-sm tracking-wide"
                  >
                    {link.name}
                  </Link>
                )}

                <AnimatePresence>
                  {link.dropdown && dropdownOpen && (
                    <motion.div
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48"
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      style={{ transformOrigin: "top center" }}
                    >
                      <div className="bg-white rounded-lg shadow-lg border border-gold-main/20 overflow-hidden">
                        {link.dropdown.map((item, i) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 + i * 0.05, duration: 0.2 }}
                          >
                            <Link
                              to={item.to}
                              className="block px-6 py-3 text-sm font-semibold text-text-dark hover:bg-lavender-ultra hover:text-purple-main transition-colors"
                            >
                              {item.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Social CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/tmfloreseplantas"
              target="_blank"
              rel="noopener"
              className="p-2 text-white bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-lg hover:scale-110 transition-transform shadow-sm"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://wa.me/5511918475136"
              target="_blank"
              rel="noopener"
              className="btn-whatsapp text-xs py-2 px-5 flex items-center gap-1.5"
            >
              <WhatsAppIcon size={14} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-text-dark w-[44px] h-[44px] flex items-center justify-center relative right-[-16px]"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>


      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[200] lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#FAF5EC] transition-transform duration-500 ease-silk p-8 flex flex-col z-[201] ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="self-end p-2 text-text-medium w-[44px] h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>

          <nav className="mt-12 flex flex-col gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-6">
                {link.dropdown ? (
                  <div className="flex flex-col gap-6">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className="font-serif text-[22px] font-bold text-text-dark hover:text-purple-main"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    to={link.to}
                    className="font-serif text-[22px] font-bold text-text-dark hover:text-purple-main"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4">
            <a
              href="https://wa.me/5511918475136"
              className="btn-whatsapp justify-center py-4 w-full flex items-center gap-2"
              target="_blank"
              rel="noopener"
            >
              <WhatsAppIcon size={20} />
              Falar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/tmfloreseplantas"
              className="btn-instagram justify-center py-4 w-full flex items-center gap-2"
              target="_blank"
              rel="noopener"
            >
              <InstagramIcon size={20} />
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>

    </>
  );
}
