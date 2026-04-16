import SectionHeader from '../components/SectionHeader';
import styles from './VisionSection.module.css';

function VisionSection({ vision }) {
  return (
    <section className="section" id={vision.id}>
      <div className="container">
        <SectionHeader
          eyebrow="Strategic Outlook"
          title={vision.title}
          description={vision.intro}
        />
        <div className={styles.grid}>
          {vision.items.map((item) => (
            <article className={styles.card} key={item.number}>
              <span className={styles.number}>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <p className={styles.summary}>{vision.summary}</p>
      </div>
    </section>
  );
}

export default VisionSection;
