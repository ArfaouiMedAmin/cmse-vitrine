import { useTranslation } from 'react-i18next';
import { PhoneCall } from 'lucide-react';

const CTA = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();

  return (
    <section className="section" style={{ backgroundColor: 'var(--cmse-yellow)', padding: '80px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#111111', marginBottom: '20px', textTransform: 'uppercase' }}>
          {t('cta.title')}
        </h2>
        <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#222222', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          {t('cta.subtitle')}
        </p>
        <a 
          href="tel:+21655915337" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '12px', 
            backgroundColor: '#111111', 
            color: '#ffffff', 
            padding: '18px 40px', 
            borderRadius: '8px', 
            fontSize: '1.4rem', 
            fontWeight: 800,
            textDecoration: 'none',
            boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
            transition: 'transform 0.2s',
            flexDirection: dir === 'rtl' ? 'row-reverse' : 'row'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <PhoneCall size={28} color="var(--cmse-yellow)" />
          {t('cta.button')}
        </a>
      </div>
    </section>
  );
};

export default CTA;
