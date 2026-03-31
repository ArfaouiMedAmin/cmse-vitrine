import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import industrialGeneratorImage from '../assets/images/industrial_generator.png';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();

  const renderSubtitle = (text) => {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        return <span key={i} style={{ color: 'var(--cmse-yellow)', fontWeight: 'bold' }}>{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section id="hero" className="hero" style={{ background: `linear-gradient(rgba(17, 17, 17, 0.8), rgba(17, 17, 17, 0.94)), url(${industrialGeneratorImage}) center/cover no-repeat` }}>
      <div className="container">
        <div className="hero-content">
          <h1>{t('hero.title').split(' ').map((word, i) => i === 0 ? <span key={i}>{word} </span> : word + ' ')}</h1>
          <p style={{ 
            whiteSpace: 'pre-line', 
            fontSize: '1.25rem', 
            lineHeight: '1.8', 
            marginBottom: '40px',
            color: '#e0e0e0',
            maxWidth: '700px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)'
          }}>
            {renderSubtitle(t('hero.subtitle'))}
          </p>
          <a href="#contact" className="btn">
            {t('hero.cta')} {dir === 'rtl' ? null : <ArrowRight style={{ verticalAlign: 'middle', marginLeft: '5px' }} size={20} />}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
