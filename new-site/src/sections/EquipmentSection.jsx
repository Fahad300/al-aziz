import SectionHeader from '../components/SectionHeader';
import styles from './EquipmentSection.module.css';

function EquipmentSection({ equipment }) {
  return (
    <section className="section sectionAlt" id={equipment.id}>
      <div className="container">
        <SectionHeader title={equipment.title} description={equipment.intro} />
        <div className={styles.grid}>
          <div className={styles.cards}>
            {equipment.items.map((item) => (
              <article className={styles.card} key={item.title}>
                <div className={styles.media} aria-hidden="true">
                  <img src={item.imgSrc} alt="" />
                </div>
                <div className={styles.body}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <small>{item.caption}</small>
                </div>
              </article>
            ))}
          </div>

          <aside className={styles.featurePanel}>
            <p className={styles.label}>In-House Strength</p>
            <ul>
              {equipment.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <img src="/images/bilboard.png" alt="" />
          </aside>
        </div>
      </div>
    </section>
  );
}

export default EquipmentSection;
