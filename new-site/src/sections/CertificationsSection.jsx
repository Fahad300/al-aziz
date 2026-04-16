import SectionHeader from '../components/SectionHeader';
import styles from './CertificationsSection.module.css';

function CertificationsSection({ certifications }) {
  return (
    <section className="section" id={certifications.id}>
      <div className="container">
        <SectionHeader
          title={certifications.title}
          description={certifications.description}
          align="center"
        />
        <div className={styles.grid}>
          {certifications.items.map((item) => (
            <article className={styles.card} key={item.title}>
              <div className={styles.badge} aria-hidden="true">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div className={styles.qr} aria-hidden="true">
                <img src={item.QR} alt="QR Code" />
              </div>
            </article>
          ))}
          <article className={styles.card}>
            <div className={styles.imageGroup}>
              <img src="/images/oxo.jpg" alt="Certification 1" />
              <img src="/images/oxo4.jpg" alt="Certification 4" />
            </div>
          </article>
          <article className={styles.card}>
            <div className={styles.imageGroup}>
              <img src="/images/recycle3.jpg" alt="Certification 5" />
              <img src="/images/recycle2.jpg" alt="Certification 6" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
