import styles from './InfoCard.module.css';

function InfoCard({ title, description, points, accent }) {
  return (
    <article className={styles.card}>
      {accent ? <p className={styles.accent}>{accent}</p> : null}
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
      {points?.length ? (
        <ul>
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default InfoCard;
