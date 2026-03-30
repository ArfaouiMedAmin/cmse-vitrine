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
    const formUrl = 'https://formsubmit.co/ajax/cmse2k@gmail.com';
    const formData = new FormData(e.target);
    
    try {
      const response = await fetch(formUrl, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000); // clear success msg after 5s
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
        <form className="contact-form" onSubmit={handleSubmit}>
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Submission from Website!" />
          <input type="hidden" name="_captcha" value="false" />

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
              <CheckCircle size={18} /> Message sent successfully!
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ef4444', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
              <AlertCircle size={18} /> Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
