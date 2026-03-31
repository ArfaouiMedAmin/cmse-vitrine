import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const dir = i18n.dir();
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    formData.append("access_key", "d8fb0a20-72f9-4a33-bca7-a5cacb512d1e");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">{t('contact.title')}</h2>
        <form 
          className="contact-form" 
          onSubmit={handleSubmit}
        >
          {/* Web3Forms Configuration */}
          <input type="hidden" name="subject" value="Nouveau message depuis le site Web CMSE !" />

          <div className="form-group">
            <input name="name" type="text" placeholder={t('contact.name')} required />
          </div>
          <div className="form-group">
            <input name="email" type="email" placeholder={t('contact.email')} required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder={t('contact.message')} rows="5" required></textarea>
          </div>
          
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? '...' : t('contact.send')} {dir === 'rtl' ? null : <Send style={{ verticalAlign: 'middle', marginLeft: '8px' }} size={18} />}
          </button>

          {status === 'success' && (
            <p style={{ color: '#4ade80', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
              <CheckCircle size={18} /> Message envoyé avec succès !
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
              <AlertCircle size={18} /> Une erreur s'est produite. Veuillez réessayer.
            </p>
          )}
        </form>

        <div style={{ marginTop: '60px', width: '100%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
          <iframe 
            src="https://www.google.com/maps?q=36.538512,10.842229&z=15&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0, display: 'block', filter: 'invert(90%) hue-rotate(180deg) brightness(85%) contrast(80%)' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="CMSE Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
