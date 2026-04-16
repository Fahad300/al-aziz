import SectionHeader from '../components/SectionHeader';
import styles from './ContactSection.module.css';

function ContactSection({ contact }) {
  const ceo = contact.people.find((p) => p.role === 'CEO');
  const team = contact.people.filter((p) => p.role !== 'CEO');

  return (
    <section className={styles.section} id={contact.id}>
      <div className="container">
        <SectionHeader title={contact.title} description={contact.description} />

        <div className={styles.teamWrap}>
          {ceo && (
            <div className={styles.ceoRow}>
              <PersonCard person={ceo} featured />
            </div>
          )}

          <div className={styles.teamGrid}>
            {team.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>
        </div>

        <div className={styles.addressCard}>
          <p className={styles.addressLabel}>Office Address</p>
          <p className={styles.addressText}>{contact.address}</p>
        </div>
      </div>
    </section>
  );
}

function PersonCard({ person, featured = false }) {
  const initials = getInitials(person.name);
  const whatsappLink = person.phone
    ? `https://wa.me/${person.phone.replace(/\D/g, '')}`
    : null;

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardVisual}>
        {person.image ? (
          <img src={person.image} alt={person.name} className={styles.photo} />
        ) : (
          <div className={styles.avatar}>{initials}</div>
        )}
        <div className={styles.overlay} />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.name}>{person.name}</h3>
        <p className={styles.role}>{person.role}</p>

        <div className={styles.meta}>
          {person.phone && <p><strong>Phone:</strong> {person.phone}</p>}
          {person.phoneAlt && <p><strong>Alt:</strong> {person.phoneAlt}</p>}
          {person.email && <p><strong>Email:</strong> {person.email}</p>}
        </div>

        <div className={styles.actions}>
          {whatsappLink && (
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryBtn}
            >
              WhatsApp
            </a>
          )}

          {person.email && (
            <a href={`mailto:${person.email}`} className={styles.secondaryBtn}>
              Email
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function getInitials(name = '') {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default ContactSection;