import styles from './MaterialCard.module.css';

function MaterialCard({ imgSrc, name, description, bullets }) {
  return (
    <article className={styles.card}>
      <div className={styles.media} aria-hidden="true">
        <img src={imgSrc} alt="" className={styles.image} />
      </div>
      <div className={styles.body}>
        <h3>{name}</h3>
        <p>{description}</p>
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default MaterialCard;
