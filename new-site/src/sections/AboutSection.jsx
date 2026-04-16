import InfoCard from '../components/InfoCard';
import SectionHeader from '../components/SectionHeader';
import styles from './AboutSection.module.css';

function AboutSection({ about }) {
  return (
    <section className="section sectionAlt" id={about.id}>
      <div className="container">
        <SectionHeader title={about.title} description={about.intro} />
        <div className={styles.grid}>
          {about.pillars.map((pillar, index) => (
            <InfoCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              points={pillar.points}
              accent={`0${index + 1}`}
            />
          ))}
        </div>
        <div className={styles.highlights}>
          {about.highlights.map((highlight) => (
            <div key={highlight} className={styles.highlight}>
              {highlight}
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className={styles.vision}>
          <SectionHeader
            eyebrow="Strategic Outlook"
            title={about.vision.title}
            description={about.vision.intro}
          />
          <div className={styles.visionGrid}>
            {about.vision.items.map((item) => (
              <article className={styles.visionCard} key={item.number}>
                <span className={styles.visionNumber}>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className={styles.visionSummary}>{about.vision.summary}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
