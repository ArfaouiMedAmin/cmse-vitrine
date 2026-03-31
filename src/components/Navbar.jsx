import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PhoneCall, Menu, X } from 'lucide-react';
import cmseLogo from '../assets/images/cmse_log.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = i18n.dir();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
          <img src={cmseLogo} alt="CMSE Logo" style={{ height: '50px', objectFit: 'contain', borderRadius: '4px' }} />
        </a>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`} style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0 }}>
          <li><a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.home')}</a></li>
          <li><a href="#products" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.products')}</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.services')}</a></li>
          <li><a href="#interventions" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.interventions')}</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</a></li>
        </ul>

        <div className="lang-switch" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <a 
            href="tel:+21655915337" 
            className="btn" 
            style={{ 
              backgroundColor: 'var(--cmse-yellow)', 
              color: '#111111', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              padding: '0 16px', 
              height: '42px',
              boxSizing: 'border-box',
              fontSize: '0.9rem', 
              fontWeight: 800, 
              textDecoration: 'none',
              borderRadius: '4px'
            }}
          >
            <PhoneCall size={16} />
            <span className="hide-on-mobile">{t('nav.emergency')}</span>
          </a>

          <div style={{ display: 'flex' }}>
            <select
              value={i18n.language}
              onChange={(e) => changeLanguage(e.target.value)}
              style={{
                backgroundColor: '#111111',
                color: '#ffffff',
                padding: '0 12px',
                height: '42px',
                boxSizing: 'border-box',
                borderRadius: '4px',
                border: '1px solid #333333',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
          </div>
          
          <div className="mobile-menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
