import { useTranslation } from 'react-i18next';
import { Calendar, Wrench, ShieldAlert } from 'lucide-react';

const Stats = () => {
  const { t } = useTranslation();

  const statsData = [
    {
      icon: <Calendar size={32} color="var(--cmse-yellow)" />,
      value: t('stats.exp_value'),
      text: t('stats.exp_text')
    },
    {
      icon: <Wrench size={32} color="var(--cmse-yellow)" />,
      value: t('stats.servers_value'),
      text: t('stats.servers_text')
    },
    {
      icon: <ShieldAlert size={32} color="var(--cmse-yellow)" />,
      value: t('stats.support_value'),
      text: t('stats.support_text')
    }
  ];

  return (
    <section className="stats-section" style={{ backgroundColor: '#111111', padding: '60px 0', borderBottom: '2px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px' }}>
        {statsData.map((stat, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minWidth: '200px' }}>
            <div style={{ marginBottom: '15px' }}>{stat.icon}</div>
            <h3 style={{ fontSize: '3rem', fontWeight: 900, color: '#ffffff', margin: '0 0 10px 0', lineHeight: 1 }}>
              {stat.value}
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#aaaaaa', margin: 0, fontWeight: 600, textTransform: 'uppercase' }}>
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
