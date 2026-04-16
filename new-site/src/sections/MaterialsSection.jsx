import MaterialCard from '../components/MaterialCard';
import SectionHeader from '../components/SectionHeader';
import styles from './MaterialsSection.module.css';

function MaterialsSection({ materials }) {
  return (
    <section className="section" id={materials.id}>
      <div className="container">
        <SectionHeader title={materials.title} description={materials.intro} />
        <div className={styles.grid}>
          {materials.cards.map((material) => (
            <MaterialCard key={material.name} {...material} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MaterialsSection;
