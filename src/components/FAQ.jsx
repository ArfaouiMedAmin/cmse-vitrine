import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: '1px solid var(--border-color)', padding: '20px 0' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
      >
        <h4 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>{question}</h4>
        {isOpen ? <ChevronUp size={24} color="var(--cmse-yellow)" /> : <ChevronDown size={24} color="var(--cmse-yellow)" />}
      </div>
      {isOpen && (
        <p style={{ marginTop: '15px', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {answer}
        </p>
      )}
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();

  return (
    <section id="faq" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '50px' }}>{t('faq.title')}</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <FAQItem question={t('faq.q1')} answer={t('faq.a1')} />
          <FAQItem question={t('faq.q2')} answer={t('faq.a2')} />
          <FAQItem question={t('faq.q3')} answer={t('faq.a3')} />
          <FAQItem question={t('faq.q4')} answer={t('faq.a4')} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
