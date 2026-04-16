import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Button from './Button';
import styles from './Hero.module.css';


function Hero({ brand, hero }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAccent = useMemo(
    () => hero?.slides?.[activeIndex]?.accentColor || '#f6cc53',
    [hero, activeIndex]
  );

  return (
    <section
      className={styles.hero}
      id="home"
      style={{ '--accent': activeAccent }}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade, A11y]}
        loop
        speed={900}
        effect="fade"
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          el: '.hero-pagination',
          clickable: true,
        }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className={styles.swiper}
      >
        {hero.slides.map((slide, index) => {
          const isVideo = index === 0;

          return (
            <SwiperSlide key={index}>
              <article
                className={styles.slide}
                style={{ background: slide.background || '#071e38' }}
              >
                <div className={styles.mediaLayer}>
                  {isVideo ? (
                    <video
                      className={styles.backgroundVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={slide.mediaSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={""}
                      alt={slide.visualCaption || slide.title}
                      className={styles.backgroundImage}
                    />
                  )}
                  <div className={styles.overlay} />
                </div>

                <div className={`container ${styles.inner}`}>
                  <div className={styles.copy}>
                    {slide.eyebrow && (
                      <p className={styles.eyebrow}>{slide.eyebrow}</p>
                    )}

                    <h1 className={styles.title}>{slide.title}</h1>

                    <p className={styles.description}>{slide.description}</p>

                    <div className={styles.actions}>
                      {slide.primaryCta && (
                        <Button href={slide.primaryCta.href}>
                          {slide.primaryCta.label}
                        </Button>
                      )}

                      {slide.secondaryCta && (
                        <Button href={slide.secondaryCta.href} variant="secondary">
                          {slide.secondaryCta.label}
                        </Button>
                      )}
                    </div>

                    {slide.stats?.length > 0 && (
                      <div className={styles.stats}>
                        {slide.stats.slice(0, 3).map((stat) => (
                          <div className={styles.stat} key={stat.label}>
                            <strong>{stat.value}</strong>
                            <span>{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {!isVideo && (
                    <div className={styles.visual}>
                      <div className={styles.mediaCard}>
                        <img
                          src={slide.mediaSrc}
                          alt={slide.visualCaption || slide.title}
                          className={styles.cardImage}
                        />

                        <div className={styles.mediaInfo}>
                          {brand && (
                            <div className={styles.brandRow}>
                              <span className={styles.brandMark}>
                                {brand.logoText}
                              </span>

                              <div>
                                <strong>{brand.name}</strong>
                                <p>{brand.shortTagline}</p>
                              </div>
                            </div>
                          )}

                          {slide.visualCaption && (
                            <p className={styles.mediaCaption}>
                              {slide.visualCaption}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </article>
            </SwiperSlide>
          );
        })}

        <button
          type="button"
          className={`hero-prev ${styles.navButton} ${styles.prevButton}`}
          aria-label="Previous slide"
        >
          <span aria-hidden="true">←</span>
        </button>

        <button
          type="button"
          className={`hero-next ${styles.navButton} ${styles.nextButton}`}
          aria-label="Next slide"
        >
          <span aria-hidden="true">→</span>
        </button>

        <div className={`hero-pagination ${styles.pagination}`} />
      </Swiper>
    </section>
  );
}

export default Hero;