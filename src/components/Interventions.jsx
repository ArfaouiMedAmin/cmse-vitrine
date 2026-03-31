import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import int1 from '../assets/images/intervention1.jpg';
import int2 from '../assets/images/intervention2.jpg';
import int3 from '../assets/images/intervention3.jpg';
import int4 from '../assets/images/intervention4.jpg';
import int5 from '../assets/images/intervention5.jpg';
import int6 from '../assets/images/intervention6.jpg';

const Interventions = () => {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
  };

  const galleryImages = [
    int1, int2, int3, int4, int5, int6
  ];

  return (
    <section id="interventions" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
          {t('interventions.title')}
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '40px', color: 'var(--text-secondary)' }}>
          {t('interventions.desc')}
        </p>
        
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <button 
            className="carousel-button"
            onClick={scrollLeft}
            style={{ position: 'absolute', left: '-15px', zIndex: 10, background: 'var(--cmse-yellow)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.5)' }}
          >
            <ChevronLeft size={24} color="var(--cmse-black)" />
          </button>
          
          <div ref={scrollRef} className="hide-scrollbar" style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '20px',
            paddingBottom: '20px',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            width: '100%'
          }}>
            {galleryImages.map((src, index) => (
               <div key={index} style={{
                  flex: '0 0 auto',
                  width: 'calc(100vw - 60px)',
                  maxWidth: '400px',
                  scrollSnapAlign: 'start',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                  aspectRatio: '4 / 3',
                  backgroundColor: 'var(--bg-secondary)'
               }}>
                 <img 
                   src={src} 
                   alt={`Intervention ${index + 1}`} 
                   style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover',
                     transition: 'transform 0.4s ease'
                   }}
                   onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
                   onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                 />
               </div>
            ))}
          </div>

          <button 
            className="carousel-button"
            onClick={scrollRight}
            style={{ position: 'absolute', right: '-15px', zIndex: 10, background: 'var(--cmse-yellow)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.5)' }}
          >
            <ChevronRight size={24} color="var(--cmse-black)" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Interventions;
