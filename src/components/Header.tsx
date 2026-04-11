import React, { useState, useEffect } from 'react';
import { ConfigProvider, Dropdown } from 'antd';
import { Menu as MenuIcon, X } from 'lucide-react';

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
    { key: 'tcm', label: <a href="/behandlungen/tcm" className="block py-3 px-6 text-base tracking-wide hover:text-tea-green transition-colors font-sans">Traditionelle Chinesische Medizin</a> },
    { key: 'ayurveda', label: <a href="/behandlungen/ayurveda" className="block py-3 px-6 text-base tracking-wide hover:text-tea-green transition-colors font-sans">Ayurveda & Konstitutionslehre</a> },
    { key: 'aesthetik', label: <a href="/behandlungen/aesthetik-wellness" className="block py-3 px-6 text-base tracking-wide hover:text-tea-green transition-colors font-sans">Ästhetik & Entspannung</a> },
  ];

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3A4D3F',
          colorText: '#2D2C2A',
          fontFamily: 'Satoshi, sans-serif',
        }
      }}
    >
      <header className={`fixed top-0 w-full z-[100] transition-all duration-1000 ${isScrolled ? 'py-4' : 'py-10'}`}>
        <nav className={`w-[92%] max-w-[1440px] mx-auto px-10 py-4 flex items-center justify-between transition-all duration-700 rounded-sm relative z-[105] ${isScrolled ? 'surface-limestone h-16' : 'bg-transparent h-20'}`}>
          
          {/* Left: Branding */}
          <a href="/" className="flex flex-col group relative z-10 shrink-0">
            <span className="font-serif text-3xl text-deep-charcoal leading-none transition-colors duration-500 group-hover:text-tea-green">
              Sandmann
            </span>
            <span className="text-[10px] tracking-[0.4em] uppercase text-stone-taupe mt-1 font-sans">
              Naturheilzentrum
            </span>
          </a>

          {/* Middle: Links */}
          <div className="hidden lg:flex gap-12 items-center justify-center flex-1">
            <Dropdown 
              menu={{ items: behandlungenMenu, className: "bg-mineral-beige/95 backdrop-blur-3xl border border-stone-taupe/20 shadow-2xl rounded-sm !p-2" }} 
              overlayClassName="pt-6" 
              placement="bottom"
            >
              <a href="/behandlungen" onClick={(e) => e.preventDefault()} className="text-[11px] font-medium tracking-[0.2em] uppercase text-deep-charcoal/80 hover:text-tea-green transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap group font-sans">
                Behandlungen
              </a>
            </Dropdown>

            <a href="/team" className="text-[11px] font-medium tracking-[0.2em] uppercase text-deep-charcoal/80 hover:text-tea-green transition-colors whitespace-nowrap font-sans">Unser Team</a>
            <a href="/philosophie" className="text-[11px] font-medium tracking-[0.2em] uppercase text-deep-charcoal/80 hover:text-tea-green transition-colors whitespace-nowrap font-sans">Philosophie</a>
            <a href="/blog" className="text-[11px] font-medium tracking-[0.2em] uppercase text-deep-charcoal/80 hover:text-tea-green transition-colors whitespace-nowrap font-sans">Magazin</a>
            <a href="/kontakt" className="text-[11px] font-medium tracking-[0.2em] uppercase text-deep-charcoal/80 hover:text-tea-green transition-colors whitespace-nowrap font-sans">Kontakt</a>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-8">
            <a href="/kontakt" className="btn-editorial px-8 py-3 text-[10px] hidden md:flex font-sans">
              Termin anfragen
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-deep-charcoal flex items-center justify-center relative z-[110] transition-colors hover:text-tea-green"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 h-screen w-screen bg-mineral-beige z-[100] transition-all duration-700 lg:hidden flex flex-col justify-center px-10 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}
        >
          <div className="flex flex-col space-y-10 items-start">
            <a href="/behandlungen" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-serif text-deep-charcoal hover:text-tea-green transition-colors">Behandlungen</a>
            <a href="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-serif text-deep-charcoal hover:text-tea-green transition-colors">Unser Team</a>
            <a href="/philosophie" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-serif text-deep-charcoal hover:text-tea-green transition-colors">Philosophie</a>
            <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-serif text-deep-charcoal hover:text-tea-green transition-colors">Magazin</a>
            <a href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="text-5xl font-serif text-deep-charcoal hover:text-tea-green transition-colors">Kontakt</a>
            
            <div className="pt-10 w-full">
              <a href="/kontakt" onClick={() => setIsMobileMenuOpen(false)} className="btn-editorial w-full py-6 text-base tracking-[0.2em]">
                Termin vereinbaren
              </a>
            </div>
          </div>
        </div>
      </header>
    </ConfigProvider>
  );
};

export default Header;
