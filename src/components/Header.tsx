import React, { useState, useEffect } from 'react';
import { ConfigProvider, Dropdown } from 'antd';
import { Leaf, Menu as MenuIcon, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const behandlungenMenu = [
    { key: 'tcm', label: <a href="/behandlungen/tcm" className="block py-3 px-6 text-lg tracking-wide hover:text-sand-gold transition-colors">Traditionelle Chinesische Medizin</a> },
    { key: 'ayurveda', label: <a href="/behandlungen/ayurveda" className="block py-3 px-6 text-lg tracking-wide hover:text-sand-gold transition-colors">Ayurveda & Konstitutionslehre</a> },
    { key: 'aesthetik', label: <a href="/behandlungen/aesthetik-wellness" className="block py-3 px-6 text-lg tracking-wide hover:text-sand-gold transition-colors">Ästhetik & Entspannung</a> },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#D4AF37',
          colorText: '#1E2F23',
          fontFamily: 'Outfit, sans-serif',
        }
      }}
    >
      <header className={`fixed top-0 w-full z-[100] transition-all duration-700 ${isScrolled ? 'py-4 translate-y-4' : 'py-8'}`}>
        <nav className={`w-[95%] max-w-7xl mx-auto px-6 py-3 flex items-center justify-between transition-all duration-500 rounded-full relative z-[105] ${isScrolled ? 'glass-premium' : 'bg-white/80 backdrop-blur-md'}`}>
          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-3 group relative z-10 shrink-0">
            <div className="w-10 h-10 rounded-full bg-forest-deep flex items-center justify-center text-sand-sun group-hover:bg-sand-gold transition-colors duration-500 shrink-0">
              <Leaf size={20} />
            </div>
            <div className="flex flex-col whitespace-nowrap hidden sm:flex">
              <span className="font-playfair text-xl font-medium tracking-tight text-forest-deep uppercase leading-none">
                Naturheilzentrum
              </span>
              <span className="font-playfair text-lg font-medium tracking-widest text-sand-gold uppercase leading-none mt-1">
                SANDMANN
              </span>
            </div>
          </a>

          {/* Middle: Links */}
          <div className="hidden lg:flex gap-6 xl:gap-10 items-center justify-center flex-1 ml-12">
            <Dropdown 
              menu={{ items: behandlungenMenu, className: "bg-white/40 backdrop-blur-2xl border border-white/20 shadow-2xl rounded-2xl font-playfair !p-2" }} 
              overlayClassName="pt-6" 
              placement="bottom"
            >
              <a href="/behandlungen" onClick={(e) => e.preventDefault()} className="text-[13px] xl:text-sm font-medium tracking-widest uppercase text-forest-deep/90 hover:text-sand-gold transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap group">
                Behandlungen
              </a>
            </Dropdown>

            <a href="/team" className="text-[13px] xl:text-sm font-medium tracking-widest uppercase text-forest-deep/90 hover:text-sand-gold transition-colors whitespace-nowrap">Unser Team</a>
            <a href="/philosophie" className="text-[13px] xl:text-sm font-medium tracking-widest uppercase text-forest-deep/90 hover:text-sand-gold transition-colors whitespace-nowrap">Philosophie</a>
            <a href="/blog" className="text-[13px] xl:text-sm font-medium tracking-widest uppercase text-forest-deep/90 hover:text-sand-gold transition-colors whitespace-nowrap">Magazin</a>
            <a href="/kontakt" className="text-[13px] xl:text-sm font-medium tracking-widest uppercase text-forest-deep/90 hover:text-sand-gold transition-colors whitespace-nowrap">Kontakt</a>
          </div>

          {/* Right: CTA Button */}
          <div className="flex items-center gap-6 ml-8">
            <a href="/kontakt" className="btn-premium px-6 xl:px-8 py-3 text-[13px] xl:text-sm font-medium tracking-widest uppercase relative z-10 shrink-0 hidden md:block whitespace-nowrap">
              Termin buchen
            </a>
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-forest-deep flex items-center justify-center relative z-[110] bg-white/50 p-2 rounded-full backdrop-blur-sm focus:outline-none hover:text-sand-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 h-screen w-screen bg-sand-sun/98 backdrop-blur-2xl z-[100] transition-all duration-500 lg:hidden flex flex-col justify-between px-8 py-24 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="flex flex-col items-center space-y-8 mt-12">
            <a href="/behandlungen" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-playfair text-forest-deep uppercase tracking-widest hover:text-sand-gold transition-colors">Behandlungen</a>
            <a href="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-playfair text-forest-deep uppercase tracking-widest hover:text-sand-gold transition-colors">Unser Team</a>
            <a href="/philosophie" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-playfair text-forest-deep uppercase tracking-widest hover:text-sand-gold transition-colors">Philosophie</a>
            <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-playfair text-forest-deep uppercase tracking-widest hover:text-sand-gold transition-colors">Magazin</a>
            <a href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-playfair text-forest-deep uppercase tracking-widest hover:text-sand-gold transition-colors">Kontakt</a>
          </div>
          
          <div className="w-full flex justify-center pb-12">
            <a href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="btn-premium w-full max-w-sm py-6 text-xl tracking-[0.2em] shadow-xl text-center">
              Termin buchen
            </a>
          </div>
        </div>
      </header>
    </ConfigProvider>
  );
};

export default Header;
