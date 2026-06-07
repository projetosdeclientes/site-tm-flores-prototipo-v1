import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Instagram } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", to: "/" },
    {
      name: "Produtos",
      dropdown: [
        { name: "Buquês", to: "/buques" },
        { name: "Plantas", to: "/plantas" },
      ],
    },
    { name: "Encomendas", to: "/encomendas" },
    { name: "Sobre a Loja", to: "/sobre" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 overflow-x-hidden ${
          isScrolled ? "glass-nav py-3" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative w-14 h-14 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-110">
              <img 
                src="/assets/logo.png" 
                alt="TM Flores e Plantas Logo" 
                className="w-full h-full object-contain filter drop-shadow-sm"
              />
            </div>
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

                {link.dropdown && dropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-48">
                    <div className="bg-white rounded-lg shadow-lg border border-gold-main/20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="block px-6 py-3 text-sm font-semibold text-text-dark hover:bg-lavender-ultra hover:text-purple-main transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Social CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://www.instagram.com/tmfloreseplantas"
              target="_blank"
              rel="noopener"
              className="p-2 text-purple-main hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wa.me/5511918475136"
              target="_blank"
              rel="noopener"
              className="btn-whatsapp text-xs py-2 px-5"
            >
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
              className="btn-whatsapp justify-center py-4 w-full"
              target="_blank"
              rel="noopener"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/tmfloreseplantas"
              className="btn-instagram justify-center py-4 w-full"
              target="_blank"
              rel="noopener"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>

    </>
  );
}
