import { useTranslation } from 'react-i18next';
import { PackageSearch, PenTool, Zap } from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const serviceData = [
    {
      key: 'sales',
      icon: <PackageSearch size={48} className="service-icon" />,
    },
    {
      key: 'install',
      icon: <Zap size={48} className="service-icon" />,
    },
    {
      key: 'repair',
      icon: <PenTool size={48} className="service-icon" />,
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">{t('services.title')}</h2>
        
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3>{t(`services.${service.key}.title`)}</h3>
              <p>{t(`services.${service.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
