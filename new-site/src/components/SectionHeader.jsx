import styles from './SectionHeader.module.css';

function SectionHeader({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div
      className={`${styles.wrapper} ${align === 'center' ? styles.center : ''} ${light ? styles.light : ''}`}
    >
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
