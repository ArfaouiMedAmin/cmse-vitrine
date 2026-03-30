import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Zap, PhoneCall } from 'lucide-react';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = i18n.dir();
  };

  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" className="logo">
          <img src="/images/cmse_log.png" alt="CMSE Logo" style={{ height: '50px', objectFit: 'contain', borderRadius: '4px' }} />
        </a>

        <ul className="nav-links">
          <li><a href="#hero">{t('nav.home')}</a></li>
          <li><a href="#services">{t('nav.services')}</a></li>
          <li><a href="#about">{t('nav.about')}</a></li>
          <li><a href="#contact">{t('nav.contact')}</a></li>
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
            <span className="hide-on-mobile">{t('cta.title')}</span>
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
              <option value="fr">FR / Français</option>
              <option value="en">EN / English</option>
              <option value="ar">AR / العربية</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
