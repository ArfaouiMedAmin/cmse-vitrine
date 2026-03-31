import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a
            href="https://www.facebook.com/profile.php?id=100063518563381"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/chiheb0kacem"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} CMSE. {t('footer.rights')}</p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '-5px' }}>
          Developed with <span style={{ color: 'var(--cmse-yellow)' }}>❤</span> by <a href="https://github.com/ArfaouiMedAmin" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold', transition: 'color 0.3s ease' }} onMouseOver={(e) => e.target.style.color = 'var(--cmse-yellow)'} onMouseOut={(e) => e.target.style.color = 'var(--text-primary)'}>Arfaoui Mohamed Amine</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
