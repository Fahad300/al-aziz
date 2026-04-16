import SectionHeader from '../components/SectionHeader';
import styles from './IntroductionSection.module.css';

function IntroductionSection({ intro }) {
  return (
    <section className="section" id={intro.id}>
      <div className={`container ${styles.grid}`}>
        <div>
          <SectionHeader title={intro.title} description={intro.description} />
        </div>
        <aside className={styles.panel} aria-label="Company quick facts">
          <p className={styles.label}>Quick Facts</p>
          <ul>
            {intro.quickFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default IntroductionSection;
