import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import styles from './ServicesSection.module.css';

function ServicesSection({ services }) {
  return (
    <section className={styles.section} id={services.id}>
      <div className="container">
        <SectionHeader
          eyebrow="Core Capabilities"
          title={services.title}
          description={services.intro}
          light
        />

        <div className={styles.stages}>
          {services.stages.map((stage) => (
            <div key={stage} className={styles.stage}>
              {stage}
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {services.cards.map((card, index) => (
            <ServiceCard
              key={card.title}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
