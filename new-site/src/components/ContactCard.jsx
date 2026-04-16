import styles from './ContactCard.module.css';

function ContactCard({ name, role, phone, phoneAlt, email, featured = false }) {
  const safeTel = (value) => value?.replace(/[^+\d]/g, '');

  return (
    <article className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.avatar} aria-hidden="true">
        {name
          .split(' ')
          .map((part) => part[0])
          .join('')
          .slice(0, 2)}
      </div>

      <div className={styles.meta}>
        <h3>{name}</h3>
        <p className={styles.role}>{role}</p>
      </div>

      <div className={styles.contactLinks}>
        {phone && (
          <a href={`tel:${safeTel(phone)}`} aria-label={`Call ${name}`}>
            {phone}
          </a>
        )}
        {phoneAlt && (
          <a href={`tel:${safeTel(phoneAlt)}`} aria-label={`Call ${name} alternate`}>
            {phoneAlt}
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
            {email}
          </a>
        )}
      </div>
    </article>
  );
}

export default ContactCard;
