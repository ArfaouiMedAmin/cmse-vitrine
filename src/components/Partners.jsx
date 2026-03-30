import { useTranslation } from 'react-i18next';
import { PackageCheck, ExternalLink } from 'lucide-react';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <section id="partners" className="section" style={{ backgroundColor: 'var(--cmse-yellow)', color: '#111111', padding: '80px 0' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
        
        {/* Left Side: Information */}
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '15px', color: '#111111' }}>
            {t('partners.title')}
          </h2>
          <p style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '30px', color: '#222' }}>
            {t('partners.subtitle')}
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', alignItems: 'center' }}>
            <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px', 
                backgroundColor: '#111111', 
                color: 'var(--cmse-yellow)', 
                padding: '12px 24px', 
                borderRadius: '4px', 
                fontSize: '1rem', 
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
              }}>
              <PackageCheck size={20} />
              {t('partners.stock')}
            </div>

            <a 
              href="https://www.deepseaelectronics.com/distributor/cmse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn"
              style={{ 
                backgroundColor: 'transparent', 
                color: '#111111', 
                border: '2px solid #111111',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Verify Dealership <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* Right Side: Logo */}
        <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', padding: '20px' }}>
          <div style={{
            width: '150px',
            height: '150px',
            border: '8px solid #111111',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            position: 'relative',
            paddingBottom: '5px',
            boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
            transform: 'rotate(2deg)'
          }}>
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-32px',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#111111'
            }}>®</span>
            <span style={{
              color: '#111111',
              fontWeight: 900,
              fontSize: '4.5rem',
              fontFamily: 'Arial, Black, sans-serif',
              lineHeight: 0.75,
              letterSpacing: '-2px'
            }}>
              DSE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
