import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
        
        <div style={{ flex: '1 1 400px' }}>
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>{t('about.title')}</h2>
          <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--cmse-yellow)', marginBottom: '30px' }}></div>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            {t('about.desc')}
          </p>
        </div>

        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="/images/residential_generator.png?v=2" 
            alt="Residential Backup Generator Schema" 
            style={{ 
              width: '100%', 
              maxWidth: '500px', 
              borderRadius: '8px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              border: '1px solid var(--border-color)'
            }} 
          />
        </div>

      </div>
    </section>
  );
};

export default About;
