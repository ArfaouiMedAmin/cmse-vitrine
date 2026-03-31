import { useTranslation } from 'react-i18next';
import dsePic from '../assets/images/dse_controller.png';
import genPic from '../assets/images/diesel_generator.png';

const Products = () => {
  const { t } = useTranslation();

  const productData = [
    {
      key: 'dse',
      image: dsePic,
    },
    {
      key: 'diesel',
      image: genPic,
    }
  ];

  return (
    <section id="products" className="section services" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">{t('products.title')}</h2>
        
        <div className="services-grid">
          {productData.map((product, index) => (
            <div key={index} className="service-card" style={{ backgroundColor: 'var(--bg-primary)', padding: '20px', textAlign: 'center' }}>
              <img src={product.image} alt={t(`products.${product.key}.title`)} style={{ width: '100%', maxHeight: '250px', objectFit: 'contain', borderRadius: '8px', marginBottom: '20px', backgroundColor: 'var(--bg-secondary)', padding: '10px' }} />
              <h3>{t(`products.${product.key}.title`)}</h3>
              <p>{t(`products.${product.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
