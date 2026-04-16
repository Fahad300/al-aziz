import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import SectionHeader from '../components/SectionHeader';
import styles from './ClientsSection.module.css';

function ClientsSection({ clients }) {
  return (
    <section className="section sectionAlt" id={clients.id}>
      <div className="container">
        <div className={styles.headerContainer}>
          <SectionHeader title={clients.title} description={clients.description} align="center" />
        </div>
        <div className={styles.logoContainer}>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
              reverseDirection: false,
            }}
            loop={true}
            slidesPerView={5}
            spaceBetween={20}
            speed={600}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
            }}
            className={styles.logoSwiper}
          >
            {clients.logos.map((client, index) => (
              <SwiperSlide key={index}>
                <div className={styles.logoCard} title={client.name}>
                  <img src={client.image} alt={`${client.name} Logo`} />
                </div>
                <p style={{ textAlign: 'center' }} className={styles.logoTitle}>
                  {client.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
