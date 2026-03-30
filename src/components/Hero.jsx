import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>{t('hero.title').split(' ').map((word, i) => i === 0 ? <span key={i}>{word} </span> : word + ' ')}</h1>
          <p>{t('hero.subtitle')}</p>
          <a href="#contact" className="btn">
            {t('hero.cta')} {dir === 'rtl' ? null : <ArrowRight style={{ verticalAlign: 'middle', marginLeft: '5px' }} size={20} />}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
