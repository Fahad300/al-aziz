import styles from './ServiceCard.module.css';

function ServiceCard({ title, description, index }) {
  return (
    <article className={styles.card}>
      <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;
