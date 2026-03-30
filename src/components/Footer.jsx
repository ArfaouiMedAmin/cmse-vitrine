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
      </div>
    </footer>
  );
};

export default Footer;
